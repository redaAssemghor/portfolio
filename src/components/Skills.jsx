import { useRef } from "react";
import { icons } from "../icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Skills() {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  };

  const fadeAnimation = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <div className="p-10 mt-5 flex flex-col items-center">
      <motion.h1
        className="font-semibold text-pink-600 pb-10"
        variants={fadeAnimation}
        initial="initial"
        whileInView="animate"
        transition={{ delay: 0.5, duration: 2 }}
      >
        Explore My Expertise !
      </motion.h1>
      <div className="flex items-center">
        <FontAwesomeIcon
          className="cursor-pointer md:h-8 mr-4 opacity-40 hover:opacity-100"
          onClick={slideLeft}
          icon={faChevronLeft}
        />
        <div
          ref={sliderRef}
          className="w-[400px] flex lg:w-[1024px] md:w-[700px] overflow-x-scroll whitespace-nowrap scrollbar-hide snap-x"
        >
          {icons.map((icon, index) => (
            <div
              key={index}
              className="m-10 flex flex-col items-center snap-start"
            >
              <img
                src={icon.link}
                alt={icon.name}
                className="w-8 lg:min-w-32 cursor-pointer hover:scale-105 ease-in-out duration-300"
              />
              <h1 className="text-sm mt-3 text-gray-500 dark:text-gray-400 font-light">
                {icon.name}
              </h1>
            </div>
          ))}
        </div>
        <FontAwesomeIcon
          className=" cursor-pointer md:h-8 ml-4 opacity-40 hover:opacity-100"
          onClick={slideRight}
          icon={faChevronRight}
        />
      </div>
    </div>
  );
}

export default Skills;
