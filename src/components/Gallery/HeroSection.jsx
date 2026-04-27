import { motion } from "framer-motion";

export default function HeroSection({ heroImage }) {
  return (
    // 1. Made bg-transparent so your floating icons still show, and added overflow-hidden for mobile
    <section className="w-full bg-transparent py-12 overflow-hidden">
      {/* 2. Kept items-start from Code 2 to keep the top-alignment you prefer */}
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-start gap-10">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 relative w-full mt-4 lg:mt-0"
        >
          {/* 3. Ported the Animated Sliding Big "GALLERY" Text from Code 1 */}
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: [-200, 0, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 3.5,
              times: [0, 0.9, 1],
              ease: "easeOut",
            }}
            className="absolute text-[70px] sm:text-[100px] lg:text-[150px] font-extrabold text-blue-200 -z-10 -top-6 sm:-top-10 pointer-events-none whitespace-nowrap"
          >
            GALLERY
          </motion.h1>

          {/* 4. Kept the exact Glassmorphism styling from Code 2 (backdrop-blur, text-blue, etc.) */}
          <div className="bg-white/70 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-md border border-blue-100 relative z-10 w-full lg:max-w-lg">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-[#2563EB]">
              Cyber Intelligence Gallery
            </h2>

            <p
              className="mt-4
             text-[#475569] text-base sm:text-lg font-medium leading-relaxed"
            >
              Explore key moments, initiatives, and real-world operations that
              {/* Responsive break from Code 1 */}
              <br className="hidden sm:block" />
              showcase our commitment to cybersecurity awareness, digital
              investigations, and technology-driven impact.
            </p>

            <div className="mt-5 w-16 h-1.5 bg-[#2563EB] rounded-full" />
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center lg:justify-end relative z-10 w-full mt-6 lg:mt-0"
        >
          {/* 5. Ported the Mobile Sizing and Hover Animation from Code 1 */}
          <img
            src={heroImage}
            alt="Gallery hero"
            className="w-full max-w-sm sm:max-w-xl lg:max-w-2xl object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}