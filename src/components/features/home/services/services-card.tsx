import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { FeatureCard, IconWrapper } from "@/components/common";

interface ServiceCardProps {
  service: (typeof services)[0];
  index: number;
  serviceT: (key: string) => string;
  seeMore: string;
}

const ServiceCard = ({
  service,
  index,
  serviceT,
  seeMore,
}: ServiceCardProps): React.ReactElement => {
  return (
    <FeatureCard
      variant="default"
      hover
      className="hover:scale-105 flex flex-col h-full"
      animationIndex={index}
      animationClassName="h-full"
    >
      <div className="mb-6 mx-auto flex-shrink-0">
        <IconWrapper icon={service.icon} size="lg" />
      </div>
      <h3 className="text-lg md:text-xl mb-4 text-center font-semibold flex-shrink-0">
        {serviceT(service.title)}
      </h3>
      <p className="text-sm md:text-base text-gray-400 text-center mb-6 flex-grow font-normal leading-relaxed">
        {serviceT(service.description)}
      </p>
      <div className="flex justify-center mt-auto flex-shrink-0">
        <Link
          href={`/services#${service.serviceId}`}
          className="inline-flex items-center text-sm md:text-base text-teal-500 hover:text-teal-600 transition-colors cursor-pointer font-medium"
        >
          {seeMore}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </FeatureCard>
  );
};

export { ServiceCard };
