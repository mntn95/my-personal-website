import { NextResponse } from "next/server";
import type { ApiResponse, ErrorResponse } from "./types";

/**
 * Creates a success API response
 *
 * @param message - Success message
 * @param data - Optional response data
 * @param status - HTTP status code (default: 200)
 * @returns NextResponse with success payload
 */
export const createSuccessResponse = <T = unknown>(
  message: string,
  data?: T,
  status = 200
): NextResponse<ApiResponse<T>> => {
  return NextResponse.json(
    {
      success: true,
      message,
      ...(data && { data }),
    },
    { status }
  );
};

/**
 * Creates an error API response
 *
 * @param message - Error message (user-friendly)
 * @param status - HTTP status code (default: 500)
 * @param error - Optional error details (only in development)
 * @param additionalData - Optional additional error data
 * @returns NextResponse with error payload
 */
export const createErrorResponse = (
  message: string,
  status = 500,
  error?: unknown,
  additionalData?: Record<string, unknown>
): NextResponse<ErrorResponse> => {
  const isDevelopment = process.env.NODE_ENV === "development";

  const response: ErrorResponse = {
    success: false,
    message,
  };

  // Add error details in development mode
  if (isDevelopment && error) {
    if (error instanceof Error) {
      response.error = {
        name: error.name,
        message: error.message,
        stack: error.stack,
      };
    } else if (typeof error === "object" && error !== null) {
      // Only assign if error is an object type
      response.error = error as ErrorResponse["error"];
    } else {
      // For primitive types, wrap in an object
      response.error = {
        message: String(error),
      };
    }
  }

  // Add additional data in development mode
  if (isDevelopment && additionalData) {
    Object.assign(response, additionalData);
  }

  return NextResponse.json(response, { status });
};
