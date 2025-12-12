import React from "react";
import * as motion from "motion/react-client";
import { Badge } from "@/components/ui";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/motion/variants";

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
const PageHeader = ({
  badge,
  title,
  description,
  className,
}: PageHeaderProps): React.ReactElement => {
  return (
    <motion.div
      className={cn("text-center mb-16", className)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={fadeInUp}
    >
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
    </motion.div>
  );
};

export { PageHeader };
