import { PageLayout } from "@/components/common";
import { ServicesList } from "@/components/features/services";

const Services = (): React.ReactElement => (
  <PageLayout translationsKey="ServicesPage">
    <div className="space-y-8">
      <ServicesList />
    </div>
  </PageLayout>
);

export default Services;
