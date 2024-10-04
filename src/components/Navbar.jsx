import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { useAnimation } from "framer-motion";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.fromTo(
      ".btnText",
      { y: -40, opacity: 0 },
      { y: 1, stagger: 0.05, duration: 0.2, opacity: 1, ease: "circ.in" },
      0
    ).to(".btnText2", { y: 20, opacity: 0, duration: 1, ease: "back" }, 0);

    const handelEnter = () => {
      tl.restart();
    };

    const handelLeave = () => {
      tl.reverse();
    };

    const btnContainer = document.querySelector(".btnContainer");

    if (btnContainer) {
      btnContainer.addEventListener("mouseenter", handelEnter);
      btnContainer.addEventListener("mouseleave", handelLeave);

      // navlinks animation
      const navLinks = document.querySelectorAll(".navLink");

      navLinks.forEach((navLink) => {
        const linksAnimation = gsap.to(navLink, {
          paused: true,
          scale: 1.1,
          duration: 1,
          ease: "power1",
        });

        navLink.addEventListener("mouseenter", () => linksAnimation.play());
        navLink.addEventListener("mouseleave", () => linksAnimation.reverse());
      });
    }
  });

  return (
    <div
      ref={ref}
      className={`h-[200px] lg:px-10 top-0 sticky md:flex justify-between items-center z-20 ${
        isScrolled ? "bg-white fade-down shadow-sm" : "bg-white bg-no-repeat"
      } transition-all duration-300`}
      style={{
        backgroundImage: !isScrolled ? 'url("/header-bg.png")' : "none",
      }}
    >
      <div className="flex justify-between items-center w-full px-5 py-3">
        <div className="flex items-center">
          <div className="flex items-center overflow-hidden lg:h-40 lg:w-40 w-20 border-pink-600 -rotate-45 rounded-full border-l-8 bg-gray-100">
            <a href="/" className="">
              <img
                className="h-20 md:h-[160px] lg:translate-y-1 rotate-[45deg] rounded-full"
                src="/pic.png"
                alt="Logo"
              />
            </a>
          </div>
          <div className="ml-3">
            <h1 className="text-2xl font-semibold text-[#181818]">
              Assemghor Reda
            </h1>
            <a
              className="btnContainer flex items-center justify-center gap-2 p-2 mt-4 border border-gray-300 rounded-full text-gray-500 hover:text-white hover:bg-pink-600 transition duration-300"
              href="https://t.me/redaassemghor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  {btnText.split("").map((char, i) => (
                    <span
                      key={i}
                      className="btnText inline-block text-[#181818]"
                    >
                      {char}
                    </span>
                  ))}
                </div>
                <h1 className="btnText2 text-[#181818]">{btnText}</h1>
              </div>
              <FontAwesomeIcon className="text-[#181818]" icon={faPaperPlane} />
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
          className={`fixed inset-0 mr-8 bg-white bg-opacity-95 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
            open ? "opacity-100 visible z-20" : "opacity-0 invisible z-0"
          } md:relative md:bg-transparent md:opacity-100 md:visible md:flex md:flex-row md:items-center md:gap-4`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="navLink md:py-0 md:px-3 text-center font-semibold p-2 m-1 rounded-lg hover:text-pink-600 transition-colors duration-300 text-gray-800 text-2xl md:text-lg cursor-pointer"
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
