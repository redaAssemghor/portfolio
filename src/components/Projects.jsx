import Project from "./Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { data } from "../../projectsData";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        { y: -40, opacity: 0 },
        { y: 1, stagger: 0.03, duration: 0.5, opacity: 1, ease: "elastic.out" },
        0
      )
      .to(".btnTopText", { y: 20, opacity: 0, duration: 0.5, ease: "back" }, 0);

    const handleMouseEnter = () => btnTl.restart();
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
    <div>
      <div className="lg:absolute -left-40 h-full w-1/2 rounded-full border"></div>
      <div ref={ref} id="projects" className="lg:flex m-10">
        <div className="flex flex-col lg:w-2/5 h-fit lg:top-1/2 lg:sticky">
          <h1 className="font-semibold text-pink-600">
            Recent Completed Project
          </h1>
          <h1 className="font-bold text-5xl p-6 pl-0">
            {text.split(" ").map((char, i) => (
              <span key={i} className="text inline-block m-1">
                {char}
              </span>
            ))}
          </h1>
          <button className="w-fit rounded-lg p-4 hover:border-black border btncontainer">
            <a className="flex gap-3" href="/contact">
              <h1 className="font-bold ">
                {btn.split("").map((char, i) => (
                  <span key={i} className="btnChar inline-block">
                    {char}
                  </span>
                ))}
              </h1>
              <h1 className="font-bold btnTopText absolute">{btn}</h1>

              <FontAwesomeIcon icon={faCircleRight} className="size-6" />
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Projects;
