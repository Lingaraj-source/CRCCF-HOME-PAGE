import { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaCalendarAlt,
  FaGlobe,
  FaEllipsisV,
  FaQuestionCircle,
  FaTimes,
} from "react-icons/fa";

import logo from "../assets/logo.png";

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
    <div className="bg-[#0f172a] text-white text-sm relative z-[999]">

      <div className="flex items-center justify-between px-4 md:px-10 lg:px-20 h-12 md:h-14 gap-3">

        {/* ===== MARQUEE (UNCHANGED) ===== */}
        <div className="flex-1 overflow-hidden">
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
        <div className="flex items-center gap-4 md:gap-5">

          {/* SEARCH (DESKTOP) */}
          <div className="relative hidden sm:block" ref={searchRef}>
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="hover:text-blue-400 text-base md:text-lg transition transform hover:scale-110"
            >
              <FaSearch />
            </button>

            <div
              className={`absolute right-0 top-10 md:top-12 transition-all duration-300 ${
                showSearch
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="flex items-center bg-white text-black rounded-full shadow-xl px-3 py-1 w-56 border">

                <FaSearch className="text-gray-400 text-xs mr-2" />

                <input
                  type="text"
                  autoFocus
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search..."
                  className="flex-1 outline-none text-xs"
                />

                {searchValue && (
                  <FaTimes
                    onClick={() => setSearchValue("")}
                    className="text-gray-400 cursor-pointer text-xs"
                  />
                )}

                <button
                  onClick={() => setShowSearch(false)}
                  className="text-blue-500 text-xs ml-2 font-medium"
                >
                  Close
                </button>

              </div>
            </div>
          </div>

          {/* CALENDAR (UNCHANGED) */}
          <div
            ref={calendarRef}
            className="relative hidden sm:block"
            onMouseEnter={() => setShowCalendar(true)}
            onMouseLeave={() => setShowCalendar(false)}
          >
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className="hover:text-blue-400 text-base md:text-lg transition"
            >
              <FaCalendarAlt />
            </button>

            {showCalendar && (
              <div className="fixed top-16 right-4 bg-white text-black p-4 rounded-xl shadow-xl w-52 z-[9999] border">
                <p className="text-xs text-blue-600 font-semibold text-center">
                  {formattedDate}
                </p>
                <p className="text-lg font-bold text-center mt-1">
                  {formattedTime}
                </p>
              </div>
            )}
          </div>

          {/* HELP */}
          <button
            onClick={() => alert("Help / Support section")}
            className="hidden sm:block hover:text-yellow-400 text-base md:text-lg transition"
          >
            <FaQuestionCircle />
          </button>

          {/* REACH US */}
          <button
            onClick={() => window.location.href = "/contact"}
            className="hidden sm:flex items-center gap-2 bg-blue-600 px-3 py-1.5 rounded-full text-xs md:text-sm"
          >
            <FaGlobe />
            Reach Us
          </button>

          {/* MOBILE MENU */}
          <button
            className="sm:hidden text-base"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaEllipsisV />
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="sm:hidden absolute right-2 top-14 bg-white text-black rounded shadow-md p-3 w-40 z-[9999] text-xs">

          <button onClick={() => { setShowSearch(true); setMenuOpen(false); }} className="block py-2">
            Search
          </button>

          <button onClick={() => { setShowCalendar(true); setMenuOpen(false); }} className="block py-2">
            Calendar
          </button>

          <button className="block py-2">Help</button>

          <button onClick={() => window.location.href="/contact"} className="block py-2">
            Reach Us
          </button>

        </div>
      )}

      {/* MOBILE SEARCH */}
      {showSearch && (
        <div className="sm:hidden fixed top-0 left-0 w-full h-16 bg-white z-[9999] shadow-md flex items-center px-3 gap-2 animate-slideDown">

          <FaSearch className="text-gray-400 text-sm" />

          <input
            type="text"
            autoFocus
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search..."
            className="flex-1 outline-none text-sm"
          />

          {searchValue && (
            <FaTimes onClick={() => setSearchValue("")} className="text-gray-400 text-sm" />
          )}

          <button
            onClick={() => {
              setShowSearch(false);
              setSearchValue("");
            }}
            className="text-blue-600 text-sm font-medium ml-2"
          >
            Cancel
          </button>

        </div>
      )}

      {/* MOBILE CALENDAR */}
      {showCalendar && (
        <div className="sm:hidden fixed top-20 right-3 bg-white text-black p-4 rounded-xl shadow-xl w-56 z-[9999]">
          <p className="text-xs text-blue-600 font-semibold text-center">
            {formattedDate}
          </p>
          <p className="text-lg font-bold text-center mt-1">
            {formattedTime}
          </p>
        </div>
      )}

      {/* ANIMATION */}
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