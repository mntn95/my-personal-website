import { Handshake, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { FeatureCard, IconWrapper, SectionHeader } from "@/components/common";
import { SectionLayout } from "@/components/layouts/section-layout";
import { Button } from "@/components/ui/button";

/**
 * Contact section component for the home page
 * Displays a call-to-action card with link to contact page
 * Used in the Home page
 *
 * @async
 * @returns Promise resolving to React element
 */
const Contact = async (): Promise<React.ReactElement> => {
  const t = await getTranslations("HomePage.contact");

  return (
    <SectionLayout id="contact" background="dark">
      <div className="container mx-auto px-4">
        <FeatureCard
          variant="default"
          hover={false}
          className="p-12 max-w-4xl mx-auto text-center hover:border-teal-500/50 hover:scale-105 transition-all"
        >
          <div className="mb-6 mx-auto">
            <IconWrapper icon={Handshake} size="lg" isCentered />
          </div>

          <SectionHeader
            title={t("title")}
            description={t("description")}
            titleClassName="text-2xl md:text-3xl mb-4"
            descriptionClassName="max-w-xl"
            className="mb-8"
          />

          <Button
            asChild
            variant="primary"
            icon={ArrowRight}
            iconPosition="right"
          >
            <Link href="/contact">{t("getInTouch")}</Link>
          </Button>
        </FeatureCard>
      </div>
    </SectionLayout>
  );
};

export { Contact };
