import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BlurryCursor({ isHovered }) {
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const circle = useRef(null); // The fixed black dot
  const delayedCircle = useRef(null); // The delayed cursor
  const rafId = useRef(null);
  const size = 8; // Fixed black dot size
  const delayedSize = 40; // Delayed circle size
  const delay = 0.075; // Delay factor for smoother movement

  // Manage mouse move events for the fixed black dot
  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.current = { x: clientX, y: clientY };
    moveCircle(mouse.current.x, mouse.current.y);
  };

  // Move the fixed black dot to the current mouse position
  const moveCircle = (x, y) => {
    if (!circle.current) return;
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  // Animate delayed circle movements with linear interpolation
  const animate = () => {
    const { x, y } = delayedMouse.current;
    delayedMouse.current = {
      x: lerp(x, mouse.current.x, delay),
      y: lerp(y, mouse.current.y, delay),
    };
    moveDelayedCircle(delayedMouse.current.x, delayedMouse.current.y);
    rafId.current = window.requestAnimationFrame(animate);
  };

  // Move the delayed circle smoothly to the interpolated position
  const moveDelayedCircle = (x, y) => {
    if (!delayedCircle.current) return;
    gsap.set(delayedCircle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  useEffect(() => {
    animate(); // Start animation for delayed circle
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div>
      <div>
        <div
          ref={circle}
          style={{
            backgroundColor: isHovered ? "red" : "black",
            width: size,
            height: size,
            position: "fixed",
            zIndex: 9999,
            pointerEvents: "none",
          }}
          className="top-0 left-0 fixed rounded-full"
        />
      </div>

      <div>
        <div
          ref={delayedCircle}
          style={{
            border: `1px solid gray`,
            width: isHovered ? delayedSize * 2 : delayedSize,
            height: isHovered ? delayedSize * 2 : delayedSize,
            opacity: isHovered ? 0.6 : 1,
            transition: "ease-out 0.2s",
            position: "fixed",
            zIndex: 9999,
            pointerEvents: "none",
          }}
          className="top-0 left-0 fixed rounded-full"
        />
      </div>
    </div>
  );
}

// Linear interpolation function
const lerp = (x, y, a) => x * (1 - a) + y * a;
