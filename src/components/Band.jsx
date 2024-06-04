import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Band = () => {
  const component = useRef(null);
  const skillsArr = ["UI DESIGNER", "FREELANCER", "FULL-STACK DEVELOPER"];

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: -1,
        ease: "none",
      });
      tl.fromTo(
        ".tech-row",
        {
          xPercent: 100,
        },
        {
          xPercent: -100,
          duration: 40,
          ease: "none",
        }
      );
    }, component);

    gsap.to(
      ".allText",
      {
        duration: 3,
        background: "linear-gradient(to right, #ffffff, #000000)",
        repeat: -1,
      },
      0
    );

    return () => context.revert();
  });
  return (
    <div
      ref={component}
      className="overflow-hidden w-full bg-gradient-to-r from-black via-gray-700 to-white text-white allText"
    >
      <div className="tech-row flex items-center justify-center gap-4 w-full whitespace-nowrap md:p-4">
        {[
          ...skillsArr,
          ...skillsArr,
          ...skillsArr,
          ...skillsArr,
          ...skillsArr,
        ].map((skill, i) => (
          <div key={i} className="">
            <h1 className="md:text-7xl font-extrabold flex gap-4 items-center text-xl hover:text-neutral-600 transition-colors duration-500 ease-in-out">
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
