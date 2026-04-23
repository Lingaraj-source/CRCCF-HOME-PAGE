import React from "react";
import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="py-12 md:py-14 lg:py-16 bg-[#F8FAFC]">

      <div className="px-4 md:px-10 lg:px-20 max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div className="max-w-xl">

          <span className="inline-block bg-[#DBEAFE] text-[#2563EB] text-xs px-3 py-1 rounded-full mb-4">
            🎓 Premier Academic Institution
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight mb-5">
            Empowering Minds, Shaping Tomorrow’s Leaders
          </h1>

          <p className="text-[#475569] mb-6 max-w-lg">
            Delivering secure IT, software, and cybersecurity solutions.
          </p>

          {/* STATS */}
          <div className="flex gap-6 bg-white shadow-sm rounded-xl px-6 py-4 w-fit mb-6">
            <div>
              <h3 className="text-[#2563EB] font-bold">96%</h3>
              <p className="text-xs text-[#64748B]">Employment</p>
            </div>
            <div>
              <h3 className="text-[#2563EB] font-bold">12:1</h3>
              <p className="text-xs text-[#64748B]">Ratio</p>
            </div>
            <div>
              <h3 className="text-[#2563EB] font-bold">50+</h3>
              <p className="text-xs text-[#64748B]">Programs</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#2563EB] text-white px-6 py-2 rounded-md hover:bg-[#1D4ED8]">
              Begin Journey
            </button>
            <button className="border px-6 py-2 rounded-md">
              Virtual Tour
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <img
            src={heroImg}
            alt="hero"
            className="w-full h-[340px] md:h-[420px] object-cover rounded-2xl shadow-md"
          />
        </div>

      </div>
    </section>
  );
}