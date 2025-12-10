import { Globe, Users, Wrench } from "lucide-react";
import type { DetailedService } from "@/types";

/**
 * Detailed service offerings for services page
 * Contains comprehensive information about each service
 */
export const detailedServices: DetailedService[] = [
  {
    id: "custom-website-creation",
    icon: Globe,
    title: "Custom Website Creation",
    subtitle:
      "I create websites that inspire trust and convert your visitors into clients.",
    description: [
      "I design and develop custom websites tailored to your specific business needs and brand identity. Every project starts with understanding your goals, target audience, and unique value proposition. Whether you need a stunning showcase website, a high-converting landing page, or a fully-featured e-commerce platform, I deliver solutions that combine aesthetics with functionality.",
      "My development process prioritizes user experience, ensuring your website is not only visually appealing but also intuitive and easy to navigate. I build responsive designs that look perfect on all devices—from desktop computers to smartphones—and optimize every aspect for fast loading times and smooth performance.",
      "Beyond just building your website, I implement SEO best practices from the ground up, helping your site rank better in search engines. I also ensure accessibility standards are met, making your content available to all users. After launch, I provide guidance on content management and offer support to ensure your website continues to perform optimally.",
    ],
    approach: [
      "Modern, responsive design that adapts seamlessly to all screen sizes and devices",
      "Performance optimization for lightning-fast loading times and smooth interactions",
      "SEO-friendly architecture to improve search engine visibility from day one",
      "User-centered interface design focused on conversions and engagement",
      "Clean, maintainable code following industry best practices",
    ],
    technologies: [
      "React & Next.js for dynamic, high-performance applications",
      "Tailwind CSS for responsive, customizable styling",
      "Modern JavaScript/TypeScript for robust functionality",
      "Optimization tools for speed and accessibility",
    ],
    examples: [
      "Showcase website for your business or company",
      "Conversion-focused landing page",
      "Creative portfolio or personal website",
      "E-commerce platform",
      "Blog or magazine",
    ],
  },
  {
    id: "front-end-collaboration",
    icon: Users,
    title: "Front-end Collaboration",
    subtitle: "I join your team to build or evolve your web project.",
    description: [
      "I integrate seamlessly into your development team as a skilled front-end developer, bringing expertise in modern web technologies and a collaborative mindset. Whether you need short-term assistance for a specific sprint or long-term partnership for ongoing development, I adapt to your team's workflow, tools, and processes.",
      "With experience in agile environments, I'm comfortable working with version control systems, participating in code reviews, and contributing to design system development. I believe in clear communication and thorough documentation, ensuring that my code is not only functional but also maintainable by the entire team.",
      "I take pride in writing clean, semantic, and well-tested code that follows your team's conventions and best practices. Beyond just implementing features, I actively participate in technical discussions, suggest improvements, and help mentor junior developers when needed. My goal is to add value to your team while delivering high-quality results on time.",
    ],
    approach: [
      "Clean, maintainable code that follows your team's standards and conventions",
      "Collaborative mindset with strong communication and teamwork skills",
      "Proactive problem-solving and attention to technical details",
      "Flexibility to work with various tech stacks and development methodologies",
      "Active participation in code reviews and knowledge sharing",
    ],
    examples: [
      "Short or long-term assignment in direct collaboration with your staff",
      "Integration or redesign of existing interfaces",
      "Code review participation and quality assurance",
      "Implementation or evolution of a design system",
      "Collaboration with designers and backend developers",
    ],
  },
  {
    id: "maintenance-support",
    icon: Wrench,
    title: "Maintenance & Support",
    subtitle:
      "I handle your website maintenance to keep it efficient and secure.",
    description: [
      "Your website is a living asset that requires ongoing care to remain secure, fast, and effective. I provide comprehensive maintenance services that keep your site running smoothly, protecting it from security vulnerabilities and ensuring optimal performance as technology evolves and your business grows.",
      "My maintenance approach is both preventive and reactive. I proactively monitor your website's health, perform regular updates to dependencies and plugins, and implement security patches before issues arise. At the same time, I'm available to quickly address any unexpected problems, bugs, or optimization needs that emerge.",
      "Beyond technical upkeep, I provide clear monthly reports on your website's status, performance metrics, and any actions taken. You'll have access to priority support channels, and I offer guidance on best practices for content updates and site management. My goal is to give you peace of mind, knowing your website is in expert hands.",
    ],
    whatIncluded: [
      "Monthly health checks and performance monitoring to catch issues early",
      "Priority support with fast response times for urgent matters",
      "Regular security audits and immediate patching of vulnerabilities",
      "Detailed monthly reports on site health and maintenance activities",
      "Backup management and disaster recovery planning",
    ],
    examples: [
      "Dependency and plugin updates to keep your site current",
      "Regular backups and proactive monitoring",
      "Bug fixes and performance optimizations",
      "Technical support and strategic advice",
      "Emergency response for critical issues",
    ],
  },
];
