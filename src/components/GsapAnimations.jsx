import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const TestingGsap = () => {
  const text = "Testin gGsapTe stingG sapTe  sting G sap";
  const container = useRef();

  useLayoutEffect(() => {
    let context = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".char", {
        opacity: 0,
        y: 24,
        stagger: 0.1,
        duration: 2,
        ease: "power3.out",
      });
    }, container);

    return () => context.revert();
  }, []);

  return (
    <div ref={container} className="h-60 w-60 border-2 bg-black text-white">
      <h1 className="tester">tester</h1>
      <h1 className="h1">
        {text.split(" ").map((char, i) => (
          <span className="char inline-block m-1" key={i}>
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default TestingGsap;
