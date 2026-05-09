import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaBell,
  FaChevronDown,
  FaSearch,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const notifRef = useRef(null);
  const menuRef = useRef(null);

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // CLOSE OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileOpen(false);
      }

      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        ref={menuRef}
        className={`sticky top-0 z-[100] transition-all duration-300
        bg-[#0C1A3A]
        border-b border-[rgba(255,255,255,.07)]
        ${scrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.35)]" : ""}`}
      >
        {/* GLOW EFFECT */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 left-1/3 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
          <div className="absolute -top-10 right-1/3 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 h-[70px] flex items-center gap-[24px]">
          {/* LOGO */}
          <Link to="/" className="group flex shrink-0 items-center gap-[2px]">
            {/* LOGO IMAGE */}
            <img
              src={logo}
              alt="CRCCF Logo"
              className="
                h-[68px] w-auto
                object-contain
                drop-shadow-[0_0_10px_rgba(255,255,255,0.08)]
                transition-all duration-300
                group-hover:scale-105
              "
            />

            {/* LOGO TEXT */}
            <div className="flex flex-col leading-[1] -ml-[2px] mt-[1px]">
              <span className="text-[17px] font-[900] text-white tracking-tight">
                CRCCF
              </span>

              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.14em]
                  text-white/45
                  font-semibold
                  mt-[2px]
                  whitespace-nowrap
                "
              >
                CR CYBER CRIME FOUNDATION
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex flex-1 items-center gap-[6px]">
            <Link
              to="/"
              className="px-[14px] py-[8px]
              rounded-[7px]
              text-[14px] font-[600]
              text-white/85
              hover:text-white
              hover:bg-white/10
              transition-all duration-200"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="px-[14px] py-[8px]
              rounded-[7px]
              text-[14px] font-[600]
              text-white/85
              hover:text-white
              hover:bg-white/10
              transition-all duration-200"
            >
              About Us
            </Link>

            <Link
              to="/services"
              className="px-[14px] py-[8px]
              rounded-[7px]
              text-[14px] font-[600]
              text-white/85
              hover:text-white
              hover:bg-white/10
              transition-all duration-200"
            >
              Our Services
            </Link>

            {/* DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="inline-flex items-center gap-[5px]
                px-[14px] py-[8px]
                rounded-[7px]
                text-[14px] font-[600]
                text-white/85
                hover:text-white
                hover:bg-white/10
                transition-all duration-200"
              >
                Skill Development
                <FaChevronDown
                  size={11}
                  className={`transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.22 }}
                    className="absolute top-[calc(100%+8px)] left-0 z-[200]
                    min-w-[240px]
                    bg-white rounded-xl overflow-hidden
                    border border-gray-200
                    shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
                  >
                    <Link
                      to="/training"
                      className="block px-5 py-3 text-[14px]
                      text-gray-700 hover:bg-blue-50
                      hover:text-blue-600 transition"
                    >
                      Training
                    </Link>

                    <Link
                      to="/internship"
                      className="block px-5 py-3 text-[14px]
                      text-gray-700 hover:bg-blue-50
                      hover:text-blue-600 transition"
                    >
                      Internship
                    </Link>

                    <Link
                      to="/awareness"
                      className="block px-5 py-3 text-[14px]
                      text-gray-700 hover:bg-blue-50
                      hover:text-blue-600 transition"
                    >
                      Awareness Programs
                    </Link>

                    <Link
                      to="/certification"
                      className="block px-5 py-3 text-[14px]
                      text-gray-700 hover:bg-blue-50
                      hover:text-blue-600 transition"
                    >
                      Certification Course
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/insights"
              className="px-[14px] py-[8px]
              rounded-[7px]
              text-[14px] font-[600]
              text-white/85
              hover:text-white
              hover:bg-white/10
              transition-all duration-200"
            >
              Insights
            </Link>

            <Link
              to="/careers"
              className="px-[14px] py-[8px]
              rounded-[7px]
              text-[14px] font-[600]
              text-white/85
              hover:text-white
              hover:bg-white/10
              transition-all duration-200"
            >
              Careers
            </Link>

            <Link
              to="/gallery"
              className="px-[14px] py-[8px]
              rounded-[7px]
              text-[14px] font-[600]
              text-white/85
              hover:text-white
              hover:bg-white/10
              transition-all duration-200"
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className="px-[14px] py-[8px]
              rounded-[7px]
              text-[14px] font-[600]
              text-white/85
              hover:text-white
              hover:bg-white/10
              transition-all duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-[20px]">
            
            {/* SEARCH - UPDATED TO PUSH CONTENT INSTEAD OF OVERLAPPING */}
            <div className="flex items-center">
              {/* SEARCH BOX */}
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 190, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="pr-3">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="h-[34px] w-full bg-white/10 border border-white/10
                        rounded-lg px-4 text-sm text-white outline-none
                        placeholder:text-white/40 focus:border-white/30 transition-colors"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 w-[24px] h-[24px]"
              >
                {searchOpen ? <FaTimes size={18} /> : <FaSearch size={16} />}
              </button>
            </div>

            {/* NOTIFICATION */}
            <div
              ref={notifRef}
              className="relative flex items-center justify-center"
              onMouseEnter={() => setNotifOpen(true)}
              onMouseLeave={() => setNotifOpen(false)}
            >
              <button
                className="relative flex items-center justify-center text-white/75 hover:text-white
                transition-all duration-200 hover:scale-110"
              >
                <FaBell size={18} />

                <span
                  className="absolute -top-2 -right-2
                  w-[16px] h-[16px]
                  rounded-full bg-red-600
                  text-[9px] font-bold text-white
                  flex items-center justify-center
                  border border-[#0C1A3A]"
                >
                  3
                </span>
              </button>

              <AnimatePresence>
                {notifOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.96 }}
                    transition={{ duration: 0.22 }}
                    className="absolute right-[-10px] top-[calc(100%+16px)] z-[200] w-80
                    bg-white rounded-2xl overflow-hidden
                    border border-gray-200
                    shadow-[0_20px_60px_rgba(0,0,0,0.20)]"
                  >
                    <div className="px-5 py-4 border-b">
                      <h3 className="text-sm font-semibold text-black">
                        Notifications
                      </h3>
                    </div>

                    <div className="px-5 py-4 border-b hover:bg-gray-50 transition cursor-pointer text-black text-[14px]">
                      Cyber Alert
                    </div>

                    <div className="px-5 py-4 hover:bg-gray-50 transition cursor-pointer text-black text-[14px]">
                      Report Update
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* BUTTON */}
            <button
              className="h-[38px] px-[18px]
              rounded-[8px]
              bg-gradient-to-r from-red-700 to-red-600
              text-white text-[13px] font-[700]
              shadow-[0_0_25px_rgba(185,28,28,0.35)]
              hover:scale-[1.03]
              hover:shadow-[0_0_30px_rgba(185,28,28,0.55)]
              transition-all duration-300 whitespace-nowrap"
            >
              Report Crime
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden ml-auto text-white text-[22px] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE NAVIGATION MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden w-full absolute top-full left-0 z-[100] bg-[#0C1A3A] border-b border-[rgba(255,255,255,.07)] shadow-[0_8px_30px_rgba(0,0,0,0.35)] overflow-hidden"
            >
              <div className="flex flex-col px-6 py-4 space-y-3">
                <Link to="/" className="text-white/85 text-[15px] font-[600] hover:text-white transition" onClick={() => setMobileOpen(false)}>
                  Home
                </Link>
                <Link to="/about" className="text-white/85 text-[15px] font-[600] hover:text-white transition" onClick={() => setMobileOpen(false)}>
                  About Us
                </Link>
                <Link to="/services" className="text-white/85 text-[15px] font-[600] hover:text-white transition" onClick={() => setMobileOpen(false)}>
                  Our Services
                </Link>

                {/* Mobile Dropdown */}
                <div className="flex flex-col">
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="flex items-center justify-between text-white/85 text-[15px] font-[600] hover:text-white transition pb-1"
                  >
                    Skill Development
                    <FaChevronDown
                      size={12}
                      className={`transition-transform duration-300 ${
                        mobileDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileDropdownOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="flex flex-col pl-4 space-y-3 overflow-hidden border-l border-white/10 mt-2 py-2"
                      >
                        <Link to="/training" className="text-white/70 text-[14px] hover:text-white transition" onClick={() => setMobileOpen(false)}>
                          Training
                        </Link>
                        <Link to="/internship" className="text-white/70 text-[14px] hover:text-white transition" onClick={() => setMobileOpen(false)}>
                          Internship
                        </Link>
                        <Link to="/awareness" className="text-white/70 text-[14px] hover:text-white transition" onClick={() => setMobileOpen(false)}>
                          Awareness Programs
                        </Link>
                        <Link to="/certification" className="text-white/70 text-[14px] hover:text-white transition" onClick={() => setMobileOpen(false)}>
                          Certification Course
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/insights" className="text-white/85 text-[15px] font-[600] hover:text-white transition" onClick={() => setMobileOpen(false)}>
                  Insights
                </Link>
                <Link to="/careers" className="text-white/85 text-[15px] font-[600] hover:text-white transition" onClick={() => setMobileOpen(false)}>
                  Careers
                </Link>
                <Link to="/gallery" className="text-white/85 text-[15px] font-[600] hover:text-white transition" onClick={() => setMobileOpen(false)}>
                  Gallery
                </Link>
                <Link to="/contact" className="text-white/85 text-[15px] font-[600] hover:text-white transition" onClick={() => setMobileOpen(false)}>
                  Contact
                </Link>

                <div className="pt-3 pb-1">
                  <button
                    className="h-[42px] w-full
                    rounded-[8px]
                    bg-gradient-to-r from-red-700 to-red-600
                    text-white text-[14px] font-[700]
                    shadow-[0_0_25px_rgba(185,28,28,0.35)]
                    active:scale-[0.98]
                    transition-all duration-300"
                  >
                    Report Crime
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}