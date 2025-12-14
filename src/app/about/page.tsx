import { PageLayout, ScrollWrapper } from "@/components/common";
import {
  ProfileSection,
  HardSkillsSection,
  SoftSkillsSection,
  MoreAboutMeSection,
} from "@/components/features/about";

const AboutPage = (): React.ReactElement => (
  <PageLayout translationsKey="AboutPage">
    <ScrollWrapper>
      <ProfileSection />
      <HardSkillsSection />
      <SoftSkillsSection />
      <MoreAboutMeSection />
    </ScrollWrapper>
  </PageLayout>
);

export default AboutPage;
