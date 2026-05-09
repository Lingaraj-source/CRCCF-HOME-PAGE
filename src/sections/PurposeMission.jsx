import { motion, useInView } from "framer-motion";
import { Target, Rocket, BookOpen, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function PurposeMission() {
  const [activeCards, setActiveCards] = useState([]); // Tracks clicked/auto-opened cards
  const [hoveredCard, setHoveredCard] = useState(null); // Tracks mouse hover
  const [hasInteracted, setHasInteracted] = useState(false); // Tracks if user took control

  // 1. Create a ref to track when the section scrolls into view
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // ⏱️ SCROLL-AWARE AUTO REVEAL & HIDE
  useEffect(() => {
    // Wait until the section is visible. If user already interacted, cancel automation.
    if (!isInView || hasInteracted) return;

    // Open both cards smoothly after scrolling into view
    const openTimer = setTimeout(() => {
      setActiveCards(["purpose", "mission"]);
    }, 600);

    // Close both cards automatically after 3 seconds
    const closeTimer = setTimeout(() => {
      // Double check they haven't interacted in the meantime
      setActiveCards((prev) => (hasInteracted ? prev : []));
    }, 3600); 

    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    };
  }, [isInView, hasInteracted]);

  const handleInteraction = (id) => {
    if (!hasInteracted) {
      setHasInteracted(true); // Stop auto-timers
      setActiveCards([]);     // Close auto-opened cards immediately
    }
    setHoveredCard(id);
  };

  const handleTap = (id) => {
    if (!hasInteracted) {
      setHasInteracted(true);
      setActiveCards([]);
    }
    
    // Toggle the clicked card independently
    setActiveCards((prev) => 
      prev.includes(id) 
        ? prev.filter((cardId) => cardId !== id) // Remove if already open
        : [...prev, id] // Add if closed
    );
  };

  const cardsData = [
    {
      id: "purpose",
      title: "Purpose",
      icon: Target,
      text: "Our purpose is to enhance digital safety and awareness by bridging the gap between: 📚 Knowledge and ⚠️ Real-world cyber threats. We focus on educating, guiding, and supporting communities to adopt safe and responsible digital practices.",
      tags: [
        { text: "Digital Safety" },
        { text: "Awareness" },
        { text: "Education" },
      ],
    },
    {
      id: "mission",
      title: "Mission",
      icon: Rocket,
      text: "Our mission is to lead the Cyber Revolution 🚀 by combining: 🔐 Cybersecurity Awareness, ⚙️ Advanced Technology, and 📊 Research-Driven Solutions. We are dedicated to equipping individuals with practical skills, industry knowledge, and ethical values.",
      tags: [
        { icon: BookOpen, text: "Research" },
        { icon: Zap, text: "Future Ready" },
      ],
      delay: 0.15,
    },
  ];

  // The ref is attached to this section so Framer Motion knows when it enters the screen
  return (
    <section ref={sectionRef} className="relative pb-[clamp(48px,8vw,80px)] bg-[#F9FAFB]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(20px,4vw,50px)] mt-[clamp(24px,4vw,40px)] relative z-10">
          
          {cardsData.map((card) => {
            // Check if THIS specific card is in the activeCards array or currently hovered
            const isActive = hoveredCard === card.id || activeCards.includes(card.id);
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                data-active={isActive}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: card.delay || 0 }}
                onMouseEnter={() => handleInteraction(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleTap(card.id)}
                className={`
                  group relative bg-white rounded-[16px] p-[clamp(24px,4vw,40px)] min-h-[180px] 
                  shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-solid border-slate-200 
                  flex flex-col justify-center overflow-hidden cursor-pointer 
                  transition-all duration-500 ease-out

                  /* Hover & Active Lift States */
                  hover:translate-y-[-6px] data-[active=true]:translate-y-[-6px]
                  hover:shadow-[0_20px_60px_rgba(37,99,235,0.25)] data-[active=true]:shadow-[0_20px_60px_rgba(37,99,235,0.25)]
                  hover:border-[#2563EB] data-[active=true]:border-[#2563EB]

                  /* Top Right Gradient Sweep */
                  before:absolute before:content-[''] before:w-[20%] before:h-[20%] 
                  before:bg-[linear-gradient(135deg,#1A365D_0%,#2563EB_100%)] 
                  before:transition-all before:duration-500 before:ease-in-out before:z-0 
                  before:top-0 before:right-0 before:rounded-[0_16px_0_100%]
                  hover:before:w-full data-[active=true]:before:w-full 
                  hover:before:h-full data-[active=true]:before:h-full 
                  hover:before:rounded-[16px] data-[active=true]:before:rounded-[16px]

                  /* Bottom Left Gradient Sweep */
                  after:absolute after:content-[''] after:w-[20%] after:h-[20%] 
                  after:bg-[linear-gradient(135deg,#1A365D_0%,#2563EB_100%)] 
                  after:transition-all after:duration-500 after:ease-in-out after:z-0 
                  after:bottom-0 after:left-0 after:rounded-[0_100%_0_16px]
                  hover:after:w-full data-[active=true]:after:w-full 
                  hover:after:h-full data-[active=true]:after:h-full 
                  hover:after:rounded-[16px] data-[active=true]:after:rounded-[16px]
                `}
              >
                {/* ICON BOX */}
                <div
                  className={`
                    relative z-10 w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mb-[18px] 
                    transition-all duration-400 ease-out
                    ${isActive 
                      ? "bg-white/20 text-white shadow-sm" 
                      : "bg-blue-50 text-blue-500 group-hover:bg-white/20 group-hover:text-white"
                    }
                  `}
                >
                  <Icon size={24} />
                </div>

                {/* TITLE */}
                <h3
                  className={`
                    relative z-10 text-[clamp(17px,2.2vw,22px)] font-extrabold tracking-tight 
                    transition-all duration-400 ease-out
                    ${isActive 
                      ? "text-white mb-[18px]" 
                      : "text-slate-900 mb-0 group-hover:text-white group-hover:mb-[18px]"
                    }
                  `}
                >
                  {card.title}
                </h3>

                {/* SMOOTH CONTENT REVEAL (Framer Motion) */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isActive ? "auto" : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="relative z-10 overflow-hidden"
                >
                  {/* Text Description */}
                  <p className="text-[15px] text-white/90 leading-[1.7] mb-[24px]">
                    {card.text}
                  </p>

                  {/* Tags / Pills */}
                  <div className="flex flex-wrap gap-[10px] pb-[10px]">
                    {card.tags.map((tag, i) => {
                      const TagIcon = tag.icon;
                      return (
                        <span
                          key={i}
                          className="bg-white/20 text-white py-[6px] px-[14px] rounded-full text-[12.5px] font-semibold flex items-center gap-[6px] backdrop-blur-sm border border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
                        >
                          {TagIcon && <TagIcon size={14} />}
                          {tag.text}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}