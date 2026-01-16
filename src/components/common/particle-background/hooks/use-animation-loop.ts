/**
 * Animation Loop Hook for Particle Background
 * Single Responsibility: Manage requestAnimationFrame lifecycle
 * 
 * Handles animation frame requests and cleanup
 */

'use client';

import { useEffect, useRef } from 'react';

interface UseAnimationLoopProps {
  callback: () => void;
  isActive: boolean;
}

export const useAnimationLoop = ({ callback, isActive }: UseAnimationLoopProps): void => {
  const animationIdRef = useRef<number | undefined>(undefined);
  const callbackRef = useRef(callback);

  // Keep callback ref up to date
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!isActive) return;

    const animate = () => {
      callbackRef.current();
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isActive]);
};
