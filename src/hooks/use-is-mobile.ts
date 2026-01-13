"use client";
import { useEffect, useState } from "react";

/**
 * Custom hook to determine if the screen is mobile
 *
 * @returns True if the screen is mobile, false otherwise
 */

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, [isMobile]);

  return isMobile;
};

export { useIsMobile };
