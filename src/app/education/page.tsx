import { PageLayout } from "@/components/common";
import {
  Education as EducationComponent,
  Courses,
  GraduationProject,
} from "@/components/features/education";

const Education = (): React.ReactElement => (
  <PageLayout translationsKey="EducationPage">
    <EducationComponent />
    <Courses />
    <GraduationProject />
  </PageLayout>
);

export default Education;
