import { PageLayout } from "@/components/common";
import { ProjectsClientContainer } from "@/components/features/projects";

const Projects = (): React.ReactElement => (
  <PageLayout translationsKey="ProjectsPage">
    <ProjectsClientContainer />
  </PageLayout>
);

export default Projects;
