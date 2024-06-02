import { useRef, useEffect, useLayoutEffect } from "react";
import { icons } from "../icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const gsapRef = useRef(null);

  const slideRight = () => {
    if (sliderRef.current) {
      // Ensuring smooth reset to start
      if (
        sliderRef.current.scrollLeft >=
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth
      ) {
        sliderRef.current.scrollTo({ left: 0, behavior: "smooth" }); // Reset to start with smooth behavior
      } else {
        sliderRef.current.scrollBy({ left: 500, behavior: "smooth" }); // Smooth scroll by 500px
      }
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    intervalRef.current = setInterval(slideRight, 3000); // Slide every 3000 milliseconds

    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, []);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: gsapRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      ".gsapRef",
      { x: 0 },
      { x: 200, duration: 1, ease: "bounce", width: 0 }
    );
  });

  return (
    <div ref={gsapRef} className="p-10 mt-5 flex flex-col items-center">
      <div className="relative p-1">
        <div className="bg-black w-full h-full absolute gsapRef"></div>
        <h1 className="font-bold">Explore My Expertise !</h1>
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon
          className="cursor-pointer md:h-8 mr-4 opacity-40 hover:opacity-100"
          icon={faChevronLeft}
          onClick={() =>
            sliderRef.current.scrollBy({ left: -500, behavior: "smooth" })
          }
        />
        <div
          ref={sliderRef}
          className="w-[400px] flex lg:w-[1024px] md:w-[700px] overflow-x-scroll whitespace-nowrap scrollbar-hide snap-x"
          style={{ scrollBehavior: "smooth" }}
        >
          {icons.map((icon, index) => (
            <div
              key={index}
              className="m-10 flex flex-col items-center snap-start"
            >
              <img
                src={icon.link}
                alt={icon.name}
                className="w-8 lg:min-w-32 cursor-pointer hover:scale-105 ease-in-out duration-300"
              />
              <h1 className="text-sm mt-3 text-gray-500 dark:text-gray-400 font-light">
                {icon.name}
              </h1>
            </div>
          ))}
        </div>
        <FontAwesomeIcon
          className="cursor-pointer md:h-8 ml-4 opacity-40 hover:opacity-100"
          icon={faChevronRight}
          onClick={() =>
            sliderRef.current.scrollBy({ left: 500, behavior: "smooth" })
          }
        />
      </div>
    </div>
  );
}

export default Skills;
