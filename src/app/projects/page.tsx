"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { projects } from "@/data/projects";
import { PageLayout } from "@/components/common";
import { FilterBar, ProjectsGrid } from "@/components/features/projects";

type TagFilter =
  | "all"
  | "react"
  | "next"
  | "tailwind"
  | "typescript"
  | "bootstrap"
  | "jest"
  | "cypress"
  | "graphql"
  | "scss"
  | "redux";

const Projects = (): React.ReactElement => {
  const t = useTranslations("ProjectsPage");
  const [selectedTag, setSelectedTag] = useState<TagFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const tGlobal = useTranslations();
  const projectsWithTranslations = projects.map((project) => ({
    ...project,
    description: project.description.startsWith("ProjectsPage.")
      ? tGlobal(project.description)
      : t(`descriptions.${project.id}`),
  }));

  const filteredProjects = projectsWithTranslations.filter((project) => {
    const matchesTag =
      selectedTag === "all" ||
      project.tags.some(
        (tag) => tag.toLowerCase() === selectedTag.toLowerCase()
      );
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesTag && matchesSearch;
  });

  return (
    <PageLayout translationsKey="ProjectsPage">
      <FilterBar
        selectedTag={selectedTag}
        onTagChange={setSelectedTag}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <ProjectsGrid projects={filteredProjects} />
    </PageLayout>
  );
};

export default Projects;
