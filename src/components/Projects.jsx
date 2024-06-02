import Project from "./Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { data } from "../../projectsData";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { black, red } from "color-name";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const ref = useRef(null);
  const text = "Does More Then Ever Platform To Achieve Goal Stages.";
  const btn = "HIRE.ME";

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%", // Adjust this value as needed
          toggleActions: "play none none none",
        },
      });

      tl.from(
        ".text",
        {
          opacity: 0,
          y: 24,
          stagger: 0.1,
          duration: 1,
          ease: "expo",
        },
        0
      );
    }, ref);
    const btnTl = gsap.timeline({ paused: true });

    const btncontainer = document.querySelector(".btncontainer");

    btnTl
      .fromTo(
        ".btnChar",
        { y: -20, opacity: 0 },
        { y: 1, stagger: 0.1, duration: 0.1, opacity: 1, ease: "back.out" },
        0
      )
      .to(".btnTopText", { y: 10, opacity: 0, duration: 0.1 }, 0);

    const handleMouseEnter = () => btnTl.play();
    const handleMouseLeave = () => btnTl.reverse();

    if (btncontainer) {
      btncontainer.addEventListener("mouseenter", handleMouseEnter);
      btncontainer.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      context.revert();
      if (btncontainer) {
        btncontainer.removeEventListener("mouseenter", handleMouseEnter);
        btncontainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={ref} id="projects" className="lg:flex m-10 relative">
      <div className="flex flex-col lg:w-1/2 h-fit lg:top-1/2 lg:sticky">
        <h1 className="font-semibold text-pink-600">
          Recent Completed Project
        </h1>
        <h1 className="font-bold text-2xl">
          {text.split(" ").map((char, i) => (
            <span key={i} className="text inline-block m-1">
              {char}
            </span>
          ))}
        </h1>
        <div className="text-gray-400 w-fit rounded-lg p-2 border-2 hover:border-black hover:text-black duration-500 cursor-pointer btncontainer">
          <a className="flex gap-3" href="/contact">
            <h1 className="font-bold ">
              {btn.split("").map((char, i) => (
                <span key={i} className="btnChar inline-block">
                  {char}
                </span>
              ))}
            </h1>
            <h1 className="font-bold btnTopText absolute">HIRE.ME</h1>

            <FontAwesomeIcon icon={faCircleRight} className="size-6" />
          </a>
        </div>
      </div>
      <div className="lg:w-1/2">
        {data.map((prj, i) => (
          <Project
            key={i}
            title={prj.name}
            url={prj.imgurl}
            description={prj.description}
            repo={prj.repo}
            deployUrl={prj.deployUrl}
          />
        ))}
      </div>
    </div>
  );
}
export default Projects;
