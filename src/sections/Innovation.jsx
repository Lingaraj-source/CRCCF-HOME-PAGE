import { motion } from "framer-motion";
import {
  FiTerminal,
  FiCpu,
  FiShield,
  FiUsers,
  FiGlobe,
  FiLock,
  FiArrowRight,
  FiTrendingUp,
  FiZap
} from "react-icons/fi";

// Animation Variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Innovation() {
  return (
    <section className="relative py-16 lg:py-20 bg-[#F8FAFC] overflow-hidden font-sans">
      {/* Subtle SaaS background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-[#F1F5F9]"></div>

      {/* Glowing atmospheric orbs - Scaled down slightly */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE - CONTENT & TIMELINE */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Premium Tag */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-[13px] font-semibold tracking-wide shadow-sm">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-50 text-blue-600">
                <FiTerminal size={10} strokeWidth={3} />
              </span>
              Software Innovation
            </motion.div>

            {/* Heading */}
            <motion.h2 variants={itemVariants} className="mt-6 text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-[1.15] text-slate-900 tracking-tight">
              Designing Advanced <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                Software Solutions
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p variants={itemVariants} className="mt-5 text-slate-600 text-[14px] md:text-[15px] leading-relaxed max-w-lg font-medium">
              We design and develop advanced software solutions that are practical, user-friendly, and aligned with real-world needs. Our systems integrate modern technologies, including AI, to enhance efficiency and simplify daily operations.
            </motion.p>

            {/* FEATURES - PREMIUM TIMELINE STYLE */}
            <motion.div variants={containerVariants} className="mt-10 space-y-6">
              {[
                {
                  icon: <FiCpu size={18} />,
                  title: "AI Integration",
                  desc: "Enhancing efficiency and simplifying day-to-day activities.",
                },
                {
                  icon: <FiShield size={18} />,
                  title: "Reliable & Secure",
                  desc: "Creating dependable solutions with zero-compromise protection.",
                },
                {
                  icon: <FiUsers size={18} />,
                  title: "User-Friendly",
                  desc: "Accessible solutions perfectly aligned with real-world needs.",
                },
              ].map((item, i) => (
                <motion.div variants={itemVariants} key={i} className="flex items-start gap-4 group cursor-default">
                  {/* Icon Node */}
                  <div className="relative">
                    <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-slate-200 shadow-sm text-slate-500 group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    {/* Vertical connecting line */}
                    {i !== 2 && (
                      <div className="absolute left-1/2 top-10 w-[2px] h-10 bg-gradient-to-b from-slate-200 to-transparent -translate-x-1/2"></div>
                    )}
                  </div>

                  {/* Text */}
                  <div className="pt-0.5">
                    <h4 className="text-[15px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-[14px] text-slate-500 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="mt-10">
              <button className="flex items-center gap-2.5 px-6 py-3.5 bg-slate-900 hover:bg-blue-600 text-white rounded-xl text-[14px] font-semibold transition-all duration-300 shadow-md shadow-slate-900/20 hover:shadow-blue-600/30 group">
                Explore Capabilities
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - PREMIUM VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[400px] mx-auto lg:ml-auto mt-8 lg:mt-0"
          >
            {/* Floating layered card */}
            <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
              {/* Animated background glow */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full"
              />

              {/* Main Glassmorphic Card */}
              <div className="absolute inset-0 rounded-[2rem] p-6 md:p-8 bg-[#0F172A] shadow-2xl overflow-hidden border border-slate-700/50 flex flex-col justify-center">
                {/* Premium internal gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 via-transparent to-indigo-600/15"></div>

                {/* Decorative mesh overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.04] via-transparent to-transparent"></div>

                {/* Content Header inside card */}
                <div className="relative z-10 mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-blue-400 mb-4 shadow-inner">
                    <FiZap size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight leading-snug">
                    Digital <br /> Transformation
                  </h3>
                </div>

                {/* Grid of Tech features */}
                <div className="relative z-10 grid grid-cols-2 gap-3 md:gap-4">
                  {[
                    { icon: <FiTrendingUp size={18} />, title: "Scalable Tech", delay: 0 },
                    { icon: <FiCpu size={18} />, title: "AI Core", delay: 0.1 },
                    { icon: <FiGlobe size={18} />, title: "Cloud Native", delay: 0.2 },
                    { icon: <FiLock size={18} />, title: "Secure Layer", delay: 0.3 },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: 15, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + item.delay, duration: 0.4 }}
                      whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.08)" }}
                      className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-slate-300 shadow-lg transition-all cursor-pointer group"
                    >
                      <div className="text-blue-400 mb-3 group-hover:scale-110 transition-transform origin-left">
                        {item.icon}
                      </div>
                      <h4 className="text-[13px] font-semibold tracking-wide text-white">
                        {item.title}
                      </h4>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Small Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                animate={{ y: [-4, 4, -4] }}
                transition={{ 
                  x: { delay: 0.8, duration: 0.6 },
                  opacity: { delay: 0.8, duration: 0.6 },
                  y: { repeat: Infinity, duration: 4, ease: "easeInOut" } 
                }}
                className="absolute -bottom-5 -left-4 md:-left-8 px-5 py-3.5 rounded-2xl bg-white shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] border border-slate-100 text-[13px] font-bold text-slate-800 flex items-center gap-2.5 z-20"
              >
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-50 text-blue-600">
                  <FiTrendingUp size={14} strokeWidth={3} />
                </div>
                Highly Scalable Systems
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}