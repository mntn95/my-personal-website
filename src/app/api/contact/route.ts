import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { contactFormSchema, type ContactFormData } from "@/lib/validation";
import { checkRateLimit, recordSubmission } from "@/lib/email";
import { getClientIP } from "@/lib/utils/request";
import { EmailService } from "@/lib/email/service";
import {
  createSuccessResponse,
  createErrorResponse,
} from "@/lib/api/response-helpers";
import { MAX_REQUEST_BODY_SIZE } from "@/lib/email/constants";

/**
 * Validates request body size to prevent memory exhaustion
 *
 * @param request - Next.js request object
 * @returns true if body size is acceptable
 */
const validateRequestBodySize = async (
  request: NextRequest
): Promise<boolean> => {
  const contentLength = request.headers.get("content-length");
  if (contentLength) {
    const size = parseInt(contentLength, 10);
    return !isNaN(size) && size <= MAX_REQUEST_BODY_SIZE;
  }
  return true;
};

/**
 * Parses and validates the request body
 *
 * @param request - Next.js request object
 * @returns Validated contact form data
 * @throws Error if parsing or validation fails
 */
const parseAndValidateBody = async (
  request: NextRequest
): Promise<ContactFormData> => {
  // Check body size first
  const isValidSize = await validateRequestBodySize(request);
  if (!isValidSize) {
    throw new Error("Request body too large");
  }

  // Parse JSON
  let body: unknown;
  try {
    body = await request.json();
  } catch (error) {
    throw new Error(
      `Invalid JSON format: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }

  // Validate with Zod schema
  const validationResult = contactFormSchema.safeParse(body);
  if (!validationResult.success) {
    throw new Error("Validation failed");
  }

  return validationResult.data;
};

/**
 * POST handler for contact form submissions
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Validate environment configuration
    if (!process.env.RESEND_API_KEY) {
      return createErrorResponse(
        "Server configuration error. Please try again later.",
        500
      );
    }

    // Extract and validate client IP
    const clientIP = getClientIP(request);

    // Check rate limit
    if (checkRateLimit(clientIP)) {
      return createErrorResponse(
        "Too many requests. Please wait before submitting again.",
        429
      );
    }

    // Parse and validate request body
    let formData: ContactFormData;
    try {
      formData = await parseAndValidateBody(request);
    } catch (error) {
      const message =
        error instanceof Error && error.message.includes("too large")
          ? "Request is too large. Please reduce the message size."
          : error instanceof Error && error.message.includes("JSON")
            ? "Invalid request format."
            : "Please check your form and try again.";

      return createErrorResponse(message, 400, error);
    }

    // Initialize email service
    let emailService: EmailService;
    try {
      emailService = new EmailService();
    } catch (error) {
      return createErrorResponse(
        "Server configuration error. Please try again later.",
        500,
        error
      );
    }

    // Send notification email (critical - must succeed)
    const notificationResult =
      await emailService.sendNotificationEmail(formData);

    if (notificationResult.error) {
      return createErrorResponse(
        "Failed to send message. Please try again later.",
        500,
        notificationResult.error,
        { fromEmail: emailService.fromEmail }
      );
    }

    // Record submission in rate limiter only after successful notification
    recordSubmission(clientIP);

    // Return success response
    return createSuccessResponse("Message sent successfully");
  } catch (error) {
    // Catch-all for unexpected errors
    return createErrorResponse(
      "An unexpected error occurred. Please try again later.",
      500,
      error
    );
  }
}
