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
      },
    });
    gsap.from(".icon", {
      opacity: 0,
      y: 24,
      stagger: 0.2,
      duration: 3,
      ease: "expo",
      scrollTrigger: {
        trigger: ".icon",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    // gsap.utils.toArray(".icon").forEach((icon) => {});

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

      <div className="lg:flex gap-5">
        <div className="icon flex flex-col items-center gap-10 border rounded-full p-8 mb-2">
          <ReactSvg />
          <h1 className="font-semibold text-xl">React</h1>
          <a
            href="https://react.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faEllipsis}
              className="text-3xl text-gray-400"
            />
          </a>
        </div>
        <div className="icon flex flex-col items-center gap-10 border rounded-full p-8 mb-2">
          <TypescriptSvg />
          <h1 className="font-semibold text-xl">Typescript</h1>
          <a
            href="https://www.typescriptlang.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faEllipsis}
              className="text-3xl text-gray-400"
            />
          </a>
        </div>

        <div className="icon flex flex-col items-center gap-10 border rounded-full p-8 mb-2">
          <MangodbSvg />
          <h1 className="font-semibold text-xl">MongoDb</h1>
          <a
            href="https://www.mongodb.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faEllipsis}
              className="text-3xl text-gray-400"
            />
          </a>
        </div>
        <div className="icon flex flex-col items-center gap-10 border rounded-full p-8 mb-2">
          <NextjsSvg />
          <h1 className="font-semibold text-xl">NextJs</h1>
          <a
            href="https://nextjs.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faEllipsis}
              className="text-3xl text-gray-400"
            />
          </a>
        </div>
        <div className="icon flex flex-col items-center gap-10 border rounded-full p-8 mb-2">
          <GsapSvg />
          <h1 className="font-semibold text-xl">GSAP</h1>
          <a
            href="https://greensock.com/gsap/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faEllipsis}
              className="text-3xl text-gray-400"
            />
          </a>
        </div>
        <div className="icon flex flex-col items-center gap-10 border rounded-full p-8 mb-2">
          <TailwindSvg />
          <h1 className="font-semibold text-xl">Tailwindcss</h1>
          <a
            href="https://tailwindcss.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faEllipsis}
              className="text-3xl text-gray-400"
            />
          </a>
        </div>
        <div className="icon flex flex-col items-center gap-10 border rounded-full p-8 mb-2">
          <ThreejsSvg />
          <h1 className="font-semibold text-xl">Threejs</h1>
          <a
            href="https://threejs.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faEllipsis}
              className="text-3xl text-gray-400"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CostumSkills;
