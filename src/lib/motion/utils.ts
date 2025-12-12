import { stagger } from 'motion/react'

/**
 * Generate Motion transition delay for staggered animations
 *
 * @param index - Index of the element in a list
 * @param delayStep - Delay between each element in seconds (default: 0.1)
 * @param baseDelay - Base delay before first element starts in seconds (default: 0)
 * @returns Object with delay property for Motion transition prop
 *
 * @example
 * <motion.div transition={getMotionDelay(0)}>Item 1</motion.div>
 * <motion.div transition={getMotionDelay(1)}>Item 2</motion.div>
 * <motion.div transition={getMotionDelay(2, 0.2)}>Item 3 (slower)</motion.div>
 */
export const getMotionDelay = (
	index: number,
	delayStep: number = 0.1,
	baseDelay: number = 0
): { delay: number } => {
	return {
		delay: baseDelay + index * delayStep,
	}
}

/**
 * Generate fixed Motion transition delay
 *
 * @param seconds - Delay in seconds
 * @returns Object with delay property for Motion transition prop
 *
 * @example
 * <motion.div transition={getMotionFixedDelay(0.5)}>Delayed element</motion.div>
 */
export const getMotionFixedDelay = (seconds: number): { delay: number } => {
	return {
		delay: seconds,
	}
}

/**
 * Generate Motion stagger configuration for parent components
 *
 * @param delayStep - Delay between each child element in seconds (default: 0.1)
 * @param baseDelay - Base delay before first child starts in seconds (default: 0)
 * @returns Stagger configuration for Motion transition prop
 *
 * @example
 * <motion.div
 *   initial="initial"
 *   animate="animate"
 *   transition={{ delayChildren: 0, staggerChildren: 0.1 }}
 * >
 *   {children}
 * </motion.div>
 */
export const getMotionStagger = (
	delayStep: number = 0.1,
	baseDelay: number = 0
): { delayChildren: number; staggerChildren: number } => {
	return {
		delayChildren: baseDelay,
		staggerChildren: delayStep,
	}
}


