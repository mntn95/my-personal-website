"use client";

import { useEffect } from "react";

/**
 * Hash scroll handler component
 * Handles scrolling to anchor links on page load
 * Used in pages that need hash-based navigation (e.g., /services#web-development)
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

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }, []);

  return null;
};

