import { getTranslations } from "next-intl/server";
import { ImageWithFallback } from "@/components/common/image-with-fallback";
import { FeatureCard } from "@/components/common";

/**
 * Profile section component displaying profile image and introduction text
 * Used in the About page
 */
export async function ProfileSection(): Promise<React.ReactElement> {
  const t = await getTranslations("AboutPage.profile");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
      <div className="animate-fadeInLeft">
        <FeatureCard variant="default" hover className="h-full">
          <div className="relative w-full h-80 rounded-lg mb-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-400/20"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </FeatureCard>
      </div>

      <div className="flex flex-col justify-center animate-fadeInRight">
        <h2 className="text-3xl mb-6 font-bold">{t("whoAmI")}</h2>
        <div className="space-y-4 text-gray-400 font-normal leading-relaxed">
          <p>
            {t("intro1")}{" "}
            <span className="text-teal-500 font-semibold">Mathieu Nguyen</span>,{" "}
            {t("intro2")}
          </p>
          <p>
            {t("intro3")}
          </p>
          <p>
            {t("intro4")}
          </p>
          <p>
            {t("intro5")}
          </p>
        </div>
      </div>
    </div>
  );
}
