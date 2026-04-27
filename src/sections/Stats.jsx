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
    let start = 0;
    const duration = 2000;
    const increment = targetValue / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, targetValue]);

  return (
    <div 
      ref={domRef}
      className="group flex items-center gap-6 p-8 bg-white border border-slate-200 rounded-[24px] shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 reveal-item relative overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Subtle Hover Background Pulse */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Icon Box - High Visibility Blue */}
      <div className="relative z-10 flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
        <Icon size={32} strokeWidth={2} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col">
        <h3 className="text-3xl md:text-4xl font-black text-[#0F172A] tabular-nums tracking-tight">
          {count}{suffix}
        </h3>
        <p className="text-sm font-bold text-primary uppercase tracking-widest">
          {label}
        </p>
        <p className="text-xs text-slate-500 mt-1 font-medium italic">
          {subtext}
        </p>
      </div>
    </div>
  );
};

export default function Stats() {
  const stats = [
    { 
        value: "500+", 
        label: "Cyber Defenses", 
        subtext: "Enterprise-grade security deployments",
        icon: ShieldCheck 
    },
    { 
        value: "120+", 
        label: "SaaS Products", 
        subtext: "Scalable software solutions built",
        icon: Cpu 
    },
    { 
        value: "25M+", 
        label: "Secure Transactions", 
        subtext: "Handled through our encrypted APIs",
        icon: Zap 
    },
    { 
        value: "99.9%", 
        label: "Uptime Reliability", 
        subtext: "Guaranteed product availability",
        icon: Globe 
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        {/* Section Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-black uppercase tracking-widest">
            🛡️ Network Intelligence
          </span>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] mb-6 tracking-tight">
            Our Digital Footprint
          </h2>
          <p className="text-slate-500 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Leading the charge in <span className="text-primary font-bold">Cyber Defense</span> and <span className="text-primary font-bold">Product Innovation</span>. 
            Empowering modern businesses with secure, scalable technology.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}