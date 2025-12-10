import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { FeatureCard, IconWrapper, SectionHeader } from "@/components/common";
import { SectionLayout } from "@/components/layouts/section-layout";
import { getAnimationDelay } from "@/lib/utils";

export function Skills(): React.ReactElement {
  return (
    <SectionLayout id="skills" background="dark">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Services"
          description="From product development to ongoing support, I offer comprehensive solutions tailored to your business needs."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FeatureCard
              key={index}
              variant="default"
              hover
              className="animate-fadeInUp flex flex-col"
              style={getAnimationDelay(index)}
            >
              <div className="mb-6 mx-auto">
                <IconWrapper icon={service.icon} size="lg" />
              </div>
              <h3 className="text-xl mb-4 text-center font-semibold">
                {service.title}
              </h3>
              <p className="text-gray-400 text-center mb-6 flex-grow font-normal leading-relaxed">
                {service.description}
              </p>
              <div className="flex justify-center">
                <Link
                  href={`/services#${service.serviceId}`}
                  className="inline-flex items-center text-teal-500 hover:text-teal-600 transition-colors cursor-pointer font-medium"
                >
                  See more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
