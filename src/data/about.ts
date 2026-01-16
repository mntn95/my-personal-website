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
  { name: "Tailwind", level: "Intermediate", color: "blue" },
  { name: "Redux", level: "Intermediate", color: "blue" },
  { name: "GraphQL", level: "Intermediate", color: "blue" },
  { name: "CI/CD", level: "Intermediate", color: "blue" },
  { name: "Cypress", level: "Intermediate", color: "blue" },
  { name: "Jest", level: "Intermediate", color: "blue" },
  { name: "Supabase", level: "Intermediate", color: "blue" },
  { name: "GenAI", level: "Intermediate", color: "blue" },
  { name: "Prompt Engineering", level: "Intermediate", color: "blue" },
  { name: "AI Agents/MCP", level: "Beginner", color: "green" },
  { name: "Cursor", level: "Intermediate", color: "blue" },
  { name: "Claude", level: "Intermediate", color: "blue" },
];

export const interests: string[] = [
  "AboutPage.moreAboutMe.interests.0",
  "AboutPage.moreAboutMe.interests.1",
  "AboutPage.moreAboutMe.interests.2",
  "AboutPage.moreAboutMe.interests.3",
];

export const philosophy: string[] = [
  "AboutPage.moreAboutMe.philosophy.0",
  "AboutPage.moreAboutMe.philosophy.1",
  "AboutPage.moreAboutMe.philosophy.2",
  "AboutPage.moreAboutMe.philosophy.3",
];

export const education: string[] = [
  "AboutPage.moreAboutMe.education.0",
  "AboutPage.moreAboutMe.education.1",
  "AboutPage.moreAboutMe.education.2",
  "AboutPage.moreAboutMe.education.3",
];

export const goals: string[] = [
  "AboutPage.moreAboutMe.goals.0",
  "AboutPage.moreAboutMe.goals.1",
  "AboutPage.moreAboutMe.goals.2",
  "AboutPage.moreAboutMe.goals.3",
];

export const softSkills: SoftSkill[] = [
  {
    title: "AboutPage.softSkillsList.problemSolving.title",
    description: "AboutPage.softSkillsList.problemSolving.description",
  },
  {
    title: "AboutPage.softSkillsList.teamCollaboration.title",
    description: "AboutPage.softSkillsList.teamCollaboration.description",
  },
  {
    title: "AboutPage.softSkillsList.timeManagement.title",
    description: "AboutPage.softSkillsList.timeManagement.description",
  },
  {
    title: "AboutPage.softSkillsList.communication.title",
    description: "AboutPage.softSkillsList.communication.description",
  },
  {
    title: "AboutPage.softSkillsList.adaptability.title",
    description: "AboutPage.softSkillsList.adaptability.description",
  },
  {
    title: "AboutPage.softSkillsList.criticalThinking.title",
    description: "AboutPage.softSkillsList.criticalThinking.description",
  },
];

export const moreAboutMeCards: AboutCard[] = [
  {
    title: "AboutPage.moreAboutMe.cards.codingPhilosophy",
    icon: Brain,
    listIcon: Lightbulb,
    items: philosophy,
    animationDelay: "0.1s",
  },
  {
    title: "AboutPage.moreAboutMe.cards.educationJourney",
    icon: GraduationCap,
    listIcon: BookOpen,
    items: education,
    animationDelay: "0.2s",
  },
  {
    title: "AboutPage.moreAboutMe.cards.personalInterests",
    icon: User,
    listIcon: Heart,
    items: interests,
    animationDelay: "0s",
  },
  {
    title: "AboutPage.moreAboutMe.cards.futureGoals",
    icon: Goal,
    listIcon: CircleCheckBig,
    items: goals,
    animationDelay: "0.3s",
  },
];
