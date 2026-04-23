import { motion } from "framer-motion";
import { FaBullseye, FaRocket, FaBrain, FaBolt } from "react-icons/fa";

export default function PurposeMission() {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 grid md:grid-cols-2 gap-8">

        {/* CARD COMPONENT (REUSABLE STYLE) */}
        {[{
          icon: <FaBullseye />,
          title: "Purpose",
          text: "Our purpose is to strengthen digital safety and awareness by bridging the gap between knowledge and real-world cyber challenges. We strive to educate, guide, and support individuals and organizations in understanding and combating cyber threats.",
          extra: (
            <div className="flex gap-3 flex-wrap mt-4">
              {["Digital Safety", "Awareness", "Education"].map((t, i) => (
                <span key={i} className="px-3 py-1 text-xs rounded-full bg-[#DBEAFE] text-[#2563EB]
                group-hover:bg-white/20 group-hover:text-white transition">
                  {t}
                </span>
              ))}
            </div>
          )
        },
        {
          icon: <FaRocket />,
          title: "Mission",
          text: "Our mission is to lead the Cyber Revolution by integrating cybersecurity awareness, advanced technology, and research-driven solutions. We empower the next generation with practical skills and ethical values.",
          extra: (
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="p-3 rounded-lg bg-[#DBEAFE] text-[#2563EB]
              group-hover:bg-white/20 group-hover:text-white transition text-xs flex items-center gap-2">
                <FaBrain /> Research-Driven
              </div>
              <div className="p-3 rounded-lg bg-[#DBEAFE] text-[#2563EB]
              group-hover:bg-white/20 group-hover:text-white transition text-xs flex items-center gap-2">
                <FaBolt /> Future-Ready
              </div>
            </div>
          )
        }].map((item, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group p-8 rounded-2xl border bg-white shadow-sm 
            hover:shadow-xl hover:-translate-y-1
            transition-all duration-300
            hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#1D4ED8]"
          >

            {/* ICON */}
            <div className="w-14 h-14 flex items-center justify-center rounded-xl mb-5 
            bg-[#DBEAFE] text-[#2563EB]
            group-hover:bg-white/20 group-hover:text-white transition">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold text-[#0F172A] mb-3 
            group-hover:text-white transition">
              {item.title}
            </h3>

            {/* TEXT */}
            <p className="text-[#475569] text-sm leading-relaxed 
            group-hover:text-blue-100 transition">
              {item.text}
            </p>

            {/* EXTRA */}
            {item.extra}

          </motion.div>

        ))}

      </div>
    </section>
  );
}