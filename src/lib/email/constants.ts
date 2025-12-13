/**
 * Email service constants
 */

export const RATE_LIMIT_MAX_SUBMISSIONS = 3;
export const RATE_LIMIT_WINDOW_MS = 3600000; // 1 hour in milliseconds
export const UNKNOWN_IP = "unknown";

/**
 * Default from email address for Resend
 * Used when RESEND_FROM_EMAIL is not configured
 */
export const DEFAULT_FROM_EMAIL = "onboarding@resend.dev";

/**
 * Maximum request body size in bytes (1MB)
 * Prevents memory exhaustion from large payloads
 */
export const MAX_REQUEST_BODY_SIZE = 1024 * 1024;
