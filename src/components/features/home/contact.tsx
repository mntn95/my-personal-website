import * as motion from "motion/react-client";
import { Handshake, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { FeatureCard, IconWrapper } from "@/components/common";
import { SectionLayout } from "@/components/layouts/section-layout";
import { fadeInUp } from "@/lib/motion/variants";

const Contact = async (): Promise<React.ReactElement> => {
  const t = await getTranslations("HomePage.contact");

  return (
    <SectionLayout id="contact" background="dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={fadeInUp}
        >
          <FeatureCard
            variant="default"
            hover={false}
            className="p-12 max-w-4xl mx-auto text-center hover:border-teal-500/50 hover:scale-105 transition-all"
          >
            <div className="mb-6 mx-auto">
              <IconWrapper icon={Handshake} size="lg" isCentered />
            </div>

            <h2 className="text-3xl mb-4 font-bold">{t("title")}</h2>

            <p className="text-gray-400 mb-8 max-w-xl mx-auto font-normal leading-relaxed">
              {t("description")}
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all hover:scale-105 cursor-pointer font-medium"
            >
              {t("getInTouch")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </FeatureCard>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export { Contact };
