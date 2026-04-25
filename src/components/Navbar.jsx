import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaBars,
  FaTimes,
  FaBell,
  FaChevronDown,
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaChartLine,
  FaImage,
  FaPhone,
  FaBriefcase,
  FaUserGraduate,
} from "react-icons/fa";

// Replace with your actual logo path
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const location = useLocation();
  const menuRef = useRef(null);

  // CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // CLOSE MOBILE MENU ON ROUTE CHANGE
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", icon: <FaHome />, path: "/" },
    { name: "About Us", icon: <FaInfoCircle />, path: "/about" },
    { name: "Our Services", icon: <FaCogs />, path: "/services" },
    { name: "Insights", icon: <FaChartLine />, path: "/insights" },
    { name: "Recruitment", icon: <FaBriefcase />, path: "/careers" },
    { name: "Gallery", icon: <FaImage />, path: "/gallery" },
    { name: "Contact", icon: <FaPhone />, path: "/contact" },
  ];

  const skillLinks = [
    { name: "Training", path: "/training" },
    { name: "Internship", path: "/internship" },
    { name: "Awareness Programs", path: "/awareness" },
    { name: "Certification Course", path: "/certification" },
  ];

  return (
    <header
      ref={menuRef}
      // sticky top-0 ensures it sticks below the topbar once scrolled past
      className="sticky top-0 z-50 bg-[#0f2b5b] text-white shadow-md transition-all duration-300"
    >
      {/* NAVBAR CONTAINER */}
      <div className="px-4 md:px-10 lg:px-20 max-w-[1440px] mx-auto flex items-center justify-between py-4 md:py-5">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 md:gap-4 z-50">
          <img src={logo} alt="CRCCF Logo" className="h-10 md:h-12 object-contain" />
          <div className="flex flex-col justify-center">
            <h1 className="text-base md:text-lg font-bold tracking-wide">CRCCF</h1>
            <p className="text-[10px] md:text-xs text-white/80 font-medium">
              CR CYBER CRIME FOUNDATION
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION (Hidden on Mobile & Portrait Tablets) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
          {navItems.slice(0, 3).map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={`transition hover:text-[#3B82F6] ${location.pathname === item.path ? 'text-[#3B82F6]' : ''}`}
            >
              {item.name}
            </Link>
          ))}

          {/* DESKTOP DROPDOWN */}
          <div
            className="relative py-2"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1.5 transition hover:text-[#3B82F6] focus:outline-none">
              Skill Development 
              <FaChevronDown size={10} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu Box */}
            <div
              className={`absolute top-full left-0 mt-1 w-56 bg-white text-black rounded-lg shadow-xl border border-gray-100 transition-all duration-300 ease-in-out origin-top ${
                dropdownOpen ? "opacity-100 visible scale-y-100" : "opacity-0 invisible scale-y-95"
              }`}
            >
              <div className="py-2">
                {skillLinks.map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.path}
                    className="block px-5 py-2.5 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navItems.slice(3).map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={`transition hover:text-[#3B82F6] ${location.pathname === item.path ? 'text-[#3B82F6]' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE ACTIONS (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="text-xl hover:text-blue-400 transition relative">
            <FaBell />
            <span className="absolute -top-1.5 -right-1.5 bg-red-500 rounded-full w-4 h-4 text-[9px] flex items-center justify-center font-bold">
              3
            </span>
          </button>
          <Link to="/report-crime" className="bg-red-600 hover:bg-red-700 transition px-6 py-2 rounded-md font-semibold text-sm shadow-lg shadow-red-600/20">
            Report Crime
          </Link>
        </div>

        {/* MOBILE & TABLET MENU BUTTON */}
        <button 
          onClick={() => setMenuOpen(true)} 
          className="lg:hidden text-2xl p-2 focus:outline-none hover:text-blue-400 transition z-50"
          aria-label="Open Menu"
        >
          <FaBars />
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* MOBILE & TABLET SIDEBAR MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-0 right-0 h-[100dvh] w-[85%] sm:w-[350px] bg-[#0f2b5b] z-[9999] shadow-2xl flex flex-col lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
          >
            {/* SIDEBAR HEADER */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <img src={logo} alt="CRCCF Logo" className="h-8 object-contain" />
                <span className="font-bold text-lg">CRCCF</span>
              </div>
              <button 
                className="p-2 text-xl hover:text-red-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                <FaTimes />
              </button>
            </div>

            {/* SIDEBAR SCROLLABLE CONTENT */}
            <div className="p-6 space-y-2 overflow-y-auto flex-1 custom-scrollbar">
              {navItems.map((item, index) => {
                const active = location.pathname === item.path;

                // Insert the dropdown right after "Our Services" (index 2) to match desktop flow
                return (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-colors ${
                        active
                          ? "bg-blue-600/20 text-blue-400 font-semibold"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span className="text-lg opacity-80">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>

                    {/* Render Dropdown right after the 3rd item */}
                    {index === 2 && (
                      <div className="my-2 border-y border-white/5 py-2">
                        <button
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className="flex justify-between items-center w-full px-4 py-3.5 rounded-xl hover:bg-white/10 text-white/80 hover:text-white transition"
                        >
                          <span className="flex items-center gap-4">
                            <span className="text-lg opacity-80"><FaUserGraduate /></span>
                            Skill Development
                          </span>
                          <FaChevronDown
                            className={`transition-transform duration-300 ${
                              dropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {dropdownOpen && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden ml-11 border-l border-white/10 pl-2 mt-1 space-y-1"
                            >
                              {skillLinks.map((skill) => (
                                <Link 
                                  key={skill.name}
                                  to={skill.path}
                                  onClick={() => setMenuOpen(false)}
                                  className="block py-2.5 px-3 text-sm text-white/70 hover:text-blue-400 hover:bg-white/5 rounded-lg transition"
                                >
                                  {skill.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* SIDEBAR FOOTER (CTA) */}
            <div className="p-6 border-t border-white/10 bg-[#0a1e40] shrink-0">
              <Link 
                to="/report-crime"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 py-3.5 rounded-xl font-bold transition shadow-lg"
              >
                <FaBell /> Report Crime
              </Link>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}