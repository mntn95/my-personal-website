/**
 * In-memory rate limiter to prevent spam submissions
 * Tracks IP addresses and their submission timestamps
 * Limits: 3 submissions per hour per IP
 *
 * Note: This is an in-memory implementation that resets on server restart.
 * For production with multiple instances, consider using Redis or a database.
 */

import { RATE_LIMIT_MAX_SUBMISSIONS, RATE_LIMIT_WINDOW_MS } from "./constants";

const submissionMap = new Map<string, number[]>();

// Cleanup interval: run every 30 minutes to prevent memory leaks
const CLEANUP_INTERVAL_MS = 30 * 60 * 1000;

// Initialize cleanup interval on module load (only in Node.js environment)
// In edge runtime or serverless, this may not persist, but cleanup is called on each check anyway
let cleanupInterval: NodeJS.Timeout | null = null;

if (typeof globalThis !== "undefined" && typeof setInterval !== "undefined") {
  // Only set up interval if not already running (prevents duplicate intervals in dev)
  if (!cleanupInterval) {
    cleanupInterval = setInterval(() => {
      cleanupOldEntries();
    }, CLEANUP_INTERVAL_MS);

    // Clean up interval on process exit (if available)
    if (typeof process !== "undefined" && process.on) {
      process.on("SIGTERM", () => {
        if (cleanupInterval) {
          clearInterval(cleanupInterval);
        }
      });
    }
  }
}

/**
 * Checks if an IP address has exceeded the rate limit
 * @param ip - The IP address to check
 * @returns true if limit exceeded (should be blocked), false if allowed
 */
export const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const timestamps = submissionMap.get(ip) || [];

  // Filter out timestamps older than the rate limit window
  const recentTimestamps = timestamps.filter(
    (timestamp) => now - timestamp <= RATE_LIMIT_WINDOW_MS
  );

  // Update map with filtered timestamps
  submissionMap.set(ip, recentTimestamps);

  // Check if limit exceeded
  return recentTimestamps.length >= RATE_LIMIT_MAX_SUBMISSIONS;
};

/**
 * Records a submission for an IP address
 * @param ip - The IP address to record
 */
export const recordSubmission = (ip: string): void => {
  const now = Date.now();
  const timestamps = submissionMap.get(ip) || [];

  // Add current timestamp
  timestamps.push(now);

  // Update map
  submissionMap.set(ip, timestamps);
};

/**
 * Periodic cleanup function to remove old entries and prevent memory growth
 * Should be called periodically (e.g., every hour)
 */
export const cleanupOldEntries = (): void => {
  const now = Date.now();
  let cleanedCount = 0;

  for (const [ip, timestamps] of submissionMap.entries()) {
    const recentTimestamps = timestamps.filter(
      (timestamp) => now - timestamp <= RATE_LIMIT_WINDOW_MS
    );

    if (recentTimestamps.length === 0) {
      // Remove IP entry if no recent timestamps
      submissionMap.delete(ip);
      cleanedCount++;
    } else if (recentTimestamps.length < timestamps.length) {
      // Update with filtered timestamps if some were removed
      submissionMap.set(ip, recentTimestamps);
    }
  }

  // Log cleanup in development for monitoring
  if (process.env.NODE_ENV === "development" && cleanedCount > 0) {
    console.log(`[Rate Limiter] Cleaned up ${cleanedCount} expired IP entries`);
  }
};
