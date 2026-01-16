/**
 * Connection Renderer for Particle Background
 * Single Responsibility: Draw connections between particles
 * 
 * Handles rendering lines between nearby particles using spatial grid optimization
 */

import type { Particle } from '../types';
import type { SpatialGrid } from './spatial-grid';
import { VISUAL_CONFIG, PERFORMANCE_CONFIG } from '../constants';

export class ConnectionRenderer {
  private readonly baseColor: string;
  private readonly maxDistance: number;
  private readonly maxDistanceSquared: number;
  private readonly connectionAlpha: number;

  constructor() {
    this.baseColor = VISUAL_CONFIG.connectionBaseColor;
    this.maxDistance = VISUAL_CONFIG.maxDistance;
    this.maxDistanceSquared = PERFORMANCE_CONFIG.maxDistanceSquared;
    this.connectionAlpha = VISUAL_CONFIG.connectionAlpha;
  }

  /**
   * Render connections between particles using spatial grid
   */
  render(
    ctx: CanvasRenderingContext2D,
    particles: Particle[],
    spatialGrid: SpatialGrid
  ): void {
    const processedPairs = new Set<string>();

    particles.forEach((p1) => {
      // Only get particles from nearby cells (3x3 grid)
      const neighbors = spatialGrid.getNeighbors(p1);

      neighbors.forEach((p2) => {
        // Skip if same particle
        if (p1 === p2) return;

        // Create unique pair identifier to avoid duplicates
        const pairKey = this.getPairKey(p1, p2);
        if (processedPairs.has(pairKey)) return;
        processedPairs.add(pairKey);

        // Render connection if within range
        this.renderConnection(ctx, p1, p2);
      });
    });
  }

  /**
   * Render a single connection between two particles if within range
   */
  private renderConnection(
    ctx: CanvasRenderingContext2D,
    p1: Particle,
    p2: Particle
  ): void {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const distanceSquared = dx * dx + dy * dy;

    // Use squared distance to avoid Math.sqrt
    if (distanceSquared < this.maxDistanceSquared) {
      // Only calculate actual distance when needed for alpha
      const distance = Math.sqrt(distanceSquared);
      const alpha = this.connectionAlpha * (1 - distance / this.maxDistance);

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = `rgba(${this.baseColor}, ${alpha})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  /**
   * Generate unique pair key to avoid drawing connections twice
   */
  private getPairKey(p1: Particle, p2: Particle): string {
    return p1.x < p2.x || (p1.x === p2.x && p1.y < p2.y)
      ? `${p1.x},${p1.y}-${p2.x},${p2.y}`
      : `${p2.x},${p2.y}-${p1.x},${p1.y}`;
  }
}
