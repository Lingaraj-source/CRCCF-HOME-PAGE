// src/sections/Values.jsx

// VALUES SECTION
// ✔ 4 cards (Academic Excellence, Innovation, etc.)
// ✔ Clean grid layout
// ✔ Pixel-perfect spacing

export default function Values() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">

      {/* ================= HEADER ================= */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
          Our Core Values
        </h2>

        <div className="w-16 h-[3px] bg-blue-600 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-500 mt-4 text-sm">
          We are committed to excellence, innovation, and global impact through education.
        </p>
      </div>

      {/* ================= CARDS ================= */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {[
          {
            title: "Academic Excellence",
            desc: "Praesent sapien massa convallis a pellentesque nec egestas non nisi.",
            icon: "🎓",
          },
          {
            title: "Innovation",
            desc: "Curabitur arcu erat accumsan id imperdiet et porttitor at sem.",
            icon: "💡",
          },
          {
            title: "Community Engagement",
            desc: "Vivamus magna justo lacinia eget consectetur sed convallis at tellus.",
            icon: "🤝",
          },
          {
            title: "Global Perspective",
            desc: "Donec sollicitudin molestie malesuada curabitur non nulla sit amet.",
            icon: "🌍",
          },
        ].map((item, i) => (

          <div
            key={i}
            className="
              bg-[#f8fafc]
              border border-gray-100
              rounded-2xl
              p-6
              shadow-sm
              hover:shadow-lg
              transition-all duration-300
              hover:-translate-y-1
            "
          >

            {/* ICON */}
            <div className="text-blue-600 text-3xl mb-4">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-500 text-sm leading-relaxed">
              {item.desc}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}