import { Metadata } from "next";
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

export default function AboutPage(): React.ReactElement {
  return (
    <div className="min-h-screen relative z-10">
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <PageHeader
            badge="About Me"
            title="Know Who I Am"
            description="I turn ideas into interactive, user-friendly web applications. The divs below highlight my experience, technical skills, and the values that guide my work."
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
