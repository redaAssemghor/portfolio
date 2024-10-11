import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faEnvelope,
  faDownload,
  faLanguage,
  faCheck,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { Typewriter, Cursor } from "react-simple-typewriter";
import Band from "./Band";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Helmet } from "react-helmet";

const Socials = [
  {
    link: "https://twitter.com/AssemghorReda",
    icon: faTwitter,
  },
  {
    link: "https://www.linkedin.com/in/assemghor-reda/",
    icon: faLinkedin,
  },
  {
    link: "https://github.com/redaAssemghor",
    icon: faGithub,
  },
];

export function Hero() {
  const ref = useRef(null);
  const nameText = "Hi I'm Reda,";

  useLayoutEffect(() => {
    let context = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(
        ".name-text",
        {
          opacity: 0,
          y: -24,
          stagger: 0.1,
          duration: 1,
          ease: "bounce.out",
        },
        0
      ).from(
        ".icons",
        {
          opacity: 0,
          y: -24,
          stagger: 0.5,
          duration: 1,
        },
        0
      );
    }, ref);

    return () => context.revert();
  }, []);

  return (
    <div className="relative" ref={ref} id="hero">
      <Helmet>
        <title>Reda Assemghor,developer&designer</title>
        <meta name="description" content="This is the home page" />
        <meta name="keywords" content="home, landing" />
      </Helmet>
      <div className="flex flex-col md:flex-row lg:m-10 m-2">
        <div className="border border-gray-300 p-10 rounded-3xl md:w-auto md:mr-5 h-max">
          <div className=" lg:flex md:block justify-between border-b-2 p-6">
            <div className="md:py-6">
              <h1 className=" text-2xl md:text-6xl font-bold text-[#181818] md:pb-6">
                {nameText.split(" ").map((char, i) => (
                  <span key={i} className="name-text inline-block m-1">
                    {char}
                  </span>
                ))}
              </h1>
              <div className="md:text-5xl text-2xl font-bold bg-gradient-to-r from-[--pink] to-blue-500 text-transparent bg-clip-text">
                <Typewriter
                  className=""
                  words={[
                    "Freelancer",
                    "Full-Stack Developer",
                    "UI/UX Designer",
                  ]}
                  loop={true}
                />
                <Cursor cursorColor="blue" />
              </div>
            </div>
            <div className="flex items-center mt-10">
              <p className=" text-xs font-bold text-slate-400 mr-5 name-text">
                I&apos;m on
              </p>
              <div className="icons flex gap-4">
                {Socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="text-xl lg:text-2xl duration-500 p-3 rounded-full text-[#3f3c3c] hover:text-white hover:bg-[--pink]"
                      style={{ border: "1px solid rgba(0, 0, 0, 0.2)" }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className=" mt-10 text-[#181818] font-light">
            <p className="border-b-2 pb-10">
              I&rsquo;m a full stack developer skilled in Next.js, React,
              Node.js, and TypeScript. I build scalable web apps with seamless
              user experiences and strong backends. Passionate about solving
              real-world problems through code and always excited to work on
              innovative projects!
            </p>
            <div className="flex flex-col lg:flex-row justify-between mt-5">
              <div className="md:flex gap-4">
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <h3 className="font-light text-sm">
                    Lives In Rabat, Morocco
                  </h3>
                </div>
                <div className="">
                  <div className="flex gap-2 items-center">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h3 className="font-light text-sm">
                      Assemghor.Reda@Gmail.com
                    </h3>
                  </div>
                </div>
              </div>
              <div className="">
                <a
                  href="https://www.doyoubuzz.com/reda-assemghor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center"
                >
                  <FontAwesomeIcon icon={faDownload} />
                  <a
                    href="https://www.doyoubuzz.com/reda-assemghor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-light text-sm cursor-pointer"
                  >
                    Download Resume
                  </a>
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
    <div className="border border-gray-300 rounded-3xl p-10 md:w-2/5 md:mt-0 mt-5">
      <div className="">
        <div className="flex gap-4 font-semibold cursor-pointer">
          <div>
            <FontAwesomeIcon icon={faLanguage} />
          </div>
          <h1 className="relative pb-4">Languages I Speak</h1>
        </div>
        <ul className="text-[#181818] pb-4">
          {Languages.map((lan, i) => (
            <div key={i} className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheck} />
              <h3>{lan}</h3>
            </div>
          ))}
        </ul>
      </div>
      <div className="">
        <div className="flex gap-4 mb-5 font-semibold cursor-pointer">
          <div>
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>
          <h1 className="relative">Education Level</h1>
        </div>
        <div className=" mb-3 border-y-2 p-2 text-[#181818]">
          <h1>Lobachevsky University</h1>
          <h3 className="">Computer Science And Information Technology</h3>
          <h6 className="text-xs">2017-2021</h6>
        </div>
        <div className="mb-3 border-b-2 p-2 text-[#181818]">
          <h1>The Odin Project</h1>
          <h3 className="">Full Stack Web Development Bootcamp</h3>
          <h6 className="text-xs">2021-2022</h6>
        </div>
      </div>
    </div>
  );
}
