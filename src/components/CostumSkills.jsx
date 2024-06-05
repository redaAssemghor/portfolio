import ReactSvg from "./svgs/ReactSvg";
import MangodbSvg from "./svgs/MangodbSvg";
import NextjsSvg from "./svgs/NextjsSvg";
import GsapSvg from "./svgs/GsapSvg";
import TailwindSvg from "./svgs/TailwindSvg";
import ThreejsSvg from "./svgs/ThreejsSvg";
import TypescriptSvg from "./svgs/TypescriptSvg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CostumSkills = () => {
  const ref = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        ".icon",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".icon",
          },
        }
      );
      gsap.to(".cover", {
        width: 0,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".cover",
        },
      });
    }, ref);
    return () => context.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-5 items-center border-y-2 border-dotted p-10 over"
    >
      <h1 className="text-pink-500 font-bold">Explore My Expertise !</h1>
      <h1 className="font-semibold text-4xl relative">
        <span className="cover absolute bg-black h-full w-full"></span>
        My Advantages
      </h1>

      <div className="lg:flex gap-5">
        <div className="icon flex flex-col items-center gap-10 border rounded-full p-8 mb-2">
          <ReactSvg />
          <h1 className="font-semibold text-xl">React</h1>
          <FontAwesomeIcon
            icon={faEllipsis}
            className="text-3xl text-gray-400"
          />
        </div>
        <div className="icon flex flex-col items-center gap-10 border rounded-full p-8 mb-2">
          <TypescriptSvg />
          <h1 className="font-semibold text-xl">Typescript</h1>
          <FontAwesomeIcon
            icon={faEllipsis}
            className="text-3xl text-gray-400"
          />
        </div>

        <div className="icon flex flex-col items-center gap-10 border rounded-full p-8 mb-2">
          <MangodbSvg />
          <h1 className="font-semibold text-xl">MongoDb</h1>
          <FontAwesomeIcon
            icon={faEllipsis}
            className="text-3xl text-gray-400"
          />
        </div>
        <div className="icon flex flex-col items-center gap-10 border rounded-full p-8 mb-2">
          <NextjsSvg />
          <h1 className="font-semibold text-xl">NextJs</h1>
          <FontAwesomeIcon
            icon={faEllipsis}
            className="text-3xl text-gray-400"
          />
        </div>
        <div className="icon flex flex-col items-center gap-10 border rounded-full p-8 mb-2">
          <GsapSvg />
          <h1 className="font-semibold text-xl">GSAP</h1>
          <FontAwesomeIcon
            icon={faEllipsis}
            className="text-3xl text-gray-400"
          />
        </div>
        <div className="icon flex flex-col items-center gap-10 border rounded-full p-8 mb-2">
          <TailwindSvg />
          <h1 className="font-semibold text-xl">Tailwindcss</h1>
          <FontAwesomeIcon
            icon={faEllipsis}
            className="text-3xl text-gray-400"
          />
        </div>
        <div className="icon flex flex-col items-center gap-10 border rounded-full p-8 mb-2">
          <ThreejsSvg />
          <h1 className="font-semibold text-xl">Threejs</h1>
          <FontAwesomeIcon
            icon={faEllipsis}
            className="text-3xl text-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default CostumSkills;
