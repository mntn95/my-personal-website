import type { Project } from "@/types";

/**
 * Portfolio projects
 * Single source of truth for all project data
 */
export const projects: Project[] = [
  {
    id: 1,
    title: "Alain Afflelou",
    description: "An international e-commerce platform dedicated to eyewear.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    tags: ["React", "Redux", "Bootstrap", "SCSS"],
    githubUrl: "https://github.com/mntn95/",
  },
  {
    id: 2,
    title: "Vamos!",
    description:
      "A custom CRM solution designed to optimize recruitment and employee management.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    tags: ["React", "Next", "Typescript", "Jest", "Cypress", "GraphQL"],
    githubUrl: "https://github.com/mntn95/",
  },
  {
    id: 3,
    title: "Timeweaver",
    description:
      "A time and client management platform for solo entrepreneurs and small businesses.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
    tags: ["React", "Next", "Typescript", "Tailwind CSS", "Jest"],
    githubUrl: "https://github.com/mntn95/",
  },
  {
    id: 4,
    title: "Freelance Coach",
    description:
      "A website for a freelance coach offering personalized support to increase their revenue.",
    image: "/images/freelance-coach.png",
    tags: ["React", "Next", "Typescript", "Tailwind CSS"],
    githubUrl: "https://github.com/mntn95/",
  },
  {
    id: 5,
    title: "Merci l'Artiste",
    description:
      "Website for a vintage-inspired barber shop offering a modern booking system.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Typescript", "Tailwind CSS"],
    githubUrl: "https://github.com/mntn95/",
  },
  {
    id: 6,
    title: "Terra Oliva",
    description: "The digital showcase of a Mediterranean cuisine restaurant.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Typescript", "Tailwind CSS"],
    githubUrl: "https://github.com/mntn95/",
  },
  {
    id: 7,
    title: "Paris Tours",
    description:
      "A landing page dedicated to organizing guided tours in Paris.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Typescript", "Tailwind CSS"],
    githubUrl: "https://github.com/mntn95/",
  },
];

/**
 * Featured projects for homepage (first 3 projects)
 */
export const featuredProjects = projects.slice(0, 3);
