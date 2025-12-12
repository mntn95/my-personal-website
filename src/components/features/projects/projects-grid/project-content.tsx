import { Badge } from "@/components/ui";
import type { Project } from "@/types";

interface ProjectContentProps {
  project: Project;
}

/**
 * Project content component
 * Displays project title, description, and tags
 * Used in the ProjectCard component
 */
const ProjectContent = ({
  project,
}: ProjectContentProps): React.ReactElement => (
  <div className="p-6 flex-grow flex flex-col">
    <h3 className="text-xl mb-2 text-white group-hover:text-teal-500 transition-colors delay-100 font-semibold">
      {project.title}
    </h3>
    <p className="text-gray-400 mb-4 flex-grow text-sm">
      {project.description}
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-2">
      {project.tags.map((tag, index) => (
        <Badge key={index} variant="default" size="sm">
          {tag}
        </Badge>
      ))}
    </div>
  </div>
);

export { ProjectContent };
