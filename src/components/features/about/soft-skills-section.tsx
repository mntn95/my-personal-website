import { FeatureCard } from "@/components/common";
import { softSkills } from "@/data/about";

/**
 * Soft skills section component displaying interpersonal and professional skills
 * Used in the About page
 */
export function SoftSkillsSection(): React.ReactElement {
  return (
    <div className="mb-24 animate-fadeInUp">
      <div className="text-center mb-12">
        <h2 className="text-3xl mb-6 font-bold">Soft Skills</h2>
        <p className="text-gray-400 max-w-3xl mx-auto font-normal leading-relaxed">
          These are the interpersonal and professional skills that help me work
          effectively and deliver quality results.
        </p>
      </div>
      <FeatureCard
        variant="elevated"
        hover={false}
        className="animate-fadeInUp"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {softSkills.map((skill, index) => (
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
