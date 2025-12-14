import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Mathieu Nguyen | Portfolio & Web Development Projects",
  description:
    "Explore my portfolio of web development projects built with React, Next.js, TypeScript, and modern web technologies. See examples of responsive websites, web applications, and more.",
  keywords: [
    "web development portfolio",
    "react projects",
    "nextjs projects",
    "typescript projects",
    "web applications",
    "portfolio",
    "mathieu nguyen projects",
    "mathieu nguyen projects page",
    "mathieu nguyen projects section",
    "mathieu nguyen projects section page",
    "mathieu nguyen projects section page",
  ],
  openGraph: {
    title: "Projects - Mathieu Nguyen | Portfolio",
    description:
      "Explore my portfolio of web development projects built with modern technologies.",
    type: "website",
  },
};

const ProjectsLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => <>{children}</>;

export default ProjectsLayout;
