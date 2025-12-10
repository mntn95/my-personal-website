import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "flat";
  hover?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Reusable feature card component with consistent styling
 * Use for feature showcases and project cards with hover effects
 * Replaces 10+ duplicate card patterns across the codebase
 *
 * @example
 * <FeatureCard variant="default" hover>
 *   <h2>Title</h2>
 *   <p>Content</p>
 * </FeatureCard>
 */
export function FeatureCard({
  children,
  variant = "default",
  hover = true,
  className,
  style,
}: FeatureCardProps): React.ReactElement {
  return (
    <div
      className={cn(
        "rounded-lg transition-all",
        variant === "default" && "bg-card-bg border border-card-border p-8",
        variant === "elevated" &&
          "bg-card-bg border border-card-border p-6 shadow-lg",
        variant === "flat" && "bg-card-border p-4",
        hover && "hover:bg-card-hover hover:border-teal-500/50 hover:scale-105",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}
