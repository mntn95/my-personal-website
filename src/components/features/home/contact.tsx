import { Handshake, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FeatureCard, IconWrapper } from "@/components/common";
import { SectionLayout } from "@/components/layouts/section-layout";

export function Contact(): React.ReactElement {
  return (
    <SectionLayout id="contact" background="dark">
      <div className="container mx-auto px-4">
        <FeatureCard
          variant="default"
          hover={false}
          className="p-12 max-w-4xl mx-auto text-center animate-fadeInUp"
        >
          <div className="mb-6 mx-auto">
            <IconWrapper icon={Handshake} size="lg" />
          </div>

          <h2 className="text-3xl mb-4 font-bold">Let&apos;s Work Together</h2>

          <p className="text-gray-400 mb-8 max-w-xl mx-auto font-normal leading-relaxed">
            I&apos;m currently available for freelance work and open to new
            opportunities. If you have a project in mind or want to collaborate,
            let&apos;s connect!
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all hover:scale-105 cursor-pointer font-medium"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </FeatureCard>
      </div>
    </SectionLayout>
  );
}
