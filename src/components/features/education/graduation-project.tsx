import { Award } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { FeatureCard, IconWrapper, SectionHeader } from "@/components/common";
import { ImageWithFallback } from "@/components/common";

import { ProjectDetailItem } from "./project-detail-item";

/**
 * Graduation project section component
 * Displays details about the graduation project with image
 * Used in the Education page
 *
 * @async
 * @returns Promise resolving to React element
 */
const GraduationProject = async (): Promise<React.ReactElement> => {
  const t = await getTranslations("EducationPage.graduationProject");

  return (
    <>
      <SectionHeader title={t("title")} className="mb-12" />
      <FeatureCard
        variant="default"
        hover
        className="overflow-hidden hover:bg-card-hover"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Text Content - Left Side */}
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex items-center mb-6">
              <IconWrapper icon={Award} size="md" className="mr-4" />
              <h3 className="text-white text-md md:text-xl font-semibold">
                {t("projectTitle")}
              </h3>
            </div>
            <div className="space-y-4 text-gray-400">
              <p className="text-sm md:text-base">{t("description")}</p>
              <ProjectDetailItem
                label={t("keyFeatures.label")}
                content={t("keyFeatures.content")}
              />
              <ProjectDetailItem
                label={t("techStack.label")}
                content={t("techStack.content")}
              />
              <ProjectDetailItem
                label={t("methodology.label")}
                content={t("methodology.content")}
              />
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="hidden md:block relative h-full min-h-[300px] lg:min-h-[400px]">
            <ImageWithFallback
              src="/images/graduation_project.png"
              alt="Interactive RPG Platform - Game Board Interface"
              className="object-contain w-full h-full rounded-lg p-8"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </FeatureCard>
    </>
  );
};

export { GraduationProject };
