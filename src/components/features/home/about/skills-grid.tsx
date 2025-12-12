"use client";

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

  return (
    <div
      ref={sectionRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12"
    >
      {skillLevels.map((skill, index) => (
        <FeatureCard
          key={index}
          variant="elevated"
          hover={false}
          className="hover:border-teal-500/50 hover:scale-105 transition-all"
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
  );
};

export { SkillsGrid };
