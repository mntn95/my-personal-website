import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("AboutPage.metadata");

  return {
    title: t("title"),
    description: t("description"),
    keywords: t.raw("keywords") as string[],
    openGraph: {
      title: t("openGraph.title"),
      description: t("openGraph.description"),
      type: "profile",
      locale: locale,
    },
    alternates: {
      canonical: "/about",
      languages: {
        en: "/about",
        fr: "/about",
      },
    },
  };
}

const AboutLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => <>{children}</>;

export default AboutLayout;
