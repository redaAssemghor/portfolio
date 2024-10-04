import Project from "./Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { data } from "../lib/projectsData";
import { textScrollAnimation } from "../animations/projectsAnimations";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const ref = useRef(null);
  const text = "Showcasing Innovation and Excellence in Every Project.";
  const btn = "HIRE.ME";

  useGSAP(() => {
    const textClass = document.querySelectorAll(".text");
    textScrollAnimation(textClass);
  });

  useLayoutEffect(() => {
    const btncontainer = document.querySelector(".btncontainer");
    const btnTl = gsap.timeline({ paused: true });

    btnTl
      .fromTo(
        ".btnChar",
        { y: -40, opacity: 0 },
        { y: 1, stagger: 0.05, duration: 0.2, opacity: 1, ease: "circ.in" },
        0
      )
      .to(".btnTopText", { y: 20, opacity: 0, duration: 1, ease: "back" }, 0);

    const handleMouseEnter = () => btnTl.restart();
    const handleMouseLeave = () => btnTl.reverse();

    if (btncontainer) {
      btncontainer.addEventListener("mouseenter", handleMouseEnter);
      btncontainer.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (btncontainer) {
        btncontainer.removeEventListener("mouseenter", handleMouseEnter);
        btncontainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="relative">
      <div className="lg:absolute z-0 -left-40 h-[780px] w-[780px] rounded-full border-2"></div>
      <div ref={ref} id="projects" className="lg:flex m-10">
        <div className="flex flex-col lg:w-2/5 h-fit lg:top-1/2 lg:sticky">
          <h1 className="font-semibold text-pink-600">
            Recent Completed Project
          </h1>
          <h1 className="font-bold lg:text-5xl text-2xl p-6 pl-0">
            {text.split(" ").map((char, i) => (
              <span key={i} className="text inline-block m-1">
                {char}
              </span>
            ))}
          </h1>
          <button className="w-fit rounded-lg p-4 hover:border-black border btncontainer">
            <a
              className="flex gap-3 hover:text-[#181818] text-gray-500 transition duration-500"
              href="/contact"
            >
              <h1 className="font-bold">
                {btn.split("").map((char, i) => (
                  <span key={i} className="btnChar inline-block">
                    {char}
                  </span>
                ))}
              </h1>
              <h1 className="font-bold btnTopText absolute">{btn}</h1>

              <FontAwesomeIcon icon={faCircleRight} className="size-6 " />
            </a>
          </button>
        </div>
        <div className="lg:w-3/5">
          {data.map((prj, i) => (
            <Project
              key={i}
              title={prj.name}
              url={prj.imgurl}
              description={prj.description}
              repo={prj.repo}
              deployUrl={prj.deployUrl}
              techStack={prj.techStack}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Projects;
