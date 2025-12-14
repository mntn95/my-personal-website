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

/**
 * Page layout component with header, hash scroll handling, and scroll wrapper
 * Provides consistent page structure with translations support
 *
 * @async
 * @param translationsKey - Translation key for page header (badge, title, description)
 * @param children - Page content to render
 * @returns Promise resolving to React element
 */
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
