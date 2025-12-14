import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education - Mathieu Nguyen | Front-End Developer",
  description:
    "Explore the educational background and professional training that shaped Mathieu Nguyen's journey as a front-end developer. 700-hour intensive program in modern web development.",
  keywords: [
    "web development education",
    "react training",
    "javascript certification",
    "professional web developer",
    "o'clock",
    "mathieu nguyen education",
    "mathieu nguyen education page",
    "mathieu nguyen education section",
    "mathieu nguyen education section page",
    "mathieu nguyen education section page",
  ],
  openGraph: {
    title: "Education - Mathieu Nguyen | Front-End Developer",
    description:
      "Explore the educational background and professional training that shaped my journey as a front-end developer.",
    type: "profile",
  },
};

const EducationLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => <>{children}</>;

export default EducationLayout;
