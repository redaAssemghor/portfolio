import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdCircle } from "react-icons/md";
import { bandAnimation } from "../animations/projectsAnimations";

gsap.registerPlugin(ScrollTrigger);

const Band = () => {
  const skillsArr = ["UI DESIGNER", "FREELANCER", "FULL-STACK DEVELOPER"];

  useGSAP(() => {
    const row = document.querySelector(".tech-row");
    bandAnimation(row);
  });

  return (
    <div className="relative cursor-pointer overflow-hidden w-full bg-black text-white my-20">
      <span className="absolute left-0 bg-gradient-to-r from-white to-to-transparent h-full w-1/4"></span>
      <span className="absolute right-0 bg-gradient-to-l from-white to-to-transparent h-full w-1/4"></span>

      <div className="tech-row flex items-center justify-center gap-4 w-full whitespace-nowrap md:p-4">
        {[
          ...skillsArr,
          ...skillsArr,
          ...skillsArr,
          ...skillsArr,
          ...skillsArr,
        ].map((skill, i) => (
          <div key={i} className="">
            <h1 className="lg:text-7xl md:text-5xl font-extrabold flex gap-4 items-center text-xl hover:text-neutral-600 transition-colors duration-500 ease-in-out">
              {skill}
              <MdCircle />
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Band;
