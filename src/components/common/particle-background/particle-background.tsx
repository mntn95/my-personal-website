/**
 * Particle Background Component
 * Single Responsibility: Orchestrate particle animation system
 * 
 * Composes all modules to create animated particle background with connections
 */

'use client';

import { useMemo } from 'react';
import { useCanvasSetup } from './hooks/use-canvas-setup';
import { useAnimationVisibility } from './hooks/use-animation-visibility';
import { useAnimationLoop } from './hooks/use-animation-loop';
import { ParticleSystem } from './lib/particle-system';
import { SpatialGrid } from './lib/spatial-grid';
import { ParticleRenderer } from './lib/particle-renderer';
import { ConnectionRenderer } from './lib/connection-renderer';

export const ParticleBackground = (): React.ReactElement => {
  // Setup canvas
  const { canvasRef, ctx, dimensions } = useCanvasSetup();

  // Check visibility and accessibility preferences
  const { isVisible, prefersReducedMotion } = useAnimationVisibility();

  // Initialize systems once (memoized to prevent recreating on every render)
  const particleSystem = useMemo(
    () => dimensions.width && dimensions.height 
      ? new ParticleSystem(dimensions) 
      : null,
    [dimensions.width, dimensions.height]
  );
  
  const spatialGrid = useMemo(() => new SpatialGrid(), []);
  const particleRenderer = useMemo(() => new ParticleRenderer(), []);
  const connectionRenderer = useMemo(() => new ConnectionRenderer(), []);

  // Animation callback
  const animate = () => {
    // Skip animation if not ready, hidden, or user prefers reduced motion
    if (!ctx || !particleSystem || !isVisible || prefersReducedMotion) {
      return;
    }

    // Clear canvas
    ctx.clearRect(0, 0, dimensions.width, dimensions.height);

    // Update particle physics
    particleSystem.update(dimensions);
    const particles = particleSystem.getParticles();

    // Render particles
    particleRenderer.render(ctx, particles);

    // Build spatial grid and render connections
    spatialGrid.build(particles);
    connectionRenderer.render(ctx, particles, spatialGrid);
  };

  // Run animation loop
  useAnimationLoop({
    callback: animate,
    isActive: Boolean(ctx && particleSystem && dimensions.width && dimensions.height),
  });

  return (
    <div className="hidden lg:block fixed inset-0 z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ position: 'fixed', top: 0, left: 0 }}
      />
    </div>
  );
};
