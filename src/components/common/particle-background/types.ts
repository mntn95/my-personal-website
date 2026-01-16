/**
 * Type Definitions for Particle Background System
 * Single Responsibility: Define all type contracts used across modules
 */

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export interface CanvasDimensions {
  width: number;
  height: number;
}

export interface AnimationVisibility {
  isVisible: boolean;
  prefersReducedMotion: boolean;
}
