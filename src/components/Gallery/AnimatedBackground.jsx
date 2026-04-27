import { motion } from "framer-motion";
import {
  Camera,
  Sparkles,
  Image as ImageIcon,
  Film,
  Aperture,
} from "lucide-react";

export default function AnimatedBackground() {
  // Array of gallery-themed icons
  const iconList = [Camera, Sparkles, ImageIcon, Film, Aperture];

  // Create 25 icons scattered around
  const icons = Array.from({ length: 25 });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map((_, i) => {
        // Randomly pick an icon from our list
        const IconComponent = iconList[i % iconList.length];

        const randomLeft = `${Math.random() * 100}%`;
        const randomTop = `${Math.random() * 100}%`;

        // Faster animation so the movement is visible
        const randomDuration = 10 + Math.random() * 10;
        const randomDelay = Math.random() * 5;

        return (
          <motion.div
            key={i}
            // Made the color darker and less transparent so it pops!
            className="absolute text-blue-300/70"
            style={{ left: randomLeft, top: randomTop }}
            animate={{
              y: [0, -40, 0], // Wider float up and down
              rotate: [0, 15, -15, 0], // More noticeable spinning
              opacity: [0.3, 0.8, 0.3], // Higher opacity so they don't disappear
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: randomDelay,
            }}
          >
            <IconComponent
              strokeWidth={1.5}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </motion.div>
        );
      })}
    </div>
  );
}