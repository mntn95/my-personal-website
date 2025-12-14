"use client";

import { Filter, Search } from "lucide-react";
import { useTranslations } from "next-intl";
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
  { id: "all", labelKey: "All" },
  { id: "react", labelKey: "React" },
  { id: "next", labelKey: "Next" },
  { id: "redux", labelKey: "Redux" },
  { id: "tailwind css", labelKey: "Tailwind" },
  { id: "typescript", labelKey: "Typescript" },
  { id: "bootstrap", labelKey: "Bootstrap" },
  { id: "jest", labelKey: "Jest" },
  { id: "cypress", labelKey: "Cypress" },
  { id: "graphql", labelKey: "GraphQL" },
  { id: "scss", labelKey: "SCSS" },
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
const FilterBar = ({
  selectedTag,
  onTagChange,
  searchQuery,
  onSearchChange,
}: FilterBarProps): React.ReactElement => {
  const t = useTranslations("ProjectsPage.filter");

  return (
    <div className="mb-12">
      <FeatureCard variant="elevated" hover={false}>
        <div className="flex flex-col xl:flex-row gap-6 items-center justify-between">
          <div className="flex flex-col xl:flex-row items-start xl:items-center w-full :w-auto gap-3 xl:gap-0">
            <div className="flex items-center">
              <Filter className="mr-2 h-5 w-5 text-gray-400" />
              <span className="mr-4 text-white font-medium text-sm">
                {t("label")}
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
                  {tagFilter.labelKey === "all" ? t("all") : tagFilter.labelKey}
                </Badge>
              ))}
            </div>
          </div>
          <div className="w-full xl:w-64">
            <Input
              icon={Search}
              type="text"
              placeholder={t("searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="py-2"
            />
          </div>
        </div>
      </FeatureCard>
    </div>
  );
};

export { FilterBar };
