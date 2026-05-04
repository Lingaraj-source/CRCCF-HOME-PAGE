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
    <section className="relative pt-10 md:pt-14 pb-16 md:pb-20 overflow-hidden bg-[#F8FAFC]">

      {/* 🔥 ANIMATED GRADIENT BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* moving gradient */}
        <motion.div
          className="absolute w-[140%] h-[140%] top-[-20%] left-[-20%] bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 opacity-30"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ filter: "blur(120px)" }}
        />

        {/* floating blobs */}
        <motion.div
          className="absolute top-[10%] left-[15%] w-[300px] h-[300px] bg-blue-300 opacity-20 rounded-full"
          animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          style={{ filter: "blur(100px)" }}
        />

        <motion.div
          className="absolute bottom-[10%] right-[15%] w-[300px] h-[300px] bg-indigo-300 opacity-20 rounded-full"
          animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          style={{ filter: "blur(120px)" }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">

        {/* HEADER */}
        <div className="mb-14 md:mb-16 max-w-3xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#0F172A]">
            Building{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Real Impact
            </span>{" "}
            Through Projects
          </h2>

          <p className="text-[#64748B] mt-5 text-sm md:text-base leading-relaxed">
            We deliver scalable, secure, and innovative solutions across
            domains.
          </p>

          {/* STATS */}
          <div
            ref={ref}
            className="flex justify-center gap-5 md:gap-8 mt-10 flex-wrap"
          >
            {[
              { value: 70, label: "Projects Delivered" },
              { value: 27, label: "Successfully Completed" },
              { value: 4, label: "Currently Ongoing" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative backdrop-blur-lg bg-white/70 border border-white/50 rounded-2xl px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.15)] transition"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-[#2563EB] text-center">
                  <Counter value={item.value} inView={inView} />+
                </h3>

                <p className="text-xs md:text-sm text-[#64748B] text-center mt-1">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/40 shadow-[0_8px_25px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-52 w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#0F172A] group-hover:text-blue-600 transition">
                  {project.title}
                </h3>

                <p className="text-[#64748B] text-sm mt-2 leading-relaxed">
                  {project.desc}
                </p>
              </div>

              <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}