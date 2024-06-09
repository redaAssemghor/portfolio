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
        context.revert();
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
      className={`top-0 sticky md:flex justify-between items-center z-20 shadow-md ${
        isScrolled ? "bg-white fade-down" : "bg-gray-50 bg-cover bg-center"
      } transition-all duration-300`}
      style={{
        backgroundImage: !isScrolled
          ? 'url("/path/to/your/background-image.jpg")'
          : "none",
      }}
    >
      <div className="flex justify-between items-center w-full px-5 py-3">
        <div className="flex items-center">
          <img className="h-16 md:h-20" src="/logo.png" alt="Logo" />
          <div className="ml-3">
            <h1 className="text-2xl font-semibold text-gray-800">
              Assemghor Reda
            </h1>
            <a
              className="btnContainer flex items-center justify-center gap-2 p-2 mt-2 border border-gray-300 rounded-full text-gray-500 hover:text-white hover:bg-pink-600 transition duration-300"
              href="/contact"
            >
              <div className="relative">
                <h1 className="absolute inset-0 flex items-center justify-center">
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
          className="md:hidden text-3xl cursor-pointer z-30"
          icon={open ? faX : faBars}
          onClick={toggleMenu}
        />
      </div>
      {location.pathname === "/" && (
        <ul
          className={`fixed inset-0 bg-white bg-opacity-95 flex flex-col justify-center items-center transition-all duration-300 ease-in-out ${
            open ? "opacity-100 visible z-20" : "opacity-0 invisible z-0"
          } md:relative md:bg-transparent md:opacity-100 md:visible md:flex md:flex-row md:items-center md:gap-10`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="md:py-0 md:px-3 text-center font-semibold p-2 m-1 rounded-lg hover:text-pink-600 transition-colors duration-300 text-gray-800 text-2xl md:text-lg cursor-pointer"
            >
              <Link
                to={link.path}
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
                className="block"
                onClick={() => setOpen(false)}
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
