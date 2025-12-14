import { getTranslations } from "next-intl/server";
import { PageHeader, ScrollTriggeredAnimation } from "@/components/common";
import {
  ProfileSection,
  HardSkillsSection,
  SoftSkillsSection,
  MoreAboutMeSection,
} from "@/components/features/about";

const AboutPage = async (): Promise<React.ReactElement> => {
  const t = await getTranslations("AboutPage");

  return (
    <div className="min-h-screen relative z-10">
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <PageHeader
            badge={t("badge")}
            title={t("title")}
            description={t("description")}
          />
          <ScrollTriggeredAnimation>
            <ProfileSection />
            <HardSkillsSection />
            <SoftSkillsSection />
            <MoreAboutMeSection />
          </ScrollTriggeredAnimation>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
