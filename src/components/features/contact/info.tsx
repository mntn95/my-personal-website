import * as motion from "motion/react-client";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { FeatureCard } from "@/components/common";
import { ContactInfoCard, SocialLink } from "@/components/ui";
import { fadeInUp } from "@/lib/motion/variants";

/**
 * Contact information section component
 * Displays email, location, social media links, and response time
 * Used in the Contact page
 */
const ContactInfo = (): React.ReactElement => {
  return (
    <motion.div
      className="space-y-6"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={fadeInUp}
    >
      <FeatureCard variant="elevated" hover>
        <h2 className="text-xl mb-4 text-teal-500 font-semibold">
          Contact Information
        </h2>

        <div className="space-y-4 mb-6">
          {/* Email */}
          <ContactInfoCard
            icon={Mail}
            title="Email"
            value="mathieu.nguyen@proton.me"
            href="mailto:mathieu.nguyen@proton.me"
          />

          {/* Location */}
          <ContactInfoCard
            icon={MapPin}
            title="Location"
            value="Paris, France"
            href="https://maps.google.com/?q=Paris"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>

        {/* Social Media */}
        <div>
          <h3 className="mb-3 text-teal-500 font-medium">Social Media</h3>
          <div className="flex gap-3">
            <SocialLink
              href="https://github.com/mntn95/"
              icon={Github}
              label="GitHub"
              variant="square"
              size="md"
            />
            <SocialLink
              href="https://www.linkedin.com/in/mathieu-ng/"
              icon={Linkedin}
              label="LinkedIn"
              variant="square"
              size="md"
            />
          </div>
        </div>
      </FeatureCard>

      {/* Response Time */}
      <FeatureCard variant="elevated" hover className="p-4">
        <h3 className="mb-2 text-teal-500 font-medium">Response Time</h3>
        <p className="text-sm text-gray-400">
          I typically reply within 24 hours during business days.
        </p>
      </FeatureCard>
    </motion.div>
  );
};

export { ContactInfo };
