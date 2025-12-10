"use client";

import { useState, useEffect, useRef } from "react";
import { HERO_ROLES } from "@/constants/animations";
import { getFixedAnimationDelay } from "@/lib/utils";

const roles = HERO_ROLES;

/**
 * Typing text component with animated role display
 * Cycles through roles with typing and deleting animation
 * Used in the Hero component
 */
export function TypingText(): React.ReactElement {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const deleteTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    const role = roles[roleIndex];
    timeoutRef.current = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            // Store nested timeout to clean it up properly
            deleteTimeoutRef.current = setTimeout(
              () => setIsDeleting(true),
              2000
            );
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => {
      // Clean up both timeouts to prevent memory leaks
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (deleteTimeoutRef.current) clearTimeout(deleteTimeoutRef.current);
    };
  }, [displayText, isDeleting, roleIndex]);

  return (
    <div
      className="h-12 mb-6 animate-fadeInUp"
      style={getFixedAnimationDelay(0.2)}
    >
      <span
        className="text-2xl md:text-3xl text-gray-300"
        style={{ fontWeight: 400 }}
      >
        {displayText}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  );
}
