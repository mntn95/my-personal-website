import * as motion from "motion/react-client";
import { FeatureCard, ImageWithFallback } from "@/components/common";
import type { Project } from "@/types";
import { fadeInUp } from "@/lib/motion/variants";
import { getMotionDelay } from "@/lib/motion/utils";
import { ProjectContent } from "./project-content";

interface ProjectCardProps {
  project: Project;
}

/**
 * Project card component
 * Displays a single project with image, title, description, and tags
 * Used in the ProjectsGrid component
 */
const ProjectCard = ({ project }: ProjectCardProps): React.ReactElement => {
  return (
    <motion.div
      key={project.id}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={fadeInUp}
      transition={getMotionDelay(project.id)}
    >
      <FeatureCard
        variant="default"
        hover
        className="group overflow-hidden flex flex-col p-0 hover:transform hover:scale-[1.02] duration-300"
      >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="object-cover transition-transform duration-700 hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <ProjectContent project={project} />
    </FeatureCard>
    </motion.div>
  );
};

export { ProjectCard };
