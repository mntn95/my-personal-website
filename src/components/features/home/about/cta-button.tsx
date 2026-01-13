import { ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { fadeInUp } from "@/lib/motion/variants";
import { getMotionFixedDelay } from "@/lib/motion/utils";
import { Button } from "@/components/ui/button";

/**
 * CTA button component for About section
 * Links to the full about page
 * Used in the About component
 *
 * @async
 * @returns Promise resolving to React element
 */
const CTAButton = async (): Promise<React.ReactElement> => {
  const t = await getTranslations("HomePage.about");

  return (
    <motion.div
      className="text-center mt-24"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={fadeInUp}
      transition={getMotionFixedDelay(0.6)}
    >
      <Button asChild variant="primary" icon={ArrowRight} iconPosition="right">
        <Link href="/about">{t("moreAboutMe")}</Link>
      </Button>
    </motion.div>
  );
};

export { CTAButton };
