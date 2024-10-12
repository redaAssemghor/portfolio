import CostumSkills from "../components/CostumSkills";
import TechList from "../components/Gsap-skills";
import { Hero } from "../components/Hero";
import Projects from "../components/Projects";
import BlurryCursor from "../components/Cursor";
import Footer from "../components/Footer";
import ScrollUpButton from "../components/ScrollUpButton";
import Achievements from "../components/Achievements";

function Home() {
  return (
    <div className="overflow-hidden">
      <ScrollUpButton />
      <BlurryCursor />
      <Hero />
      <Achievements />
      <Projects />
      <CostumSkills />
      <TechList />
      <Footer />
    </div>
  );
}

export default Home;
