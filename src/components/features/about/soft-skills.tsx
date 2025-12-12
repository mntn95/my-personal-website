import { getTranslations } from "next-intl/server";
import { FeatureCard } from "@/components/common";

/**
 * Soft skills section component displaying interpersonal and professional skills
 * Used in the About page
 */
export async function SoftSkillsSection(): Promise<React.ReactElement> {
  const t = await getTranslations("AboutPage.softSkills");
  const skillKeys = [
    "problemSolving",
    "communication",
    "teamCollaboration",
    "adaptability",
    "timeManagement",
    "criticalThinking",
  ];

  const skillTranslations = await Promise.all(
    skillKeys.map(async (key) => {
      const skillT = await getTranslations(`AboutPage.softSkillsList.${key}`);
      return {
        key,
        title: skillT("title"),
        description: skillT("description"),
      };
    })
  );

  return (
    <div className="mb-24 animate-fadeInUp">
      <div className="text-center mb-12">
        <h2 className="text-3xl mb-6 font-bold">{t("title")}</h2>
        <p className="text-gray-400 max-w-3xl mx-auto font-normal leading-relaxed">
          {t("description")}
        </p>
      </div>
      <FeatureCard variant="elevated" hover className="animate-fadeInUp">
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
    </div>
  );
}
