import type { NextRequest } from "next/server";

/**
 * Unknown IP constant for fallback scenarios
 */
const UNKNOWN_IP = "unknown";

/**
 * Extract client IP from request headers
 * Checks multiple headers in order of preference to handle various proxy/CDN configurations
 *
 * @param request - Next.js request object
 * @returns Client IP address or "unknown" if not found
 */
export const getClientIP = (request: NextRequest): string => {
  // Check x-forwarded-for header (take first IP if comma-separated)
  // This header contains the original client IP when behind proxies
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const firstIP = forwardedFor.split(",")[0]?.trim();
    if (firstIP) return firstIP;
  }

  // Fallback to x-real-ip (used by Nginx and some proxies)
  const realIP = request.headers.get("x-real-ip");
  if (realIP) return realIP;

  // Fallback to cf-connecting-ip (Cloudflare specific)
  const cfIP = request.headers.get("cf-connecting-ip");
  if (cfIP) return cfIP;

  // Default fallback
  return UNKNOWN_IP;
};
