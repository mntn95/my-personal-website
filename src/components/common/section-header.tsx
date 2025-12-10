import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

/**
 * Reusable section header component with consistent styling
 * Used across homepage sections (About, Skills, Projects, Contact)
 *
 * @example
 * <SectionHeader
 *   title="Featured Projects"
 *   description="A selection of my recent web development projects."
 * />
 */
export function SectionHeader({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps): React.ReactElement {
  return (
    <div className={cn("text-center mb-16 animate-fadeInUp", className)}>
      <h2 className={cn("text-4xl mb-6 font-bold", titleClassName)}>{title}</h2>
      <p
        className={cn(
          "max-w-3xl mx-auto text-gray-400 font-normal leading-relaxed",
          descriptionClassName
        )}
      >
        {description}
      </p>
    </div>
  );
}

