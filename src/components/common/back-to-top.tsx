"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop(): React.ReactElement | null {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    const toggleVisibility = () => {
      // Clear any pending timeout to prevent race conditions
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (window.pageYOffset > 300) {
        setIsVisible(true);
        setIsAnimatingOut(false);
      } else {
        if (isVisible) {
          setIsAnimatingOut(true);
          // Store timeout ID for cleanup
          timeoutRef.current = setTimeout(() => {
            setIsVisible(false);
            setIsAnimatingOut(false);
          }, 300); // Match animation duration
        }
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      // Clean up timeout on unmount
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 p-4 bg-purple-400 text-white rounded-full shadow-lg hover:bg-purple-400/90 transition-all hover:scale-110 cursor-pointer ${
            isAnimatingOut ? "animate-fadeOutDown" : "animate-fadeInUp"
          }`}
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
