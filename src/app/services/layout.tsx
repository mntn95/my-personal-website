import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Mathieu Nguyen | Front-End Development Services",
  description:
    "Professional front-end development services including custom website creation, team collaboration, and ongoing maintenance & support. Quality web solutions tailored to your needs.",
  keywords: [
    "web development services",
    "custom website creation",
    "front-end collaboration",
    "website maintenance",
    "react development services",
    "freelance developer",
    "mathieu nguyen services",
    "mathieu nguyen services page",
    "mathieu nguyen services section",
    "mathieu nguyen services section page",
    "mathieu nguyen services section page",
  ],
  openGraph: {
    title: "Services - Mathieu Nguyen | Front-End Development Services",
    description:
      "Professional front-end development services: custom websites, team collaboration, and maintenance support.",
    type: "website",
  },
};

const ServicesLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => <>{children}</>;

export default ServicesLayout;
