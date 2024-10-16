import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tooltip from "./ui/SocialsButtons";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const location = useLocation();

  return (
    <footer className="mt-40 relative z-40">
      {location.pathname === "/" && <Info />}
      <div className="flex lg:flex-row flex-col justify-between items-center p-5 footer-bg lg:px-44">
        <Tooltip />
        <p className="text-[#181818] font-light lg:mr-6 lg:text-base text-sm">
          © 2024 . All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

function Info() {
  const footerText = "Let's Create Together A Unique Site That Looks Like You.";
  const ref = useRef();

  useLayoutEffect(() => {
    let context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      tl.from(
        ".char",
        {
          opacity: 0,
          duration: 3,
          x: 24,
          stagger: 0.2,
          ease: "expo.out",
        },
        0
      );
    }, ref);
    return () => context.revert();
  }, []);

  return (
    <div
      ref={ref}
      id="contact"
      className="flex flex-col items-center border-b-2 pb-10 mb-10 border-dotted relative"
    >
      <h1 className="font-semibold text-pink-600">Contact Me</h1>
      <p className="md:text-5xl text-xl font-bold lg:w-1/2 text-center m-8 ">
        {footerText.split(" ").map((char, i) => (
          <span key={i} className="char inline-block m-1">
            {char}
          </span>
        ))}
      </p>
      <div className="font-bold flex items-center">
        <div className="relative">
          <img className=" h-16 mr-8 img" src="/logo.png" alt="picture" />
        </div>
        <a href="/contact">
          <span className=" underline mr-1">SEND ME</span>{" "}
          <span className="text-pink-600 underline">A MESSAGE</span>
        </a>
      </div>
    </div>
  );
}
export default Footer;
