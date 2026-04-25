import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const domains = [
  { name: "Software Development", slug: "software-development" },
  { name: "Software Designing", slug: "software-designing" },
  { name: "Software Testing", slug: "software-testing" },
  { name: "Digital Marketing", slug: "digital-marketing" },
  { name: "SEO", slug: "seo" },
  { name: "Cyber Law", slug: "cyber-law" },
  { name: "Cyber Psychology", slug: "cyber-psychology" },
  { name: "Cyber Investigation", slug: "cyber-investigation" },
  { name: "Cyber Research", slug: "cyber-research" },
  { name: "Cyber Case Study", slug: "cyber-case-study" },
  { name: "Cyber Forensic", slug: "cyber-forensic" },
];

export default function Internship() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10">
      {/* ✅ FULL WIDTH (NO SIDE GAP) */}
      <div className="w-full px-6 md:px-12">
        {/* 🔥 PREMIUM HEADER */}
        <div className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white rounded-2xl p-8 mb-12 shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Internship Programs 🎓💼
          </h1>

          {/* ✅ FIXED TEXT WRAP ISSUE */}
          <p className="text-white/90 leading-relaxed">
            Structured, industry-oriented internships with real-time experience,
            mentorship, and career-focused learning.
          </p>
        </div>

        {/* 🔥 DOMAINS */}
        <div className="mb-14">
          <h2 className="text-xl font-semibold mb-6">💻 Internship Domains</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {domains.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                onClick={() => navigate(`/internship/${item.slug}`)}
                className="
                  group cursor-pointer
                  bg-white rounded-xl p-6
                  border border-[#E2E8F0]
                  shadow-sm hover:shadow-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  relative overflow-hidden
                "
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] opacity-0 group-hover:opacity-10 transition"></div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#0F172A] group-hover:text-[#2563EB]">
                  {item.name} Intern
                </h3>

                {/* Line */}
                <div className="w-10 h-1 bg-[#2563EB] mt-3 rounded group-hover:w-16 transition-all"></div>

                {/* CTA */}
                <p className="text-sm text-[#64748B] mt-4 group-hover:text-[#2563EB]">
                  View Details →
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🔹 Program Structure */}
        <div className="mb-14">
          <h2 className="text-xl font-semibold mb-5">
            📚 Program Structure & Learning
          </h2>

          <ul className="space-y-3 text-[#475569]">
            <li>🌐 Real-time project exposure</li>
            <li>⚙️ Industry-relevant practical skills</li>
            <li>📖 Balanced theory + practical learning</li>
            <li>👨‍🏫 Mentorship from experts</li>
            <li>🤝 Open learning support system</li>
          </ul>
        </div>

        {/* 🔹 Duration */}
        <div className="mb-14 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg mb-1">⏳ Duration</h3>
            <p>3 to 6 Months</p>
          </div>

          <div className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg mb-1">💻 Mode</h3>
            <p>Online & Offline Classes</p>
          </div>
        </div>

        {/* 🔹 What We Provide */}
        <div className="mb-14">
          <h2 className="text-xl font-semibold mb-5">📦 What We Provide</h2>

          <div className="grid md:grid-cols-4 gap-5">
            {[
              "Course Materials 📚",
              "Hands-on Training 💻",
              "Evaluation & Mentorship 🧠",
              "Professional Environment 🌍",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#E2E8F0] p-5 rounded-xl shadow-sm hover:shadow-md transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Training */}
        <div className="mb-14 bg-[#F1F5F9] p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-3">
            🎯 Training & Placement Support
          </h2>

          <p className="text-[#475569]">
            Our mentors guide students with industry insights and continuous
            support. Placement assistance is provided based on performance and
            evaluation.
          </p>
        </div>

        {/* 🔹 Certification */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            🏆 Certification & Verification
          </h2>

          <ul className="text-[#475569] space-y-2">
            <li>🌐 Digital Certificate</li>
            <li>📜 Physical Certificate</li>
            <li>🔍 Verification via Student Portal</li>
          </ul>
        </div>
      </div>
    </div>
  );
}