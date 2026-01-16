/**
 * Particle Renderer for Particle Background
 * Single Responsibility: Draw particles to canvas
 * 
 * Handles rendering individual particles with optimized drawing operations
 */

import type { Particle } from '../types';
import { VISUAL_CONFIG, PERFORMANCE_CONFIG } from '../constants';

export class ParticleRenderer {
  private readonly color: string;
  private readonly twoPI: number;

  constructor() {
    this.color = VISUAL_CONFIG.particleColor;
    this.twoPI = PERFORMANCE_CONFIG.twoPI;
  }

  /**
   * Render all particles to the canvas
   */
  render(ctx: CanvasRenderingContext2D, particles: Particle[]): void {
    particles.forEach((particle) => {
      this.renderParticle(ctx, particle);
    });
  }

  /**
   * Render a single particle
   */
  private renderParticle(ctx: CanvasRenderingContext2D, particle: Particle): void {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, this.twoPI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
