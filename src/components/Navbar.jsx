import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useAnimation } from "framer-motion";
import { useLocation } from "react-router-dom";
import "../App.css";

function Navbar() {
  const location = useLocation();

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
  return (
    <div
      className={`top-0 sticky md:flex justify-between items-center bg-gray-50 z-10 nav-bg ${
        isScrolled ? "fade-down" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center m-5">
          <img
            className="h-20 md:h-40 border-2 rounded-full md:mr-10 mr-5 border-pink-600"
            src="src/assets/profile.jpg"
            alt=""
          />
          <div className="">
            <h1 className=" text-2xl font-semibold mb-3">Assemghor Reda</h1>
            <div className="flex items-center justify-center border border-gray-500 rounded-full text-gray-500 dark:text-gray-400 font-bold hover:text-white hover:bg-pink-600 duration-500">
              <FontAwesomeIcon className="" icon={faPaperPlane} />
              <a className="p-2" href="/contact">
                AVAILABLE NOW
              </a>
            </div>
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
          className={`md:flex gap-10 font-semibold md:mr-10 m-10 md:relative md:bg-inherit transition-all duration-300 ease-in md:opacity-100 
                                    ${
                                      open
                                        ? "max-h-screen opacity-100 "
                                        : "opacity-0 max-h-0"
                                    }`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="md:p-0 md:m-0 my-3 p-3 pl-40 border-rainbow text-base md:border-none hover:text-gray-300 border-2 cursor-pointer transition-colors duration-300"
            >
              <Link
                to={link.path}
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
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
