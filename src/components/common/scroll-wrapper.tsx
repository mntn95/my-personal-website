"use client";

import { useState, useEffect } from "react";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { ScrollTriggeredAnimation } from "@/components/common/scroll-triggered-animation";
import { cn } from "@/lib/utils";

interface ScrollWrapperProps {
  children: React.ReactNode;
  threshold?: number;
  className?: string;
}

/**
 * Scroll wrapper component that manages shared scroll state
 * Wraps ScrollTriggeredAnimation and conditionally displays ScrollIndicator
 * ScrollIndicator appears only on mobile when user hasn't scrolled past threshold
 * Used to share scroll state between ScrollIndicator and ScrollTriggeredAnimation
 *
 * @param children - Content to wrap and animate
 * @param threshold - Scroll threshold in pixels (default: 50)
 * @param className - Additional CSS classes
 *
 * @example
 * <ScrollWrapper>
 *   <div>Content that appears on scroll (mobile) or immediately (desktop)</div>
 * </ScrollWrapper>
 */
const ScrollWrapper = ({
  children,
  threshold = 50,
  className,
}: ScrollWrapperProps): React.ReactNode => {
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
  console.log({ hasScrolled, isMobile });
  return (
    <div className={cn("relative", className)}>
      {isMobile && !hasScrolled && <ScrollIndicator className="top-20" />}
      <ScrollTriggeredAnimation
        externalHasScrolled={hasScrolled}
        externalIsMobile={isMobile}
        threshold={threshold}
        className={className}
      >
        {children}
      </ScrollTriggeredAnimation>
    </div>
  );
};

export { ScrollWrapper };
