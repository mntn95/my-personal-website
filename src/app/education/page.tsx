import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/common";
import {
  Education as EducationComponent,
  Courses,
  GraduationProject,
} from "@/components/features/education";

export const metadata: Metadata = {
  title: "Education - Mathieu Nguyen | Front-End Developer",
  description:
    "Explore the educational background and professional training that shaped Mathieu Nguyen's journey as a front-end developer. 700-hour intensive program in modern web development.",
  keywords: [
    "web development education",
    "react training",
    "javascript certification",
    "professional web developer",
    "o'clock",
  ],
};

export default async function Education(): Promise<React.ReactElement> {
  const t = await getTranslations("EducationPage");

  return (
    <div className="min-h-screen relative z-10">
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <PageHeader
            badge={t("badge")}
            title={t("title")}
            description={t("description")}
          />

          <EducationComponent />
          <Courses />
          <GraduationProject />
        </div>
      </div>
    </div>
  );
}
