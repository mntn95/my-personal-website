"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { skills } from "@/data/skills";
import { fadeInRight } from "@/lib/motion/variants";
import { getMotionDelay } from "@/lib/motion/utils";

/**
 * Skills grid component
 * Displays skills in a responsive grid layout
 * Used in the Hero component
 */
const SkillsGrid = (): React.ReactElement => {
  const t = useTranslations();

  return (
    <motion.div
      className="relative hidden lg:block"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={fadeInRight}
    >
      <div className="relative w-full h-[500px] rounded-lg overflow-hidden bg-card-bg border border-card-border p-6 shadow-xl shadow-teal-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent"></div>

        <div className="relative h-full w-full grid grid-cols-6 grid-rows-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`bg-card-bg border border-card-border p-6 flex flex-col justify-center rounded-lg hover:bg-card-hover hover:border-teal-500/50 transition-all hover:scale-105 ${skill.span}`}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              variants={fadeInRight}
              transition={getMotionDelay(index)}
            >
              <div className="flex items-center mb-2">
                <skill.icon className="w-5 h-5 mr-2 text-teal-500" />
                <h3 style={{ fontWeight: 600 }}>{skill.name}</h3>
              </div>
              <p className="text-sm text-gray-400" style={{ fontWeight: 400 }}>
                {skill.description.startsWith("HomePage.") ||
                skill.description.startsWith("SkillsPage.")
                  ? t(skill.description)
                  : skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export { SkillsGrid };
