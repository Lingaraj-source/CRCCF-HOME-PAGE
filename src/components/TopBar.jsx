import { useState, useEffect } from "react";
import {
  FaSearch,
  FaCalendarAlt,
  FaGlobe,
  FaEllipsisV,
  FaQuestionCircle,
} from "react-icons/fa";

import logo from "../assets/logo.png";

export default function TopBar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  // ⏱️ Real-time clock
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = time.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = time.toLocaleTimeString("en-IN");

  return (
    <div className="bg-[#0f172a] text-white text-sm relative z-[999]">

      {/* ================= CONTAINER ================= */}
      <div className="flex items-center justify-between px-4 md:px-10 lg:px-20 h-10">

        {/* ================= LEFT (MARQUEE ~80%) ================= */}
        <div className="flex-1 overflow-hidden mr-4 hidden md:block">

          <div className="marquee-wrapper">
            <div className="marquee-track">

              {/* BLOCK 1 */}
              <div className="flex items-center gap-1 mr-10">
                <img
                  src={logo}
                  alt="logo"
                  className="h-6 w-auto flex-shrink-0 object-contain"
                />
                <p className="whitespace-nowrap text-white/80">
                  Welcome to CR Cyber Crime Foundation — a leading IT, software, and cybersecurity organization in India.
                  With 24/7 dedication, CRCCF delivers innovative software products, scalable applications, and end-to-end IT services,
                  along with advanced cyber security, intelligence, and awareness solutions. We empower businesses and individuals
                  with secure, reliable, and future-ready digital technologies.
                </p>
              </div>

              {/* BLOCK 2 (duplicate for seamless loop) */}
              <div className="flex items-center gap-1">
                <img
                  src={logo}
                  alt="logo"
                  className="h-6 w-auto flex-shrink-0 object-contain"
                />
                <p className="whitespace-nowrap text-white/80">
                  Welcome to CR Cyber Crime Foundation — a leading IT, software, and cybersecurity organization in India.
                  With 24/7 dedication, CRCCF delivers innovative software products, scalable applications, and end-to-end IT services,
                  along with advanced cyber security, intelligence, and awareness solutions. We empower businesses and individuals
                  with secure, reliable, and future-ready digital technologies.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* ================= RIGHT (ICONS) ================= */}
        <div className="flex items-center gap-4 flex-shrink-0">

          {/* 🔍 Search */}
          <div className="relative">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="hover:text-blue-400 transition"
            >
              <FaSearch />
            </button>

            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="absolute right-0 top-8 px-3 py-1 rounded bg-white text-black text-sm shadow-md outline-none w-40"
              />
            )}
          </div>

          {/* 📅 Calendar */}
          <div
            onMouseEnter={() => setShowCalendar(true)}
            onMouseLeave={() => setShowCalendar(false)}
            className="relative"
          >
            <button className="hover:text-blue-400 transition">
              <FaCalendarAlt />
            </button>

            {showCalendar && (
              <div className="fixed top-12 right-6 bg-white text-black p-4 rounded-lg shadow-xl w-56 z-[9999] border border-gray-200">

                <p className="text-sm text-blue-600 font-semibold text-center">
                  {formattedDate}
                </p>

                <p className="text-lg font-bold text-center mt-1">
                  {formattedTime}
                </p>

                <p className="text-xs text-center mt-2 text-gray-500">
                  IST (Indian Standard Time)
                </p>
              </div>
            )}
          </div>

          {/* ❓ Help */}
          <button className="hover:text-yellow-400 transition">
            <FaQuestionCircle />
          </button>

          {/* 🌐 Reach Us */}
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-md text-xs font-medium transition">
            <FaGlobe />
            Reach Us
          </button>

          {/* 📱 Mobile menu */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaEllipsisV />
          </button>
        </div>
      </div>

      {/* ================= MOBILE DROPDOWN ================= */}
      {menuOpen && (
        <div className="md:hidden absolute right-2 top-10 bg-white text-black rounded shadow-md p-3 w-44 z-[9999]">
          <button className="block w-full text-left py-1">Search</button>
          <button className="block w-full text-left py-1">Calendar</button>
          <button className="block w-full text-left py-1">Help</button>
          <button className="block w-full text-left py-1">Reach Us</button>
        </div>
      )}

      {/* ================= MARQUEE CSS ================= */}
      <style>
        {`
          .marquee-wrapper {
            overflow: hidden;
            width: 100%;
          }

          .marquee-track {
            display: flex;
            width: max-content;
            animation: marqueeScroll 60s linear infinite;
          }

          .marquee-track:hover {
            animation-play-state: paused;
          }

          @keyframes marqueeScroll {
            0% {
              transform: translateX(30%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
}