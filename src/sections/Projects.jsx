import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

/* COUNTER */
function Counter({ value, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1200;
    const step = duration / value;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, step);

    return () => clearInterval(timer);
  }, [inView, value]);

  return count;
}

const projects = [
  {
    title: "Cyber Security Dashboard",
    desc: "Real-time monitoring system",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1470&auto=format&fit=crop",
  },
  {
    title: "Government Portal",
    desc: "Secure digital governance",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1470&auto=format&fit=crop",
  },
  {
    title: "AI Threat Detection",
    desc: "AI-based cyber defense",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop",
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="pt-6 md:pt-8 pb-14 md:pb-16 bg-[#F8FAFC]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">
        {/* 🔥 HEADER (FIXED SPACING) */}
        <div className="mb-12 md:mb-14 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight">
            Building <span className="text-[#2563EB]">Real Impact</span> Through
            Projects
          </h2>

          <p className="text-[#64748B] mt-4 md:mt-5">
            We deliver scalable, secure, and innovative solutions across
            domains.
          </p>

          {/* 🔥 PREMIUM STATS */}
          <div
            ref={ref}
            className="flex justify-center gap-4 md:gap-8 mt-8 flex-wrap"
          >
            {[
              { value: 70, label: "Projects Delivered" },
              { value: 27, label: "Successfully Completed" },
              { value: 4, label: "Currently Ongoing" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl md:text-2xl font-bold text-[#2563EB] text-center">
                  <Counter value={item.value} inView={inView} />+
                </h3>

                <p className="text-xs md:text-sm text-[#64748B] text-center mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 🔥 PROJECT GRID (TIGHTER GAP) */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-48 w-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-base md:text-lg font-semibold text-[#0F172A]">
                  {project.title}
                </h3>

                <p className="text-[#64748B] text-sm mt-2">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}