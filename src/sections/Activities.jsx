import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaUserGraduate,
  FaBrain,
  FaCode,
  FaChevronDown,
  FaBullhorn,
} from "react-icons/fa";

export default function Activities() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const items = [
    {
      icon: <FaChartLine />,
      title: "Cyber Awareness Campaigns",
      desc: "Conducting widespread campaigns to educate communities about digital threats and safety practices.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Training & Workshops",
      desc: "Organizing hands-on training sessions and interactive workshops for skill development.",
    },
    {
      icon: <FaBrain />,
      title: "Research Initiatives",
      desc: "Supporting cutting-edge research in cybersecurity and digital innovation domains.",
    },
    {
      icon: <FaCode />,
      title: "Technology-Driven Projects",
      desc: "Engaging in innovative technology projects that address real-world challenges and promote digital transformation across various sectors.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white font-sans overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* --- HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#EFF6FF] border border-[#DBEAFE] mb-8 shadow-sm">
            <FaBullhorn className="text-[#3B82F6] text-xs" />
            <span className="text-[#2563EB] font-bold tracking-[0.1em] text-[11px] uppercase">
              Activities
            </span>
          </div>

          {/* Main Heading with more visible blue */}
          <h2 className="text-4xl md:text-6xl font-bold text-[#0F172A] leading-tight mb-8">
            Our <span className="text-[#3B82F6]">Activities </span>
          </h2>

          {/* Description - Size refined for a "Neat" look */}
          <p className="text-[#64748B] text-base md:text-lg leading-relaxed max-w-4xl mx-auto font-medium">
            Our Ongoing Initiatives <br />
            Promoting digital safety, innovation, and knowledge-sharing across
            communities
          </p>
        </motion.div>

        {/* --- THE RESPONSIVE CONNECTED PATH --- */}
        <div className="relative flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-6 items-stretch">
          {/* BACKGROUND LINES */}
          <div className="hidden md:block absolute top-[28px] left-0 w-full h-[2px] bg-slate-100 z-0"></div>
          <div className="md:hidden absolute top-0 left-[27px] w-[2px] h-full bg-slate-100 z-0"></div>

          {/* ANIMATED GLOWING TRACES */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="hidden md:block absolute top-[28px] left-0 w-full h-[2px] bg-gradient-to-r from-[#3B82F6] via-cyan-400 to-transparent origin-left z-0"
          ></motion.div>
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="md:hidden absolute top-0 left-[27px] w-[2px] h-full bg-gradient-to-b from-[#3B82F6] via-cyan-400 to-transparent origin-top z-0"
          ></motion.div>

          {/* ACTIVITY NODES */}
          {items.map((item, i) => {
            const isExpanded = expandedIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.25,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
                className="relative z-10 flex-1 flex flex-row md:flex-col gap-6 md:gap-0 cursor-pointer group"
              >
                {/* Node Icon */}
                <div className="w-14 h-14 shrink-0 bg-white border-[4px] border-[#F8FAFC] rounded-full flex items-center justify-center shadow-sm text-[#3B82F6] text-xl md:mb-6 md:mx-auto relative z-20 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-50">
                  <div className="absolute inset-0 rounded-full bg-blue-400/10 scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700"></div>
                  {item.icon}
                </div>

                {/* Card */}
                <div
                  className={`w-full border rounded-2xl p-5 transition-all duration-500 flex flex-col min-h-[100px] md:min-h-[120px] group-hover:-translate-y-1
                  ${isExpanded
                      ? "bg-white shadow-xl border-blue-200"
                      : "bg-[#F8FAFC] border-slate-100 group-hover:bg-white group-hover:shadow-lg group-hover:border-blue-50"
                    }`}
                >
                  <div className="flex items-start justify-between gap-2 h-full">
                    <h3
                      className={`text-sm md:text-base font-semibold leading-tight transition-all duration-500 
                      ${isExpanded ? "text-[#2563EB]" : "text-slate-900 group-hover:text-[#2563EB]"}`}
                    >
                      {item.title}
                    </h3>
                    <FaChevronDown
                      className={`text-slate-400 shrink-0 mt-1 text-xs transition-transform duration-500 
                      ${isExpanded ? "rotate-180 text-[#2563EB]" : "group-hover:text-[#3B82F6]"}`}
                    />
                  </div>

                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-in-out 
                    ${isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-xs md:text-sm text-slate-500 leading-relaxed mt-4 border-t border-slate-100 pt-3">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}