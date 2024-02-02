import Project from "./Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { motion, animate } from "framer-motion";
import { data } from "../../projectsData";

function Projects() {
  const fadeAnimation = {
    initial: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div id="projects" className="lg:flex m-10 relative">
      <div className="flex flex-col lg:w-1/2 h-fit lg:top-1/2 lg:sticky">
        <h1 className="font-semibold text-pink-600">
          Recent Completed Project
        </h1>
        <motion.p
          className=" text-4xl font-semibold text-balance my-10"
          variants={fadeAnimation}
          initial="initial"
          whileInView="animate"
          transition={{
            duration: "1",
            delay: "0.5",
          }}
        >
          Does More Then Ever Platform To Achieve Goal Stages.
        </motion.p>
        <div className="text-gray-400 w-fit rounded-lg p-4 border-2 hover:border-black hover:text-black duration-500 cursor-pointer">
          <a className="flex gap-3" href="">
            <h1 className="font-bold">HIRE ME</h1>
            <FontAwesomeIcon icon={faCircleRight} className="size-6" />
          </a>
        </div>
      </div>
      <div className="lg:w-1/2">
        {data.map((prj, i) => (
          <Project
            key={i}
            title={prj.name}
            url={prj.url}
            description={prj.description}
          />
        ))}
      </div>
    </div>
  );
}
export default Projects;
