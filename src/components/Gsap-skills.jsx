import React, { useLayoutEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  { tech_color: "#878282", tech_name: "Full/Stack.Developer" },
  { tech_color: "#878282", tech_name: "UI/UX.Designer" },
  { tech_color: "#878282", tech_name: "Freelancer" },
];

const TechList = () => {
  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 2,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(10000, 8000)
              : gsap.utils.random(-1000, -800);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-1000, -800)
              : gsap.utils.random(1000, 800);
          },
          ease: "none",
        }
      );
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={component} className="overflow-hidden lg:pt-20">
      {data.map((tech, index) => (
        <div
          key={index}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-neutral-700"
          aria-label={tech.tech_name || ""}
          style={{ opacity: index === 2 ? 0.3 : 1 }}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <React.Fragment key={i}>
              <span
                className="text-5xl font-extrabold tracking-wide"
                style={{
                  color: i % 2 === 0 ? tech.tech_color : "inherit",
                }}
              >
                {tech.tech_name}
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
