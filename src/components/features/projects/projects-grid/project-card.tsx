import { FeatureCard, ImageWithFallback } from "@/components/common";
import type { Project } from "@/types";
import { getAnimationDelay } from "@/lib/utils";
import { ProjectContent } from "./project-content";

interface ProjectCardProps {
  project: Project;
}

/**
 * Project card component
 * Displays a single project with image, title, description, and tags
 * Used in the ProjectsGrid component
 */
const ProjectCard = ({ project }: ProjectCardProps): React.ReactElement => {
  return (
    <FeatureCard
      key={project.id}
      variant="default"
      hover
      className="group overflow-hidden flex flex-col p-0 animate-fadeInUp hover:transform hover:scale-[1.02] duration-300"
      style={getAnimationDelay(project.id)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="object-cover transition-transform duration-700 hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <ProjectContent project={project} />
    </FeatureCard>
  );
};

export { ProjectCard };
