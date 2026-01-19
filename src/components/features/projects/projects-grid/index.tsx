"use client";

import { useTranslations } from "next-intl";
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
const ProjectsGrid = ({ projects }: ProjectsGridProps): React.ReactElement => {
  const t = useTranslations("ProjectsPage.filter");

  if (projects.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400 text-lg">{t("noResults")}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export { ProjectsGrid };
