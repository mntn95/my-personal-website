import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingProps {
  /**
   * Size of the loading spinner
   * @default "md"
   */
  size?: "sm" | "md" | "lg" | "xl";
  /**
   * Optional text to display below the spinner
   */
  text?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Whether to center the loading spinner
   * @default true
   */
  centered?: boolean;
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-8 h-8",
  lg: "w-12 h-12",
  xl: "w-16 h-16",
};

/**
 * Loading spinner component with optional text
 * Used to indicate loading states throughout the application
 *
 * @example
 * <Loading size="lg" text="Loading projects..." />
 */
export function Loading({
  size = "md",
  text,
  className,
  centered = true,
}: LoadingProps): React.ReactElement {
  const content = (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3",
        className
      )}
    >
      <Loader2
        className={cn("animate-spin text-teal-500", sizeClasses[size])}
      />
      {text && <p className="text-gray-400 text-sm font-normal">{text}</p>}
    </div>
  );

  if (centered) {
    return (
      <div className="flex items-center justify-center min-h-[200px] w-full">
        {content}
      </div>
    );
  }

  return content;
}
