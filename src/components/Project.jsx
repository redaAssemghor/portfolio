"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

function Project({ title, description, url }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      className="border border-gray-300 rounded-3xl p-5 mb-10"
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <div className="flex flex-col">
        <div className="">
          <img className="h-80 w-fit rounded-3xl" src={url} alt={title} />
        </div>
        <div className="flex justify-between items-center p-5 border-b">
          <h1 className="font-extrabold text-balance">{title}</h1>
          <a
            className="border-2 rounded-full font-bold w-fit p-3 text-pink-600 hover:bg-pink-600 hover:text-white duration-500"
            href="#"
          >
            Discover Project
          </a>
        </div>
        <div className="text-gray-500 dark:text-gray-400 font-light ml-5">
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
