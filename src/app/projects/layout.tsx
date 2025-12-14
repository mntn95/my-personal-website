import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("ProjectsPage.metadata");

  return {
    title: t("title"),
    description: t("description"),
    keywords: t.raw("keywords") as string[],
    openGraph: {
      title: t("openGraph.title"),
      description: t("openGraph.description"),
      type: "website",
      locale: locale,
    },
    alternates: {
      canonical: "/projects",
      languages: {
        en: "/projects",
        fr: "/projects",
      },
    },
  };
}

const ProjectsLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => <>{children}</>;

export default ProjectsLayout;
