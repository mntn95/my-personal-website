import {
  Hero,
  About,
  Services,
  Projects,
  Contact,
} from "@/components/features";

const Home = (): React.ReactElement => (
  <>
    <Hero />
    <About />
    <Services />
    <Projects />
    <Contact />
  </>
);

export default Home;
