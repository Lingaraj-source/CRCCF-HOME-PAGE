import {
  FaShieldAlt,
  FaUserGraduate,
  FaBrain,
  FaChalkboardTeacher,
  FaGlobe,
  FaLock,
  FaRocket,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Industry-Focused Cybersecurity Expertise",
      text: "We combine deep cybersecurity knowledge with real-world application, focusing on practical solutions to tackle modern cyber threats effectively.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Practical Learning & Real-Time Exposure",
      text: "Hands-on experience through live projects, case studies, and real-time problem-solving to build industry-ready skills.",
    },
    {
      icon: <FaBrain />,
      title: "Research-Driven Approach",
      text: "Continuous research and analysis to stay updated with evolving cyber trends and deliver future-ready knowledge.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Expert Mentorship & Guidance",
      text: "Experienced mentors provide continuous support, industry insights, and structured guidance for growth.",
    },
    {
      icon: <FaGlobe />,
      title: "Multi-Domain Expertise",
      text: "Cybersecurity, digital investigation, software development, and digital marketing under one platform.",
    },
    {
      icon: <FaLock />,
      title: "Focus on Security & Ethics",
      text: "Solutions built on ethical practices, security, privacy, and responsible technology usage.",
    },
    {
      icon: <FaRocket />,
      title: "Career-Oriented Programs",
      text: "Training and internships designed to bridge the gap between academics and industry requirements.",
    },
    {
      icon: <FaChartLine />,
      title: "Proven Work & Project Experience",
      text: "Multiple national and international projects showcasing reliability and scalability.",
    },
    {
      icon: <FaUsers />,
      title: "Supportive Learning Environment",
      text: "Collaborative ecosystem where learners grow through interaction, mentorship, and continuous improvement.",
    },
  ];

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">

        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="px-4 py-1 bg-[#DBEAFE] text-[#2563EB] rounded-full text-sm">
            Why Choose Us 🚀
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mt-4">
            Building Trust Through Expertise & Innovation
          </h2>

          <p className="text-[#64748B] mt-3 max-w-2xl mx-auto text-sm md:text-base">
            At CR Cyber Crime Foundation (CRCCF), we go beyond traditional learning by integrating cybersecurity, research, and real-world applications to create impactful solutions.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white border border-[#E2E8F0] rounded-2xl p-6
              hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >

              {/* HOVER BG */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8]
              opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl -z-10"></div>

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

        {/* FINAL VISION BLOCK */}
        <div className="mt-14 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white rounded-2xl p-8 text-center">

          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            🌍 Vision for a Secure Digital Future
          </h3>

          <p className="text-sm md:text-base max-w-3xl mx-auto text-blue-100">
            We are not just an organization—we are a movement towards building a safer, smarter, and more secure digital ecosystem for everyone.
          </p>

        </div>

      </div>
    </section>
  );
}