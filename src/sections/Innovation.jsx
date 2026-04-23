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
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ===== LEFT CONTENT ===== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#DBEAFE] text-[#2563EB] text-sm">
              {"</>"} Software Development & Innovation
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-4 leading-tight">
              Building Tomorrow's Solutions
            </h2>

            <p className="text-[#475569] mt-4 leading-relaxed">
              We design and develop advanced software solutions that are practical,
              user-friendly, and aligned with real-world needs. Our systems are
              integrated with modern technologies, including Artificial Intelligence,
              to enhance efficiency and simplify day-to-day activities.
            </p>

            {/* FEATURES */}
            <div className="mt-6 space-y-4">

              {[
                {
                  icon: <FaBolt />,
                  title: "AI-Powered Solutions",
                  desc: "Leveraging artificial intelligence for smarter, more efficient systems",
                },
                {
                  icon: <FaLock />,
                  title: "Secure & Scalable",
                  desc: "Building reliable and scalable solutions with security at the core",
                },
                {
                  icon: <FaUsers />,
                  title: "User-Centric Design",
                  desc: "Creating intuitive interfaces aligned with real user needs",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="group flex items-center gap-4 bg-white border rounded-xl p-4
                  hover:shadow-lg transition"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg
                  bg-gradient-to-r from-[#2563EB] to-[#1D4ED8]
                  text-white">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[#0F172A] group-hover:text-[#2563EB] transition">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#64748B]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>
          </motion.div>

          {/* ===== RIGHT PANEL ===== */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* BLUE PANEL */}
            <div className="relative rounded-3xl p-6 md:p-8
              bg-gradient-to-br from-[#2563EB] to-[#1D4ED8]
              shadow-2xl overflow-hidden
              hover:scale-[1.02] transition duration-500">

              {/* glow effect */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

              {/* floating light */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

              {/* GRID */}
              <div className="relative grid grid-cols-2 gap-4">

                {[
                  {
                    icon: <FaServer />,
                    title: "Modern Tech Stack",
                    desc: "Latest frameworks & tools",
                  },
                  {
                    icon: <FaBrain />,
                    title: "AI Integration",
                    desc: "Smart automation",
                  },
                  {
                    icon: <FaGlobe />,
                    title: "Cloud-Ready",
                    desc: "Scalable deployment",
                  },
                  {
                    icon: <FaShieldAlt />,
                    title: "Security First",
                    desc: "Protected systems",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20
                    rounded-xl p-4 text-white transition"
                  >
                    <div className="text-lg mb-2">{item.icon}</div>
                    <h4 className="text-sm font-semibold">{item.title}</h4>
                    <p className="text-xs text-blue-100">{item.desc}</p>
                  </motion.div>
                ))}

              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}