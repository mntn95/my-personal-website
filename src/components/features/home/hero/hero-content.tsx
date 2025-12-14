import * as motion from "motion/react-client";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { fadeInUp } from "@/lib/motion/variants";
import { getMotionFixedDelay } from "@/lib/motion/utils";
import { TypingText } from "./typing-text";

/**
 * Hero content component
 * Displays title, typing text, description, and action buttons
 * Used in the Hero component
 */
const HeroContent = async (): Promise<React.ReactElement> => {
  const t = await getTranslations("HomePage.hero");

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
        className="text-base text-gray-400 mb-4 md:mb-8 max-w-lg leading-relaxed text-justify"
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
      </motion.div>
    </div>
  );
};

export { HeroContent };
