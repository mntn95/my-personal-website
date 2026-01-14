import { getTranslations } from "next-intl/server";
import { FeatureCard, IconWrapper } from "@/components/common";
import type { DetailedService } from "@/types";
import { DescriptionSection } from "./description-section";
import { CollapsibleServiceCard } from "./collapsible-service-card";
import { CTAButton } from "./cta-button";

interface ServiceCardProps {
  service: DetailedService;
  index: number;
}

/**
 * Service card component displaying detailed service information
 * Shows icon, title, subtitle, description, approach/what's included, technologies, and examples
 * Used in the Services page
 *
 * @async
 * @param service - Detailed service data to display
 * @param index - Index of the service card for animation sequencing
 * @returns Promise resolving to React element
 */
const ServiceCard = async ({
  service,
  index,
}: ServiceCardProps): Promise<React.ReactElement> => {
  const t = await getTranslations(`ServicesPage.services.${service.id}`);

  const translatedService: DetailedService = {
    ...service,
    title: t(service.title),
    subtitle: t(service.subtitle),
    description: service.description.map((key) => t(key)),
    approach: service.approach?.map((key) => t(key)),
    whatIncluded: service.whatIncluded?.map((key) => t(key)),
    technologies: service.technologies?.map((key) => t(key)),
    examples: service.examples.map((key) => t(key)),
  };

  return (
    <FeatureCard
      id={service.serviceId || service.id}
      variant="default"
      hover
      className="p-4 sm:p-8 flex flex-col hover:bg-card-hover"
      animationIndex={index}
    >
      <div className="flex flex-col lg:flex-row lg:items-start">
        <div className="mb-4 lg:mb-0 lg:mr-4 flex-shrink-0 self-center lg:self-auto">
          <IconWrapper icon={service.icon} size="lg" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg md:text-xl mb-2 text-white text-center lg:text-left font-semibold">
            {translatedService.title}
          </h3>
          <p className="text-gray-300 mb-6 text-center lg:text-left text-sm md:text-md font-medium">
            {translatedService.subtitle}
          </p>

          <DescriptionSection description={translatedService.description} />
          <CollapsibleServiceCard
            approach={translatedService.approach}
            whatIncluded={translatedService.whatIncluded}
            technologies={translatedService.technologies}
            examples={translatedService.examples}
          />
        </div>
      </div>

      <CTAButton />
    </FeatureCard>
  );
};

export { ServiceCard };
