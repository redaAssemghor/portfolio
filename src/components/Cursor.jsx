"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

// A simple linear interpolation function.
const lerp = (x, y, a) => x * (1 - a) + y * a;

export default function BlurryCursor() {
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const circle = useRef(null); // The fixed black dot
  const delayedCircle = useRef(null); // The delayed cursor
  const rafId = useRef(null);
  const size = 10; // Fixed black dot size
  const delayedSize = 50; // Delayed circle size
  const delay = 0.075; // Delay factor for smoother movement

  // Manage mouse move events for the fixed black dot
  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;

    mouse.current = {
      x: clientX,
      y: clientY,
    };

    moveCircle(mouse.current.x, mouse.current.y); // Fixed dot
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

  // Effect to start animations and listeners
  useEffect(() => {
    animate(); // Start animation for delayed circle
    window.addEventListener("mousemove", manageMouseMove); // Track mouse movement for fixed dot

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div className="">
      {/* Fixed black dot */}
      <div>
        <div
          ref={circle}
          style={{
            backgroundColor: "black",
            width: size,
            height: size,
          }}
          className="top-0 left-0 fixed rounded-full"
        />
      </div>

      {/* Delayed cursor circle */}
      <div>
        <div
          ref={delayedCircle}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)", // Lighter color for delayed circle
            width: delayedSize,
            height: delayedSize,
          }}
          className="top-0 left-0 fixed rounded-full"
        />
      </div>
    </div>
  );
}
