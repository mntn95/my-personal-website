"use client";

import { Filter, Search } from "lucide-react";
import { FeatureCard } from "@/components/common";
import { Badge, Input } from "@/components/ui";

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

const tagFilters = [
  { id: "all", label: "All" },
  { id: "react", label: "React" },
  { id: "next", label: "Next" },
  { id: "redux", label: "Redux" },
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "typescript", label: "Typescript" },
  { id: "bootstrap", label: "Bootstrap" },
  { id: "jest", label: "Jest" },
  { id: "cypress", label: "Cypress" },
  { id: "graphql", label: "GraphQL" },
  { id: "scss", label: "SCSS" },
];

interface FilterBarProps {
  selectedTag: TagFilter;
  onTagChange: (tag: TagFilter) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

/**
 * Filter bar component for projects page
 * Displays tag filters and search input
 * Used in the Projects page
 */
export function FilterBar({
  selectedTag,
  onTagChange,
  searchQuery,
  onSearchChange,
}: FilterBarProps): React.ReactElement {
  return (
    <div className="mb-12 animate-fadeInUp">
      <FeatureCard variant="elevated" hover={false}>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex flex-col lg:flex-row items-start md:items-center w-full :w-auto gap-3 md:gap-0">
            <div className="flex items-center">
              <Filter className="mr-2 h-5 w-5 text-gray-400" />
              <span className="mr-4 text-white font-medium text-sm">
                Filter:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {tagFilters.map((tagFilter) => (
                <Badge
                  key={tagFilter.id}
                  onClick={() => onTagChange(tagFilter.id as TagFilter)}
                  variant="default"
                  size="sm"
                  interactive
                  active={selectedTag === tagFilter.id}
                >
                  {tagFilter.label}
                </Badge>
              ))}
            </div>
          </div>
          <div className="w-full md:w-64">
            <Input
              icon={Search}
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="py-2"
            />
          </div>
        </div>
      </FeatureCard>
    </div>
  );
}
