import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaGlobe,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";

import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  const icons = ["🔐", "🛡️", "💻", "⚙️", "🔑", "📡", "🧠", "🔒"];

  return (
    <footer className="relative bg-[#0d2c54] text-white overflow-hidden">

      {/* SAFE CYBER ICON RAIN */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 90}vw`, // ✅ FIXED
              animationDuration: `${6 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${12 + Math.random() * 10}px`,
            }}
            className="absolute top-[-40px] text-[rgba(0,255,200,0.25)] animate-[fall_linear_infinite]"
          >
            {icons[Math.floor(Math.random() * icons.length)]}
          </span>
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 pt-16 pb-8 px-4 md:px-12 lg:px-20 max-w-[1440px] mx-auto">

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-16 border-b border-white/20 pb-12">

          {/* LOGO */}
          <div>
            <img src={logo} alt="CRCCF" className="w-24 mb-4" />
            <p className="text-gray-300 text-sm leading-relaxed">
              CR Cyber Crime Foundation provides awareness, cybersecurity support,
              and modern IT services including development, SEO, and digital solutions.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-lg font-semibold border-b border-blue-500 inline-block pb-1">
              Useful Links
            </h3>

            <div className="grid grid-cols-2 gap-x-10 gap-y-4 mt-5 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Internship", path: "/internship" },
                { name: "IT Services", path: "/it" },
                { name: "Recruitment", path: "/recruitment" },
                { name: "Resources", path: "/resources" },
                { name: "Awareness", path: "/awareness" },
                { name: "Gallery", path: "/gallery" },
                { name: "Report Crime", path: "/report" },
                { name: "Contact", path: "/contact" },
              ].map((item, i) => (
                <Link key={i} to={item.path} className="text-gray-300 hover:text-blue-400">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold border-b border-blue-500 inline-block pb-1">
              Contact
            </h3>

            <div className="space-y-4 text-gray-300 text-sm mt-5">
              <div className="flex gap-2">
                <MdLocationOn className="text-blue-400 mt-1" />
                <span>
                  DLF Cyber City, Patia, Bhubaneswar – 751024
                </span>
              </div>

              <div className="flex gap-2">
                <MdPhone className="text-blue-400" />
                <span>+91 9777999529</span>
              </div>

              <div className="flex gap-2">
                <MdEmail className="text-blue-400" />
                <span>hr@crcybercrime.org</span>
              </div>
            </div>
          </div>

        </div>

        {/* SOCIAL */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">

          <div className="flex gap-4 flex-wrap">
            <button className="bg-blue-600 px-4 py-2 rounded">Emergency</button>
            <button className="bg-white/20 px-4 py-2 rounded">Review</button>
          </div>

          <div className="flex gap-5 text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
            <FaYoutube />
            <FaWhatsapp />
            <FaTelegramPlane />
            <FaGlobe />
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-gray-400 text-sm mt-6">
          © 2026 CR Cyber Crime Foundation
        </div>

      </div>
    </footer>
  );
}