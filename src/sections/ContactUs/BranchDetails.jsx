import React from "react";
import {
  MapPin,
  Hash,
  ListOrdered,
  Building,
  User,
  Phone,
  Mail,
} from "lucide-react";

const BranchDetails = () => {
  // Demo data - you can replace this with your actual database/API data later
  const branchData = {
    name: "CR Cyber Crime Foundation",
    place: "Bhubaneswar, Odisha",
    id: "BR-9042",
    serialNo: "SN-2026-88X",
    contact: "Sarah Jenkins (Branch Manager)",
    phone: "+91 9777999529",
    mailId: "hr@crcybercrime.org",
    address:
      "Head Office: Office No. 433, DLF Cyber City, Near Infocity, Chandaka Industrial Estate, Patia, Bhubaneswar – 751024, Odisha, India.",
  };

  return (
    <div className="max-w-4xl mx-auto animate-[fadeIn_0.4s_ease-out]">
      {/* The Main "Corporate ID" Card */}
      <div className="bg-white rounded-3xl shadow-md border border-slate-200 overflow-hidden relative z-10">
        {/* ==========================================
            TOP HALF: Dark Corporate Header
            ========================================== */}
        <div className="bg-slate-900 px-8 py-10 sm:py-12 relative overflow-hidden">
          {/* Abstract glowing decoration in the background */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
            {/* Large Header Icon */}
            <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 shrink-0 shadow-inner">
              <MapPin size={40} className="text-blue-400" />
            </div>

            {/* Branch Name & Place */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight">
                {branchData.name}
              </h1>
              <p className="text-lg font-semibold text-slate-400 flex items-center justify-center md:justify-start gap-2">
                <MapPin size={18} className="text-slate-500" />{" "}
                {branchData.place}
              </p>
            </div>
          </div>
        </div>

        {/* ==========================================
            BOTTOM HALF: Crisp Data Grid
            ========================================== */}
        <div className="p-8 sm:p-10">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8 pb-4 border-b border-slate-100">
            Official Branch Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <DetailItem
              icon={<Hash />}
              label="Branch ID"
              value={branchData.id}
            />
            <DetailItem
              icon={<ListOrdered />}
              label="Serial No"
              value={branchData.serialNo}
            />
            <DetailItem
              icon={<User />}
              label="Primary Contact"
              value={branchData.contact}
            />
            <DetailItem
              icon={<Phone />}
              label="Phone Number"
              value={branchData.phone}
            />
            <DetailItem
              icon={<Mail />}
              label="Mail ID"
              value={branchData.mailId}
            />

            {/* Address stretches across both columns so it has room to breathe */}
            <DetailItem
              icon={<Building />}
              label="Full Address"
              value={branchData.address}
              className="md:col-span-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- HELPER COMPONENT ---
// This builds the individual data blocks (Icon + Label + Value)
const DetailItem = ({ icon, label, value, className = "" }) => (
  <div
    className={`flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 ${className}`}
  >
    {/* Small Icon Box */}
    <div className="p-3 bg-white text-primary rounded-xl border border-slate-200 shadow-sm shrink-0">
      {React.cloneElement(icon, { size: 22 })}
    </div>

    {/* Text Data */}
    <div className="flex flex-col pt-0.5">
      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
        {label}
      </span>
      <span className="text-base font-bold text-slate-800">{value}</span>
    </div>
  </div>
);

export default BranchDetails;

