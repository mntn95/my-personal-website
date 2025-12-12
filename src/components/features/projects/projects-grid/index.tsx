import { EmptyState } from "@/components/ui";
import type { Project } from "@/types";
import { ProjectCard } from "./project-card";

interface ProjectsGridProps {
	projects: Project[];
}

/**
 * Projects grid component displaying filtered projects
 * Shows project cards with image, title, description, and tags
 * Used in the Projects page
 */
const ProjectsGrid = ({
	projects,
}: ProjectsGridProps): React.ReactElement => {
	if (projects.length === 0) {
		return (
			<EmptyState description="No projects found matching your criteria." />
		);
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{projects.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	);
};

export { ProjectsGrid };

