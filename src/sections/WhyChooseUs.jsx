import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLaptopCode,
  FaBrain,
  FaUserTie,
  FaGlobe,
  FaLock,
  FaRocket,
  FaChartLine,
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    {
      title: "Industry-Focused Cybersecurity",
      desc: "We combine deep cybersecurity knowledge with real-world application, focusing on practical solutions to tackle modern cyber threats.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Practical Learning",
      desc: "Hands-on experience through live projects, case studies, and real-time problem-solving to build industry-ready skills.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Research-Driven Approach",
      desc: "Continuous research and analysis to stay updated with evolving cyber trends and deliver future-ready knowledge.",
      icon: <FaBrain />,
    },
    {
      title: "Expert Mentorship",
      desc: "Experienced mentors provide continuous support, industry insights, and structured guidance for your professional growth.",
      icon: <FaUserTie />,
    },
    {
      title: "Multi-Domain Expertise",
      desc: "Cybersecurity, digital investigation, software development, and digital marketing unified under one comprehensive platform.",
      icon: <FaGlobe />,
    },
    {
      title: "Focus on Security & Ethics",
      desc: "All our solutions are fundamentally built on ethical practices, strict security protocols, and responsible technology usage.",
      icon: <FaLock />,
    },
    {
      title: "Career-Oriented Programs",
      desc: "Targeted training and internships specifically designed to bridge the gap between academic knowledge and industry demands.",
      icon: <FaRocket />,
    },
    {
      title: "Proven Project Experience",
      desc: "A track record of multiple national and international projects showcasing our platform's reliability and massive scalability.",
      icon: <FaChartLine />,
    },
    {
      title: "Supportive Environment",
      desc: "A collaborative ecosystem where learners consistently grow through interaction, peer mentorship, and continuous improvement.",
      icon: <FaUsers />,
    },
  ];

  const totalCards = features.length;

  // Premium Auto-Play Logic
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === totalCards - 1 ? 0 : prev + 1));
    }, 3500); // Smoothly glides every 3.5 seconds

    return () => clearInterval(interval);
  }, [isHovered, totalCards]);

  const slideLeft = () => {
    setActiveIndex((prev) => (prev === 0 ? totalCards - 1 : prev - 1));
  };

  const slideRight = () => {
    setActiveIndex((prev) => (prev === totalCards - 1 ? 0 : prev + 1));
  };

  // Calculates how far to move the track based on the active index
  // Assumes a card width of roughly 340px + 24px gap = 364px shift
  const trackOffset = -(activeIndex * 364);

  return (
    <section className="py-20 bg-[#F8FAFC] font-sans relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-12 relative z-10">
        {/* ================= HEADER ================= */}
        {/* Reduced mb-14 to mb-8 to close the gap between text and cards */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Why Choose Us
          </motion.div>

          {/* Changed font-black to font-extrabold and slate-900 to slate-800 for a cleaner look */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight leading-tight"
          >
            Building Trust Through <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              Expertise & Innovation
            </span>
          </motion.h2>

          {/* Increased text size to text-base/text-lg for better reading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            At CR Cyber Crime Foundation, we go beyond traditional learning by
            integrating cybersecurity, research, and real-world applications.
          </motion.p>
        </div>

        {/* ================= ANIMATED CAROUSEL AREA ================= */}
        {/* Removed extra vertical padding (py-10) to pull cards closer to text */}
        <div
          className="relative group px-2 md:px-4 py-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={slideLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.1)] flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:scale-110 transition-all duration-300 active:scale-95"
          >
            <FaChevronLeft className="text-sm" />
          </button>

          <button
            onClick={slideRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.1)] flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:scale-110 transition-all duration-300 active:scale-95"
          >
            <FaChevronRight className="text-sm" />
          </button>

          {/* Framer Motion Animated Track */}
          <div className="overflow-hidden w-full relative h-[420px] flex items-center">
            {/* The Track that slides left/right */}
            <motion.div
              animate={{ x: trackOffset }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
                mass: 1,
              }}
              className="flex gap-6 absolute left-1/2 lg:left-[calc(50%-170px)]"
              // Centers the active card in the viewport
            >
              {features.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <motion.div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    animate={{
                      scale: isActive ? 1.05 : 0.85,
                      opacity: isActive ? 1 : 0.4,
                    }}
                    transition={{ duration: 0.4 }}
                    className={`shrink-0 w-[300px] sm:w-[340px] h-[350px] relative bg-white border rounded-3xl p-8 transition-colors duration-300 flex flex-col cursor-pointer ${
                      isActive
                        ? "border-blue-200 shadow-[0_20px_50px_rgba(37,99,235,0.15)] z-20"
                        : "border-slate-100 shadow-sm z-10 hover:border-blue-100 hover:opacity-70"
                    }`}
                  >
                    {/* Glowing Top Line for Active Card */}
                    {isActive && (
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-t-3xl" />
                    )}

                    {/* Icon Container */}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all duration-500 ${
                        isActive
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                          : "bg-slate-50 text-blue-400 border border-slate-100"
                      }`}
                    >
                      {item.icon}
                    </div>

                    {/* Typography - Cleaner font weights */}
                    <h3
                      className={`text-xl font-bold mb-3 leading-tight transition-colors duration-300 ${
                        isActive ? "text-slate-800" : "text-slate-600"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed flex-grow transition-colors duration-300 ${
                        isActive ? "text-slate-600" : "text-slate-400"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}