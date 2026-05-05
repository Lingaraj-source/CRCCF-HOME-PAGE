import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import CompanyMarquee from "../../../components/Service/common/CompanyMarquee";
// \\ LegalServiceDetail page component that displays detailed information about a specific legal service based on the URL parameter. It includes a marquee for company name display, a header with the selected service name, and a grid of all legal services offered by the company for easy navigation and exploration.
const legalServicesList = [
  "Company Registration",
  "GST Registration Service",
  "GST Return Filing Services",
  "Company Annual Filing Services",
  "Company Audit Support Services",
  "FSSAI Registration Services",
  "MSME / UDYAM Registration Services",
  "IEC Registration Services",
  "Shop & Establishment Registration Services",
  "Professional Tax (PT) Registration Services",
  "PF Registration Services",
  "ESIC Registration Services",
  "Digital Signature Certificate (DSC)",
  "Data & IT Compliance Consulting Services",
  "Trust Registration Services",
  "NGO Registration Services",
  "Society Registration Services",
  "Document Drafting Services",
  "Identity and Document Verification Services",
  "Legal Research & Compliance Check Services",
  "Cyber Crime Complaint Assistance Services",
  "Consumer Court Case Support Services",
  "Legal Notice Preparation Services",
  "Contract Drafting & Agreement Preparation Services",
  "Case Drafting & Legal Documentation Services",
  "Cyber Law Consultant Services",
  "Legal Consultation Services",
];

const LegalServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const selectedService = serviceId
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6">
      <div className="max-w-7xl mx-auto">
        {/* 🔵 MARQUEE */}
        <CompanyMarquee />

        {/* 🔷 HEADER */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 mt-6">
          <h1 className="text-3xl font-bold text-[#0F172A] mb-2">
            {selectedService}
          </h1>

          <p className="text-[#64748B] mb-6">
            Explore all legal services offered by CR Cyber Crime Foundation
          </p>

          {/* 🔘 BACK BUTTON */}
          <button
            onClick={() => navigate("/services/legal-services")}
            className="mb-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
          >
            ← Back to Legal Services
          </button>

          {/* 🧩 SERVICES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {legalServicesList.map((service, index) => (
              <div
                key={index}
                className="group p-4 rounded-xl bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] border border-[#DBEAFE] hover:border-[#2563EB] transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <h3 className="text-sm sm:text-base font-medium text-[#0F172A] group-hover:text-[#2563EB] transition">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalServiceDetail;
