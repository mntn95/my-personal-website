"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { services } from "@/data/services";
import { FeatureCard, IconWrapper } from "@/components/common";
import { getAnimationDelay } from "@/lib/utils";

interface ServiceCardProps {
  service: (typeof services)[0];
  index: number;
  serviceT: ReturnType<typeof useTranslations>;
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
      key={index}
      variant="default"
      hover
      className="hover:scale-105 animate-fadeInUp flex flex-col"
      style={getAnimationDelay(index)}
    >
      <div className="mb-6 mx-auto">
        <IconWrapper icon={service.icon} size="lg" />
      </div>
      <h3 className="text-xl mb-4 text-center font-semibold">
        {serviceT(service.title)}
      </h3>
      <p className="text-gray-400 text-center mb-6 flex-grow font-normal leading-relaxed">
        {serviceT(service.description)}
      </p>
      <div className="flex justify-center">
        <Link
          href={`/services#${service.serviceId}`}
          className="inline-flex items-center text-teal-500 hover:text-teal-600 transition-colors cursor-pointer font-medium"
        >
          {seeMore}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </FeatureCard>
  );
};

export { ServiceCard };
