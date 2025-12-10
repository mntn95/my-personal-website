import type { EducationItem } from "@/types";

/**
 * Education background and training
 * Comprehensive information about educational journey
 */
export const educationData: EducationItem = {
  degree: "Professional Title: Web and Mobile Web Developer",
  institution: "O'Clock",
  field: "Professional Web Development Training",
  duration: "2018",
  location: "Paris - Remote",
  grade: "Obtained",
  highlights: [
    "Full-time intensive 700-hour program in modern web application development, structured in two complementary phases.",
    "Technical Foundations: Mastery of front-end and back-end development fundamentals, including HTML5, CSS3, JavaScript, PHP/MySQL, with hands-on practice in version control (Git), Agile methodologies, and professional web tools.",
    "JavaScript/React Specialization: In-depth training in the modern JavaScript ecosystem, focusing on React component architecture, state management, REST API integration, and build tools such as Webpack and Babel.",
    "Capstone Project: Collaborated in a team of four to build a full-stack role-playing platform featuring an interactive game board with real-time movements, integrated chat via WebSockets (Express.js), a blog, and a community forum. Developed a robust full-stack JS architecture (React/Node.js/Express) capable of handling multiple simultaneous connections, using Agile practices with weekly sprints and code reviews.",
  ],
};

/**
 * List of courses completed during education
 */
export const courses: string[] = [
  "Web Foundations & Tooling",
  "HTML/CSS Integration & Accessibility",
  "Sass & Front-End Modularity",
  "JavaScript & DOM Interactions",
  "Automated Testing & Code Quality",
  "WordPress & Deployment Basics",
  "Front-End Frameworks & Dynamic Components",
  "Databases, SQL & ORM",
  "Back-End Architecture & REST APIs",
  "Algorithms",
  "React and its ecosystem",
  "DevOps, CI/CD & Docker",
  "UML, Wireframing & Project Methodology",
  "Full-Stack Real-Time Project Development",
];
