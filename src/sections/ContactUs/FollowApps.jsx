import React from "react";
import { Share2 } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const FollowApps = () => {
  // ✨ FIX 1: Create an array of objects pairing the Icon with the URL
  const socialLinks = [
    {
      Icon: FaFacebook,
      url: "https://www.facebook.com/profile.php?id=61576052739281",
    },
    { Icon: FaTwitter, url: "https://twitter.com" },
    { Icon: FaInstagram, url: "https://www.instagram.com/crcybercrime/" },
    {
      Icon: FaLinkedin,
      url: "",
    },
  ];

  return (
    // --- MAIN SECTION WRAPPER ---
    <section
      id="follow-apps"
      className="relative z-10 scroll-mt-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/60 shadow-sm"
    >
      {/* --- HEADER AREA --- */}
      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-200">
        <div className="p-2 bg-slate-50 rounded-lg shadow-sm text-primary border border-slate-100">
          <Share2 size={24} />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
          Follow Apps
        </h2>
      </div>

      {/* --- SOCIAL MEDIA BUTTONS CONTAINER --- */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {/* ✨ FIX 2: Map over the new array and use an <a> tag instead of a <button> */}
        {socialLinks.map(({ Icon, url }, i) => (
          <a
            key={i}
            href={url}
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Security best practice for opening new tabs
            className="p-5 sm:p-6 bg-slate-50 rounded-xl shadow-sm border border-slate-100 text-slate-600 hover:text-white hover:bg-primary hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex justify-center items-center"
          >
            <Icon size={28} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default FollowApps;
