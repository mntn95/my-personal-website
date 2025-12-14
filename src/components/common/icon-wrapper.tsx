import React from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconWrapperProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  className?: string;
  isCentered?: boolean;
}

/**
 * Consistent icon wrapper with background and styling
 * Replaces 8+ duplicate icon container patterns
 *
 * @param icon - Lucide icon component to display
 * @param size - Size variant: "sm", "md", or "lg" (default: "md")
 * @param className - Optional additional CSS classes
 * @param isCentered - Whether to center the icon horizontally (default: false)
 *
 * @example
 * <IconWrapper icon={Code} size="md" />
 */
const IconWrapper = ({
  icon: Icon,
  size = "md",
  className,
  isCentered = false,
}: IconWrapperProps): React.ReactElement => {
  const sizeClasses = {
    sm: "p-2 w-8 h-8",
    md: "p-3 w-12 h-12",
    lg: "p-4 w-16 h-16",
  };

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  return (
    <div
      className={cn(
        "bg-teal-500/10 rounded-lg flex items-center justify-center",
        isCentered && "mx-auto",
        sizeClasses[size],
        className
      )}
    >
      <Icon className={cn("text-teal-500", iconSizes[size])} />
    </div>
  );
};

export { IconWrapper };
