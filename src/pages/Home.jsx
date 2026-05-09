import { Suspense, lazy } from "react";

/* ================= COMPONENTS ================= */

/* ================= ABOVE THE FOLD ================= */
import Hero from "../sections/Hero";
import TrustedBy from "../sections/TrustedBy";
/* ================= WHO WE ARE (IMPORTANT FIX) ================= */
import WhoWeAre from "../sections/WhoWeAre";
import TechStack from "../sections/TechStack";
import InternshipPrograms from "../sections/InternshipSection";

/* ================= LAZY SECTIONS ================= */
const Introduction = lazy(() => import("../sections/Introduction"));
const PurposeMission = lazy(() => import("../sections/PurposeMission"));
const WhatWeDo = lazy(() => import("../sections/WhatWeDo"));
const Activities = lazy(() => import("../sections/Activities"));
const InternshipSection = lazy(() => import("../sections/InternshipSection"));
const Projects = lazy(() => import("../sections/Projects"));
const Stats = lazy(() => import("../sections/Stats"));
const Testimonials = lazy(() => import("../sections/Testimonials"));
const WhyChooseUs = lazy(() => import("../sections/WhyChooseUs"));
const Footer = lazy(() => import("../components/Footer"));

export default function Home() {
  return (
    <div className="bg-white text-gray-900">

      {/* ================= TOP ================= */}

      {/* ================= ABOVE FOLD ================= */}
      <Hero />
      <TrustedBy />

      {/* ================= WHO WE ARE ================= */}
      <WhoWeAre />

      {/* ================= BELOW FOLD ================= */}
      <Suspense fallback={null}>
        
        <Introduction />
        <PurposeMission />
        <WhatWeDo />
        <Activities />
        <TechStack/>
        <Projects />
        <InternshipPrograms/>
        <Stats />
        <Testimonials />
        <WhyChooseUs />

      </Suspense>

    </div>
  );
}