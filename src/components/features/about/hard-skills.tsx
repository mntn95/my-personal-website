import { getTranslations } from "next-intl/server";
import { FeatureCard } from "@/components/common";
import { Badge } from "@/components/ui";
import { aboutSkills } from "@/data/about";
import { getAnimationDelay } from "@/lib/utils";

/**
 * Hard skills section component displaying technical skills with badges
 * Used in the About page
 */
export async function HardSkillsSection(): Promise<React.ReactElement> {
  const t = await getTranslations("AboutPage.hardSkills");

  return (
    <div className="mb-24 animate-fadeInUp">
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
            className="text-center animate-fadeInUp"
            style={getAnimationDelay(index, 0.05)}
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
    </div>
  );
}
