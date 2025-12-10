import React from "react";
import { Badge } from "@/components/ui";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  badge?: string;
  title: string;
  description: string;
  className?: string;
}

/**
 * Standard page header component with badge, title, and description
 * Used consistently across all pages
 *
 * @example
 * <PageHeader
 *   badge="About Me"
 *   title="Know Who I Am"
 *   description="Learn about my journey..."
 * />
 */
export function PageHeader({
  badge,
  title,
  description,
  className,
}: PageHeaderProps): React.ReactElement {
  return (
    <div className={cn("text-center mb-16 animate-fadeInUp", className)}>
      {badge && (
        <div className="mb-4">
          <Badge variant="outline" size="sm">
            {badge}
          </Badge>
        </div>
      )}
      <h1 className="text-4xl md:text-5xl mb-6 font-bold">{title}</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-gray-400 leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
