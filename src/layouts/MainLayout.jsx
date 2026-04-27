import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* 🔝 ALWAYS VISIBLE */}
      <TopBar />
      <Navbar />

      {/* 🔽 PAGE CONTENT */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* 🔻 ALWAYS VISIBLE */}
      <Footer />

    </div>
  );
}