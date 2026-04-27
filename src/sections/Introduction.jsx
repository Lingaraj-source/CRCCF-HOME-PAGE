import { motion } from "framer-motion";
import introImg from "../assets/intro.jpg";

export default function Introduction() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#0F172A] text-white">
      {/* 🔥 BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#2563EB] opacity-90"></div>

      {/* 🔥 GRID OVERLAY */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="w-full h-full bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
        {/* 🔥 LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-white/10 px-4 py-1 rounded-full text-sm mb-5 backdrop-blur">
            🧭 Introduction
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Building a <span className="text-[#93C5FD]">Safer Digital</span>{" "}
            Future
          </h2>

          <p className="text-white/80 leading-relaxed mb-6 text-sm md:text-base max-w-xl">
            CR Cyber Crime Foundation (Cyber Revolution) is a forward-looking
            non-profit initiative committed to addressing the challenges of the
            digital era 🌐 through awareness 🛡️, innovation 💡, and technology
            ⚙️. We empower individuals and organizations to navigate the digital
            world safely and efficiently.
          </p>

          {/* 🔥 TAGS */}
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-white/10 px-3 py-1 rounded-full">
              🔐 Cybersecurity
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-full">
              📚 Research
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-full">
              💻 IT Development
            </span>
          </div>
        </motion.div>

        {/* 🔥 RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* GLOW */}
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-xl"></div>

          {/* IMAGE CARD */}
          <div className="relative bg-white/10 backdrop-blur-md p-2 rounded-2xl shadow-xl">
            <img
              src={introImg}
              alt="Cyber Security"
              className="rounded-xl w-full h-[300px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}