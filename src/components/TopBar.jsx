import { useState, useEffect, useRef } from "react";
import {
  LuSearch,
  LuCalendarClock,
  LuGlobe,
  LuMenu,
  LuImage,
  LuX,
} from "react-icons/lu";

import logo from "../assets/logo.png";
import ReachUs from "../pages/ReachUs";

export default function TopBar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const [searchValue, setSearchValue] = useState("");

  const searchRef = useRef();
  const calendarRef = useRef();

  // LIVE TIME
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
      if (calendarRef.current && !calendarRef.current.contains(e.target)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // PREVENT OVERLAP
  useEffect(() => {
    if (showSearch) setShowCalendar(false);
    if (showCalendar) setShowSearch(false);
  }, [showSearch, showCalendar]);

  const formattedDate = time.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  const formattedTime = time.toLocaleTimeString("en-IN");

  return (
    <div className="sticky top-0 bg-[#0f172a] text-white text-sm z-[60] w-full">

      {/* Top glow line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-40"></div>

      <div className="flex items-center justify-between px-4 md:px-10 lg:px-20 h-12 md:h-14 gap-3">

        {/* ===== MARQUEE ===== */}
        <div className="flex-1 min-w-0 overflow-hidden">
          <div className="marquee-wrapper">
            <div className="marquee-track">

              <div className="flex items-center gap-2 mr-10">
                <img src={logo} alt="logo" className="h-6 md:h-7 object-contain" />
                <p className="whitespace-nowrap text-xs md:text-sm text-white/80">
                  Welcome to CR Cyber Crime Foundation — a leading IT, software, and cybersecurity organization in India. With 24/7 dedication, CRCCF delivers innovative software products, scalable applications, and end-to-end IT services, along with advanced cyber security, intelligence, and awareness solutions.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <img src={logo} alt="logo" className="h-6 md:h-7 object-contain" />
                <p className="whitespace-nowrap text-xs md:text-sm text-white/80">
                  We empower businesses and individuals with secure, reliable, and future-ready digital technologies.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ===== RIGHT SIDE ===== */}
        <div className="flex items-center gap-4 md:gap-5 shrink-0">

          {/* SEARCH */}
          <div className="relative hidden sm:block" ref={searchRef}>
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-white/70 hover:text-blue-400 transition-all duration-200 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]"
            >
              <LuSearch size={18} />
            </button>

            <div
              className={`absolute right-0 top-10 md:top-12 transition-all duration-300 ${
                showSearch
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="flex items-center bg-white/90 backdrop-blur-md text-black rounded-full shadow-2xl px-3 py-1 w-56 border border-gray-200">

                <LuSearch className="text-gray-400 text-xs mr-2" />

                <input
                  type="text"
                  autoFocus
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search..."
                  className="flex-1 outline-none text-xs min-w-0 bg-transparent"
                />

                {searchValue && (
                  <LuX
                    onClick={() => setSearchValue("")}
                    className="text-gray-400 cursor-pointer text-xs shrink-0"
                  />
                )}

                <button
                  onClick={() => setShowSearch(false)}
                  className="text-blue-500 text-xs ml-2 font-medium shrink-0"
                >
                  Close
                </button>

              </div>
            </div>
          </div>

          {/* CALENDAR */}
          <div ref={calendarRef} className="relative hidden sm:block">
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className="text-white/70 hover:text-blue-400 transition-all duration-200 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]"
            >
              <LuCalendarClock size={18} />
            </button>

            {showCalendar && (
              <div className="absolute right-0 top-10 bg-gradient-to-br from-white to-gray-50 text-black p-4 rounded-xl shadow-2xl w-52 z-[9999] border border-blue-100 backdrop-blur-md">
                <p className="text-xs text-blue-600 font-semibold text-center">
                  {formattedDate}
                </p>
                <p className="text-lg font-bold text-center mt-1">
                  {formattedTime}
                </p>
              </div>
            )}
          </div>

          {/* GALLERY (REPLACED HELP) */}
          <button
            onClick={() => window.location.href = "/gallery"}
            className="hidden sm:block text-white/70 hover:text-blue-400 transition-all duration-200 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]"
          >
            <LuImage size={18} />
          </button>

          {/* REACH US */}
          <button
            onClick={() => window.location.href = "/reachus"}
            className="hidden sm:flex items-center gap-2 bg-blue-600 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium shadow-md hover:bg-blue-500 transition-all duration-200 hover:scale-105"
          >
            <LuGlobe size={16} />
            Reach Us
          </button>

          {/* MOBILE MENU */}
          <button
            className="sm:hidden text-white/80 hover:text-blue-400 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <LuMenu size={18} />
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="sm:hidden absolute right-2 top-12 bg-white text-black rounded-lg shadow-xl p-2 w-40 z-[9999] border border-gray-100">

          <button onClick={() => { setShowSearch(true); setMenuOpen(false); }} className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded flex items-center gap-2">
            <LuSearch /> Search
          </button>

          <button onClick={() => { setShowCalendar(true); setMenuOpen(false); }} className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded flex items-center gap-2">
            <LuCalendarClock /> Calendar
          </button>

          <button onClick={() => window.location.href="/gallery"} className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded flex items-center gap-2">
            <LuImage /> Gallery
          </button>

          <button onClick={() => window.location.href="/reachus"} className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded text-blue-600 font-medium flex items-center gap-2">
            <LuGlobe /> Reach Us
          </button>

        </div>
      )}

      {/* MOBILE SEARCH */}
      {showSearch && (
        <div className="sm:hidden absolute top-0 left-0 w-full h-12 bg-white z-[9999] shadow-md flex items-center px-4 gap-3 animate-slideDown">

          <LuSearch className="text-gray-400 text-sm shrink-0" />

          <input
            type="text"
            autoFocus
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search..."
            className="flex-1 outline-none text-sm text-black min-w-0"
          />

          {searchValue && (
            <LuX onClick={() => setSearchValue("")} className="text-gray-400 text-sm shrink-0" />
          )}

          <button
            onClick={() => {
              setShowSearch(false);
              setSearchValue("");
            }}
            className="text-blue-600 text-sm font-medium ml-2 shrink-0"
          >
            Cancel
          </button>

        </div>
      )}

      {/* MOBILE CALENDAR */}
      {showCalendar && (
        <div className="sm:hidden absolute top-14 right-2 bg-white text-black p-4 rounded-xl shadow-xl w-52 z-[9999] border border-gray-100">
          <p className="text-xs text-blue-600 font-semibold text-center">
            {formattedDate}
          </p>
          <p className="text-lg font-bold text-center mt-1">
            {formattedTime}
          </p>
          <button 
            onClick={() => setShowCalendar(false)}
            className="mt-3 w-full bg-blue-50 text-blue-600 text-xs py-1.5 rounded-lg font-medium"
          >
            Close
          </button>
        </div>
      )}

      {/* ANIMATION */}
      <style>
        {`
          .marquee-wrapper {
            overflow: hidden;
            width: 100%;
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }

          .marquee-track {
            display: flex;
            width: max-content;
            animation: marqueeScroll 35s linear infinite;
          }

          .marquee-track:hover {
            animation-play-state: paused;
          }

          @keyframes marqueeScroll {
            0% { transform: translateX(30%); }
            100% { transform: translateX(-100%); }
          }

          @keyframes slideDown {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          .animate-slideDown {
            animation: slideDown 0.25s ease;
          }
        `}
      </style>

    </div>
  );
}