"use client";

import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getFixedAnimationDelay } from "@/lib/utils";
import { TypingText } from "./typing-text";

/**
 * Hero content component
 * Displays title, typing text, description, and action buttons
 * Used in the Hero component
 */
export function HeroContent(): React.ReactElement {
  const t = useTranslations("HomePage.hero");

  return (
    <div>
      <h1
        className="text-5xl md:text-6xl font-bold mb-2 animate-fadeInUp leading-tight"
        style={{
          ...getFixedAnimationDelay(0.1),
          fontWeight: 800,
        }}
      >
        <span className="block text-white">{t("greeting")} </span>
        <span className="text-teal-500">{t("name")}</span>
      </h1>

      <TypingText />

      <p
        className="text-base text-gray-400 mb-8 max-w-lg animate-fadeInUp leading-relaxed"
        style={{
          ...getFixedAnimationDelay(0.3),
          fontWeight: 400,
        }}
      >
        {t("description")}
      </p>

      <div
        className="flex flex-wrap gap-4 animate-fadeInUp"
        style={getFixedAnimationDelay(0.4)}
      >
        <Link
          href="/contact"
          className="inline-flex items-center bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-all hover:scale-105 font-medium cursor-pointer"
        >
          {t("getInTouch")}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <a
          href="/cv-mathieu-nguyen.pdf"
          download
          className="inline-flex items-center bg-card-bg text-white px-6 py-3 rounded-lg hover:bg-card-hover hover:scale-105 transition-all font-medium cursor-pointer"
        >
          {t("downloadResume")}
          <Download className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
