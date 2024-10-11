import { useState } from "react";
import CostumSkills from "../components/CostumSkills";
import TechList from "../components/Gsap-skills";
import { Hero } from "../components/Hero";
import Projects from "../components/Projects";
import BlurryCursor from "../components/Cursor";
import Footer from "../components/Footer";
import ScrollUpButton from "../components/ScrollUpButton";
import Achievements from "../components/Achievements";

function Home() {
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle hover state from Hero component
  const handleHoverChange = (hoverState) => {
    setIsHovered(hoverState);
  };
  return (
    <div className="overflow-hidden">
      <ScrollUpButton onHoverChange={handleHoverChange} />
      <BlurryCursor isHovered={isHovered} />
      <Hero onHoverChange={handleHoverChange} />
      <Achievements />
      <Projects onHoverChange={handleHoverChange} />
      <CostumSkills onHoverChange={handleHoverChange} />
      <TechList />
      <Footer onHoverChange={handleHoverChange} />
    </div>
  );
}

export default Home;
