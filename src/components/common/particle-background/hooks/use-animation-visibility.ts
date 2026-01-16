/**
 * Animation Visibility Hook for Particle Background
 * Single Responsibility: Detect visibility and motion preferences
 * 
 * Handles page visibility and prefers-reduced-motion detection for accessibility
 */

'use client';

import { useEffect, useRef } from 'react';
import type { AnimationVisibility } from '../types';

export const useAnimationVisibility = (): AnimationVisibility => {
  const isVisibleRef = useRef<boolean>(true);
  const prefersReducedMotionRef = useRef<boolean>(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotionRef.current = mediaQuery.matches;

    const handleMotionPreferenceChange = (e: MediaQueryListEvent) => {
      prefersReducedMotionRef.current = e.matches;
    };

    // Handle page visibility
    const handleVisibilityChange = () => {
      isVisibleRef.current = !document.hidden;
    };

    mediaQuery.addEventListener('change', handleMotionPreferenceChange);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionPreferenceChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return {
    isVisible: isVisibleRef.current,
    prefersReducedMotion: prefersReducedMotionRef.current,
  };
};
