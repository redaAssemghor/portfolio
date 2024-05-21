import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function ScrollUpButton() {
  const [scrollToUp, setScrollToUp] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrolled = (scrollPosition / totalHeight) * 100;

      setScrollToUp(scrollPosition > 100);
      setScrollPercentage(scrolled);
      console.log(`Scroll percentage: ${scrolled}%`); // Debug scroll percentage
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => {
    console.log("Scroll up triggered"); // Debug to check if function is triggered
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!scrollToUp) return null;

  return (
    <button
      onClick={scrollUp}
      className="fixed w-16 h-16 bottom-20 right-10 m-2 flex items-center justify-center rounded-full z-50 cursor-pointer"
      style={{
        background: `conic-gradient(from 0deg, #cfcccd ${scrollPercentage}%, transparent ${scrollPercentage}% 100%)`,
      }}
    >
      <FontAwesomeIcon
        icon={faArrowUp}
        className="text-gray-500 text-2xl lg:text-4xl hover:scale-125 duration-500"
      />
    </button>
  );
}

export default ScrollUpButton;
