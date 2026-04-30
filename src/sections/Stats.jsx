import React, { useState, useEffect, useRef } from "react";
import { ShieldCheck, Cpu, Globe, Zap } from "lucide-react";

const StatCard = ({ value, label, subtext, icon: Icon, delay }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  const targetValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
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
      const valueNow = Math.floor(eased * targetValue);

      setCount(valueNow);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, targetValue]);

  return (
    <div
      ref={domRef}
      className="group relative flex items-center gap-6 p-8 rounded-[28px] 
      bg-white/70 backdrop-blur-xl border border-slate-200/70 
      shadow-[0_10px_40px_rgba(0,0,0,0.04)]
      transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
      hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:border-primary/40 overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

      <div className="relative z-10 flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl 
      bg-primary text-white 
      shadow-lg shadow-primary/30
      transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
      group-hover:scale-110 group-hover:rotate-6">
        <Icon size={30} strokeWidth={2.2} />
      </div>

      <div className="relative z-10 flex flex-col">
        <h3 className="text-4xl md:text-5xl font-extrabold tracking-[-0.02em] text-[#0F172A] tabular-nums">
          {count}{suffix}
        </h3>

        <p className="text-xs font-extrabold text-primary uppercase tracking-[0.2em] mt-1">
          {label}
        </p>

        <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed">
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
    <section className="py-28 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full 
          bg-blue-50 border border-blue-100 
          text-primary text-[11px] font-extrabold uppercase tracking-[0.25em]">
            🛡️ Network Intelligence
          </span>
        </div>

        {/* ✅ Clean Bold Heading */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold font-[Inter] leading-tight mb-6 text-[#0F172A] tracking-[-0.01em]">
            Our{" "}
            <span className="text-[#93C5FD]">
              Digital
            </span>{" "}
            Footprint
          </h2>

          <p className="text-slate-500 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Leading the charge in{" "}
            <span className="text-primary font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Cyber Defense
            </span>{" "}
            and{" "}
            <span className="text-primary font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Product Innovation
            </span>. 
            Empowering modern businesses with secure, scalable technology.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} delay={i * 150} />
          ))}
        </div>

      </div>
    </section>
  );
}