import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Project({ title, description, url, repo, deployUrl }) {
  const ref = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        {
          opacity: 0.4,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ref.current,
            toggleActions: "play none none reverse",
            scrub: true,
          },
        }
      );
    }, ref.current);

    return () => context.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col project border p-10 rounded-3xl mb-10"
    >
      <img className="mb-4 rounded-3xl" src={url} alt={title} />

      <div className="text-gray-500 dark:text-gray-400 font-light my-6">
        <p>{description}</p>
      </div>
      <div className="md:flex justify-between items-center border-t">
        <h1 className="font-extrabold text-balance">{title}</h1>
        <div className="mt-5">
          <a
            className="border-2 rounded-full font-bold w-fit p-3 text-pink-600 hover:bg-pink-600 hover:text-white duration-500 cursor-pointer mr-3"
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="border-2 rounded-full font-bold w-fit p-3 text-pink-600 hover:bg-pink-600 hover:text-white duration-500 cursor-pointer"
            href={deployUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
