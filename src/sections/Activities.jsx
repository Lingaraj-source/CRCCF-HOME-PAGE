import { motion } from "framer-motion";
import {
  FaChartLine,
  FaUserGraduate,
  FaBrain,
  FaCode,
} from "react-icons/fa";

export default function Activities() {
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
  ];

  return (
    <section className="py-16 bg-[#F1F5F9]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#DBEAFE] text-[#2563EB] text-sm">
            📊 Activities
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-4">
            Our Ongoing Initiatives
          </h2>

          <p className="text-[#64748B] mt-3 text-sm md:text-base">
            Promoting digital safety, innovation, and knowledge-sharing across communities
          </p>
        </motion.div>

        {/* ===== TOP CARDS ===== */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">

          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white border rounded-2xl p-6
              hover:-translate-y-1 hover:shadow-xl
              transition-all duration-300 overflow-hidden"
            >

              {/* soft glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DBEAFE] rounded-full blur-3xl opacity-20"></div>

              <div className="relative z-10">

                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg
                bg-gradient-to-r from-[#2563EB] to-[#1D4ED8]
                text-white text-lg shadow-md mb-4
                group-hover:scale-110 transition">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-[#0F172A] group-hover:text-[#2563EB] transition">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-[#475569] mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100
              bg-gradient-to-r from-[#2563EB] to-[#1D4ED8]
              transition duration-300 rounded-2xl"></div>

              {/* TEXT WHITE ON HOVER */}
              <div className="absolute inset-0 z-10 pointer-events-none group-hover:text-white transition"></div>

            </motion.div>
          ))}
        </div>

        {/* ===== BOTTOM WIDE CARD ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="group relative bg-white border rounded-2xl p-6 md:p-7
          hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden"
        >

          {/* glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#DBEAFE] rounded-full blur-3xl opacity-20"></div>

          <div className="relative z-10 flex items-start gap-4">

            {/* ICON */}
            <div className="w-12 h-12 flex items-center justify-center rounded-lg
            bg-gradient-to-r from-[#2563EB] to-[#1D4ED8]
            text-white text-lg shadow-md
            group-hover:scale-110 transition">
              <FaCode />
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-lg font-semibold text-[#0F172A] group-hover:text-[#2563EB] transition">
                Technology-Driven Projects
              </h3>

              <p className="text-sm text-[#475569] mt-2 leading-relaxed">
                Engaging in innovative technology projects that address real-world challenges and promote digital transformation across various sectors.
              </p>
            </div>
          </div>

          {/* hover overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100
          bg-gradient-to-r from-[#2563EB] to-[#1D4ED8]
          transition duration-300 rounded-2xl"></div>

          {/* text white */}
          <div className="absolute inset-0 z-10 pointer-events-none group-hover:text-white transition"></div>

        </motion.div>

      </div>
    </section>
  );
}