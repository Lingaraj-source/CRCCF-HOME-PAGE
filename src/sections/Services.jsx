import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaSearch,
  FaCode,
  FaUserGraduate,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity Awareness Programs",
      desc: "Comprehensive training and education to build robust digital security knowledge across all levels.",
    },
    {
      icon: <FaSearch />,
      title: "Digital Investigation Guidance",
      desc: "Expert support for digital forensics and cybercrime investigation methodologies.",
    },
    {
      icon: <FaCode />,
      title: "IT & Software Development",
      desc: "Custom software solutions and IT infrastructure development for modern challenges.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Training & Internship Programs",
      desc: "Industry-oriented programs designed to build real-world skills and professional competence.",
    },
  ];

  return (
    <section className="py-16 bg-[#F1F5F9]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#DBEAFE] text-[#2563EB] text-sm">
            🧩 Services
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-4">
            Comprehensive Solutions
          </h2>

          <p className="text-[#64748B] mt-3 text-sm md:text-base">
            Delivering practical value, enhancing skills, and supporting digital growth
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-6">

          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white border rounded-2xl p-6 md:p-7
              hover:-translate-y-1 hover:shadow-xl
              transition-all duration-300 overflow-hidden"
            >

              {/* glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DBEAFE] rounded-full blur-3xl opacity-20"></div>

              {/* overlay (fixed) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100
              bg-gradient-to-r from-[#2563EB] to-[#1D4ED8]
              transition duration-300 rounded-2xl -z-10"></div>

              {/* CONTENT */}
              <div className="relative z-10 flex items-start gap-4">

                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg
                bg-gradient-to-r from-[#2563EB] to-[#1D4ED8]
                text-white text-lg shadow-md
                group-hover:scale-110 transition">
                  {item.icon}
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-lg font-semibold text-[#0F172A] group-hover:text-white transition">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#475569] mt-2 leading-relaxed group-hover:text-blue-100 transition">
                    {item.desc}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}