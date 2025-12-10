import { Hero, About, Skills, Projects, Contact } from "@/components/features";

export default function Home(): React.ReactElement {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
