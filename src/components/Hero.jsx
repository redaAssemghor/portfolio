import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faDownload,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Typewriter, Cursor } from "react-simple-typewriter";
import Band from "./Band";
import { useRef } from "react";
import { Helmet } from "react-helmet";
import Tooltip from "./ui/SocialsButtons";
import Card from "./ui/SkillsCard";

export function Hero() {
  const ref = useRef(null);
  const nameText = "Hi I'm Reda,";

  return (
    <div className="relative" ref={ref} id="about">
      <Helmet>
        <title>Reda Assemghor,Full-stack developer</title>
        <meta name="description" content="main portfolio page" />
      </Helmet>
      <div className="flex flex-col lg:flex-row gap-4 lg:m-10 m-2 lg:px-44">
        <div className="border border-gray-300 p-10 rounded-3xl">
          <div className="lg:flex md:block justify-between border-b-2">
            <div className="md:py-6">
              <h1 className=" text-2xl md:text-6xl font-bold text-[#181818] md:pb-6">
                {nameText.split(" ").map((char, i) => (
                  <span key={i} className="name-text inline-block m-1">
                    {char}
                  </span>
                ))}
              </h1>
              <div className="md:text-5xl text-lg font-bold bg-gradient-to-r from-[--pink] to-blue-500 text-transparent bg-clip-text">
                <Typewriter
                  className=""
                  words={[
                    "Freelancer",
                    "Full-Stack Developer",
                    "Mobile Developer",
                    "Web Developer",
                  ]}
                  loop={true}
                />
                <Cursor cursorColor="blue" />
              </div>
            </div>
            <div className="lg:flex items-center pt-5">
              <p className=" text-xs font-bold text-slate-400 mr-5">
                I&apos;m on
              </p>
              <Tooltip />
            </div>
          </div>
          <div className=" mt-10 text-[#181818] font-light">
            <p className="border-b-2 pb-10">
              I’m a web developer with a passion for creating functional and
              visually appealing websites. Proficient in modern tools and best
              practices, I deliver successful projects on time and within
              budget. A collaborative team player, I’m eager to contribute my
              skills to make a positive impact on the web.
            </p>
            <div className="flex flex-col lg:flex-row justify-between mt-5 space-y-2">
              <div className="md:flex space-y-2 gap-4">
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <h3 className="font-light text-sm">
                    Lives In Rabat, Morocco
                  </h3>
                </div>
                <div className="">
                  <div className="flex gap-2 items-center">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a
                      href="mailto:Assemghor.Reda@Gmail.com"
                      className="font-light text-sm"
                    >
                      Assemghor.Reda@Gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="">
                <a
                  href="https://docs.google.com/document/d/1Bbxo3ZTP3gc0BI92y1JI8wXx5ti43dWw8XLQqlguB88/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center"
                >
                  <FontAwesomeIcon icon={faDownload} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
        <Sidebox />
      </div>
      <Band />
    </div>
  );
}

export function Sidebox() {
  const Languages = ["English", "French", "Arabic", "Russian"];

  return (
    <div className="border md:w-full border-gray-300 rounded-3xl p-5 lg:w-2/5 lg:mt-0 mt-5 space-y-4">
      <h1 className="font-semibold text-2xl">My Special Skills</h1>
      <Card />
      <div className="space-y-4">
        <h1 className="relative text-2xl font-semibold">Languages I Speak</h1>
        <ul className="text-[#181818] pb-4 grid grid-cols-2">
          {Languages.map((lan, i) => (
            <div key={i} className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheck} />
              <h3>{lan}</h3>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
