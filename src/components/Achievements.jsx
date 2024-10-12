import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { counterAnimation } from "../animations/projectsAnimations";
import gsap from "gsap";

const achievementsData = [
  {
    number: 90,
    text: "Projects Completed",
  },
  {
    number: 3,
    text: "Years of Experience",
  },
  {
    number: 20,
    text: "Happy Clients",
  },
];

const Achievements = () => {
  const [isHovered, setIsHovered] = useState(null);
  const refs = useRef([]);

  useGSAP(() => {
    if (refs.current.length > 0) {
      refs.current.forEach((el, index) => {
        const num = achievementsData[index].number;
        counterAnimation(el, num);
      });
    }
  });

  return (
    <section className="flex justify-center lg:py-20 border-b-2 border-dotted lg:mx-60">
      {achievementsData.map((achievement, index) => (
        <div
          key={index}
          className="relative -m-4 overflow-hidden flex flex-col items-center justify-center gap-8 lg:h-[400px] lg:w-[400px] md:h-[230px] md:w-[230px] h-[130px] w-[130px] rounded-full"
          style={{ border: "1px solid rgba(0, 0, 0, 0.2)" }}
          onMouseEnter={() => setIsHovered(index)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <h1
            // ref={(el) => (refs.current[index] = el)}
            className={`font-black lg:text-5xl z-30 relative text-center ${
              isHovered !== index ? "text-black" : "text-white"
            }`}
          >
            <span
              ref={(el) => {
                if (el) {
                  refs.current[index] = el;
                }
              }}
            >
              0
            </span>
            +
          </h1>
          <p
            className={`font-black lg:text-3xl z-30 relative text-center ${
              isHovered !== index ? "text-black" : "text-white"
            }`}
          >
            {achievement.text}
          </p>
          <span
            className={`absolute rounded-full bg-black h-[400px] w-[400px] duration-700 ${
              isHovered !== index
                ? "translate-y-3/4 -translate-x-40"
                : "translate-y-0 -translate-x-0"
            }`}
          ></span>
        </div>
      ))}
    </section>
  );
};

export default Achievements;
