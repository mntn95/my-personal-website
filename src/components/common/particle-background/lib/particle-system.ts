/**
 * Particle System for Particle Background
 * Single Responsibility: Manage particle physics and state
 * 
 * Handles particle creation, position updates, and edge wrapping
 */

import type { Particle, CanvasDimensions } from '../types';
import { PARTICLE_CONFIG } from '../constants';

export class ParticleSystem {
  private particles: Particle[] = [];

  constructor(dimensions: CanvasDimensions) {
    this.initializeParticles(dimensions);
  }

  /**
   * Create initial particles with random positions and velocities
   */
  private initializeParticles(dimensions: CanvasDimensions): void {
    const { count, minSize, maxSize, velocityRange } = PARTICLE_CONFIG;

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * velocityRange,
        vy: (Math.random() - 0.5) * velocityRange,
        size: Math.random() * (maxSize - minSize) + minSize,
      });
    }
  }

  /**
   * Update all particle positions and handle edge wrapping
   */
  update(dimensions: CanvasDimensions): void {
    this.particles.forEach((particle) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Wrap around edges
      if (particle.x < 0) particle.x = dimensions.width;
      if (particle.x > dimensions.width) particle.x = 0;
      if (particle.y < 0) particle.y = dimensions.height;
      if (particle.y > dimensions.height) particle.y = 0;
    });
  }

  /**
   * Get current particle array
   */
  getParticles(): Particle[] {
    return this.particles;
  }
}
