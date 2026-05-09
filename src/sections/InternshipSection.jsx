import { motion } from "framer-motion";
import { 
  MonitorPlay, ChevronRight, BookOpen, Clock, Package, Target, 
  Award, Globe, Settings, BookMarked, BrainCircuit, Rocket, 
  ShieldCheck, FileBadge, ScrollText, Laptop, Building2, UserCheck, 
  Users, CheckCircle2, Search, Sparkles
} from "lucide-react";

export default function InternshipPrograms() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const floatAnimation = {
    y: [-5, 5],
    transition: { duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
  };

  return (
    <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Ambient Animated Glows */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-400/20 blur-[120px] rounded-full mix-blend-multiply pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-400/20 blur-[120px] rounded-full mix-blend-multiply pointer-events-none"
      />

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        
        {/* HEADER SECTION WITH SOCIAL PROOF & SHIMMER */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50/80 text-blue-700 rounded-full text-sm font-bold tracking-wide border border-blue-200/50 shadow-sm backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-500" /> Career Launchpad
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
          >
            {/* Continuously Animated Text Gradient */}
            <motion.span 
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, ease: "linear", repeat: Infinity }}
              className="bg-[length:200%_auto] bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent"
            >
              Internship Programs
            </motion.span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8"
          >
            Structured, industry-oriented internships designed to equip you with practical skills, real-time experience, and professional exposure.
          </motion.p>

          {/* Social Proof Trust Badge */}
          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="flex items-center gap-4 bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-100"
          >
            <div className="flex -space-x-3">
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=1" alt="Student" />
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=2" alt="Student" />
              <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=3" alt="Student" />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">+</div>
            </div>
            <span className="text-sm font-semibold text-gray-700">Join 500+ successful interns</span>
          </motion.div>
        </div>

        {/* BENTO BOX GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* 1. TALL CARD: INTERNSHIP DOMAINS WITH NOISE & GLARE */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1 lg:row-span-2 relative group rounded-[2rem] bg-gradient-to-b from-blue-500 via-indigo-600 to-purple-700 p-[2px] shadow-lg hover:shadow-[0_8px_40px_rgba(79,70,229,0.3)] transition-all duration-500 hover:-translate-y-1.5 overflow-hidden"
          >
            {/* Sweeping Glare Animation on Hover */}
            <div className="absolute inset-0 w-full h-full -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_ease-in-out_infinite] z-30 pointer-events-none"></div>
            
            <div className="relative h-full w-full bg-gradient-to-br from-indigo-600 to-purple-800 rounded-[calc(2rem-2px)] p-8 flex flex-col overflow-hidden z-10">
              {/* Premium Subtle Grain Texture */}
              <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>
              
              <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3 border-b border-white/20 pb-5 relative z-10">
                <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                  <MonitorPlay className="w-6 h-6 text-blue-200" />
                </div>
                Domains
              </h3>
              <p className="text-indigo-100/90 text-sm mb-6 leading-relaxed relative z-10">
                Explore specialized opportunities in:
              </p>
              <ul className="space-y-4 text-white/95 font-medium text-[15px] flex-1 relative z-10">
                {[
                  "Software Development", "Software Designing", "Software Testing", 
                  "Digital Marketing", "SEO Optimization", "Cyber Law", 
                  "Cyber Psychology", "Cyber Investigation", "Cyber Research", 
                  "Cyber Case Study", "Cyber Forensic"
                ].map((domain, idx) => (
                  <li key={idx} className="flex items-center gap-2 group/item cursor-pointer">
                    <ChevronRight className="w-4 h-4 text-blue-300 opacity-70 group-hover/item:translate-x-1 group-hover/item:opacity-100 group-hover/item:text-white transition-all duration-300" />
                    <span className="group-hover/item:translate-x-1 transition-transform duration-300">{domain}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* 2. WIDE CARD: PROGRAM STRUCTURE */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-100 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <BookOpen className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">Program Structure & Learning</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  Bridge the gap between academic knowledge and industry requirements.
                </p>
              </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 relative z-10">
              {[
                { icon: Globe, color: "text-blue-500", border: "hover:border-blue-200", text: "Real-time project exposure" },
                { icon: Settings, color: "text-indigo-500", border: "hover:border-indigo-200", text: "Industry-relevant skills & practice" },
                { icon: BookMarked, color: "text-purple-500", border: "hover:border-purple-200", text: "Balanced theory and practical" },
                { icon: UserCheck, color: "text-pink-500", border: "hover:border-pink-200", text: "Guidance from expert mentors" },
              ].map((item, i) => (
                <li key={i} className={`bg-gray-50/50 hover:bg-white shadow-sm transition-all duration-300 rounded-xl p-4 text-sm text-gray-700 border border-transparent ${item.border} flex items-center gap-3 font-medium cursor-default`}>
                  <item.icon className={`w-5 h-5 ${item.color} shrink-0`} /> {item.text}
                </li>
              ))}
              <li className="bg-gray-50/50 hover:bg-white shadow-sm hover:border-blue-200 transition-all duration-300 rounded-xl p-4 text-sm text-gray-700 border border-transparent md:col-span-2 flex items-center gap-3 font-medium cursor-default">
                <Users className="w-5 h-5 text-blue-500 shrink-0" /> Open learning environment with 24/7 mentor support
              </li>
            </ul>
          </motion.div>

          {/* 3. SMALL CARD: DURATION & MODE */}
          <motion.div variants={itemVariants} className="lg:col-span-1 bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 transform origin-left scale-x-100 group-hover:scale-x-105 transition-transform duration-500"></div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="w-6 h-6 text-indigo-600" /> Logistics
            </h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-indigo-50/80 to-blue-50/50 p-5 rounded-2xl border border-indigo-100/50 hover:shadow-md transition-all">
                <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-2 flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> Duration</span>
                <span className="text-gray-900 font-bold text-lg">3 to 6 Months</span>
              </div>
              <div className="bg-gradient-to-br from-purple-50/80 to-pink-50/50 p-5 rounded-2xl border border-purple-100/50 hover:shadow-md transition-all">
                <span className="text-xs font-bold text-purple-500 uppercase tracking-wider mb-2 flex items-center gap-2"><Laptop className="w-3.5 h-3.5" /> Mode</span>
                <span className="text-gray-900 font-bold">Online & Offline</span>
              </div>
            </div>
          </motion.div>

          {/* 4. SMALL CARD: WHAT WE PROVIDE */}
          <motion.div variants={itemVariants} className="lg:col-span-1 bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Package className="w-6 h-6 text-purple-600" /> We Provide
            </h3>
            <ul className="space-y-5">
              {[
                { icon: BookOpen, color: "text-blue-600", bg: "bg-blue-50", text: "Comprehensive Materials" },
                { icon: Laptop, color: "text-indigo-600", bg: "bg-indigo-50", text: "Hands-on Practical Sessions" },
                { icon: BrainCircuit, color: "text-purple-600", bg: "bg-purple-50", text: "Continuous Evaluation" },
                { icon: Building2, color: "text-pink-600", bg: "bg-pink-50", text: "Professional Environment" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-700 text-sm font-semibold group/list">
                  <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center shrink-0 border border-white shadow-sm group-hover/list:scale-110 transition-all`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 5. WIDE CARD: MENTORSHIP & PLACEMENT */}
          <motion.div variants={itemVariants} className="lg:col-span-2 bg-[#fdfdfd] rounded-[2rem] p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden relative group">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-rose-50 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-50 transition-colors duration-700"></div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3 relative z-10">
              <Target className="w-6 h-6 text-rose-500 group-hover:text-blue-500 transition-colors" /> Placement Support
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10">
              Committed to delivering quality education. Our mentors ensure you receive proper guidance, industry insights, and continuous support.
            </p>
            <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col sm:flex-row items-center gap-5 relative z-10 group-hover:border-blue-200 transition-colors cursor-default">
              <motion.div variants={floatAnimation} animate="animate" className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-lg">
                <Rocket className="w-8 h-8 text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.div>
              <p className="text-gray-700 text-[15px] font-medium leading-relaxed">
                We provide <strong className="text-gray-900">placement assistance</strong> to eligible candidates, helping you transition into real-world career opportunities based on your skills and performance.
              </p>
            </div>
          </motion.div>

          {/* 6. FULL WIDTH HERO CARD: CERTIFICATION */}
          <motion.div variants={itemVariants} className="lg:col-span-4 bg-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group hover:-translate-y-1 transition-all duration-700 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_-15px_rgba(79,70,229,0.15)] hover:border-blue-100">
            <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-blue-50/80 blur-[100px] rounded-full group-hover:bg-blue-100/60 transition-all duration-700 ease-out pointer-events-none"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                  <Award className="w-4 h-4" /> Official Recognition
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
                  Certification & Verification
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <span className="inline-flex items-center gap-3 font-semibold text-gray-800 bg-white px-5 py-3 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                    <FileBadge className="w-5 h-5 text-blue-600" /> Digital Certificate
                  </span>
                  <span className="inline-flex items-center gap-3 font-semibold text-gray-800 bg-white px-5 py-3 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-200 transition-all">
                    <ScrollText className="w-5 h-5 text-purple-600" /> Physical Hard Copy
                  </span>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-1.5 h-full bg-indigo-500 rounded-full self-stretch"></div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Certifications are officially issued by CR Cyber Crime Foundation (CRCCF) holding high professional value for your career.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
                <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] group-hover:border-blue-200 transition-all duration-500 w-full max-w-md group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)]">
                  <div className="flex justify-center mb-6 relative">
                     <motion.div variants={floatAnimation} animate="animate" className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_10px_30px_rgba(79,70,229,0.3)]">
                       <ShieldCheck className="w-10 h-10 text-white" />
                     </motion.div>
                  </div>
                  <h4 className="text-gray-900 font-extrabold text-center mb-4 text-xl flex items-center justify-center gap-2">
                    <Search className="w-5 h-5 text-indigo-500" /> Verification Portal
                  </h4>
                  <p className="text-gray-500 text-sm text-center leading-relaxed">
                    Ensure authenticity. Each student’s certification details, profile, and photograph are securely published on our official portal, adding transparency and trust for hiring organizations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Required CSS for the shimmer effect - Add this to your globals.css if it doesn't work out of the box */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%) skewX(12deg); }
        }
      `}} />
    </section>
  );
}