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
    <section className="py-20 bg-[#F8FAFC] overflow-hidden">

      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 overflow-hidden">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >

            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#DBEAFE] text-[#2563EB] text-sm">
              {"</>"} Software Development & Innovation
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-4">
              Building Tomorrow's Solutions
            </h2>

            <p className="text-[#475569] mt-4 leading-relaxed">
              We design and develop advanced software solutions that are practical,
              user-friendly, and aligned with real-world needs.
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  icon: <FaBolt />,
                  title: "AI-Powered Solutions",
                  desc: "Leveraging artificial intelligence",
                },
                {
                  icon: <FaLock />,
                  title: "Secure & Scalable",
                  desc: "Security-first architecture",
                },
                {
                  icon: <FaUsers />,
                  title: "User-Centric Design",
                  desc: "Built for real users",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 bg-white border rounded-xl p-4
                  hover:shadow-lg transition"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg
                  bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[#0F172A] group-hover:text-[#2563EB]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#64748B]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >

            <div className="relative rounded-3xl p-6 md:p-8
              bg-gradient-to-br from-[#2563EB] to-[#1D4ED8]
              shadow-2xl overflow-hidden
              transition-transform duration-300">

              {/* SAFE glow (no overflow) */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

              <div className="relative grid grid-cols-2 gap-4">

                {[
                  { icon: <FaServer />, title: "Modern Tech", desc: "Latest tools" },
                  { icon: <FaBrain />, title: "AI", desc: "Automation" },
                  { icon: <FaGlobe />, title: "Cloud", desc: "Scalable" },
                  { icon: <FaShieldAlt />, title: "Security", desc: "Protected" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-md border border-white/20
                    rounded-xl p-4 text-white"
                  >
                    <div className="text-lg mb-2">{item.icon}</div>
                    <h4 className="text-sm font-semibold">{item.title}</h4>
                    <p className="text-xs text-blue-100">{item.desc}</p>
                  </div>
                ))}

              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}