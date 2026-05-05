import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Laptop,
  Megaphone,
  HandHeart,
  FileText,
  Shield,
  Search,
  Scale,
  GraduationCap,
  BriefcaseBusiness,
  Handshake,
} from "lucide-react";
// \\ List of services with corresponding icons and paths for navigation; used in ServicesKeyboard component to display service options.
const ServicesKeyboard = () => {
  const navigate = useNavigate();

  const serviceItems = [
    {
      id: "software-it",
      label: "Software and IT Services",
      path: "/services/software-it-services",
      icon: Laptop,
    },
    {
      id: "digital-marketing",
      label: "Digital Marketing Services",
      path: "/services/digital-marketing-services",
      icon: Megaphone,
    },
    {
      id: "victim-support",
      label: "Victim Support Services",
      path: "/services/victim-support-services",
      icon: HandHeart,
    },
    {
      id: "legal-doc-support",
      label: "Legal Information and Documentation Support",
      path: "/services/legal-information-documentation-support",
      icon: FileText,
    },
    {
      id: "cyber-security",
      label: "Cyber Security Services",
      path: "/services/cyber-security-services",
      icon: Shield,
    },
    {
      id: "cyber-investigation",
      label: "Cyber Investigation Services",
      path: "/services/cyber-investigation-services",
      icon: Search,
    },
    {
      id: "legal-services",
      label: "Legal Services",
      path: "/services/legal-services",
      icon: Scale,
    },
    {
      id: "education-services",
      label: "Education Services",
      path: "/services/education-services",
      icon: GraduationCap,
    },
    {
      id: "training-internship",
      label: "Training and Internship Services",
      path: "/services/training-internship-services",
      icon: Handshake,
    },
    {
      id: "placement-services",
      label: "Placement Services",
      path: "/services/placement-services",
      icon: BriefcaseBusiness,
    },
  ];

  return (
    <div className="bg-white rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-5 md:p-6 mb-6 sm:mb-8">
      <div className="text-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]"> </h2>
        <p className="text-[#64748B] mt-1 text-sm sm:text-base"> </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
        {serviceItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className="group relative overflow-hidden rounded-lg sm:rounded-xl p-3 sm:p-4 text-center transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg sm:hover:shadow-xl bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] border border-[#DBEAFE] hover:border-[#2563EB] touch-manipulation min-h-[120px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              <Icon className="w-6 h-6 sm:w-7 sm:h-7 mx-auto mb-2 text-[#2563EB] group-hover:text-[#1D4ED8] transition-colors" />

              <span className="text-xs sm:text-sm font-medium text-[#475569] group-hover:text-[#0F172A] transition-colors line-clamp-3">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesKeyboard;
