"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { projects } from "@/data/projects";
import { Project, type TagFilter } from "@/types";

interface FilteredProjectsWrapperProps {
  children: (props: FilteredProjectsWrapperPropsReturn) => React.ReactNode;
}

interface FilteredProjectsWrapperPropsReturn {
  filteredProjects: Project[];
  selectedTag: TagFilter;
  searchQuery: string;
  setSelectedTag: (tag: TagFilter) => void;
  setSearchQuery: (query: string) => void;
}

const FilteredProjectsWrapper = ({
  children,
}: FilteredProjectsWrapperProps): React.ReactNode => {
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

  return children({
    filteredProjects,
    selectedTag,
    searchQuery,
    setSelectedTag,
    setSearchQuery,
  });
};

export default FilteredProjectsWrapper;
