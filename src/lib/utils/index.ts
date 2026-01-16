/**
 * @file Barrel export file for utility functions
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind classes
 * Combines clsx and tailwind-merge for optimal class merging
 */
const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

export { cn };

export * from "./animation";
export * from "./request";
