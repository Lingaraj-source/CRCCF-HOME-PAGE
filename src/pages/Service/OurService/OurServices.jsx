import React from "react";
import CompanyMarquee from "../../../components/Service/common/CompanyMarquee";
import ServicesKeyboard from "../../../components/Service/services/ServicesKeyboard";

const OurServices = () => {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* 🔥 UPDATED HERO HEADER */}
        {/* 🔥 CLEAN MINIMAL HEADER */}
        {/* 🔥 ADVANCED HEADER WITH ANIMATION */}
        <div className="relative mb-8 rounded-3xl overflow-hidden shadow-xl">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#1E40AF] animate-gradient"></div>

          {/* Cyber Grid Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          {/* Glow Effects */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-400/20 blur-3xl rounded-full"></div>

          {/* Content (UNCHANGED STRUCTURE) */}
          <div className="relative z-10 text-center py-10 px-6 sm:px-10">
            <h1 className="text-white text-3xl sm:text-4xl font-bold">
              Cyber Security & Software Solutions
            </h1>

            <p className="text-blue-100 text-1xl mt-3 max-w-3xl mx-auto">
              We provide a powerful combination of cyber security services and
              software solutions designed to address modern digital challenges.
              From awareness, support, and investigation assistance to
              developing reliable software products, our goal is to create
              secure, efficient, and future-ready digital environments.
            </p>
          </div>
        </div>

        {/* Existing Components (unchanged) */}
        <CompanyMarquee single direction="right" />

        <ServicesKeyboard />

        <CompanyMarquee single direction="left" />
      </div>
    </div>
  );
};

export default OurServices;
