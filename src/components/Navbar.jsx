import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaBell,
  FaChevronDown,
} from "react-icons/fa";

import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuRef = useRef(null);

  // ✅ CLOSE MENU ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#0f2b5b] text-white shadow-md">

      {/* ❗ SIZE NOT CHANGED */}
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

          {["Home", "About Us", "Our Services"].map((item) => (
            <Link key={item} className="hover:text-[#3B82F6] transition">
              {item}
            </Link>
          ))}

          {/* DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#3B82F6]">
              Skill Development <FaChevronDown size={12} />
            </button>

            <div
              className={`absolute left-0 mt-3 w-56 bg-white text-black rounded-lg shadow-lg transition ${
                dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              {["Training", "Internship", "Awareness Programs", "Certification Course"].map((item) => (
                <div key={item} className="px-4 py-2 hover:bg-blue-50 text-sm cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {["Insights", "Careers", "Gallery", "Contact"].map((item) => (
            <Link key={item} className="hover:text-[#3B82F6] transition">
              {item}
            </Link>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="hidden lg:flex items-center gap-5">

          <div className="relative cursor-pointer">
            <FaBell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs px-1 rounded-full">
              3
            </span>
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

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden bg-[#0f2b5b] px-4 pb-4 space-y-3 text-white text-sm"
        >

          {[
            "Home",
            "About Us",
            "Our Services",
            "Skill Development",
            "Insights",
            "Recruitment",
            "Gallery",
            "Contact",
          ].map((item) => (
            <div
              key={item}
              className="border-b border-white/20 pb-2 cursor-pointer"
              onClick={() => setMenuOpen(false)} // ✅ FIX
            >
              {item}
            </div>
          ))}

          <button
            className="w-full bg-red-600 py-2 rounded-md mt-3"
            onClick={() => setMenuOpen(false)} // ✅ FIX
          >
            Report Crime
          </button>

        </div>
      )}
    </header>
  );
}