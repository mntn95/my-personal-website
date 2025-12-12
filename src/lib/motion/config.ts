import type { MotionConfigProps } from "motion/react";

/**
 * Default transition configuration for Motion animations
 */
export const defaultTransition = {
  duration: 0.5,
  easing: [0.4, 0, 0.2, 1] as [number, number, number, number], // ease-out
};

/**
 * Reduced motion support configuration
 */
export const reducedMotionConfig = {
  transition: {
    duration: 0,
  },
};

/**
 * Viewport detection defaults
 */
export const viewportDefaults = {
  once: true,
  margin: "0px 0px -100px 0px",
};

/**
 * Motion configuration props for MotionConfig component
 */
export const motionConfig: Partial<MotionConfigProps> = {
  transition: defaultTransition,
  reducedMotion: "user",
};

