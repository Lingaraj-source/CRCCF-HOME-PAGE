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
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-2 h-2 bg-white rounded-full absolute top-20 left-10"></div>
        <div className="w-2 h-2 bg-white rounded-full absolute bottom-20 right-20"></div>
        <div className="w-1 h-1 bg-white rounded-full absolute top-40 right-40"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 relative z-10 overflow-hidden">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur text-sm">
            🧪 Projects & Portfolio
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Innovative Solutions for Real Impact
          </h2>

          <p className="text-blue-100 mt-3 max-w-2xl mx-auto">
            Delivering impactful technology solutions
          </p>
        </motion.div>

        {/* TOP CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: <FaBuilding />,
              title: "Government Projects",
              desc: "Reliable national-level solutions.",
            },
            {
              icon: <FaGlobe />,
              title: "Multi-Domain",
              desc: "Solutions across industries.",
            },
            {
              icon: <FaBrain />,
              title: "Innovation",
              desc: "Research-driven development.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-xl
              hover:bg-white/20 transition"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-blue-100 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Total Projects", value: "70" },
            { label: "Ongoing", value: "4" },
            { label: "Completed", value: "27" },
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
        </div>

        {/* MAIN CARD */}
        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-4">

            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/20">
              <FaRocket />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Our Commitment
              </h3>

              <p className="text-blue-100 text-sm leading-relaxed">
                We develop innovative, scalable, and secure solutions across multiple domains.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {["Innovative 💡", "Secure 🔐", "Scalable 🚀"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}