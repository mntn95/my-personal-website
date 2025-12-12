"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { PageHeader } from "@/components/common";
import { ServicesList } from "@/components/features/services";

const Services = (): React.ReactElement => {
  const t = useTranslations("ServicesPage");

  // Handle scroll to anchor on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    // Remove the # from the hash
    const id = hash.substring(1);
    // Small delay to ensure the page has rendered
    setTimeout(() => {
      const element = document.getElementById(id);
      if (!element) return;

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }, []);

  return (
    <div className="min-h-screen relative z-10">
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <PageHeader
            badge={t("badge")}
            title={t("title")}
            description={t("description")}
          />

          <div className="space-y-8">
            <ServicesList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
