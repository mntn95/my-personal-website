"use client";

import { useTranslations } from "next-intl";
import { FeatureCard, IconWrapper } from "@/components/common";
import type { DetailedService } from "@/types";
import { getAnimationDelay } from "@/lib/utils";
import { DescriptionSection } from "./description-section";
import { ApproachSection } from "./approach-section";
import { TechnologiesSection } from "./technologies-section";
import { ExamplesSection } from "./examples-section";
import { CTAButton } from "./cta-button";

interface ServiceCardProps {
  service: DetailedService;
  index: number;
}

/**
 * Service card component displaying detailed service information
 * Shows icon, title, subtitle, description, approach/what's included, technologies, and examples
 * Used in the Services page
 */
const ServiceCard = ({
  service,
  index,
}: ServiceCardProps): React.ReactElement => {
  const t = useTranslations(`ServicesPage.services.${service.id}`);

  const translatedService: DetailedService = {
    ...service,
    title: t(service.title),
    subtitle: t(service.subtitle),
    description: service.description.map((key) => t(key)),
    approach: service.approach?.map((key) => t(key)),
    whatIncluded: service.whatIncluded?.map((key) => t(key)),
    examples: service.examples.map((key) => t(key)),
  };

  return (
    <FeatureCard
      key={index}
      variant="default"
      hover
      className="p-4 sm:p-8 animate-fadeInUp flex flex-col hover:bg-card-hover"
      style={
        {
          ...getAnimationDelay(index),
          scrollMarginTop: "100px",
        } as React.CSSProperties
      }
    >
      <div
        id={service.serviceId || service.id}
        className="flex flex-col lg:flex-row lg:items-start"
      >
        <div className="mb-4 lg:mb-0 lg:mr-4 flex-shrink-0 self-center lg:self-auto">
          <IconWrapper icon={service.icon} size="lg" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl mb-2 text-white text-center lg:text-left font-semibold">
            {translatedService.title}
          </h3>
          <p className="text-gray-300 mb-6 text-center lg:text-left text-base font-medium">
            {translatedService.subtitle}
          </p>

          <DescriptionSection description={translatedService.description} />
          <ApproachSection
            approach={translatedService.approach}
            whatIncluded={translatedService.whatIncluded}
          />
          <TechnologiesSection technologies={translatedService.technologies} />
          <ExamplesSection examples={translatedService.examples} />
        </div>
      </div>

      <CTAButton />
    </FeatureCard>
  );
};

export { ServiceCard };
