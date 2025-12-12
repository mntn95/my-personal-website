/**
 * Animation timing constants
 * Centralized configuration for all animation delays and speeds
 */
export const ANIMATION_DELAYS = {
  NONE: 0,
  SHORT: 100,
  MEDIUM: 300,
  LONG: 500,
  EXTRA_LONG: 1000,
  PAUSE: 2000,
} as const;

/**
 * Animation speed constants
 */
export const ANIMATION_SPEEDS = {
  TYPING_FAST: 50,
  TYPING_NORMAL: 100,
  FLOAT_DURATION: 6000,
  FADE_OUT_DURATION: 300,
} as const;

/**
 * Component-specific constants
 */
export const SCROLL_THRESHOLD = 300;
export const PARTICLE_COUNT = 80;
export const FLOATING_ICON_COUNT = 6;
export const ANIMATION_FRAME_RATE = 16; // ~60fps

/**
 * Hero typing animation roles
 * Translation keys for hero roles
 */
export const HERO_ROLES = [
  "webDeveloper",
  "freelancer",
  "ideaAccelerator",
  "problemSolver",
  "brandEnhancer",
  "visionTranslator",
  "qualityDrivenCraftsman",
] as const;
