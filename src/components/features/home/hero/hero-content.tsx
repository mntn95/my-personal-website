import * as motion from "motion/react-client";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";
import { fadeInUp } from "@/lib/motion/variants";
import { getMotionFixedDelay } from "@/lib/motion/utils";
import { TypingText } from "./typing-text";
import { getResumeFilename } from "./helper";
import { Button } from "@/components/ui/button";

/**
 * Hero content component
 * Displays title, typing text, description, and action buttons
 * Used in the Hero component
 *
 * @async
 * @returns Promise resolving to React element
 */
const HeroContent = async (): Promise<React.ReactElement> => {
  const t = await getTranslations("HomePage.hero");
  const locale = await getLocale();
  const resumeFilename = getResumeFilename(locale as "fr" | "en");

  return (
    <div>
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-2 leading-tight"
        style={{ fontWeight: 800 }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={fadeInUp}
        transition={getMotionFixedDelay(0.1)}
      >
        <span className="block text-white">{t("greeting")} </span>
        <span className="text-teal-500">{t("name")}</span>
      </motion.h1>

      <TypingText />

      <motion.p
        className="text-sm md:text-base text-gray-400 mb-4 md:mb-8 max-w-lg leading-relaxed text-justify"
        style={{ fontWeight: 400 }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={fadeInUp}
        transition={getMotionFixedDelay(0.3)}
      >
        {t("description")}
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-4"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={fadeInUp}
        transition={getMotionFixedDelay(0.4)}
      >
        <Button
          asChild
          variant="primary"
          icon={ArrowRight}
          iconPosition="right"
        >
          <Link href="/contact">{t("getInTouch")}</Link>
        </Button>
        <Button
          asChild
          variant="secondary"
          icon={Download}
          iconPosition="right"
        >
          <a href={resumeFilename} download>
            {t("downloadResume")}
          </a>
        </Button>
      </motion.div>
    </div>
  );
};

export { HeroContent };
