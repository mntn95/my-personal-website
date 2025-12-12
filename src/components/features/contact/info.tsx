"use client";

import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import { FeatureCard } from "@/components/common";
import { ContactInfoCard, SocialLink } from "@/components/ui";

/**
 * Contact information section component
 * Displays email, location, social media links, and response time
 * Used in the Contact page
 */
const ContactInfo = (): React.ReactElement => {
  const t = useTranslations("ContactPage.info");

  return (
    <div className="space-y-6">
      <FeatureCard variant="elevated" hover>
        <h2 className="text-xl mb-4 text-teal-500 font-semibold">
          {t("contactInformation")}
        </h2>

        <div className="space-y-4 mb-6">
          {/* Email */}
          <ContactInfoCard
            icon={Mail}
            title={t("email")}
            value="mathieu.nguyen@proton.me"
            href="mailto:mathieu.nguyen@proton.me"
          />

          {/* Location */}
          <ContactInfoCard
            icon={MapPin}
            title={t("location")}
            value="Paris, France"
            href="https://maps.google.com/?q=Paris"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>

        {/* Social Media */}
        <div>
          <h3 className="mb-3 text-teal-500 font-medium">{t("socialMedia")}</h3>
          <div className="flex gap-3">
            <SocialLink
              href="https://github.com/mntn95/"
              icon={Github}
              label="GitHub"
              variant="square"
              size="md"
            />
            <SocialLink
              href="https://www.linkedin.com/in/mathieu-ng/"
              icon={Linkedin}
              label="LinkedIn"
              variant="square"
              size="md"
            />
          </div>
        </div>
      </FeatureCard>

      {/* Response Time */}
      <FeatureCard variant="elevated" hover className="p-4">
        <h3 className="mb-2 text-teal-500 font-medium">{t("responseTime")}</h3>
        <p className="text-sm text-gray-400">{t("responseTimeDescription")}</p>
      </FeatureCard>
    </div>
  );
};

export { ContactInfo };
