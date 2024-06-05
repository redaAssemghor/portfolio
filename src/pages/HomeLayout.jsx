import CostumSkills from "../components/CostumSkills";
import TechList from "../components/Gsap-skills";
import { Hero } from "../components/Hero";
import Projects from "../components/Projects";

function Home() {
  return (
    <div className="">
      <Hero />
      <Projects />
      <CostumSkills />
      <TechList />
    </div>
  );
}

export default Home;
