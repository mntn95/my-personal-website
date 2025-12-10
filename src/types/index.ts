import type { LucideIcon } from "lucide-react";

/**
 * Skill with icon and grid layout configuration
 */
export interface Skill {
  name: string;
  description: string;
  icon: LucideIcon;
  span: string;
}

/**
 * Skill with proficiency level percentage
 */
export interface SkillLevel {
  name: string;
  level: number;
}

/**
 * Service offering with ID for routing (simple version for homepage)
 */
export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  serviceId?: string;
}

/**
 * Detailed service offering for services page
 */
export interface DetailedService {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string[];
  approach?: string[];
  whatIncluded?: string[];
  technologies?: string[];
  examples: string[];
}

/**
 * Project portfolio item
 */
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

/**
 * Social media link
 */
export interface SocialLink {
  name: string;
  icon: LucideIcon;
  href: string;
}

/**
 * Education history item
 */
export interface EducationItem {
  degree: string;
  institution: string;
  field: string;
  duration: string;
  location: string;
  grade: string;
  highlights: string[];
}

/**
 * Navigation menu item
 */
export interface NavItem {
  name: string;
  path: string;
}

/**
 * About page skill with proficiency level
 */
export interface AboutSkill {
  name: string;
  level: "Advanced" | "Intermediate" | "Beginner";
  color: "teal" | "blue" | "green";
}

/**
 * Soft skill with description
 */
export interface SoftSkill {
  title: string;
  description: string;
}

/**
 * About me card with icon and list items
 */
export interface AboutCard {
  title: string;
  icon: LucideIcon;
  listIcon: LucideIcon;
  items: string[];
  animationDelay: string;
}
