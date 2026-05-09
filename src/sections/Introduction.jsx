import { motion } from "framer-motion";
// Ensure the extension (.png, .svg, etc.) matches your actual logo file
import logoImg from "../assets/logo.png"; 

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

        {/* 🔥 RIGHT 3D LAPTOP ANIMATION */}
        <motion.div 
          className="relative flex justify-center items-center w-full max-[900px]:mt-10 max-[600px]:hidden"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="scale-[0.6] lg:scale-[0.8] xl:scale-[0.9] flex flex-col items-center">
            {/* Laptop Screen / Lid */}
            <div className="rounded-[20px] shadow-[inset_0_0_0_2px_#c8cacb,inset_0_0_0_10px_#000] h-[318px] w-[518px] mx-auto py-[9px] px-[9px] pb-[23px] relative flex items-center justify-center bg-[linear-gradient(15deg,#3f51b1_0%,#5a55ae_13%,#7b5fac_25%,#8f6aae_38%,#a86aa4_50%,#cc6b8e_62%,#f18271_75%,#f3a469_87%,#f7c978_100%)] [transform-style:preserve-3d] [transform:perspective(1900px)_rotateX(-88.5deg)] [transform-origin:50%_100%] animate-[open_4s_infinite_alternate] before:content-[''] before:w-[518px] before:h-[12px] before:absolute before:bg-[linear-gradient(#979899,transparent)] before:top-[-3px] before:[transform:rotateX(90deg)] before:rounded-[5px_5px] after:bg-[linear-gradient(to_bottom,#272727,#0d0d0d)] after:rounded-[0_0_20px_20px] after:bottom-[2px] after:content-[''] after:h-[24px] after:left-[2px] after:absolute after:w-[514px]">
              
              {/* Camera Notch */}
              <div className="w-[100px] h-[12px] absolute bg-[#000] top-[10px] left-[50%] [transform:translate(-50%,-0%)] rounded-[0_0_6px_6px]"></div>
              
              {/* Screen Content (Logo) */}
              <img 
                src={logoImg} 
                alt="CRCCF Logo" 
                className="max-w-[55%] max-h-[55%] object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] select-none pointer-events-none" 
              />
            </div>

            {/* Laptop Base */}
            <div className="bg-[radial-gradient(circle_at_center,#e2e3e4_85%,#a9abac_100%)] border border-solid border-[#a0a3a7] rounded-[2px_2px_12px_12px] border-b-0 border-r-[2px] border-l-[2px] shadow-[inset_0_-2px_8px_0_#6c7074] h-[24px] mt-[-10px] relative w-[620px] z-[9] max-[900px]:w-[100vw] max-[900px]:max-w-[620px] after:bg-[#e2e3e4] after:rounded-[0_0_10px_10px] after:shadow-[inset_0_0_4px_2px_#babdbf] after:content-[''] after:h-[10px] after:left-[50%] after:ml-[-60px] after:absolute after:top-0 after:w-[120px] before:bg-transparent before:rounded-[0_0_3px_3px] before:bottom-[-2px] before:shadow-[-270px_0_#272727,250px_0_#272727] before:content-[''] before:h-[2px] before:left-[50%] before:ml-[-10px] before:absolute before:w-[40px]"></div>
          </div>

          {/* Underglow Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.4),transparent_70%)] blur-[40px] z-[-1] opacity-[0.6]"></div>
        </motion.div>
      </div>
    </section>
  );
}