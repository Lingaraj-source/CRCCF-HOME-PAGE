export default function WhyChooseUs() {
  return (
    <section className="bg-[#f8fafc] py-16">

      {/* ✅ FIXED CONTAINER */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 grid lg:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <div className="relative">

          <img
            src="/assets/campus.jpg"
            alt="campus"
            className="w-full h-[400px] object-cover rounded-2xl shadow-md"
          />

          {/* BADGE */}
          <div className="absolute bottom-6 left-6 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg">
            <p className="text-lg font-bold">25+</p>
            <p className="text-xs opacity-90">Years of Research</p>
          </div>

        </div>

        {/* CONTENT */}
        <div>

          <p className="text-blue-600 text-xs font-semibold uppercase mb-2 tracking-wide">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-5 leading-tight">
            Securing the Digital Future with Innovation & Trust
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            At CR Cyber Crime Foundation, we combine cybersecurity expertise, advanced technology, and real-world experience to protect individuals and organizations from evolving digital threats. Our approach ensures security, reliability, and future-ready solutions.
          </p>

          <ul className="space-y-3 text-sm text-gray-600 mb-6">
            <li>✔ Advanced Cybersecurity & Threat Intelligence Solutions</li>
            <li>✔ Real-world Digital Investigation & Forensics Support</li>
            <li>✔ Industry-oriented Training & Skill Development Programs</li>
            <li>✔ Secure, Scalable & AI-powered Technology Solutions</li>
          </ul>

          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
              Explore Services
            </button>

            <button className="text-blue-600 text-sm font-medium">
              Contact Our Team →
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}