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
  ],
  openGraph: {
    title: "Services - Mathieu Nguyen | Front-End Development Services",
    description:
      "Professional front-end development services: custom websites, team collaboration, and maintenance support.",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <>{children}</>;
}
