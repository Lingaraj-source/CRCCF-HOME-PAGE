import React, { useState, useEffect, useRef } from "react";
import { ShieldCheck, Cpu, Globe, Zap } from "lucide-react";

const StatCard = ({ value, label, subtext, icon: Icon, delay }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  // Improved parser to correctly handle decimals (e.g., 99.9) and integers
  const isDecimal = value.includes(".");
  const numericString = value.replace(/[^0-9.]/g, "");
  const targetValue = parseFloat(numericString);
  const suffix = value.replace(/[0-9.]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = easeOut(progress);
      
      // Handle decimals gracefully for the UI
      const valueNow = isDecimal
        ? (eased * targetValue).toFixed(1)
        : Math.floor(eased * targetValue);

      setCount(valueNow);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, targetValue, isDecimal]);

  return (
    <div
      ref={domRef}
      className="group relative flex-1 p-8 border-b lg:border-b-0 lg:border-r border-slate-200/60 last:border-0 
      hover:bg-slate-50/50 transition-colors duration-500 overflow-hidden flex flex-col justify-center"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Subtle Premium Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent transition-opacity duration-700 pointer-events-none" />

      {/* Top Row: Icon + Value */}
      <div className="flex items-center gap-4 mb-4 relative z-10">
        <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:rotate-3">
          <Icon size={24} strokeWidth={2} />
        </div>
        
        <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0F172A] tabular-nums group-hover:text-blue-600 transition-colors duration-500">
          {count}{suffix}
        </h3>
      </div>

      {/* Bottom Row: Text Content */}
      <div className="relative z-10">
        <p className="text-[11px] font-extrabold text-blue-600 uppercase tracking-[0.2em] mb-1.5">
          {label}
        </p>
        <p className="text-sm text-slate-500 font-medium leading-relaxed">
          {subtext}
        </p>
      </div>
    </div>
  );
};

export default function Stats() {
  const stats = [
    { value: "500+", label: "Cyber Defenses", subtext: "Enterprise-grade security deployments", icon: ShieldCheck },
    { value: "120+", label: "SaaS Products", subtext: "Scalable software solutions built", icon: Cpu },
    { value: "25M+", label: "Secure Transactions", subtext: "Handled through our encrypted APIs", icon: Zap },
    { value: "99.9%", label: "Uptime Reliability", subtext: "Guaranteed product availability", icon: Globe },
  ];

  return (
    // Reduced outer padding (py-28 to py-16) to save vertical space
    <section className="py-16 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - Reduced bottom margin (mb-24 to mb-12) */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-extrabold uppercase tracking-[0.25em] mb-8 shadow-sm">
            🛡️ Network Intelligence
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold font-[Inter] leading-tight mb-6 text-[#0F172A] tracking-[-0.01em]">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Digital</span> Footprint
          </h2>

          <p className="text-slate-500 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Leading the charge in{" "}
            <span className="text-blue-600 font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Cyber Defense
            </span>{" "}
            and{" "}
            <span className="text-blue-600 font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Product Innovation
            </span>. Empowering modern businesses with secure, scalable technology.
          </p>
        </div>

        {/* Unified Dashboard Strip Container */}
        <div className="relative">
          {/* Background Ambient Glow for Premium Feel */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 via-blue-400/10 to-blue-600/10 rounded-[2.5rem] blur-xl opacity-70" />
          
          {/* Main Strip Panel */}
          <div className="relative bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-[2rem] shadow-2xl shadow-slate-200/50 flex flex-col lg:flex-row overflow-hidden transform transition-all duration-700 hover:shadow-blue-900/5 hover:border-blue-200/60">
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} delay={i * 150} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}