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
}

/**
 * Scroll-triggered animation wrapper component
 * Animates children when user scrolls past a threshold from the top (mobile only)
 * On desktop (md+), content is always displayed on load
 * Hidden at the top of the page on mobile, appears when scrolling down
 *
 * @param children - Content to animate
 * @param threshold - Scroll threshold in pixels (default: 100)
 * @param variants - Motion variants to use (default: fadeInUp)
 * @param className - Additional CSS classes
 *
 * @example
 * <ScrollTriggeredAnimation threshold={150}>
 *   <div>Content that appears on scroll (mobile) or immediately (desktop)</div>
 * </ScrollTriggeredAnimation>
 */
const ScrollTriggeredAnimation = ({
  children,
  threshold = 50,
  variants = fadeInUp,
  className,
}: ScrollTriggeredAnimationProps): React.ReactElement => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if screen is mobile (< md breakpoint, 768px)
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initial screen size
    checkIsMobile();

    // Handle resize
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  useEffect(() => {
    // On desktop (md+), always show content immediately
    if (!isMobile) {
      const rafId = requestAnimationFrame(() => {
        setHasScrolled(true);
      });
      return () => {
        cancelAnimationFrame(rafId);
      };
    }

    // On mobile, use scroll trigger
    const handleScroll = () => {
      if (window.pageYOffset > threshold) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold, isMobile]);

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
