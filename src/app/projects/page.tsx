"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { PageHeader } from "@/components/common";
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

export default function Projects(): React.ReactElement {
  const [selectedTag, setSelectedTag] = useState<TagFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
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
    <div className="min-h-screen relative z-10">
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <PageHeader
            badge="Projects"
            title="My Projects"
            description="Explore a selection of my recent web development projects."
          />

          <FilterBar
            selectedTag={selectedTag}
            onTagChange={setSelectedTag}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <ProjectsGrid projects={filteredProjects} />
        </div>
      </div>
    </div>
  );
}
