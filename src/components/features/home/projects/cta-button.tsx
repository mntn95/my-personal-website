"use client";

import { ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { fadeInUp } from "@/lib/motion/variants";
import { getMotionFixedDelay } from "@/lib/motion/utils";
import { Button } from "@/components/ui/button";

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
      <Button asChild variant="primary" icon={ArrowRight} iconPosition="right">
        <Link href="/projects">{t("viewAllProjects")}</Link>
      </Button>
    </motion.div>
  );
};

export { CTAButton };
