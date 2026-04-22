// src/pages/Home.jsx

import { lazy, Suspense } from "react";

/* ================= GLOBAL COMPONENTS ================= */
const TopBar = lazy(() => import("../components/TopBar"));
const Navbar = lazy(() => import("../components/Navbar"));
const Footer = lazy(() => import("../components/Footer"));
const ScrollTop = lazy(() => import("../components/ScrollTop"));

/* ================= SECTIONS ================= */
const Hero = lazy(() => import("../sections/Hero"));
const Features = lazy(() => import("../sections/Features"));
const EventBanner = lazy(() => import("../sections/EventBanner"));
const AboutSection = lazy(() => import("../sections/AboutSection"));
const Timeline = lazy(() => import("../sections/Timeline"));
const Values = lazy(() => import("../sections/Values"));
const Programs = lazy(() => import("../sections/Programs"));
const StudentLife = lazy(() => import("../sections/StudentLife"));
const Stats = lazy(() => import("../sections/Stats"));
const Activities = lazy(() => import("../sections/Activities"));
const Testimonials = lazy(() => import("../sections/Testimonials"));
const Innovation = lazy(() => import("../sections/Innovation"));
const ImageContent = lazy(() => import("../sections/ImageContent"));
const Blog = lazy(() => import("../sections/Blog"));
const Events = lazy(() => import("../sections/Events"));

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen text-gray-500">
          Loading...
        </div>
      }
    >
      {/* ================= HEADER ================= */}
      <TopBar />
      <Navbar />

      {/* ================= PAGE SECTIONS ================= */}

      {/* 1. HERO */}
      <Hero />

      {/* 2. FEATURES (3 cards) */}
      <Features />

      {/* 3. EVENT BANNER */}
      <EventBanner />

      {/* 4. ABOUT */}
      <AboutSection />

      {/* 5. TIMELINE */}
      <Timeline />

      {/* 6. VALUES */}
      <Values />

      {/* 7. FEATURED PROGRAMS */}
      <Programs />

      {/* 8. STUDENT LIFE */}
      <StudentLife />

      {/* 9. STATS */}
      <Stats />

      {/* 10. ACTIVITIES */}
      <Activities />

      {/* 11. TESTIMONIALS */}
      <Testimonials />

      {/* 12. ACADEMIC INNOVATION */}
      <Innovation />

      {/* 13. IMAGE + CONTENT (WHY CHOOSE US) */}
      <ImageContent />

      {/* 14. BLOG / NEWS */}
      <Blog />

      {/* 15. EVENTS */}
      <Events />

      {/* ================= FOOTER ================= */}
      <Footer />

      {/* ================= SCROLL TOP ================= */}
      <ScrollTop />
    </Suspense>
  );
}