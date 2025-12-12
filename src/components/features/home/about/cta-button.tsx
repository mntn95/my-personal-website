"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getFixedAnimationDelay } from "@/lib/utils";

/**
 * CTA button component for About section
 * Links to the full about page
 * Used in the About component
 */
const CTAButton = (): React.ReactElement => {
  const t = useTranslations("HomePage.about");

  return (
    <div
      className="text-center animate-fadeInUp"
      style={getFixedAnimationDelay(0.6)}
    >
      <Link
        href="/about"
        className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all hover:scale-105 cursor-pointer font-medium"
      >
        {t("moreAboutMe")}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
};

export { CTAButton };
