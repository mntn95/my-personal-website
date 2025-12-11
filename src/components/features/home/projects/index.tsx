"use client";

import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/common";
import { SectionLayout } from "@/components/layouts/section-layout";
import { ProjectsGrid } from "./projects-grid";
import { CTAButton } from "./cta-button";

/**
 * Projects section component for homepage
 * Displays featured projects and CTA to full projects page
 * Used in the homepage
 */
export function Projects(): React.ReactElement {
  const t = useTranslations("HomePage.projects");

  return (
    <SectionLayout id="projects" background="darker">
      <div className="container mx-auto px-4">
        <SectionHeader title={t("title")} description={t("description")} />

        <ProjectsGrid />
        <CTAButton />
      </div>
    </SectionLayout>
  );
}
