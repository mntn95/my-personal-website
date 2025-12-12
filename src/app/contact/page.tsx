import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/common";
import { ContactInfo, ContactForm } from "@/components/features/contact";

const Contact = async (): Promise<React.ReactElement> => {
  const t = await getTranslations("ContactPage");

  return (
    <div className="min-h-screen relative z-10">
      <div className="pt-24 pb-16 min-h-screen flex items-center">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <PageHeader
            badge={t("badge")}
            title={t("title")}
            description={t("description")}
          />

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
