import React from "react";
import { useNavigate } from "react-router-dom";
import { Info, Wrench, Globe, Smartphone, MonitorCog, Bot } from "lucide-react";
// \\ Keyboard component for Software & IT Services page; displays service options with icons and handles navigation to specific service pages.
const SoftwareITKeyboard = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: "Software Services Introduction",
      path: "/services/software-it-services/software-services-introduction",
      icon: Info,
    },
    {
      label: "AMC Services",
      path: "/services/software-it-services/amc-services",
      icon: Wrench,
    },
    {
      label: "End to End Web Development",
      path: "/services/software-it-services/end-to-end-web-development",
      icon: Globe,
    },
    {
      label: "Mobile Application Development",
      path: "/services/software-it-services/mobile-application-development",
      icon: Smartphone,
    },
    {
      label: "Desktop & Laptop Software Solutions",
      path: "/services/software-it-services/desktop-laptop-software-solutions",
      icon: MonitorCog,
    },
    {
      label: "Artificial Intelligence Solutions",
      path: "/services/software-it-services/artificial-intelligence-solutions",
      icon: Bot,
    },
  ];

  return (
    <div className="bg-white rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-5 md:p-6">
      <div className="text-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]"></h2>
        <p className="text-[#64748B] mt-1 text-sm sm:text-base"></p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className="group relative overflow-hidden rounded-lg sm:rounded-xl p-4 text-center transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] border border-[#DBEAFE] hover:border-[#2563EB] min-h-[130px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              <Icon className="w-7 h-7 mx-auto mb-2 text-[#2563EB] group-hover:text-[#1D4ED8]" />

              <span className="text-sm font-medium text-[#475569] group-hover:text-[#0F172A] line-clamp-3">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SoftwareITKeyboard;
