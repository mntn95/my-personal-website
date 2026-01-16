import type { Project } from "@/types";

/**
 * Portfolio projects
 * Single source of truth for all project data
 */
export const projects: Project[] = [
  {
    id: 1,
    title: "Alain Afflelou",
    description: "ProjectsPage.descriptions.1",
    image: "/images/alain_afflelou.png",
    tags: ["React", "Redux", "Bootstrap", "SCSS"],
    githubUrl: "https://github.com/mntn95/",
  },
  {
    id: 2,
    title: "Vamos!",
    description: "ProjectsPage.descriptions.2",
    image: "/images/vamos.png",
    tags: ["React", "Next", "Typescript", "Jest", "Cypress", "GraphQL"],
    githubUrl: "https://github.com/mntn95/",
  },
  {
    id: 3,
    title: "Timeweaver",
    description: "ProjectsPage.descriptions.3",
    image: "/images/timeweaver.png",
    tags: ["React", "Next", "Typescript", "Tailwind", "Jest"],
    githubUrl: "https://github.com/mntn95/",
  },
  {
    id: 4,
    title: "LinkedIn Prospector",
    description: "ProjectsPage.descriptions.4",
    image: "/images/lnkdn_prospector.png",
    tags: ["React", "Typescript", "Tailwind", "Node", "Express", "Zustand"],
    githubUrl: "https://github.com/mntn95/",
  },
  {
    id: 5,
    title: "Freelance Coach",
    description: "ProjectsPage.descriptions.5",
    image: "/images/coach_freelance_portfolio.png",
    tags: ["React", "Next", "Typescript", "Tailwind"],
    githubUrl: "https://github.com/mntn95/",
  },
  {
    id: 6,
    title: "Merci l'Artiste",
    description: "ProjectsPage.descriptions.6",
    image: "/images/merci_lartiste.png",
    tags: ["React", "Typescript", "Tailwind"],
    githubUrl: "https://github.com/mntn95/",
  },
  {
    id: 7,
    title: "Terra Oliva",
    description: "ProjectsPage.descriptions.7",
    image: "/images/terra_oliva.png",
    tags: ["React", "Typescript", "Tailwind"],
    githubUrl: "https://github.com/mntn95/",
  },
];

/**
 * Featured projects for homepage (first 3 projects)
 */
export const featuredProjects = projects.slice(0, 3);
