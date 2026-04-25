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
      {/* 🔥 CYBER ICON RAIN */}
      <div className="cyber-icons">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${12 + Math.random() * 10}px`,
            }}
          >
            {icons[Math.floor(Math.random() * icons.length)]}
          </span>
        ))}
      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 pt-16 pb-8 px-3 md:px-24">
        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-16 border-b border-white/20 pb-12">
          {/* LOGO */}
          <div className="tilt">
            <img src={logo} alt="CRCCF" className="w-24 mb-4 glow" />
            <p className="text-gray-300 leading-relaxed text-[15px]">
              CR Cyber Crime Foundation is highly professional and efficient in
              their work. They not only create strong awareness against
              cybercrimes but also deliver excellent IT services like Java,
              Python, MERN stack development, SEO, and digital marketing.
            </p>
          </div>

          {/* LINKS */}
          <div className="tilt">
            <h3 className="heading">Useful Links</h3>

            <div className="grid grid-cols-2 gap-x-20 gap-y-5 mt-5 text-[15px]">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Education & Internship", path: "/internship" },
                { name: "IT and Software", path: "/it" },
                { name: "Recruitment Process", path: "/recruitment" },
                { name: "Resources & Download", path: "/resources" },
                { name: "Cyber Awareness", path: "/awareness" },
                { name: "Gallery", path: "/gallery" },
                { name: "Report a Cyber Crime", path: "/report" },
                { name: "Contact Us", path: "/contact" },
              ].map((item, i) => (
                <Link key={i} to={item.path} className="footer-link">
                  {item.name}
                  <span></span>
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="tilt">
            <h3 className="heading">Contact</h3>

            <div className="space-y-6 text-gray-300 text-[15px] mt-5">
              <div className="flex items-start gap-2">
                <MdLocationOn className="text-blue-400 mt-1" />
                <span>
                  Head Office: Office No. 433, DLF Cyber City, Near Infocity,
                  Chandaka Industrial Estate, Patia, Bhubaneswar – 751024,
                  Odisha, India.
                </span>
              </div>

              <div className="flex items-center gap-2">
                <MdPhone className="text-blue-400" />
                <span>+91 9777999529</span>
              </div>

              <div className="flex items-center gap-2">
                <MdEmail className="text-blue-400" />
                <span>hr@crcybercrime.org</span>
              </div>

              <a
                href="https://www.google.com/maps?q=DLF+Cyber+City+Bhubaneswar"
                target="_blank"
                className="map-btn"
              >
                <MdLocationOn /> Map
              </a>
            </div>
          </div>
        </div>

        {/* BUTTONS + SOCIAL */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-2">
          <div className="flex gap-4 flex-wrap">
            <button className="glow-btn">⚠ Emergency Report</button>
            <button className="review-btn">Add Your Review</button>
          </div>

          <div className="flex gap-5 text-lg">
            <a href="#" className="social fb">
              <FaFacebookF />
            </a>
            <a href="#" className="social tw">
              <FaTwitter />
            </a>
            <a href="#" className="social li">
              <FaLinkedinIn />
            </a>
            <a href="#" className="social ig">
              <FaInstagram />
            </a>
            <a href="#" className="social yt">
              <FaYoutube />
            </a>
            <a href="#" className="social wa">
              <FaWhatsapp />
            </a>
            <a href="#" className="social tg">
              <FaTelegramPlane />
            </a>
            <a href="#" className="social web">
              <FaGlobe />
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-gray-400 text-sm mt-8 border-t border-white/20 pt-5">
          © 2026 CR CYBER CRIME FOUNDATION. All rights reserved.
        </div>
      </div>
    </footer>
  );
}