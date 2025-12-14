"use client";

import { useEffect } from "react";

/**
 * Hash scroll handler component
 * Handles scrolling to anchor links on page load with offset for fixed navigation
 * Used in pages that need hash-based navigation (e.g., /services#web-development)
 * Scrolls to element position minus 200px offset to account for fixed navigation
 */
export const HashScrollHandler = (): null => {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    // Remove the # from the hash
    const id = hash.substring(1);
    // Small delay to ensure the page has rendered
    setTimeout(() => {
      const element = document.getElementById(id);
      if (!element) return;

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 200;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }, 100);
  }, []);

  return null;
};
