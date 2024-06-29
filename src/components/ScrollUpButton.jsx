import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollUpButton() {
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);
  const circleRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(ref.current, {
        scrollTrigger: {
          onUpdate: () => {
            const scrollY = window.scrollY;

            if (scrollY > 0 && !scrolled) {
              setScrolled(true);
            } else if (scrollY <= 0 && scrolled) {
              setScrolled(false);
            }
          },
        },
      });

      // Circle animation
      gsap.to(circleRef.current, {
        duration: 2,
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          scrub: true,
        },
      });
    }, ref);

    return () => context.revert();
  }, [scrolled]);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!scrolled) {
    return null;
  }

  return (
    <div
      ref={ref}
      className="fixed z-50 w-14 h-14 bottom-20 right-10 flex items-center justify-center bg-gray-300 rounded-full"
    >
      <button className="rounded-full flex items-center" onClick={scrollUp}>
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 100 100"
        >
          <circle
            ref={circleRef}
            cx="50"
            cy="50"
            r="45"
            stroke="#db2777"
            strokeWidth="5"
            fill="none"
            strokeDasharray="282.743"
            strokeDashoffset="282.743"
          />
        </svg>
        <FontAwesomeIcon
          icon={faArrowUp}
          className="text-black text-xl w-5 h-5 bg-white p-2 rounded-full"
        />
      </button>
    </div>
  );
}

export default ScrollUpButton;
