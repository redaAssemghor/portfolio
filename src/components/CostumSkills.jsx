import ReactSvg from "./svgs/ReactSvg";
import MangodbSvg from "./svgs/MangodbSvg";
import NextjsSvg from "./svgs/NextjsSvg";
import GsapSvg from "./svgs/GsapSvg";
import TailwindSvg from "./svgs/TailwindSvg";
import ThreejsSvg from "./svgs/ThreejsSvg";
import TypescriptSvg from "./svgs/TypescriptSvg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const CostumSkills = () => {
  return (
    <div className="flex flex-col gap-5 items-center border-y-2 border-dotted p-10">
      <h1 className="text-pink-500 font-bold">Explore My Expertise !</h1>
      <h1 className="font-semibold text-4xl">My Advantages</h1>

      <div className="lg:flex gap-5">
        <div className="flex flex-col items-center gap-10 border rounded-full p-8 mb-2">
          <ReactSvg />
          <h1 className="font-semibold text-xl">React</h1>
          <FontAwesomeIcon
            icon={faEllipsis}
            className="text-3xl text-gray-400"
          />
        </div>
        <div className="flex flex-col items-center gap-10 border rounded-full p-8 mb-2">
          <TypescriptSvg />
          <h1 className="font-semibold text-xl">Typescript</h1>
          <FontAwesomeIcon
            icon={faEllipsis}
            className="text-3xl text-gray-400"
          />
        </div>

        <div className="flex flex-col items-center gap-10 border rounded-full p-8 mb-2">
          <MangodbSvg />
          <h1 className="font-semibold text-xl">MongoDb</h1>
          <FontAwesomeIcon
            icon={faEllipsis}
            className="text-3xl text-gray-400"
          />
        </div>
        <div className="flex flex-col items-center gap-10 border rounded-full p-8 mb-2">
          <NextjsSvg />
          <h1 className="font-semibold text-xl">NextJs</h1>
          <FontAwesomeIcon
            icon={faEllipsis}
            className="text-3xl text-gray-400"
          />
        </div>
        <div className="flex flex-col items-center gap-10 border rounded-full p-8 mb-2">
          <GsapSvg />
          <h1 className="font-semibold text-xl">GSAP</h1>
          <FontAwesomeIcon
            icon={faEllipsis}
            className="text-3xl text-gray-400"
          />
        </div>
        <div className="flex flex-col items-center gap-10 border rounded-full p-8 mb-2">
          <TailwindSvg />
          <h1 className="font-semibold text-xl">Tailwindcss</h1>
          <FontAwesomeIcon
            icon={faEllipsis}
            className="text-3xl text-gray-400"
          />
        </div>
        <div className="flex flex-col items-center gap-10 border rounded-full p-8 mb-2">
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
