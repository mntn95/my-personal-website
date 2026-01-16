/**
 * Configuration Constants for Particle Background System
 * Single Responsibility: Store all configuration values
 */

export const PARTICLE_CONFIG = {
  count: 80,
  minSize: 1,
  maxSize: 3,
  velocityRange: 0.5,
} as const;

export const VISUAL_CONFIG = {
  particleColor: 'rgba(20, 184, 166, 0.3)',
  connectionBaseColor: '20, 184, 166',
  connectionAlpha: 0.15,
  maxDistance: 120,
} as const;

export const PERFORMANCE_CONFIG = {
  cellSize: VISUAL_CONFIG.maxDistance,
  twoPI: Math.PI * 2,
  maxDistanceSquared: VISUAL_CONFIG.maxDistance ** 2,
} as const;
