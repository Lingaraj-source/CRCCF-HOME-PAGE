import { FaUsers, FaBullseye, FaRocket, FaFileAlt } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const data = [
  {
    icon: <FaFileAlt />,
    title: "About the Organization",
    text: "CR Cyber Crime Foundation is dedicated to cyber awareness, digital investigations, and building a safer online ecosystem.",
  },
  {
    icon: <FaUsers />,
    title: "Who We Serve",
    text: "Students, organizations, and cybercrime victims.",
  },
  {
    icon: <FaBullseye />,
    title: "Core Focus",
    text: "Cyber awareness, IT solutions, and training programs designed to empower individuals.",
  },
  {
    icon: <FaRocket />,
    title: "Our Vision",
    text: "Building a secure, future-ready digital ecosystem with innovation.",
  },
];

export default function WhoWeAre() {
  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // 🔥 ACTIVE STEP DETECTION
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const index = Math.min(data.length - 1, Math.floor(v * data.length));
      setActiveIndex(index);
    });
  }, [scrollYProgress]);

  return (
    <section ref={ref} className="py-16 md:py-20">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
            Who We Are
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-5">
            <span className="text-gray-900">Empowering </span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Digital Security
            </span>
          </h2>

          <p className="text-gray-600 mt-3">
            Leading the cyber revolution through awareness and innovation.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* BACK LINE */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] hidden md:block bg-gray-200"></div>

          {/* PROGRESS LINE */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-1/2 top-0 origin-top h-full w-[3px] hidden md:block
            bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500"
          />

          <div className="flex flex-col gap-10">
            {data.map((item, i) => {
              const isActive = i === activeIndex;

              return (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row items-center ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* 🔥 CARD */}
                  <div className="md:w-1/2 px-4">
                    <div
                      className="relative group rounded-2xl p-[1px]
                    bg-gradient-to-r from-blue-200/40 via-indigo-200/40 to-purple-200/40
                    hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500
                    transition duration-500"
                    >
                      {/* SHINE EFFECT */}
                      <div className="absolute inset-0 overflow-hidden rounded-2xl">
                        <div
                          className="absolute -left-20 top-0 h-full w-20 bg-white/30 blur-xl
                        group-hover:left-full transition-all duration-700"
                        ></div>
                      </div>

                      <div
                        className={`relative p-6 md:p-7 rounded-2xl
                      bg-white/90 backdrop-blur-sm border border-white/60
                      transition-all duration-300
                      ${isActive ? "shadow-xl -translate-y-1" : "shadow-md"}
                      group-hover:-translate-y-[3px] group-hover:shadow-2xl`}
                      >
                        {/* TOP LINE */}
                        <div
                          className="absolute top-0 left-0 w-full h-[2px]
                        bg-gradient-to-r from-blue-500 to-purple-500 opacity-70"
                        ></div>

                        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                          {item.title}
                        </h3>

                        <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mt-2">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 🔥 ICON WITH ACTIVE PULSE */}
                  <div className="relative z-10 my-4 md:my-0">
                    <div
                      className={`relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center
                      rounded-full text-white transition duration-300
                      ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 scale-110 shadow-lg"
                          : "bg-gray-400"
                      }`}
                    >
                      {/* 🔥 PULSE RING */}
                      {isActive && (
                        <span
                          className="absolute inset-0 rounded-full
                        bg-blue-400/40 animate-ping"
                        ></span>
                      )}

                      <span className="relative z-10">{item.icon}</span>
                    </div>
                  </div>

                  <div className="md:w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}