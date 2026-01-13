"use client";
import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

/**
 * Custom hook for observing element visibility with Intersection Observer API
 * Useful for triggering animations or lazy loading when element enters viewport
 *
 * @template T - HTML element type (defaults to HTMLDivElement)
 * @param options - Intersection Observer configuration
 * @param options.threshold - Threshold for intersection (default: 0.1)
 * @param options.root - Root element for intersection (default: null)
 * @param options.rootMargin - Root margin for intersection (default: "0px")
 * @param options.freezeOnceVisible - Whether to stop observing once visible (default: true)
 * @returns [ref, isIntersecting] - Ref to attach to element and visibility state
 *
 * @example
 * const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
 * return <div ref={ref}>{isVisible && <Animation />}</div>
 */
const useIntersectionObserver = <T extends HTMLElement = HTMLDivElement>(
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<T | null>, boolean] => {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = "0px",
    freezeOnceVisible = true,
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // If already visible and freeze is enabled, don't observe again
    if (freezeOnceVisible && isIntersecting) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);

          // Unobserve once visible if freeze is enabled
          if (freezeOnceVisible) {
            observer.unobserve(element);
          }
        } else if (!freezeOnceVisible) {
          setIsIntersecting(false);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, root, rootMargin, freezeOnceVisible, isIntersecting]);

  return [elementRef, isIntersecting];
};

export { useIntersectionObserver };
