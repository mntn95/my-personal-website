import { getTranslations } from "next-intl/server";
import { FeatureCard, SectionHeader } from "@/components/common";
import { Badge } from "@/components/ui";
import { aboutSkills } from "@/data/about";

/**
 * Hard skills section component displaying technical skills with badges
 * Used in the About page
 *
 * @async
 * @returns Promise resolving to React element
 */
const HardSkillsSection = async (): Promise<React.ReactElement> => {
  const t = await getTranslations("AboutPage.hardSkills");

  return (
    <div className="mb-24">
      <SectionHeader title={t("title")} description={t("description")} />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {aboutSkills.map((skill, index) => (
          <FeatureCard
            key={index}
            variant="elevated"
            hover
            className="text-center hover:scale-105"
            animationIndex={index}
            animationDelayStep={0.05}
          >
            <h3 className="mb-2 text-sm md:text-base font-semibold">
              {skill.name}
            </h3>
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
    </div>
  );
};

export { HardSkillsSection };
