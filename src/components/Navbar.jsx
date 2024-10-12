import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "./ui/TelegramButton";
import MenuButton from "./ui/Menu";

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const ref = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);

  useGSAP(() => {
    ScrollTrigger.create({
      onUpdate: (self) => {
        if (self.scroll() > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      },
    });
  }, [isScrolled]);

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

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
      className={`h-[200px] lg:px-44 top-0 sticky z-50 ${
        isScrolled ? "bg-white fade-down shadow-sm" : "bg-white bg-no-repeat"
      } transition-all duration-300`}
      style={{
        backgroundImage: !isScrolled ? 'url("/header-bg.png")' : "none",
      }}
    >
      <div className="flex justify-between w-full items-center lg:px-5 px-2 py-3">
        <div className="flex lg:gap-8 items-center">
          <div className="flex items-center overflow-hidden lg:h-40 lg:w-40 w-20 border-[--pink] -rotate-45 rounded-full border-l-8 shadow-md shadow-[--pink] bg-gray-100">
            <a href="/">
              <img
                className="h-20 lg:h-[210px] object-contain bg-center rotate-[45deg] scale-x-[-1] rounded-full"
                src="/images/avatar.jpg"
                alt="Logo"
              />
            </a>
          </div>
          <div className="ml-3 lg:space-y-5">
            <h1 className="text-2xl lg:block hidden font-semibold text-[#181818]">
              Assemghor Reda
            </h1>
            <Button />
          </div>
        </div>
        <div className="relative ">
          <MenuButton />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
