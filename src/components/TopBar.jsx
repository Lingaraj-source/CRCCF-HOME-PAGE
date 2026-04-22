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

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = time.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  const formattedTime = time.toLocaleTimeString("en-IN");

  return (
    <div className="bg-[#0f172a] text-white text-sm relative z-[999]">

      {/* ================= CONTAINER ================= */}
      <div className="flex items-center justify-between px-3 md:px-10 lg:px-20 h-10 gap-2">

        {/* ================= MARQUEE (VISIBLE ON ALL DEVICES) ================= */}
        <div className="flex-1 overflow-hidden">

          <div className="marquee-wrapper">
            <div className="marquee-track">

              {/* BLOCK 1 */}
              <div className="flex items-center gap-1 mr-8">
                <img
                  src={logo}
                  alt="logo"
                  className="h-5 md:h-6 object-contain flex-shrink-0"
                />
                <p className="whitespace-nowrap text-[11px] md:text-sm text-white/80">
                  Welcome to CR Cyber Crime Foundation — a leading IT, software, and cybersecurity organization in India.
                  With 24/7 dedication, CRCCF delivers innovative software products, scalable applications, and end-to-end IT services,
                  along with advanced cyber security, intelligence, and awareness solutions.
                </p>
              </div>

              {/* BLOCK 2 */}
              <div className="flex items-center gap-1">
                <img
                  src={logo}
                  alt="logo"
                  className="h-5 md:h-6 object-contain flex-shrink-0"
                />
                <p className="whitespace-nowrap text-[11px] md:text-sm text-white/80">
                  We empower businesses and individuals with secure, reliable, and future-ready digital technologies.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center gap-3 flex-shrink-0">

          {/* SEARCH */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="hover:text-blue-400 transition text-sm"
            >
              <FaSearch />
            </button>

            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="absolute right-0 top-8 px-3 py-1 rounded bg-white text-black text-xs shadow-md outline-none w-36"
              />
            )}
          </div>

          {/* CALENDAR */}
          <div
            onMouseEnter={() => setShowCalendar(true)}
            onMouseLeave={() => setShowCalendar(false)}
            className="relative hidden sm:block"
          >
            <button className="hover:text-blue-400 transition text-sm">
              <FaCalendarAlt />
            </button>

            {showCalendar && (
              <div className="fixed top-12 right-4 bg-white text-black p-3 rounded-lg shadow-xl w-48 z-[9999]">

                <p className="text-xs text-blue-600 font-semibold text-center">
                  {formattedDate}
                </p>

                <p className="text-base font-bold text-center mt-1">
                  {formattedTime}
                </p>
              </div>
            )}
          </div>

          {/* HELP */}
          <button className="hidden sm:block hover:text-yellow-400 transition text-sm">
            <FaQuestionCircle />
          </button>

          {/* REACH US */}
          <button className="hidden sm:flex items-center gap-1 bg-blue-600 px-2 py-1 rounded text-[10px]">
            <FaGlobe />
            Reach Us
          </button>

          {/* MOBILE MENU */}
          <button
            className="sm:hidden text-sm"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaEllipsisV />
          </button>
        </div>
      </div>

      {/* ================= MOBILE DROPDOWN ================= */}
      {menuOpen && (
        <div className="sm:hidden absolute right-2 top-10 bg-white text-black rounded shadow-md p-3 w-40 z-[9999] text-xs">
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
            animation: marqueeScroll 55s linear infinite;
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