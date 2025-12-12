import * as motion from "motion/react-client";
import { getTranslations } from "next-intl/server";
import { FeatureCard } from "@/components/common";
import { Badge } from "@/components/ui";
import { aboutSkills } from "@/data/about";
import { fadeInUp } from "@/lib/motion/variants";

/**
 * Hard skills section component displaying technical skills with badges
 * Used in the About page
 */
const HardSkillsSection = async (): Promise<React.ReactElement> => {
  const t = await getTranslations("AboutPage.hardSkills");

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {aboutSkills.map((skill, index) => (
          <FeatureCard
            key={index}
            variant="elevated"
            hover
            className="text-center hover:scale-105"
            animationIndex={index}
            animationDelayStep={0.05}
          >
            <h3 className="mb-2 font-semibold">{skill.name}</h3>
            <Badge
              variant={
                skill.color === "teal"
                  ? "teal"
                  : skill.color === "blue"
                  ? "purple"
                  : "green"
              }
              size="sm"
            >
              {t(`levels.${skill.level}`)}
            </Badge>
          </FeatureCard>
        ))}
      </div>
    </motion.div>
  );
};

export { HardSkillsSection };
