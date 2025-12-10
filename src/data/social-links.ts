import { Github, Linkedin, Mail } from "lucide-react";
import type { SocialLink } from "@/types";

/**
 * Social media links used in Footer and Contact page
 * Single source of truth for all social links
 */
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/mntn95/",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mathieu-ng/",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:mathieu.nguyen@proton.me",
  },
];
