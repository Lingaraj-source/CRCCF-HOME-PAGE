import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShieldAlt,
  FaSearch,
  FaCode,
  FaUserGraduate,
  FaArrowRight,
} from "react-icons/fa";

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity Awareness",
      subtitle: "Building digital safety knowledge",
      desc: "We provide comprehensive training and education to build robust digital security knowledge across all levels, ensuring your teams are prepared for modern threats.",
      gradient: "from-blue-500 to-cyan-400",
      bgGlow: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      icon: <FaSearch />,
      title: "Digital Investigation",
      subtitle: "Supporting forensic analysis",
      desc: "Our expert support for digital forensics and cybercrime investigation methodologies helps trace, analyze, and secure critical digital evidence.",
      gradient: "from-indigo-500 to-purple-500",
      bgGlow: "bg-indigo-100",
      textColor: "text-indigo-600",
    },
    {
      icon: <FaCode />,
      title: "IT Development",
      subtitle: "Creating innovative solutions",
      desc: "We build custom software solutions and develop modern IT infrastructures designed to scale and solve complex contemporary business challenges.",
      gradient: "from-emerald-500 to-teal-400",
      bgGlow: "bg-emerald-100",
      textColor: "text-emerald-600",
    },
    {
      icon: <FaUserGraduate />,
      title: "Professional Training",
      subtitle: "Empowering with skills",
      desc: "Industry-oriented programs designed to build real-world skills, practical exposure, and professional competence for the next generation of tech leaders.",
      gradient: "from-orange-500 to-rose-400",
      bgGlow: "bg-orange-100",
      textColor: "text-orange-600",
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] font-sans relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-70 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            ⚙️ What We Do
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Our Core Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Domains
            </span>
          </h2>

          <p className="text-slate-500 text-base leading-relaxed">
            We work across multiple domains including cybersecurity, digital
            investigation, software development, and professional training.
          </p>
        </motion.div>

        {/* ================= ALIGNED GRID LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* ================= LEFT SIDE: 4 STACKED CARDS ================= */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {items.map((item, i) => {
              const isActive = activeIndex === i;
              return (
                <motion.button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className={`group relative w-full text-left flex items-center p-5 rounded-2xl transition-all duration-300 overflow-hidden outline-none border ${
                    isActive
                      ? "bg-white border-transparent shadow-[0_8px_30px_rgb(0,0,0,0.08)] scale-[1.02]"
                      : "bg-slate-50/50 border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  {/* Animated Gradient Border for Active State */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBorder"
                      className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${item.gradient}`}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Icon */}
                  <div
                    className={`mr-5 text-2xl p-3 rounded-xl transition-all duration-500 ${
                      isActive
                        ? `${item.textColor} ${item.bgGlow} scale-110 shadow-inner`
                        : "text-slate-400 bg-slate-100 group-hover:text-blue-500 group-hover:scale-110"
                    }`}
                  >
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h4
                      className={`font-bold text-lg transition-colors duration-300 ${isActive ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"}`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`text-sm transition-colors duration-300 ${isActive ? "text-slate-500" : "text-slate-400"}`}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* ================= RIGHT SIDE: LARGE DISPLAY CARD ================= */}
          {/* h-full ensures it stretches to perfectly match the height of the 4 left cards */}
          <div className="lg:col-span-7 h-full min-h-[450px]">
            <div className="relative w-full h-full bg-white rounded-3xl border border-slate-100 shadow-[0_20px_60px_rgb(0,0,0,0.05)] p-8 md:p-12 overflow-hidden flex flex-col justify-center">
              {/* Dynamic Animated Background Glow */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`glow-${activeIndex}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.15, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br ${items[activeIndex].gradient} blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/3`}
                />
              </AnimatePresence>

              {/* Changing Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 25,
                    duration: 0.4,
                  }}
                  className="relative z-10"
                >
                  {/* Floating Icon Animation */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                    }}
                    className={`w-20 h-20 mb-8 rounded-2xl flex items-center justify-center text-4xl text-white shadow-xl bg-gradient-to-br ${items[activeIndex].gradient}`}
                  >
                    {items[activeIndex].icon}
                  </motion.div>

                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    {items[activeIndex].title}
                  </h3>

                  <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-xl">
                    {items[activeIndex].desc}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-3 px-6 py-3 rounded-full text-white font-semibold shadow-md bg-gradient-to-r ${items[activeIndex].gradient} hover:shadow-lg transition-shadow`}
                  >
                    Explore Domain
                    <FaArrowRight className="text-sm" />
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}