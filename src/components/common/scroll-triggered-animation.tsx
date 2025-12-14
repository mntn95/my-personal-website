"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { fadeInUp } from "@/lib/motion/variants";

interface ScrollTriggeredAnimationProps {
  children: React.ReactNode;
  threshold?: number;
  variants?: Variants;
  className?: string;
  externalHasScrolled?: boolean;
  externalIsMobile?: boolean;
}

/**
 * Scroll-triggered animation wrapper component
 * Animates children when user scrolls past a threshold from the top (mobile only)
 * On desktop (md+), content is always displayed on load
 * Hidden at the top of the page on mobile, appears when scrolling down
 *
 * @param children - Content to animate
 * @param threshold - Scroll threshold in pixels (default: 50)
 * @param variants - Motion variants to use (default: fadeInUp)
 * @param className - Additional CSS classes
 * @param externalHasScrolled - Optional external scroll state (for shared state management)
 * @param externalIsMobile - Optional external mobile detection state (for shared state management)
 *
 * @example
 * <ScrollTriggeredAnimation threshold={150}>
 *   <div>Content that appears on scroll (mobile) or immediately (desktop)</div>
 * </ScrollTriggeredAnimation>
 *
 * @example
 * <ScrollTriggeredAnimation
 *   externalHasScrolled={hasScrolled}
 *   externalIsMobile={isMobile}
 * >
 *   <div>Content with external scroll state</div>
 * </ScrollTriggeredAnimation>
 */
const ScrollTriggeredAnimation = ({
  children,
  threshold = 50,
  variants = fadeInUp,
  className,
  externalHasScrolled,
  externalIsMobile,
}: ScrollTriggeredAnimationProps): React.ReactElement => {
  const [internalHasScrolled, setInternalHasScrolled] = useState(false);
  const [internalIsMobile, setInternalIsMobile] = useState(true);

  // Use external state if provided, otherwise use internal state
  const hasScrolled =
    externalHasScrolled !== undefined
      ? externalHasScrolled
      : internalHasScrolled;
  const isMobile =
    externalIsMobile !== undefined ? externalIsMobile : internalIsMobile;

  useEffect(() => {
    // Only manage internal state if external state is not provided
    if (externalIsMobile !== undefined) {
      return;
    }

    // Check if screen is mobile (< md breakpoint, 768px)
    const checkIsMobile = () => {
      setInternalIsMobile(window.innerWidth < 768);
    };

    // Check initial screen size
    checkIsMobile();

    // Handle resize
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, [externalIsMobile]);

  useEffect(() => {
    // Only manage internal state if external state is not provided
    if (externalHasScrolled !== undefined) {
      return;
    }

    // On desktop (md+), always show content immediately
    if (!isMobile) {
      const rafId = requestAnimationFrame(() => {
        setInternalHasScrolled(true);
      });
      return () => {
        cancelAnimationFrame(rafId);
      };
    }

    // On mobile, use scroll trigger
    const handleScroll = () => {
      if (window.pageYOffset > threshold) {
        setInternalHasScrolled(true);
      } else {
        setInternalHasScrolled(false);
      }
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold, isMobile, externalHasScrolled]);

  return (
    <motion.div
      className={className}
      initial="initial"
      animate={hasScrolled ? "animate" : "initial"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export { ScrollTriggeredAnimation };
