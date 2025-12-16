"use client";

import { ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { fadeInUp } from "@/lib/motion/variants";
import { getMotionFixedDelay } from "@/lib/motion/utils";

/**
 * CTA button component for Projects section
 * Links to the full projects page
 * Used in the Projects component
 */
const CTAButton = (): React.ReactElement => {
  const t = useTranslations("HomePage.projects");

  return (
    <motion.div
      className="mt-12 text-center"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={fadeInUp}
      transition={getMotionFixedDelay(0.4)}
    >
      <Link
        href="/projects"
        className="inline-flex items-center px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all hover:scale-105 cursor-pointer font-medium"
      >
        {t("viewAllProjects")}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </motion.div>
  );
};

export { CTAButton };
