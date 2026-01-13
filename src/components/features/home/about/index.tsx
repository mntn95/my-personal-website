import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/common";
import { SectionLayout } from "@/components/layouts/section-layout";
import { SkillsGrid } from "./skills-grid";
import { CTAButton } from "./cta-button";

/**
 * About section component for homepage
 * Displays skills with progress bars and CTA to full about page
 * Used in the homepage
 */
const About = (): React.ReactElement => {
  const t = useTranslations("HomePage.about");

  return (
    <SectionLayout id="about" background="darker">
      <div className="container mx-auto px-4">
        <SectionHeader title={t("title")} description={t("description")} />
        <SkillsGrid />
        <CTAButton />
      </div>
    </SectionLayout>
  );
};

export { About };
