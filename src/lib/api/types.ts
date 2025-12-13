/**
 * API request and response type definitions
 */

/**
 * Standard API response structure
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: unknown;
}

/**
 * Error response with optional development details
 */
export interface ErrorResponse extends ApiResponse {
  error?: {
    name?: string;
    message: string;
    statusCode?: number;
    [key: string]: unknown;
  };
  fromEmail?: string;
}
