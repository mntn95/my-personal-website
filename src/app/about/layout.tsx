import { Metadata } from "next";

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
    "about me",
    "about mathieu nguyen",
    "mathieu nguyen about",
    "mathieu nguyen about me",
    "mathieu nguyen about page",
    "mathieu nguyen about section",
    "mathieu nguyen about section page",
    "mathieu nguyen about section page",
    "mathieu nguyen about section page",
  ],
  openGraph: {
    title: "About Me - Mathieu Nguyen | Front-End Developer",
    description:
      "Learn about my journey as a Front-End Developer with expertise in React, Next.js, and modern web technologies.",
    type: "profile",
  },
};

const AboutLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => <>{children}</>;

export default AboutLayout;
