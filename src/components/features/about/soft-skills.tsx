import * as motion from "motion/react-client";
import { getTranslations } from "next-intl/server";
import { FeatureCard } from "@/components/common";
import { fadeInUp } from "@/lib/motion/variants";

/**
 * Soft skills section component displaying interpersonal and professional skills
 * Used in the About page
 */
const SoftSkillsSection = async (): Promise<React.ReactElement> => {
  const t = await getTranslations("AboutPage.softSkills");
  const tSkills = await getTranslations("AboutPage.softSkillsList");
  const skillKeys = [
    "problemSolving",
    "communication",
    "teamCollaboration",
    "adaptability",
    "timeManagement",
    "criticalThinking",
  ];

  const skillTranslations = skillKeys.map((key) => ({
    key,
    title: tSkills(`${key}.title`),
    description: tSkills(`${key}.description`),
  }));

  return (
    <motion.div
      className="mb-24"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={fadeInUp}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl mb-6 font-bold">{t("title")}</h2>
        <p className="text-gray-400 max-w-3xl mx-auto font-normal leading-relaxed">
          {t("description")}
        </p>
      </div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={fadeInUp}
      >
        <FeatureCard variant="elevated" hover>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillTranslations.map((skill, index) => (
              <FeatureCard key={index} variant="flat" hover={false}>
                <h4 className="text-lg mb-2 text-white font-medium">
                  {skill.title}
                </h4>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </FeatureCard>
            ))}
          </div>
        </FeatureCard>
      </motion.div>
    </motion.div>
  );
};

export { SoftSkillsSection };
