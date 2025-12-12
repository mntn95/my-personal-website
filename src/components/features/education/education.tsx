import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { FeatureCard, IconWrapper } from "@/components/common";
import { educationData } from "@/data/education";

/**
 * Education component displaying education history
 * Shows degree, institution, field, duration, location, grade, and highlights
 * Used in the Education page
 */
const Education = async (): Promise<React.ReactElement> => {
  const t = await getTranslations();

  return (
    <div className="mb-24">
      <div className="grid grid-cols-1 gap-8">
        <FeatureCard
          variant="default"
          hover
          className="h-full animate-fadeInUp hover:bg-card-hover"
        >
          <div className="flex items-center mb-4">
            <IconWrapper icon={GraduationCap} size="md" className="mr-4" />
            <h3 className="text-white text-xl font-semibold">
              {t(educationData.degree)}
            </h3>
          </div>
          <div className="mb-4">
            <div className="text-white mb-1 text-lg font-medium">
              {t(educationData.institution)}
            </div>
            <p className="text-gray-400">{t(educationData.field)}</p>
            <div className="flex flex-wrap gap-y-2 gap-x-4 mt-2 text-gray-400 text-sm">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {t(educationData.duration)}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {t(educationData.location)}
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-1" />
                {t(educationData.grade)}
              </div>
            </div>
          </div>
          <ul className="space-y-2 pl-6 list-disc text-gray-400">
            {educationData.highlights.map((key, idx) => (
              <li key={idx}>{t(key)}</li>
            ))}
          </ul>
        </FeatureCard>
      </div>
    </div>
  );
};

export { Education };
