import ReactSvg from "./svgs/ReactSvg";
import MangodbSvg from "./svgs/MangodbSvg";
import NextjsSvg from "./svgs/NextjsSvg";
import GsapSvg from "./svgs/GsapSvg";
import TailwindSvg from "./svgs/TailwindSvg";
import ThreejsSvg from "./svgs/ThreejsSvg";
import TypescriptSvg from "./svgs/TypescriptSvg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CostumSkills = () => {
  const ref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#cover",
        start: "top bottom",
      },
    });
    const iconsArr = gsap.utils.toArray(".icon");
    tl.from(iconsArr, {
      opacity: 0,
      y: 24,
      stagger: 0.2,
      duration: 1,
    });

    tl.to(
      "#cover",
      {
        width: 0,
        duration: 2,
        ease: "power1.out",
      },
      0
    ).from(
      "#text",
      {
        opacity: 0,
        duration: 5,
      },
      0
    );
  });

  const techStack = [
    {
      name: "React",
      url: "https://react.dev/",
      icon: ReactSvg,
    },
    {
      name: "Typescript",
      url: "https://www.typescriptlang.org/",
      icon: TypescriptSvg,
    },
    {
      name: "MongoDb",
      url: "https://www.mongodb.com/",
      icon: MangodbSvg,
    },
    {
      name: "NextJs",
      url: "https://nextjs.org/",
      icon: NextjsSvg,
    },
    {
      name: "GSAP",
      url: "https://greensock.com/gsap/",
      icon: GsapSvg,
    },
    {
      name: "Tailwindcss",
      url: "https://tailwindcss.com/",
      icon: TailwindSvg,
    },
    {
      name: "Threejs",
      url: "https://threejs.org/",
      icon: ThreejsSvg,
    },
  ];

  return (
    <div
      ref={ref}
      className="flex flex-col gap-5 items-center border-y-2 border-dotted p-10 over"
    >
      <h1 className="text-pink-500 font-bold">Explore My Expertise !</h1>
      <h1 className="font-semibold lg:text-4xl text-2xl relative">
        <span id="cover" className="absolute bg-black h-full w-full"></span>
        <span id="text">My Advantages</span>
      </h1>

      <div className="lg:flex grid grid-cols-2 gap-5">
        {techStack.map((tech, i) => (
          <div
            key={i}
            className="icon flex flex-col items-center md:gap-10 border rounded-full md:p-8 mb-2"
          >
            <tech.icon />
            <h1 className="font-semibold md:text-xl">{tech.name}</h1>
            <a href={tech.url} rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon
                icon={faEllipsis}
                className="text-3xl text-gray-400"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CostumSkills;
