import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Mathieu Nguyen | Get in Touch",
  description:
    "Get in touch with Mathieu Nguyen for web development projects, collaboration opportunities, or inquiries. Based in Paris, available for remote work worldwide.",
  keywords: [
    "contact front-end developer",
    "hire react developer",
    "freelance web developer contact",
    "paris web developer",
    "remote developer",
    "contact mathieu nguyen",
    "mathieu nguyen contact",
    "mathieu nguyen contact page",
    "mathieu nguyen contact section",
    "mathieu nguyen contact section page",
    "mathieu nguyen contact section page",
  ],
  openGraph: {
    title: "Contact - Mathieu Nguyen",
    description:
      "Get in touch for web development projects and collaboration opportunities.",
    type: "website",
  },
};

const ContactLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => <>{children}</>;

export default ContactLayout;
