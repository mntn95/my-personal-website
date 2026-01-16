/**
 * Canvas Setup Hook for Particle Background
 * Single Responsibility: Manage canvas lifecycle and context
 *
 * Handles canvas initialization, resize events, and context management
 */

"use client";

import { useEffect, useRef, useState } from "react";
import type { CanvasDimensions } from "../types";

interface UseCanvasSetupReturn {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  ctx: CanvasRenderingContext2D | null;
  dimensions: CanvasDimensions;
}

export const useCanvasSetup = (): UseCanvasSetupReturn => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [dimensions, setDimensions] = useState<CanvasDimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Get context with performance hints
    const context = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true,
    });
    setCtx(context);

    // Handle canvas resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setDimensions({
        width: canvas.width,
        height: canvas.height,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { canvasRef, ctx, dimensions };
};
