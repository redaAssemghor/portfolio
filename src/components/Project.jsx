import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projectsScrollAnimnation } from "../animations/projectsAnimations";

gsap.registerPlugin(ScrollTrigger);

function Project({ title, description, url, repo, deployUrl, techStack }) {
  const ref = useRef(null);

  useGSAP(() => {
    projectsScrollAnimnation(ref.current);
  });

  const colors = [
    "#fef9e7 ",
    "#f6ddcc",
    "#d5f5e3",
    "#f5eef8",
    "#eaeded",
    "#f9ebea",
    "#f9e79f",
    "#aed6f1",
  ];

  // Random color generator
  const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div ref={ref} className="flex flex-col border p-10 rounded-3xl mb-10">
      <img
        className="mb-4 rounded-3xl md:w-full min-w-[1000]"
        src={url}
        alt={title}
      />

      <div className="text-[#181818] font-light my-6">
        <p>{description}</p>
        <ul className="flex gap-5 py-2 flex-wrap">
          {techStack.map((tech, index) => (
            <li
              key={index}
              style={{ backgroundColor: randomColor() }}
              className="rounded-full px-2 text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:flex justify-between items-center border-t">
        <h1 className="font-extrabold text-balance">{title}</h1>
        <div className="mt-5">
          <a
            className="border-2 rounded-full font-bold w-fit p-3 text-pink-600 hover:bg-pink-600 hover:text-white duration-1000 cursor-pointer mr-3"
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          {deployUrl && (
            <a
              className="border-2 rounded-full font-bold w-fit p-3 text-pink-600 hover:bg-pink-600 hover:text-white duration-1000 cursor-pointer"
              href={deployUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
