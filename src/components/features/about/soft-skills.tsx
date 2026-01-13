import { getTranslations } from "next-intl/server";
import { FeatureCard, SectionHeader } from "@/components/common";

/**
 * Soft skills section component displaying interpersonal and professional skills
 * Used in the About page
 *
 * @async
 * @returns Promise resolving to React element
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
    <div className="mb-24">
      <SectionHeader
        title={t("title")}
        description={t("description")}
        className="mb-12"
      />
      <FeatureCard variant="elevated" hover>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillTranslations.map((skill, index) => (
            <FeatureCard
              key={index}
              variant="flat"
              hover={false}
              className="h-full"
            >
              <h4 className="text-md md:text-lg mb-2 text-white font-medium">
                {skill.title}
              </h4>
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </FeatureCard>
          ))}
        </div>
      </FeatureCard>
    </div>
  );
};

export { SoftSkillsSection };
