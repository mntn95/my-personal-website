"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { skillLevels } from "@/data/skills";
import { FeatureCard } from "@/components/common";
import { ProgressBar } from "@/components/ui";
import { useIntersectionObserver } from "@/hooks";

/**
 * Skills grid component displaying skill levels with progress bars
 * Uses intersection observer to trigger animations when visible
 * Used in the About component
 */
const SkillsGrid = (): React.ReactElement => {
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, [isMobile]);

  const t = useTranslations("HomePage.about");

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 2);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleShowMore();
    }
  };

  const displayedSkills = isMobile
    ? skillLevels.slice(0, visibleCount)
    : skillLevels;
  const showButton = visibleCount < skillLevels.length;

  return (
    <>
      <div
        ref={sectionRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12"
      >
        {displayedSkills.map((skill, index) => (
          <FeatureCard
            key={index}
            variant="elevated"
            hover={false}
            className="hover:border-teal-500/50 hover:scale-105 transition-all md:block"
            animationIndex={index}
          >
            <ProgressBar
              value={skill.level}
              label={skill.name}
              showLabel
              animated={isVisible}
            />
          </FeatureCard>
        ))}
      </div>
      {showButton && (
        <div className="flex justify-center mb-12 md:hidden">
          <button
            onClick={handleShowMore}
            onKeyDown={handleKeyDown}
            className="flex items-center gap-2 text-teal-500 hover:text-teal-400 transition-colors"
            aria-label={t("showMore")}
            tabIndex={0}
          >
            <span>{t("showMore")}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  );
};

export { SkillsGrid };
