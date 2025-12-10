import { PageHeader } from "@/components/common";
import { ContactInfo, ContactForm } from "@/components/features/contact";

export default function Contact(): React.ReactElement {
  return (
    <div className="min-h-screen relative z-10">
      <div className="pt-24 pb-16 min-h-screen flex items-center">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <PageHeader
            badge="Contact"
            title="Let's Connect"
            description="Got a project in mind? Drop me a message and let's create something amazing together!"
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
}
