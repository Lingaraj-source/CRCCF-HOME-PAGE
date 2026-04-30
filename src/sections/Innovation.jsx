import { motion } from "framer-motion";
import {
  FaBolt,
  FaLock,
  FaUsers,
  FaServer,
  FaBrain,
  FaGlobe,
  FaShieldAlt,
} from "react-icons/fa";

export default function Innovation() {
  return (
    <section className="relative py-24 bg-[#F8FAFC] overflow-hidden">

      {/* subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F1F5F9]"></div>

      <div className="relative max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* tag */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full 
              bg-blue-50 text-blue-600 text-sm font-medium tracking-wide">
              {"</>"} Software Innovation
            </div>

            {/* heading */}
            <h2 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight text-[#0F172A]">
              Building{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                Tomorrow's Solutions
              </span>
            </h2>

            {/* desc */}
            <p className="mt-5 text-[#475569] text-[15px] leading-relaxed max-w-xl">
              We build intelligent, secure, and scalable systems that redefine how
              modern businesses operate in a connected world.
            </p>

            {/* FEATURES - PREMIUM TIMELINE STYLE */}
            <div className="mt-10 space-y-6">
              {[
                {
                  icon: <FaBolt />,
                  title: "AI-Powered Systems",
                  desc: "Automation with intelligence",
                },
                {
                  icon: <FaLock />,
                  title: "Security-First Architecture",
                  desc: "Zero-compromise protection",
                },
                {
                  icon: <FaUsers />,
                  title: "Human-Centered Design",
                  desc: "Built for real-world usage",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">

                  {/* icon */}
                  <div className="relative">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl
                      bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md">
                      {item.icon}
                    </div>

                    {/* vertical line */}
                    {i !== 2 && (
                      <div className="absolute left-1/2 top-10 w-[2px] h-10 bg-gray-200 -translate-x-1/2"></div>
                    )}
                  </div>

                  {/* text */}
                  <div>
                    <h4 className="text-[15px] font-semibold text-[#0F172A] group-hover:text-blue-600 transition">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#64748B] mt-1">
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE - PREMIUM VISUAL */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* floating layered card */}
            <div className="relative">

              {/* background glow */}
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500/20 blur-[100px] rounded-full"></div>

              {/* main card */}
              <div className="relative rounded-3xl p-8
                bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]
                shadow-[0_40px_80px_-20px_rgba(37,99,235,0.5)]
                overflow-hidden">

                {/* glass overlay */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl"></div>

                {/* content */}
                <div className="relative grid grid-cols-2 gap-6">

                  {[
                    { icon: <FaServer />, title: "Modern Stack" },
                    { icon: <FaBrain />, title: "AI Core" },
                    { icon: <FaGlobe />, title: "Cloud Native" },
                    { icon: <FaShieldAlt />, title: "Secure Layer" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="p-5 rounded-2xl 
                      bg-white/10 border border-white/20
                      backdrop-blur-md text-white"
                    >
                      <div className="text-xl mb-3 opacity-90">
                        {item.icon}
                      </div>
                      <h4 className="text-sm font-semibold">
                        {item.title}
                      </h4>
                    </motion.div>
                  ))}

                </div>
              </div>

              {/* floating small card */}
              <div className="absolute -bottom-6 -right-6 px-6 py-4
                rounded-2xl bg-white shadow-xl border text-sm font-medium text-[#0F172A]">
                ⚡ High Performance Systems
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}