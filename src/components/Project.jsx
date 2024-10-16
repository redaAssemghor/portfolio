import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projectsScrollAnimnation } from "../animations/projectsAnimations";
import Tooltip from "./ui/ProjectBtn";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

gsap.registerPlugin(ScrollTrigger);

function Project({
  title,
  description,
  url,
  repo,
  deployUrl,
  techStack,
  onHoverChange,
}) {
  const ref = useRef(null);

  const btns = [
    {
      url: repo,
      icon: faGithub,
      bgColor: "#000",
    },
    {
      url: deployUrl,
      icon: faArrowUpRightFromSquare,
      bgColor: "#ffffff",
    },
  ];

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
    <div ref={ref} className="flex flex-col">
      <CardContainer className="">
        <CardBody className="bg-gray-50 relative  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-full rounded-xl lg:p-10 p-2 border space-y-8">
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={url}
              className="w-[500px] lg:w-full lg:min-w-[1000] object-cover rounded-xl group-hover/card:shadow-xl"
              alt={title}
            />
          </CardItem>

          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
          >
            <div className="space-y-4">
              <p className="lg:text-2xl">{description}</p>
              <ul className="flex lg:gap-4 gap-2 flex-wrap">
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
          </CardItem>

          <CardItem
            translateZ={60}
            className="flex justify-between items-center w-full font-bold text-neutral-600 dark:text-white"
          >
            <h1 className="lg:text-2xl">{title}</h1>
            <CardItem translateY={-20} rotateY={-50}>
              <Tooltip btns={btns} />
            </CardItem>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}

export default Project;
