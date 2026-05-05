import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import MainLayout from "./layouts/MainLayout";
import ReachUs from "./pages/ReachUs";
import Gallery from "./pages/Gallery/Gallery";
import CategoryPage from "./pages/Gallery/CategoryPage";
import AboutRoutes from "./pages/AboutUs/AboutRoutes";
import ServiceRouter from "./pages/Service/ServiceRouter";

// Lazy pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/AboutUs/AboutRoutes"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Internship = lazy(() => import("./pages/Internship"));

function Loader() {
  return (
    <div className="h-screen flex items-center justify-center text-xl">
      Loading...
    </div>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* 🔥 LAYOUT WRAPPER */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about/*" element={<AboutRoutes />} />
            <Route path="/services/*" element={<ServiceRouter />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/reachus" element={<ReachUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/category/:id" element={<CategoryPage />} />
          </Route>

          {/* ❗ OUTSIDE LAYOUT */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
