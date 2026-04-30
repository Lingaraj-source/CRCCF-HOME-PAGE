import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaBell, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  const menuRef = useRef(null);
  const notifRef = useRef(null);

  // CLOSE OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-[48px] md:top-[56px] z-50 bg-[#0f2b5b] text-white shadow-md">
      <div className="px-4 md:px-10 lg:px-20 max-w-[1440px] mx-auto flex items-center justify-between py-5 md:py-6">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-5">
          <img
            src={logo}
            alt="logo"
            className="h-12 object-contain scale-[1.35] origin-left"
          />
          <div className="leading-tight">
            <h1 className="text-lg md:text-xl font-bold tracking-wide">
              CRCCF
            </h1>
            <p className="text-[10px] md:text-xs text-white/80 tracking-wider">
              CR CYBER CRIME FOUNDATION
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          <Link to="/" className="hover:text-[#3B82F6] transition">Home</Link>
          <Link to="/about" className="hover:text-[#3B82F6] transition">About Us</Link>
          <Link to="/services" className="hover:text-[#3B82F6] transition">Our Services</Link>

          {/* DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#3B82F6]">
              Skill Development <FaChevronDown size={12} />
            </button>

            <div className={`absolute left-0 top-full w-56 bg-white text-black rounded-lg shadow-lg transition ${dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
              <Link to="/training" className="block px-4 py-2 hover:bg-blue-50">Training</Link>
              <Link to="/internship" className="block px-4 py-2 hover:bg-blue-50">Internship</Link>
              <Link to="/awareness" className="block px-4 py-2 hover:bg-blue-50">Awareness Programs</Link>
              <Link to="/certification" className="block px-4 py-2 hover:bg-blue-50">Certification Course</Link>
            </div>
          </div>

          <Link to="/insights" className="hover:text-[#3B82F6] transition">Insights</Link>
          <Link to="/careers" className="hover:text-[#3B82F6] transition">Careers</Link>
          <Link to="/gallery" className="hover:text-[#3B82F6] transition">Gallery</Link>
          <Link to="/contact" className="hover:text-[#3B82F6] transition">Contact</Link>
        </nav>

        {/* RIGHT */}
        <div className="hidden lg:flex items-center gap-5">

          {/* NOTIFICATION */}
          <div
            ref={notifRef}
            className="relative"
            onMouseEnter={() => setNotifOpen(true)}
            onMouseLeave={() => setNotifOpen(false)}
          >
            <div className="relative cursor-pointer">
              <FaBell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs px-1 rounded-full">
                3
              </span>
            </div>

            <AnimatePresence>
              {notifOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="absolute right-0 mt-4 w-80 bg-white text-black rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
                >
                  <div className="px-4 py-3 border-b flex justify-between">
                    <h3 className="text-sm font-semibold">Notifications</h3>
                  </div>

                  <div>
                    <div className="px-4 py-3 border-b hover:bg-gray-50">Cyber alert</div>
                    <div className="px-4 py-3 border-b hover:bg-gray-50">Report update</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md text-sm font-semibold transition shadow-sm">
            Report Crime
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ✅ FIXED MOBILE MENU */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden bg-[#0f2b5b] px-4 pb-4 space-y-3 text-white text-sm"
        >
          <Link to="/" className="block border-b border-white/20 pb-2" onClick={() => setMenuOpen(false)}>Home</Link>

          <Link to="/about" className="block border-b border-white/20 pb-2" onClick={() => setMenuOpen(false)}>About Us</Link>

          <Link to="/services" className="block border-b border-white/20 pb-2" onClick={() => setMenuOpen(false)}>Our Services</Link>

          {/* MOBILE DROPDOWN */}
          <div className="border-b border-white/20 pb-2">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              <span>Skill Development</span>
              <FaChevronDown
                size={14}
                className={`transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`}
              />
            </div>

            {mobileDropdownOpen && (
              <div className="ml-4 mt-3 space-y-3 text-white/80 text-sm">
                <Link to="/training" className="block py-1" onClick={() => setMenuOpen(false)}>Training</Link>
                <Link to="/internship" className="block py-1" onClick={() => setMenuOpen(false)}>Internship</Link>
                <Link to="/awareness" className="block py-1" onClick={() => setMenuOpen(false)}>Awareness Programs</Link>
                <Link to="/certification" className="block py-1" onClick={() => setMenuOpen(false)}>Certification Course</Link>
              </div>
            )}
          </div>

          <Link to="/insights" className="block border-b border-white/20 pb-2" onClick={() => setMenuOpen(false)}>Insights</Link>

          <Link to="/careers" className="block border-b border-white/20 pb-2" onClick={() => setMenuOpen(false)}>Careers</Link>

          <Link to="/gallery" className="block border-b border-white/20 pb-2" onClick={() => setMenuOpen(false)}>Gallery</Link>

          <Link to="/contact" className="block border-b border-white/20 pb-2" onClick={() => setMenuOpen(false)}>Contact</Link>

          <button
            className="w-full bg-red-600 py-2 rounded-md mt-3"
            onClick={() => setMenuOpen(false)}
          >
            Report Crime
          </button>
        </div>
      )}
    </header>
  );
}