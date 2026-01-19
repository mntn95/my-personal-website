import { z } from "zod";

/**
 * Zod schema for contact form validation
 * Used for both client-side and server-side validation
 */
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").trim(),
  email: z.string().email("Please enter a valid email address").trim(),
  subject: z.string().min(3, "Subject must be at least 3 characters").trim(),
  message: z.string().min(10, "Message must be at least 10 characters").max(3000, "Message must not exceed 3000 characters").trim(),
});

/**
 * TypeScript type inferred from the Zod schema
 */
export type ContactFormData = z.infer<typeof contactFormSchema>;
