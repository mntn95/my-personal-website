import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/common";
import {
  Education as EducationComponent,
  Courses,
  GraduationProject,
} from "@/components/features/education";

const Education = async (): Promise<React.ReactElement> => {
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
};

export default Education;
