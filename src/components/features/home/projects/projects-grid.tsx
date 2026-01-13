"use client";
import { getTranslations } from "next-intl/server";
import { ImageWithFallback } from "@/components/common/image-with-fallback";
import { featuredProjects } from "@/data/projects";
import { FeatureCard } from "@/components/common";
import { Badge } from "@/components/ui";
import { useIsMobile } from "@/hooks";
import { useTranslations } from "next-intl";
/**
 * Projects grid component displaying featured projects
 * Shows project cards with image, title, description, and tags
 * Used in the Projects component
 *
 * @async
 * @returns Promise resolving to React element
 */
const ProjectsGrid = (): React.ReactElement => {
  const t = useTranslations();
  const isMobile = useIsMobile();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {featuredProjects.map((project, index) => (
        <FeatureCard
          key={index}
          variant="default"
          hover
          className="overflow-hidden group flex flex-col p-0 h-full"
          animationIndex={index}
        >
          <div className="h-48 overflow-hidden">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-lg md:text-xl mb-2 font-semibold">
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-gray-400 mb-4 flex-grow font-normal leading-relaxed">
              {project.description.startsWith("ProjectsPage.")
                ? t(project.description)
                : project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <Badge
                  key={tagIndex}
                  variant="default"
                  size={isMobile ? "sm" : "md"}
                  className="bg-dark-bg-alt"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </FeatureCard>
      ))}
    </div>
  );
};

export { ProjectsGrid };
