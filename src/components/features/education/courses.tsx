import { BookOpen } from "lucide-react";
import * as motion from "motion/react-client";
import { getTranslations } from "next-intl/server";
import { FeatureCard, IconWrapper } from "@/components/common";
import { courses } from "@/data/education";
import { fadeInUp } from "@/lib/motion/variants";
import { getMotionDelay } from "@/lib/motion/utils";

/**
 * Key courses section component
 * Displays a grid of courses completed during education
 * Used in the Education page
 */
const Courses = async (): Promise<React.ReactElement> => {
  const t = await getTranslations();

  return (
    <motion.div
      className="mb-24"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={fadeInUp}
    >
      <h2 className="mb-12 text-center text-white text-3xl font-bold">
        {t("EducationPage.courses.title")}
      </h2>
      <FeatureCard variant="default" hover className="p-10 hover:bg-card-hover">
        <div className="flex items-center justify-center mb-8">
          <IconWrapper icon={BookOpen} size="lg" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((key, index) => (
            <motion.div
              key={index}
              className="flex items-center p-4 bg-dark-bg-alt/50 rounded-lg"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              variants={fadeInUp}
              transition={getMotionDelay(index, 0.05)}
            >
              <div className="h-2 w-2 rounded-full bg-brand-primary mr-3"></div>
              <span className="text-gray-300">{t(key)}</span>
            </motion.div>
          ))}
        </div>
      </FeatureCard>
    </motion.div>
  );
};

export { Courses };
