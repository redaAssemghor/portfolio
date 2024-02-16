import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faStackOverflow,
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
import Skills from "./Skills";
import { Fade } from "react-awesome-reveal";

export function Hero() {
  return (
    <div id="hero" className="flex flex-col md:flex-row m-10">
      <div className="">
        <div className="border border-gray-300 p-10 rounded-3xl md:w-auto md:mr-5 h-max">
          <div className=" lg:flex md:block justify-between border-b-2 ">
            <div>
              <h1 className=" text-2xl md:text-5xl font-bold text-gray-900 ">
                Hi I'm Reda,
              </h1>
              <div className="md:text-5xl text-2xl font-bold bg-gradient-to-r from-pink-600 to-blue-500 text-transparent bg-clip-text">
                <Typewriter
                  className=""
                  words={["Freelancer", "Developer", "Bug Bounty Hunter"]}
                  loop={true}
                />
                <Cursor cursorColor="blue" />
              </div>
            </div>
            <div className="flex items-center mt-10">
              <p className=" text-xs font-bold text-slate-300 mr-5">I'm on</p>
              <div>
                <a
                  href="https://twitter.com/AssemghorReda"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-gray-500 text-2xl lg:text-4xl hover:scale-125 duration-500"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/assemghor-reda-2382162b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-gray-500 text-xl lg:text-4xl ml-4 hover:scale-125 duration-500"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://stackoverflow.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faStackOverflow}
                    className="text-gray-500 text-2xl lg:text-4xl ml-4 hover:scale-125 duration-500"
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/redaAssemghor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-gray-500 text-2xl lg:text-4xl ml-4 hover:scale-125 duration-500"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className=" mt-10 text-gray-500 dark:text-gray-400 font-light">
            <p className="border-b-2 pb-10">
              Code Craftsman on a Mission to Transform Ideas into Reality.
              Welcome to my digital playground! I'm a Full Stack Developer with
              a mission to turn innovative ideas into functional, elegant, and
              scalable solutions. With a toolkit that spans front-end aesthetics
              to back-end logic, I'm ready to elevate your digital presence to
              new heights.
            </p>
            <div className="flex flex-col md:flex-row justify-between mt-5">
              <div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <h3 className="font-light text-sm">
                    Lives In Rabat, Morocco
                  </h3>
                </div>
              </div>
              <div className="">
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <h3 className="font-light text-sm">
                    Assemghor.Reda@Gmail.com
                  </h3>
                </div>
              </div>
              <div className="">
                <a
                  href="https://www.linkedin.com/in/assemghor-reda-2382162b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center"
                >
                  <FontAwesomeIcon icon={faDownload} />
                  <h3 className="font-light text-sm">Download Resume</h3>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Skills />
      </div>
      <Sidebox />
    </div>
  );
}

export function Sidebox() {
  return (
    <div className="border border-gray-300 rounded-3xl p-10 md:w-2/5 md:mt-0 mt-5">
      <div className="">
        <h1 className=" font-bold text-2xl rainbow-heading relative pb-5">
          My Special Skills
        </h1>
        <ul className="text-gray-500 dark:text-gray-400 font-bold m-3">
          <li>Team Leadership</li>
          <li>Programming Languages</li>
          <li>Program Frameworks</li>
          <li>Problem Solving</li>
          <li>Communication Skills</li>
        </ul>
      </div>
      <div className="">
        <div className="flex gap-4 mb-5 font-semibold">
          <a href="">
            <FontAwesomeIcon icon={faLanguage} />
          </a>
          <h1 className="rainbow2-heading relative pb-4">Languages Expert</h1>
        </div>
        <ul className="text-gray-500 dark:text-gray-400 font-bold">
          <div className="flex gap-2">
            <a href="">
              <FontAwesomeIcon icon={faCheck} />
            </a>
            <h3>English</h3>
          </div>
          <div className="flex gap-2">
            <a href="">
              <FontAwesomeIcon icon={faCheck} />
            </a>
            <h3>Frensh</h3>
          </div>
          <div className="flex gap-2">
            <a href="">
              <FontAwesomeIcon icon={faCheck} />
            </a>
            <h3>Arabic</h3>
          </div>
          <div className="flex gap-2">
            <a href="">
              <FontAwesomeIcon icon={faCheck} />
            </a>
            <h3>Russin</h3>
          </div>
        </ul>
      </div>
      <div className="">
        <div className="flex gap-4 mb-5 font-semibold">
          <a href="">
            <FontAwesomeIcon icon={faGraduationCap} />
          </a>
          <h1 className="rainbow3-heading relative pb-4">Education Level</h1>
        </div>
        <div className=" mb-3 border-y-2 p-2 text-gray-500 dark:text-gray-400 font-bold">
          <h1>Lobachevsky University</h1>
          <h3 className="">Computer Science And Information Technology</h3>
          <h6 className="text-xs">2017-2021</h6>
        </div>
        <div className="mb-3 border-y-2 p-2 text-gray-500 dark:text-gray-400 font-bold">
          <h1>The Odin Project</h1>
          <h3 className="">Full Stack Web Development Bootcamp</h3>
          <h6 className="text-xs">2021-2022</h6>
        </div>
      </div>
    </div>
  );
}
