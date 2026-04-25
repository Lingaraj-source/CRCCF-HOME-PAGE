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

  // ✅ OUTSIDE CLICK FIX (your logic)
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
    <header
      ref={menuRef}
      className="sticky top-0 z-50 bg-[#0f2b5b] text-white shadow-md"
    >
      {/* ✅ KEEP YOUR SIZE SYSTEM */}
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

          <Link to="/" className="hover:text-[#3B82F6] transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#3B82F6] transition">
            About Us
          </Link>
          <Link className="hover:text-[#3B82F6] transition">
            Services
          </Link>

          {/* DROPDOWN (MERGED VERSION) */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#3B82F6]">
              Skill Development <FaChevronDown size={12} />
            </button>

            <div
              className={`absolute left-0 mt-3 w-56 bg-white text-black rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                dropdownOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              {[
                { name: "Training", path: "/training" },
                { name: "Internship", path: "/internship" },
                { name: "Awareness Programs", path: "/awareness" },
                { name: "Certification Course", path: "/certification" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-4 py-3 hover:bg-blue-50 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link className="hover:text-[#3B82F6] transition">Insights</Link>
          <Link className="hover:text-[#3B82F6] transition">Careers</Link>
          <Link className="hover:text-[#3B82F6] transition">Gallery</Link>
          <Link className="hover:text-[#3B82F6] transition">Contact</Link>
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
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen((prev) => !prev);
          }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="lg:hidden bg-[#0f2b5b] px-4 pb-4 space-y-3 text-white text-sm"
          onClick={(e) => e.stopPropagation()}
        >

          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <div onClick={() => setMenuOpen(false)}>Our Services</div>

          {/* MOBILE DROPDOWN */}
          <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex justify-between w-full"
            >
              Skill Development <FaChevronDown />
            </button>

            {dropdownOpen && (
              <div className="mt-2 ml-4 space-y-2 text-gray-300">
                <div>Training</div>
                <Link to="/internship">Internship</Link>
                <div>Awareness Programs</div>
                <div>Certification Course</div>
              </div>
            )}
          </div>

          <div onClick={() => setMenuOpen(false)}>Insights</div>
          <div onClick={() => setMenuOpen(false)}>Recruitment</div>
          <div onClick={() => setMenuOpen(false)}>Gallery</div>
          <div onClick={() => setMenuOpen(false)}>Contact</div>

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