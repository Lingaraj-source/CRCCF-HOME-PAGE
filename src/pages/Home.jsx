import { Suspense, lazy } from "react";

/* ================= COMPONENTS ================= */
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";

/* ================= ABOVE THE FOLD ================= */
import Hero from "../sections/Hero";
import Features from "../sections/Features";
import EventBanner from "../sections/EventBanner";

/* ================= WHO WE ARE (IMPORTANT FIX) ================= */
import WhoWeAre from "../sections/WhoWeAre";

/* ================= LAZY SECTIONS ================= */
const Introduction = lazy(() => import("../sections/Introduction"));
const PurposeMission = lazy(() => import("../sections/PurposeMission"));
const WhatWeDo = lazy(() => import("../sections/WhatWeDo"));
const Services = lazy(() => import("../sections/Services"));
const Activities = lazy(() => import("../sections/Activities"));
const Innovation = lazy(() => import("../sections/Innovation"));
const Projects = lazy(() => import("../sections/Projects"));

const Timeline = lazy(() => import("../sections/Timeline"));
const CoreValues = lazy(() => import("../sections/Values")); // or rename later
const Programs = lazy(() => import("../sections/Programs"));
const StudentLife = lazy(() => import("../sections/StudentLife"));
const Stats = lazy(() => import("../sections/Stats"));
const Testimonials = lazy(() => import("../sections/Testimonials"));
const WhyChooseUs = lazy(() => import("../sections/ImageContent"));
const Blog = lazy(() => import("../sections/Blog"));
const Events = lazy(() => import("../sections/Events"));
const Footer = lazy(() => import("../components/Footer"));

export default function Home() {
  return (
    <div className="bg-white text-gray-900">

      {/* ================= TOP ================= */}
      <TopBar />
      <Navbar />

      {/* ================= ABOVE FOLD ================= */}
      <Hero />
      <Features />
      <EventBanner />

      {/* ================= WHO WE ARE ================= */}
      <WhoWeAre />

      {/* ================= BELOW FOLD ================= */}
      <Suspense fallback={null}>
        
        <Introduction />
        <PurposeMission />
        <WhatWeDo />
        <Services />
        <Activities />
        <Innovation />
        <Projects />

        <Timeline />
        <CoreValues />
        <Programs />
        <StudentLife />
        <Stats />
        <Testimonials />
        <WhyChooseUs />
        <Blog />
        <Events />
        <Footer />

      </Suspense>

    </div>
  );
}