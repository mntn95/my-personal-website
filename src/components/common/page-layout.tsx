import { getTranslations } from "next-intl/server";
import {
  HashScrollHandler,
  PageHeader,
  ScrollWrapper,
} from "@/components/common";

interface PageLayoutProps {
  translationsKey: string;
  children: React.ReactNode;
}

const PageLayout = async ({
  translationsKey,
  children,
}: PageLayoutProps): Promise<React.ReactElement> => {
  const t = await getTranslations(translationsKey);

  return (
    <div className="min-h-screen relative z-10">
      <HashScrollHandler />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <PageHeader
            badge={t("badge")}
            title={t("title")}
            description={t("description")}
          />

          <ScrollWrapper>{children}</ScrollWrapper>
        </div>
      </div>
    </div>
  );
};

export { PageLayout };
