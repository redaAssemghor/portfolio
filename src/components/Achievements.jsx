import { useState } from "react";

const achievementsData = [
  {
    number: 90,
    text: "Projects Completed",
  },
  {
    number: 3,
    text: "years of experience",
  },
  {
    number: 20,
    text: "Happy Clients",
  },
];

const Achievements = () => {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <section className="flex justify-center">
      {achievementsData.map((achievement, index) => (
        <div
          key={index}
          className="relative -m-4 overflow-hidden flex flex-col items-center justify-center gap-8 h-[400px] w-[400px] rounded-full"
          style={{ border: "1px solid rgba(0, 0, 0, 0.2)" }}
          onMouseEnter={() => setIsHovered(index)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <h1
            className={`font-black text-5xl z-50 relative ${
              isHovered !== index ? "text-black" : "text-white"
            }`}
          >
            {achievement.number}+
          </h1>
          <p
            className={`font-black text-3xl z-50 relative ${
              isHovered !== index ? "text-black" : "text-white"
            }`}
          >
            {achievement.text}
          </p>
          <span
            className={`absolute rounded-full bg-black h-[400px] w-[400px] duration-700 ${
              isHovered !== index
                ? "translate-y-3/4 -translate-x-40"
                : "translate-y-0 -translate-x-0"
            }`}
          ></span>
        </div>
      ))}
    </section>
  );
};

export default Achievements;
