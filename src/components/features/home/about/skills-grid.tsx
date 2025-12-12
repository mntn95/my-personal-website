"use client";

import { motion } from "motion/react";
import { skillLevels } from "@/data/skills";
import { FeatureCard } from "@/components/common";
import { ProgressBar } from "@/components/ui";
import { useIntersectionObserver } from "@/hooks";
import { fadeInUp } from "@/lib/motion/variants";
import { getMotionDelay } from "@/lib/motion/utils";

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
        <motion.div
          key={index}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={fadeInUp}
          transition={getMotionDelay(index)}
        >
          <FeatureCard
            variant="elevated"
            hover={false}
            className="hover:border-teal-500/50 hover:scale-105 transition-all"
          >
            <ProgressBar
              value={skill.level}
              label={skill.name}
              showLabel
              animated={isVisible}
            />
          </FeatureCard>
        </motion.div>
      ))}
    </div>
  );
};

export { SkillsGrid };
