import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-scroll";
import { useAnimation } from "framer-motion";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const location = useLocation();
  const ref = useRef(null);

  const btnText = "AVAILABLE.NOW";

  let [open, setOpen] = useState(false);
  let links = [
    {
      name: "About",
      path: "hero",
    },
    {
      name: "Projects",
      path: "projects",
    },
    {
      name: "Contact",
      path: "contact",
    },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled, controls]);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });

      tl.fromTo(
        ".btnText",
        { y: -20, opacity: 0 },
        { y: 1, stagger: 0.03, duration: 0.5, opacity: 1, ease: "elastic.out" },
        0
      ).to(".btnText2", { y: 20, opacity: 0, duration: 0.5, ease: "back" }, 0);

      const btnContainer = document.querySelector(".btnContainer");

      const handelEnter = () => {
        tl.restart();
      };

      const handelLeave = () => {
        tl.reverse();
      };

      if (btnContainer) {
        btnContainer.addEventListener("mouseenter", handelEnter);
        btnContainer.addEventListener("mouseleave", handelLeave);
      }
      return () => {
        context.revert;
        if (btnContainer) {
          btnContainer.removeEventListener("mouseenter", handelEnter);
          btnContainer.removeEventListener("mouseleave", handelLeave);
        }
      };
    }, ref);
  }, []);

  return (
    <div
      ref={ref}
      className={`top-0 sticky md:flex justify-between items-center bg-gray-50 z-10 ${
        isScrolled ? "" : " nav-bg"
      }  ${isScrolled ? "fade-down" : ""}`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center m-5">
          <div className="relative">
            <img
              className="h-16 md:h-20 md:mr-10 mr-5 "
              src="/logo.png"
              alt=""
            />
            {/* <span className="absolute h-6 w-6 rounded-full bg-green-600 right-5 bottom-1 lg:-bottom-1 lg:right-10 border-[5px]"></span> */}
          </div>
          <div>
            <h1 className=" text-2xl font-semibold mb-3">Assemghor Reda</h1>
            <a
              className="btnContainer flex items-center justify-center gap-2 p-2 border border-gray-500 rounded-full text-gray-500 dark:text-gray-400 font-bold hover:text-white hover:bg-pink-600 duration-500"
              href="/contact"
            >
              <div>
                <h1 className="absolute">
                  {btnText.split("").map((char, i) => (
                    <span key={i} className="btnText inline-block">
                      {char}
                    </span>
                  ))}
                </h1>
                <h1 className="btnText2">{btnText}</h1>
              </div>
              <FontAwesomeIcon icon={faPaperPlane} />
            </a>
          </div>
        </div>
        <FontAwesomeIcon
          className="md:hidden text-3xl m-5 cursor-pointer absolute right-0"
          icon={open ? faX : faBars}
          onClick={toggleMenu}
        />
      </div>
      {location.pathname === "/" && (
        <ul
          className={`md:flex gap-10 md:mr-10 m-10 md:relative md:bg-inherit transition-all duration-300 ease-in md:opacity-100 
                                    ${
                                      open
                                        ? "max-h-screen opacity-100 "
                                        : "opacity-0 max-h-0"
                                    }`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="md:p-0 md:m-0 font-black flex items-center justify-center p-2 m-1 rounded-lg hover:text-gray-400 border-2 cursor-pointer transition-colors duration-300"
            >
              <Link
                to={link.path}
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
                className="font-bold"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
