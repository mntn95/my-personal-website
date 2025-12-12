import type { Variants } from "motion/react";

/**
 * Fade in from bottom animation
 * Matches CSS: fadeInUp (opacity 0→1, translateY 30px→0, duration 0.5s, ease-out)
 */
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * Fade in from top animation
 * Matches CSS: fadeInDown (opacity 0→1, translateY -30px→0, duration 0.6s, ease-out)
 */
export const fadeInDown: Variants = {
  initial: {
    opacity: 0,
    y: -30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * Fade in from left animation
 * Matches CSS: fadeInLeft (opacity 0→1, translateX -30px→0, duration 0.6s, ease-out)
 */
export const fadeInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -30,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * Fade in from right animation
 * Matches CSS: fadeInRight (opacity 0→1, translateX 30px→0, duration 0.6s, ease-out)
 */
export const fadeInRight: Variants = {
  initial: {
    opacity: 0,
    x: 30,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * Floating animation (infinite)
 * Matches CSS: float (translateY 0→-20px→0, scale 1→1.05→1, duration 6s, ease-in-out, infinite)
 */
export const float: Variants = {
  animate: {
    y: [-20, 0, -20],
    scale: [1, 1.05, 1],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

/**
 * Scale in animation
 * Matches CSS: scaleIn (opacity 0→1, scale 0.9→1, duration 0.6s, ease-out)
 */
export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * Glow animation (infinite)
 * Matches CSS: glow (box-shadow animation with teal color, duration 2s, ease-in-out, infinite)
 */
export const glow: Variants = {
  animate: {
    boxShadow: [
      "0 0 5px rgba(20, 184, 166, 0.3), 0 0 10px rgba(20, 184, 166, 0.2), 0 0 15px rgba(20, 184, 166, 0.1)",
      "0 0 10px rgba(20, 184, 166, 0.5), 0 0 20px rgba(20, 184, 166, 0.3), 0 0 30px rgba(20, 184, 166, 0.2)",
      "0 0 5px rgba(20, 184, 166, 0.3), 0 0 10px rgba(20, 184, 166, 0.2), 0 0 15px rgba(20, 184, 166, 0.1)",
    ],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

/**
 * Fade out downward animation
 * Matches CSS: fadeOutDown (opacity 1→0, translateY 0→30px, duration 0.3s, ease-in)
 */
export const fadeOutDown: Variants = {
  initial: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};

/**
 * Scroll dot animation (infinite)
 * Matches CSS: scrollDot (opacity 0→1→1→0, translateY 20px→0→0→20px, duration 2s, ease-in-out, infinite)
 */
export const scrollDot: Variants = {
  animate: {
    opacity: [0, 1, 1, 0],
    y: [20, 0, 0, 20],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
      times: [0, 0.2, 0.8, 1],
    },
  },
};

/**
 * Scroll indicator animation (infinite)
 * Matches CSS: scrollIndicator (same as scrollDot with duration 3s)
 */
export const scrollIndicator: Variants = {
  animate: {
    opacity: [0, 1, 1, 0],
    y: [20, 0, 0, 20],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
      times: [0, 0.2, 0.8, 1],
    },
  },
};

/**
 * Loader fade in animation
 * Matches CSS: loaderFadeIn (opacity 0→1, duration 0.2s)
 */
export const loaderFadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

/**
 * Loader spinner bar animation (infinite)
 * Matches CSS: loaderSpin (opacity 1→0.15, duration 1.2s, linear, infinite)
 */
export const loaderSpin: Variants = {
  animate: {
    opacity: [1, 0.15],
    transition: {
      duration: 1.2,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};
