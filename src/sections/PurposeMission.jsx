import { motion } from "framer-motion";
import { FaBullseye, FaRocket, FaBrain, FaBolt } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function PurposeMission() {
  const [flipped, setFlipped] = useState(null);
  const [autoFlipped, setAutoFlipped] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const data = [
    {
      icon: <FaBullseye />,
      title: "Purpose",
      text: "Our purpose is to strengthen digital safety and awareness by bridging the gap between knowledge and real-world cyber challenges.",
      extra: (
        <div className="flex gap-2.5 flex-wrap mt-6 justify-center">
          {["Digital Safety", "Awareness", "Education"].map((t, i) => (
            <span
              key={i}
              className="px-3.5 py-1.5 text-[11px] font-semibold tracking-wider uppercase rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-colors hover:bg-white/20 cursor-default"
            >
              {t}
            </span>
          ))}
        </div>
      ),
    },
    {
      icon: <FaRocket />,
      title: "Mission",
      text: "Our mission is to lead the Cyber Revolution using innovation, research, and modern technology.",
      extra: (
        <div className="grid grid-cols-2 gap-3 mt-6">
          <div className="p-3 rounded-xl bg-white/10 border border-white/20 text-white text-[11px] font-semibold tracking-wider uppercase flex items-center justify-center gap-2 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-colors hover:bg-white/20 cursor-default">
            <FaBrain className="text-blue-200 text-sm" /> Research
          </div>
          <div className="p-3 rounded-xl bg-white/10 border border-white/20 text-white text-[11px] font-semibold tracking-wider uppercase flex items-center justify-center gap-2 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-colors hover:bg-white/20 cursor-default">
            <FaBolt className="text-blue-200 text-sm" /> Future Ready
          </div>
        </div>
      ),
    },
  ];

  // ⏱️ AUTO FLIP AFTER 3s (Smart Reveal)
  useEffect(() => {
    if (hasInteracted) return;

    const timer = setTimeout(() => {
      setAutoFlipped(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const handleInteraction = (index) => {
    setHasInteracted(true);
    setAutoFlipped(false); // Hand control fully to the user
    setFlipped(index);
  };

  return (
    <section className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      {/* Subtle ambient background glows for premium depth */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 relative z-10">
        {data.map((item, i) => {
          // Card is flipped if manually targeted, OR if auto-flip triggered and user hasn't touched anything yet
          const isFlipped = flipped === i || (autoFlipped && !hasInteracted);

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: i * 0.1 }}
              className="h-[280px] perspective group cursor-pointer"
              onClick={() => {
                setHasInteracted(true);
                setAutoFlipped(false);
                setFlipped(flipped === i ? null : i); // Toggle on click
              }}
              onMouseEnter={() => handleInteraction(i)}
              onMouseLeave={() => setFlipped(null)}
            >
              <div
                className={`relative w-full h-full rounded-3xl transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] transform-style-preserve-3d shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] group-hover:shadow-[0_20px_50px_-10px_rgba(37,99,235,0.15)] ${isFlipped ? "rotate-y-180" : ""
                  }`}
              >
                {/* FRONT */}
                <div className="absolute inset-0 backface-hidden rounded-3xl border border-white bg-white/90 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8 transition-colors duration-500">

                  {/* Floating Icon Container */}
                  <div className="relative w-20 h-20 flex items-center justify-center rounded-2xl mb-6 bg-gradient-to-br from-[#EFF6FF] to-white border border-[#E2E8F0] shadow-[0_8px_20px_rgb(37,99,235,0.08)] transition-transform duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 group-hover:shadow-[0_12px_25px_rgb(37,99,235,0.15)]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-60 rounded-2xl"></div>
                    <span className="text-[#2563EB] text-3xl relative z-10 drop-shadow-sm">
                      {item.icon}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight">
                    {item.title}
                  </h3>

                  {/* Micro-interaction hint */}
                  <p className="absolute bottom-6 text-[11px] font-bold tracking-widest uppercase text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Explore
                  </p>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl p-8 flex flex-col justify-center text-center bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#1E40AF] shadow-[0_20px_50px_-10px_rgba(37,99,235,0.5)] border border-white/10 overflow-hidden">

                  {/* Subtle Top Glare */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/15 to-transparent opacity-50 pointer-events-none rounded-t-3xl"></div>

                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight drop-shadow-md">
                    {item.title}
                  </h3>

                  <p className="text-blue-50/90 text-[15px] font-medium leading-relaxed drop-shadow-sm max-w-[90%] mx-auto">
                    {item.text}
                  </p>

                  <div className="relative z-10">
                    {item.extra}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1500px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
          /* Important for smooth rendering in Webkit */
          -webkit-transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}