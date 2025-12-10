import {
  User,
  Brain,
  CircleCheckBig,
  GraduationCap,
  BookOpen,
  Goal,
  Heart,
  Lightbulb,
} from "lucide-react";
import type { AboutSkill, SoftSkill, AboutCard } from "@/types";

export const aboutSkills: AboutSkill[] = [
  { name: "React.js", level: "Advanced", color: "teal" },
  { name: "Next.js", level: "Advanced", color: "teal" },
  { name: "Typescript", level: "Advanced", color: "teal" },
  { name: "Tailwind CSS", level: "Intermediate", color: "blue" },
  { name: "Redux", level: "Intermediate", color: "blue" },
  { name: "GraphQL", level: "Intermediate", color: "blue" },
  { name: "CI/CD", level: "Intermediate", color: "blue" },
  { name: "Cypress", level: "Intermediate", color: "blue" },
  { name: "Jest", level: "Intermediate", color: "blue" },
  { name: "Supabase", level: "Beginner", color: "green" },
  { name: "GenAI", level: "Intermediate", color: "blue" },
  { name: "Prompt Engineering", level: "Intermediate", color: "blue" },
  { name: "AI Agents/MCP", level: "Beginner", color: "green" },
  { name: "Cursor", level: "Intermediate", color: "blue" },
  { name: "Claude", level: "Intermediate", color: "blue" },
];

export const interests: string[] = [
  "Exploring new technologies",
  "Building personal projects",
  "Contributing to open-source development",
  "Practicing sports",
];

export const philosophy: string[] = [
  "Writing clean, maintainable, and scalable code",
  "Prioritizing user experience and intuitive interfaces",
  "Following best practices",
  "Collaborating to improve together",
];

export const education: string[] = [
  "Web development fundamentals",
  "Specialization in React.js",
  "Full-stack project experience",
  "Ongoing learning",
];

export const goals: string[] = [
  "Mastering advanced Front End",
  "Learn Node.js",
  "Contributing to open-source and sharing knowledge",
  "Exploring AI automation",
];

export const softSkills: SoftSkill[] = [
  {
    title: "Problem Solving",
    description: "Analytical approach to complex technical challenges",
  },
  {
    title: "Communication",
    description: "Clear technical and non-technical communication",
  },
  {
    title: "Team Collaboration",
    description: "Effective work in cross-functional teams",
  },
  {
    title: "Adaptability",
    description: "Quick learning of new technologies and methodologies",
  },
  {
    title: "Time Management",
    description: "Efficient project delivery within deadlines",
  },
  {
    title: "Critical Thinking",
    description: "Analytical evaluation of solutions and approaches",
  },
];

export const moreAboutMeCards: AboutCard[] = [
  {
    title: "Personal Interests",
    icon: User,
    listIcon: Heart,
    items: interests,
    animationDelay: "0s",
  },
  {
    title: "Coding Philosophy",
    icon: Brain,
    listIcon: Lightbulb,
    items: philosophy,
    animationDelay: "0.1s",
  },
  {
    title: "Education Journey",
    icon: GraduationCap,
    listIcon: BookOpen,
    items: education,
    animationDelay: "0.2s",
  },
  {
    title: "Future Goals",
    icon: Goal,
    listIcon: CircleCheckBig,
    items: goals,
    animationDelay: "0.3s",
  },
];
