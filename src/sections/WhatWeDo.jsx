import { motion } from "framer-motion";
import { FaShieldAlt, FaSearch, FaCode, FaUserGraduate } from "react-icons/fa";

export default function WhatWeDo() {
  const items = [
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity Awareness",
      desc: "Building digital safety knowledge",
    },
    {
      icon: <FaSearch />,
      title: "Digital Investigation",
      desc: "Supporting forensic analysis",
    },
    {
      icon: <FaCode />,
      title: "IT Development",
      desc: "Creating innovative solutions",
    },
    {
      icon: <FaUserGraduate />,
      title: "Professional Training",
      desc: "Empowering with skills",
    },
  ];

  return (
    <section className="py-16 bg-[#F1F5F9]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#DBEAFE] text-[#2563EB] text-sm">
            ⚙️ What We Do
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-4">
            Our Core Work Domains
          </h2>
        </motion.div>

        {/* ================= MAIN CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-2xl shadow-md border overflow-hidden"
        >

          {/* subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#F1F5F9]/50 pointer-events-none"></div>

          {/* CONTENT */}
          <div className="p-8 md:p-10 text-center">

            <p className="text-[#475569] max-w-3xl mx-auto text-sm md:text-base leading-relaxed mb-10">
              We work across multiple domains including cybersecurity awareness,
              digital investigation support, software and IT development, and
              professional training. Through structured programs, workshops, and
              initiatives, we provide practical exposure, technical guidance, and
              real-world learning opportunities.
            </p>

            {/* ================= CARDS ================= */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 rounded-xl bg-[#F8FAFC] border
                  hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#1D4ED8]
                  hover:text-white hover:-translate-y-1 hover:shadow-xl
                  transition-all duration-300"
                >

                  {/* ICON */}
                  <div className="text-[#2563EB] text-xl mb-3 
                  group-hover:text-white transition">
                    {item.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-sm font-semibold mb-1">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-xs text-[#64748B] 
                  group-hover:text-blue-100 transition">
                    {item.desc}
                  </p>

                </motion.div>
              ))}

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}