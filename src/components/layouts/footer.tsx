import { socialLinks } from "@/data/social-links";
import { SocialLink } from "@/components/ui";

export function Footer(): React.ReactElement {
  return (
    <footer className="w-full py-8 border-t border-card-border relative z-10 backdrop-blur-md bg-dark-bg-alt">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div
              className="text-2xl text-purple-400 mb-2"
              style={{ fontWeight: 700 }}
            >
              MN.
            </div>
            <p
              className="text-gray-400 text-sm max-w-md"
              style={{ fontWeight: 400, lineHeight: 1.6 }}
            >
              Building innovative digital solutions with a focus on clean,
              efficient code and exceptional user experiences.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-white mb-3" style={{ fontWeight: 500 }}>
              Connect with me
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <SocialLink
                  key={link.name}
                  href={link.href}
                  icon={link.icon}
                  label={link.name}
                  variant="rounded"
                  size="md"
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className="text-gray-400 text-sm text-center mt-8"
          style={{ fontWeight: 400 }}
        >
          © 2025 Mathieu Nguyen All rights reserved.
        </div>
      </div>
    </footer>
  );
}
