import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/common";
import {
  ProfileSection,
  HardSkillsSection,
  SoftSkillsSection,
  MoreAboutMeSection,
} from "@/components/features/about";

export const metadata: Metadata = {
  title: "About Me - Mathieu Nguyen | Front-End Developer",
  description:
    "Learn about Mathieu Nguyen, a Freelance Front-End Developer with 7 years of experience in React, Next.js, and TypeScript. Discover my skills, experience, and what drives my passion for web development.",
  keywords: [
    "front-end developer",
    "react developer",
    "nextjs developer",
    "typescript",
    "web developer",
    "freelance developer",
    "mathieu nguyen",
  ],
  openGraph: {
    title: "About Me - Mathieu Nguyen | Front-End Developer",
    description:
      "Learn about my journey as a Front-End Developer with expertise in React, Next.js, and modern web technologies.",
    type: "profile",
  },
};

export default async function AboutPage(): Promise<React.ReactElement> {
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

          <ProfileSection />
          <HardSkillsSection />
          <SoftSkillsSection />
          <MoreAboutMeSection />
        </div>
      </div>
    </div>
  );
}
