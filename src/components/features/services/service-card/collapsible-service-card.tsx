"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { ApproachSection } from "./approach-section";
import { TechnologiesSection } from "./technologies-section";
import { ExamplesSection } from "./examples-section";

/**
 * Collapsible service card content component
 * Wraps Approach, Technologies, and Examples sections with collapse/expand functionality
 * Sections are collapsible on mobile and always visible on desktop
 * Used in the ServiceCard component
 */
interface CollapsibleServiceCardProps {
  approach?: string[];
  whatIncluded?: string[];
  technologies?: string[];
  examples: string[];
}

const CollapsibleServiceCard = ({
  approach,
  whatIncluded,
  technologies,
  examples,
}: CollapsibleServiceCardProps): React.ReactElement => {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslations("ServicesPage");

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggle();
    }
  };

  return (
    <>
      {/* Desktop: always visible */}
      <div className="hidden md:block">
        <ApproachSection approach={approach} whatIncluded={whatIncluded} />
        <TechnologiesSection technologies={technologies} />
        <ExamplesSection examples={examples} />
      </div>

      {/* Mobile: collapsible with animation */}
      <div className="md:hidden">
        <motion.div
          className="mb-12"
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          style={{ overflow: "hidden" }}
        >
          <ApproachSection approach={approach} whatIncluded={whatIncluded} />
          <TechnologiesSection technologies={technologies} />
          <ExamplesSection examples={examples} />
        </motion.div>

        <div className="flex justify-center mb-6">
          <button
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            className="flex items-center gap-2 text-teal-500 hover:text-teal-400 transition-colors"
            aria-label={isExpanded ? t("showLess") : t("showMore")}
            tabIndex={0}
          >
            <span>{isExpanded ? t("showLess") : t("showMore")}</span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>
        </div>
      </div>
    </>
  );
};

export { CollapsibleServiceCard };
