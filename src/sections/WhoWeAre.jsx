import { FaUsers, FaBullseye, FaRocket, FaFileAlt } from "react-icons/fa";

export default function WhoWeAre() {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">

        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="px-4 py-1 bg-[#DBEAFE] text-[#2563EB] rounded-full text-sm">
            Who We Are
          </span>

          <h2 className="text-4xl font-bold mt-5 text-[#0F172A]">
            Empowering Digital Security
          </h2>

          <p className="text-[#64748B] mt-2">
            Leading the cyber revolution through awareness, innovation, and technology
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {[
            {
              icon: <FaFileAlt />,
              title: "About the Organization",
              text: "CR Cyber Crime Foundation is dedicated to cyber awareness and digital investigation.",
            },
            {
              icon: <FaUsers />,
              title: "Who We Serve",
              text: "Students, public, organizations, and victims with practical solutions.",
            },
            {
              icon: <FaBullseye />,
              title: "Core Focus",
              text: "Cybersecurity awareness, IT development, and training programs.",
            },
            {
              icon: <FaRocket />,
              title: "Our Vision",
              text: "Building a secure and future-ready digital ecosystem.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative bg-white border border-[#E2E8F0] rounded-2xl p-6
    transition-all duration-300 overflow-hidden
    hover:-translate-y-1 hover:shadow-xl"
            >

              {/* 🔥 HOVER BACKGROUND FIX */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8]
    opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl -z-10"></div>

              {/* CONTENT */}
              <div className="relative z-10">

                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg
      bg-gradient-to-r from-[#2563EB] to-[#1D4ED8]
      text-white text-lg shadow-md mb-4
      group-hover:scale-110 transition">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-[#0F172A] group-hover:text-white transition">
                  {item.title}
                </h3>

                {/* TEXT */}
                <p className="text-sm text-[#475569] mt-2 leading-relaxed group-hover:text-blue-100 transition">
                  {item.text}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}