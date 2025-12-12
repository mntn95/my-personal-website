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
    description: "HomePage.hero.skills.reactJs",
    icon: Code,
    span: "col-span-3 row-span-2",
  },
  {
    name: "Next.js",
    description: "HomePage.hero.skills.nextJs",
    icon: Code,
    span: "col-span-3 row-span-2",
  },
  {
    name: "Typescript",
    description: "HomePage.hero.skills.typescript",
    icon: Code,
    span: "col-span-2 row-span-2",
  },
  {
    name: "Tailwind CSS",
    description: "HomePage.hero.skills.tailwindCss",
    icon: Palette,
    span: "col-span-2 row-span-2",
  },
  {
    name: "GraphQL",
    description: "HomePage.hero.skills.graphQl",
    icon: Server,
    span: "col-span-2 row-span-2",
  },
  {
    name: "Redux",
    description: "HomePage.hero.skills.redux",
    icon: Store,
    span: "col-span-3 row-span-2",
  },
  {
    name: "CI/CD",
    description: "HomePage.hero.skills.ciCd",
    icon: Infinity,
    span: "col-span-3 row-span-2",
  },
  {
    name: "Cypress",
    description: "HomePage.hero.skills.cypress",
    icon: TestTubeDiagonal,
    span: "col-span-3 row-span-2",
  },
  {
    name: "Jest",
    description: "HomePage.hero.skills.jest",
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
