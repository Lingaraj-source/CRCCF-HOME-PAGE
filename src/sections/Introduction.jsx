import { motion } from "framer-motion";
import introImg from "../assets/intro.jpg";

export default function Introduction() {
  return (
    <section className="py-16 bg-[#F1F5F9]">
      
      {/* SAME CONTAINER AS NAVBAR */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
        >

          {/* TOP BLUE LINE */}
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#2563EB] to-[#1D4ED8]" />

          {/* CONTENT */}
          <div className="p-8 md:p-10 lg:p-12 grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT TEXT */}
            <div>

              <span className="inline-block text-sm bg-[#DBEAFE] text-[#2563EB] px-3 py-1 rounded-full mb-4">
                Introduction
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 leading-tight">
                Building a Safer Digital Future
              </h2>

              <p className="text-[#475569] leading-relaxed text-sm md:text-base">
                CR Cyber Crime Foundation (Cyber Revolution) is a forward-looking
                non-profit initiative committed to addressing the challenges of
                the digital era through awareness, innovation, and technology.
                With a strong foundation in cybersecurity, research, and IT
                development, we aim to create a platform that empowers individuals
                and organizations to navigate the digital world safely and efficiently.
              </p>

            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full">
              <img
                src={introImg}
                alt="Cyber Security"
                className="rounded-xl w-full h-[260px] md:h-[300px] object-cover shadow-sm"
              />
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}