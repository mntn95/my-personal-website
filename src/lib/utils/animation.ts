/**
 * Utility functions for consistent animation delays across components
 */

/**
 * Generate animation delay style for staggered animations
 *
 * @param index - Index of the element in a list
 * @param delayStep - Delay between each element in seconds (default: 0.1)
 * @param baseDelay - Base delay before first element starts in seconds (default: 0)
 * @returns React CSSProperties object with animationDelay
 *
 * @example
 * <div style={getAnimationDelay(0)}>Item 1</div>
 * <div style={getAnimationDelay(1)}>Item 2</div>
 * <div style={getAnimationDelay(2, 0.2)}>Item 3 (slower)</div>
 */
export function getAnimationDelay(
  index: number,
  delayStep: number = 0.1,
  baseDelay: number = 0
): React.CSSProperties {
  return {
    animationDelay: `${baseDelay + index * delayStep}s`,
  };
}

/**
 * Generate animation delay string value
 *
 * @param index - Index of the element in a list
 * @param delayStep - Delay between each element in seconds (default: 0.1)
 * @param baseDelay - Base delay before first element starts in seconds (default: 0)
 * @returns Animation delay as string (e.g., "0.3s")
 *
 * @example
 * const delay = getAnimationDelayString(3); // "0.3s"
 */
export function getAnimationDelayString(
  index: number,
  delayStep: number = 0.1,
  baseDelay: number = 0
): string {
  return `${baseDelay + index * delayStep}s`;
}

/**
 * Generate fixed animation delay style
 *
 * @param seconds - Delay in seconds
 * @returns React CSSProperties object with animationDelay
 *
 * @example
 * <div style={getFixedAnimationDelay(0.5)}>Delayed element</div>
 */
export function getFixedAnimationDelay(seconds: number): React.CSSProperties {
  return {
    animationDelay: `${seconds}s`,
  };
}

