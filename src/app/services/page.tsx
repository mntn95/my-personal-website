import { getTranslations } from "next-intl/server";
import {
  PageHeader,
  HashScrollHandler,
  ScrollTriggeredAnimation,
} from "@/components/common";
import { ServicesList } from "@/components/features/services";

const Services = async (): Promise<React.ReactElement> => {
  const t = await getTranslations("ServicesPage");

  return (
    <div className="min-h-screen relative z-10">
      <HashScrollHandler />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <PageHeader
            badge={t("badge")}
            title={t("title")}
            description={t("description")}
          />

          <ScrollTriggeredAnimation>
            <div className="space-y-8">
              <ServicesList />
            </div>
          </ScrollTriggeredAnimation>
        </div>
      </div>
    </div>
  );
};

export default Services;
