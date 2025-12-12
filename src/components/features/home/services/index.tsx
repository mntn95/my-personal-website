"use client";

import { useTranslations } from "next-intl";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/common";
import { SectionLayout } from "@/components/layouts/section-layout";
import { ServiceCard } from "./services-card";

interface ServiceCardWrapperProps {
  service: (typeof services)[0];
  index: number;
  seeMore: string;
}

const ServiceCardWrapper = ({
  service,
  index,
  seeMore,
}: ServiceCardWrapperProps): React.ReactElement => {
  const serviceT = useTranslations(`ServicesPage.services.${service.id}`);

  return (
    <ServiceCard
      key={index}
      service={service}
      index={index}
      serviceT={serviceT}
      seeMore={seeMore}
    />
  );
};

const Services = (): React.ReactElement => {
  const t = useTranslations("HomePage.services");

  return (
    <SectionLayout id="skills" background="dark">
      <div className="container mx-auto px-4">
        <SectionHeader title={t("title")} description={t("description")} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCardWrapper
              key={index}
              service={service}
              index={index}
              seeMore={t("seeMore")}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export { Services };
