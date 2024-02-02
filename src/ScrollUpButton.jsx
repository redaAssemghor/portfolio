import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function ScrollUpButton() {
  const [scrollToUp, setScrollToUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollToUp(true);
      } else {
        setScrollToUp(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {scrollToUp && (
        <div className="fixed w-14 h-14 bottom-0 right-0 bg-gray-200 flex items-center justify-center m-2 rounded-full">
          <button className="flex" onClick={scrollUp}>
            <FontAwesomeIcon
              className="text-gray-500 text-2xl lg:text-4xl hover:scale-125 duration-500"
              icon={faArrowUp}
            />
          </button>
        </div>
      )}
    </>
  );
}

export default ScrollUpButton;
