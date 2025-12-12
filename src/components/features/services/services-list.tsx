import { ServiceCard } from "./service-card";
import { detailedServices } from "@/data/services-detail";

/**
 * Services list component displaying all service cards
 * Maps over detailed services and renders ServiceCard components
 * Used in the Services page
 */
const ServicesList = (): React.ReactElement => (
  <div className="space-y-6 mb-12">
    {detailedServices.map((service, index) => (
      <ServiceCard key={index} service={service} index={index} />
    ))}
  </div>
);

export { ServicesList };
