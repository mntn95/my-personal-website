import { skills } from "@/data/skills";
import { getAnimationDelay } from "@/lib/utils";

/**
 * Skills grid component
 * Displays skills in a responsive grid layout
 * Used in the Hero component
 */
export function SkillsGrid(): React.ReactElement {
  return (
    <div className="relative hidden lg:block animate-fadeInRight">
      <div className="relative w-full h-[500px] rounded-lg overflow-hidden bg-card-bg border border-card-border p-6 shadow-xl shadow-teal-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent"></div>

        <div className="relative h-full w-full grid grid-cols-6 grid-rows-6 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-card-bg border border-card-border p-6 flex flex-col justify-center rounded-lg hover:bg-card-hover hover:border-teal-500/50 transition-all hover:scale-105 ${skill.span}`}
              style={getAnimationDelay(index)}
            >
              <div className="flex items-center mb-2">
                <skill.icon className="w-5 h-5 mr-2 text-teal-500" />
                <h3 style={{ fontWeight: 600 }}>{skill.name}</h3>
              </div>
              <p className="text-sm text-gray-400" style={{ fontWeight: 400 }}>
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
