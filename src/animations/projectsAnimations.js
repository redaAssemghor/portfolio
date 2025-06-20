import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

// Scroll animation for project.jsx
export const projectsScrollAnimnation = (element) => {
  gsap.fromTo(
    element,
    {
      opacity: 0.3,
      scale: 0.8,
    },
    {
      opacity: 1,
      scale: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: element,
        top: "top top",
        end: "bottom 50%",
        scrub: 0.1,
      },
    }
  );
};

// Scroll animation for text on projects.jsx
export const textScrollAnimation = (element) => {
  gsap.from(
    element,
    {
      opacity: 0,
      xPercent: 50,
      stagger: 0.2,
      duration: 2,
      ease: "expo",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    },
    0
  );
};

// Scroll projects.jsx
export const scrollanimation = (rightElement, leftElement) => {
  gsap.to(leftElement, {
    scrollTrigger: {
      trigger: rightElement,
      start: "top 30%",
      end: "bottom bottom",
      pin: true,
      scrub: true,
    },
  });
};

// counter animation for achievements.jsx
export const counterAnimation = (element, num) => {
  const counter = {
    value: 0,
  };

  gsap.to(counter, {
    value: num,
    duration: 2,
    ease: "power1.inOut",
    onUpdate: function () {
      element.textContent = counter.value.toFixed(0);
    },
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
    },
  });
};

// band animation for band.jsx
export const bandAnimation = (element) => {
  gsap.fromTo(
    element,
    {
      xPercent: 100,
    },
    {
      xPercent: -100,
      duration: 40,
      ease: "none",
      repeat: -1,
    }
  );
};
