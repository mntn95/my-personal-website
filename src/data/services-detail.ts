import { Globe, Users, Wrench } from "lucide-react";
import type { DetailedService } from "@/types";

/**
 * Detailed service offerings for services page
 * Contains comprehensive information about each service
 */
export const detailedServices: DetailedService[] = [
  {
    id: "customWebsiteCreation",
    serviceId: "custom-website-creation",
    icon: Globe,
    title: "title",
    subtitle: "subtitle",
    description: [
      "descriptionParagraphs.0",
      "descriptionParagraphs.1",
      "descriptionParagraphs.2",
    ],
    approach: [
      "approach.0",
      "approach.1",
      "approach.2",
      "approach.3",
      "approach.4",
    ],
    technologies: [
      "React & Next.js for dynamic, high-performance applications",
      "Tailwind CSS for responsive, customizable styling",
      "Modern JavaScript/TypeScript for robust functionality",
      "Optimization tools for speed and accessibility",
    ],
    examples: [
      "examples.0",
      "examples.1",
      "examples.2",
      "examples.3",
      "examples.4",
    ],
  },
  {
    id: "frontEndCollaboration",
    serviceId: "front-end-collaboration",
    icon: Users,
    title: "title",
    subtitle: "subtitle",
    description: [
      "descriptionParagraphs.0",
      "descriptionParagraphs.1",
      "descriptionParagraphs.2",
    ],
    approach: [
      "approach.0",
      "approach.1",
      "approach.2",
      "approach.3",
      "approach.4",
    ],
    technologies: [
      "React & Next.js for dynamic, high-performance applications",
      "Tailwind CSS for responsive, customizable styling",
      "Modern JavaScript/TypeScript for robust functionality",
      "Optimization tools for speed and accessibility",
    ],
    examples: [
      "examples.0",
      "examples.1",
      "examples.2",
      "examples.3",
      "examples.4",
    ],
  },
  {
    id: "maintenanceSupport",
    serviceId: "maintenance-support",
    icon: Wrench,
    title: "title",
    subtitle: "subtitle",
    description: [
      "descriptionParagraphs.0",
      "descriptionParagraphs.1",
      "descriptionParagraphs.2",
    ],
    whatIncluded: [
      "whatIncluded.0",
      "whatIncluded.1",
      "whatIncluded.2",
      "whatIncluded.3",
      "whatIncluded.4",
    ],
    technologies: [
      "React & Next.js for dynamic, high-performance applications",
      "Tailwind CSS for responsive, customizable styling",
      "Modern JavaScript/TypeScript for robust functionality",
      "Optimization tools for speed and accessibility",
    ],
    examples: [
      "examples.0",
      "examples.1",
      "examples.2",
      "examples.3",
      "examples.4",
    ],
  },
];
