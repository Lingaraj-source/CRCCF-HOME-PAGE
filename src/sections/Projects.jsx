import { motion } from "framer-motion";
import {
  FaBuilding,
  FaGlobe,
  FaBrain,
  FaRocket,
} from "react-icons/fa";

export default function Projects() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0F2B5B] to-[#1D4ED8] text-white relative overflow-hidden">

      {/* floating dots */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-2 h-2 bg-white rounded-full absolute top-20 left-10"></div>
        <div className="w-2 h-2 bg-white rounded-full absolute bottom-20 right-20"></div>
        <div className="w-1 h-1 bg-white rounded-full absolute top-40 right-40"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 relative z-10">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur text-sm">
            🧪 Projects & Portfolio
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Innovative Solutions for Real Impact
          </h2>

          <p className="text-blue-100 mt-3 max-w-2xl mx-auto">
            Delivering impactful technology solutions that address real challenges and contribute to digital advancement
          </p>
        </motion.div>

        {/* ===== TOP CARDS ===== */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          {[
            {
              icon: <FaBuilding />,
              title: "Government & National Projects",
              desc: "Delivering reliable solutions for government bodies and national-level initiatives.",
            },
            {
              icon: <FaGlobe />,
              title: "Multi-Domain Solutions",
              desc: "Innovative technology solutions across multiple industries and sectors.",
            },
            {
              icon: <FaBrain />,
              title: "Research & Innovation",
              desc: "Driving continuous innovation through research and real-world problem solving.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-xl
              hover:bg-white/20 hover:-translate-y-1 transition"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-blue-100 text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ===== STATS SECTION (IMPORTANT) ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {[
            { label: "Total Projects", value: "70" },
            { label: "Ongoing", value: "4" },
            { label: "Completed (Year)", value: "27" },
            { label: "Pending", value: "39" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur p-4 rounded-lg text-center border border-white/20"
            >
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-blue-100 text-xs">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ===== MAIN CONTENT CARD ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-start gap-4">

            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/20">
              <FaRocket />
            </div>

            <div>

              <h3 className="text-xl font-semibold mb-3">
                Our Commitment to Excellence
              </h3>

              <p className="text-blue-100 text-sm leading-relaxed">
                At CR Cyber Crime Foundation (Cyber Revolution), we actively develop innovative, impactful, and technology-driven projects across multiple domains. Our work reflects strong commitment to cybersecurity, digital transformation, and advanced IT solutions.
                <br /><br />
                We have successfully delivered projects at national, government, and international levels, showcasing our ability to build reliable, scalable, and future-ready systems. All solutions are original products developed by CRCCF, focused on innovation, research, and real-world problem solving.
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Innovative 💡",
                  "Secure 🔐",
                  "Scalable 🚀",
                  "Real-World Impact 🌐",
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/20 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}