import * as motion from "motion/react-client";
import { getTranslations } from "next-intl/server";
import { ImageWithFallback } from "@/components/common";
import { fadeInLeft } from "@/lib/motion/variants";

/**
 * Profile section component displaying profile image and introduction text
 * Used in the About page
 */
const ProfileSection = async (): Promise<React.ReactElement> => {
  const t = await getTranslations("AboutPage.profile");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={fadeInLeft}
      >
        <div className="relative w-full h-120 rounded-lg overflow-hidden opacity-70">
          <ImageWithFallback
            src="/images/profile-pic.png"
            alt="Profile"
            className="w-full h-full object-contain rounded-full"
          />
        </div>
      </motion.div>

      <div className="flex flex-col justify-center">
        <h2 className="text-3xl mb-6 font-bold">{t("whoAmI")}</h2>
        <div className="space-y-4 text-gray-400 font-normal leading-relaxed text-justify">
          <p>
            {t("intro1")}{" "}
            <span className="text-teal-500 font-semibold">Mathieu Nguyen</span>.{" "}
            {t("intro2")}
          </p>
          <p>{t("intro3")}</p>
          <p>{t("intro4")}</p>
          <p>{t("intro5")}</p>
        </div>
      </div>
    </div>
  );
};

export { ProfileSection };
