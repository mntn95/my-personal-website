/**
 * Spatial Grid for Particle Background System
 * Single Responsibility: Manage spatial partitioning algorithm
 * 
 * This class implements a grid-based spatial partitioning system
 * to reduce connection checks from O(n²) to approximately O(n)
 */

import type { Particle } from '../types';
import { PERFORMANCE_CONFIG } from '../constants';

export class SpatialGrid {
  private grid: Map<string, Particle[]> = new Map();
  private readonly cellSize: number;

  constructor(cellSize: number = PERFORMANCE_CONFIG.cellSize) {
    this.cellSize = cellSize;
  }

  /**
   * Build spatial grid from particle array
   * Clears existing grid and assigns particles to cells
   */
  build(particles: Particle[]): void {
    this.grid.clear();
    
    particles.forEach((particle) => {
      const key = this.getCellKey(particle.x, particle.y);
      
      if (!this.grid.has(key)) {
        this.grid.set(key, []);
      }
      this.grid.get(key)!.push(particle);
    });
  }

  /**
   * Get all particles from current cell and 8 adjacent cells (3x3 grid)
   * This ensures we find all particles within MAX_DISTANCE
   */
  getNeighbors(particle: Particle): Particle[] {
    const [cellX, cellY] = this.getCellCoordinates(particle.x, particle.y);
    const neighbors: Particle[] = [];

    // Check 3x3 grid around current cell (including current cell)
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        const key = this.getCellKeyFromCoords(cellX + dx, cellY + dy);
        const cellParticles = this.grid.get(key);
        
        if (cellParticles) {
          neighbors.push(...cellParticles);
        }
      }
    }

    return neighbors;
  }

  /**
   * Get grid cell coordinates for a given position
   */
  private getCellCoordinates(x: number, y: number): [number, number] {
    return [Math.floor(x / this.cellSize), Math.floor(y / this.cellSize)];
  }

  /**
   * Generate unique key for grid cell from world position
   */
  private getCellKey(x: number, y: number): string {
    const [cellX, cellY] = this.getCellCoordinates(x, y);
    return this.getCellKeyFromCoords(cellX, cellY);
  }

  /**
   * Generate unique key for grid cell from cell coordinates
   */
  private getCellKeyFromCoords(cellX: number, cellY: number): string {
    return `${cellX},${cellY}`;
  }
}
