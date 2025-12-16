"use client";

import FilteredProjectsWrapper from "@/components/features/home/projects/filtered-projects-wrapper";
import { FilterBar, ProjectsGrid } from "@/components/features/projects";
import { type TagFilter } from "@/types";

/**
 * Projects client wrapper component
 * Handles the render prop pattern for FilteredProjectsWrapper
 * Renders the filtered projects UI with FilterBar and ProjectsGrid
 * Used in the Projects page to separate client logic from server component
 */
const ProjectsClientContainer = (): React.ReactElement => (
  <FilteredProjectsWrapper>
    {({
      filteredProjects,
      selectedTag,
      searchQuery,
      setSelectedTag,
      setSearchQuery,
    }) => (
      <>
        <FilterBar
          selectedTag={selectedTag}
          onTagChange={(tag: TagFilter) => setSelectedTag(tag)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <ProjectsGrid projects={filteredProjects} />
      </>
    )}
  </FilteredProjectsWrapper>
);

export { ProjectsClientContainer };
