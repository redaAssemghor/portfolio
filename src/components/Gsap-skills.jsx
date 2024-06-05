import React, { useLayoutEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  { tech_color: "#878282", tech_name: "Web.Developer" },
  { tech_color: "#878282", tech_name: "Mobile.Developer" },
  { tech_color: "#878282", tech_name: "designer" },
];

const TechList = () => {
  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 0.3,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(1000, 800)
              : gsap.utils.random(-1000, -800);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-1000, -800)
              : gsap.utils.random(1000, 800);
          },
          ease: "bounce.in",
        }
      );
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={component} className="wrapper overflow-hidden">
      <h1 className="text-2xl md:text-5xl font-bold text-gray-500 m-10">
        What I Do,
      </h1>
      {data.map(({ tech_color, tech_name }, index) => (
        <div
          key={index}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-neutral-700"
          aria-label={tech_name || ""}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <React.Fragment key={i}>
              <span
                className="text-6xl font-extrabold uppercase tracking-tighter"
                style={{
                  color: i % 2 === 0 ? tech_color : "inherit",
                }}
              >
                {tech_name}
              </span>
              <span className="text-3xl">
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default TechList;
