import { ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { fadeInUp } from "@/lib/motion/variants";
import { getMotionFixedDelay } from "@/lib/motion/utils";

/**
 * CTA button component for About section
 * Links to the full about page
 * Used in the About component
 */
const CTAButton = async (): Promise<React.ReactElement> => {
  const t = await getTranslations("HomePage.about");

  return (
    <motion.div
      className="text-center"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={fadeInUp}
      transition={getMotionFixedDelay(0.6)}
    >
      <Link
        href="/about"
        className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all hover:scale-105 cursor-pointer font-medium"
      >
        {t("moreAboutMe")}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </motion.div>
  );
};

export { CTAButton };
