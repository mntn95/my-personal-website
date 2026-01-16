import { getTranslations } from "next-intl/server";
import { FeatureCard, SectionHeader } from "@/components/common";
import { softSkills } from "@/data/about";

/**
 * Soft skills section component displaying interpersonal and professional skills
 * Used in the About page
 *
 * @async
 * @returns Promise resolving to React element
 */
const SoftSkillsSection = async (): Promise<React.ReactElement> => {
  const t = await getTranslations();

  return (
    <div className="mb-24">
      <SectionHeader
        title={t("AboutPage.softSkills.title")}
        className="mb-12"
      />
      <FeatureCard variant="elevated" hover>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {softSkills.map((skill, index) => (
            <FeatureCard
              key={index}
              variant="flat"
              hover={false}
              className="h-full"
            >
              <h4 className="text-md md:text-lg mb-2 text-white font-medium">
                {t(skill.title)}
              </h4>
              <p className="text-gray-400 text-sm">{t(skill.description)}</p>
            </FeatureCard>
          ))}
        </div>
      </FeatureCard>
    </div>
  );
};

export { SoftSkillsSection };
