import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-50 bg-[#0f2b5b] text-white shadow-md">

      {/* ================= MAIN NAV ================= */}
      {/* ✅ Increased height slightly */}
      <div className="flex items-center justify-between px-4 md:px-10 lg:px-20 py-5">

        {/* ================= LOGO + TEXT ================= */}
        <Link to="/" className="flex items-center gap-5"> {/* increased gap */}

          {/* Logo */}
          <img
            src={logo}
            alt="logo"
            className="h-12 object-contain scale-[1.4] origin-left"
          />

          {/* Text */}
          <div className="leading-tight">
            <h1 className="text-xl md:text-2xl font-bold tracking-wide text-white">
              CRCCF
            </h1>
            <p className="text-[11px] md:text-xs text-white/80 tracking-wider">
              CR CYBER CRIME FOUNDATION
            </p>
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">

          <Link className="hover:text-blue-400 transition">Home</Link>
          <Link className="hover:text-blue-400 transition">About Us</Link>
          <Link className="hover:text-blue-400 transition">Our Services</Link>

          {/* PROGRAMS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue-400 transition">
              Programs <FaChevronDown size={12} />
            </button>

            <div
              className={`absolute left-0 mt-3 w-56 bg-white text-black rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${dropdownOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
                }`}
            >
              {[
                "Training",
                "Internship",
                "Awareness Programs",
                "Certification Course",
              ].map((item) => (
                <div
                  key={item}
                  className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <Link className="hover:text-blue-400 transition">Resources</Link>
          <Link className="hover:text-blue-400 transition">Recruitment</Link>
          <Link className="hover:text-blue-400 transition">Gallery</Link>
          <Link className="hover:text-blue-400 transition">Contact</Link>
        </nav>

        {/* ================= RIGHT SIDE ================= */}
        <div className="hidden lg:flex items-center gap-6">

          {/* Notification */}
          <div className="relative cursor-pointer">
            <FaBell size={18} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs px-1 rounded-full">
              3
            </span>
          </div>

          {/* Report Crime Button */}
          <button
            className="
              bg-red-600 hover:bg-red-700
              px-6 py-2.5
              rounded-md
              text-sm font-semibold
              shadow-md
              transition-all duration-300
              hover:shadow-lg
            "
          >
            Report Crime
          </button>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0f2b5b] px-6 pb-6 space-y-4 text-sm">

          <Link className="block">Home</Link>
          <Link className="block">About Us</Link>
          <Link className="block">Our Services</Link>

          <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between w-full"
            >
              Programs <FaChevronDown />
            </button>

            {dropdownOpen && (
              <div className="mt-2 ml-4 space-y-2 text-gray-300">
                <div>Training</div>
                <div>Internship</div>
                <div>Awareness Programs</div>
                <div>Certification Course</div>
              </div>
            )}
          </div>

          <Link className="block">Resources</Link>
          <Link className="block">Recruitment</Link>
          <Link className="block">Gallery</Link>
          <Link className="block">Contact</Link>

          <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-md mt-4">
            Report Crime
          </button>
        </div>
      )}
    </header>
  );
}