import {
  Hero,
  About,
  Services,
  Projects,
  Contact,
} from "@/components/features";

export default function Home(): React.ReactElement {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}
