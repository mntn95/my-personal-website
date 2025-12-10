import {
  Code,
  Palette,
  Server,
  Store,
  Infinity,
  TestTubeDiagonal,
} from "lucide-react";
import type { Skill, SkillLevel } from "@/types";

/**
 * Skills with icons and grid layout configuration
 * Used in Hero component's skills grid
 */
export const skills: Skill[] = [
  {
    name: "React.js",
    description: "UI library",
    icon: Code,
    span: "col-span-3 row-span-2",
  },
  {
    name: "Next.js",
    description: "Full-stack React framework",
    icon: Code,
    span: "col-span-3 row-span-2",
  },
  {
    name: "Typescript",
    description: "Typed JS language",
    icon: Code,
    span: "col-span-2 row-span-2",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first styling",
    icon: Palette,
    span: "col-span-2 row-span-2",
  },
  {
    name: "GraphQL",
    description: "Flexible API query language",
    icon: Server,
    span: "col-span-2 row-span-2",
  },
  {
    name: "Redux",
    description: "State management library",
    icon: Store,
    span: "col-span-3 row-span-2",
  },
  {
    name: "CI/CD",
    description: "Automated build & deploy",
    icon: Infinity,
    span: "col-span-3 row-span-2",
  },
  {
    name: "Cypress",
    description: "End-to-end testing",
    icon: TestTubeDiagonal,
    span: "col-span-3 row-span-2",
  },
  {
    name: "Jest",
    description: "Javascript testing framework",
    icon: TestTubeDiagonal,
    span: "col-span-3 row-span-2",
  },
];

/**
 * Skills with proficiency level percentages
 * Used in About component
 */
export const skillLevels: SkillLevel[] = [
  { name: "React.js", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Typescript", level: 80 },
  { name: "Tailwind CSS", level: 75 },
  { name: "Redux", level: 75 },
  { name: "GenAI", level: 70 },
];
