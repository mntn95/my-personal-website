import { PageLayout } from "@/components/common";
import { ContactInfo, ContactForm } from "@/components/features/contact";

const Contact = (): React.ReactElement => (
  <PageLayout translationsKey="ContactPage">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <ContactInfo />
      <ContactForm />
    </div>
  </PageLayout>
);

export default Contact;
