"use client";

import { useEffect } from "react";
import { PageHeader } from "@/components/common";
import { ServicesList } from "@/components/features/services";

export default function Services(): React.ReactElement {
  // Handle scroll to anchor on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Remove the # from the hash
      const id = hash.substring(1);
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen relative z-10">
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <PageHeader
            badge="Services"
            title="What I Offer"
            description="Looking for a reliable front-end developer to bring your project to life? I deliver quality web solutions tailored to your needs, whether it's a brand-new website, team collaboration, or ongoing maintenance. Let's work together to achieve your goals."
          />

          <div className="space-y-8">
            <ServicesList />
          </div>
        </div>
      </div>
    </div>
  );
}
