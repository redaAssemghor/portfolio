import { useState } from "react";
import CostumSkills from "../components/CostumSkills";
import TechList from "../components/Gsap-skills";
import { Hero } from "../components/Hero";
import Projects from "../components/Projects";
import BlurryCursor from "../components/Cursor";

function Home() {
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle hover state from Hero component
  const handleHoverChange = (hoverState) => {
    setIsHovered(hoverState);
  };
  return (
    <div>
      <BlurryCursor isHovered={isHovered} />
      <Hero onHoverChange={handleHoverChange} />
      <Projects />
      <CostumSkills />
      <TechList />
    </div>
  );
}

export default Home;
