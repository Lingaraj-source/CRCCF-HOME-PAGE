import { motion } from "framer-motion";
import { FaShieldAlt, FaSearch, FaCode, FaUserGraduate } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity Awareness",
      fullTitle: "Cybersecurity Awareness Programs",
      desc: "Comprehensive training and education to build robust digital security knowledge across all levels.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaSearch />,
      title: "Digital Investigation",
      fullTitle: "Digital Investigation Guidance",
      desc: "Expert support for digital forensics and cybercrime investigation methodologies.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <FaCode />,
      title: "Software Development",
      fullTitle: "IT & Software Development",
      desc: "Custom software solutions and IT infrastructure development for modern challenges.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <FaUserGraduate />,
      title: "Training & Internships",
      fullTitle: "Training & Internship Programs",
      desc: "Industry-oriented programs designed to build real-world skills and professional competence.",
      color: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">
        {/* REFINED HEADER */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-bold tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-full"
          >
            Service
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-black text-slate-900 mt-3"
          >
            Comprehensive <span className="text-blue-600">Solutions</span>
          </motion.h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Delivering practical value, enhancing skills, and supporting digital
            growth through specialized technical services.
          </p>
        </div>

        {/* COMPACT BENTO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
            >
              {/* Top Accent Line */}
              <div
                className={`absolute top-0 left-0 h-1 w-0 bg-gradient-to-r ${item.color} group-hover:w-full transition-all duration-500`}
              />

              {/* ICON SECTION */}
              <div
                className={`mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white text-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
              >
                {item.icon}
              </div>

              {/* CONTENT */}
              <h3 className="text-lg font-bold text-slate-800 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                {item.fullTitle}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* ACTION LINK */}
              <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Learn More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>

              {/* SUBTLE DECORATION */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-slate-50 rounded-full group-hover:bg-blue-50 transition-colors duration-300 -z-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}