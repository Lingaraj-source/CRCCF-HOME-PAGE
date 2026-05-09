import { Suspense, lazy } from "react";

/* ================= COMPONENTS ================= */

/* ================= ABOVE THE FOLD ================= */
import Hero from "../sections/Hero";
import Introduction from "../sections/Introduction";
import TrustedBy from "../sections/TrustedBy";
import Innovation from "../sections/Innovation";
/* ================= WHO WE ARE (IMPORTANT FIX) ================= */

/* ================= LAZY SECTIONS ================= */
const WhoWeAre = lazy(() => import("../sections/WhoWeAre"));
// const Introduction = lazy(() => import("../sections/Introduction"));
const PurposeMission = lazy(() => import("../sections/PurposeMission"));
const WhatWeDo = lazy(() => import("../sections/WhatWeDo"));
const Services = lazy(() => import("../sections/Services"));
const Activities = lazy(() => import("../sections/Activities"));
const TechStack = lazy(() => import("../sections/TechStack"));
const InternshipSection = lazy(() => import("../sections/InternshipSection"));
const Projects = lazy(() => import("../sections/Projects"));
const Stats = lazy(() => import("../sections/Stats"));
const WhyChooseUs = lazy(() => import("../sections/WhyChooseUs"));
const Insights = lazy(() => import("../sections/Insights"));
const Testimonials = lazy(() => import("../sections/Testimonials"));
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
        
        <Introduction/>
        <PurposeMission />
        <WhatWeDo />
        <Services/>
        <Activities />
        <Innovation/>
        <TechStack/>
        <Projects />
        <InternshipSection/>
        <WhyChooseUs />
        <Insights/>
        <Testimonials />

      </Suspense>

    </div>
  );
}