import React from "react";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/motion/variants";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

/**
 * Reusable section header component with consistent styling
 * Used across homepage sections (About, Skills, Projects, Contact)
 *
 * @param title - Section title text
 * @param description - Section description text
 * @param className - Optional additional CSS classes for the container
 * @param titleClassName - Optional additional CSS classes for the title
 * @param descriptionClassName - Optional additional CSS classes for the description
 *
 * @example
 * <SectionHeader
 *   title="Featured Projects"
 *   description="A selection of my recent web development projects."
 * />
 */
const SectionHeader = ({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps): React.ReactElement => (
  <motion.div
    className={cn("text-center mb-16", className)}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    variants={fadeInUp}
  >
    <h2 className={cn("text-2xl md:text-4xl mb-6 font-bold", titleClassName)}>
      {title}
    </h2>
    {description && (
      <p
        className={cn(
          "max-w-3xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed",
          descriptionClassName
        )}
      >
        {description}
      </p>
    )}
  </motion.div>
);

export { SectionHeader };
