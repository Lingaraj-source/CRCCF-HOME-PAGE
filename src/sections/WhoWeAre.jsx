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
            <div key={i} className="group card card-hover">

              <div className="card-icon">{item.icon}</div>

              <h3 className="card-title">{item.title}</h3>

              <p className="card-text">{item.text}</p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}