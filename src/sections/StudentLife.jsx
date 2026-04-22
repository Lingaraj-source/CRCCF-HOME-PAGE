// src/sections/StudentLife.jsx

// STUDENT LIFE (2-COLUMN)
// ✔ Left content + right image
// ✔ Clean spacing + CTA

export default function StudentLife() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">

      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-blue-600 text-sm font-semibold uppercase mb-2">
            Student Life
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-5">
            Experience Campus Life Like Never Before
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            From academic clubs to global events, our campus life ensures every student
            grows academically, socially, and professionally.
          </p>

          {/* FEATURES LIST */}
          <ul className="space-y-3 mb-6 text-sm text-gray-600">
            <li>✔ 100+ Student Clubs & Organizations</li>
            <li>✔ Global Exchange Programs</li>
            <li>✔ Industry Mentorship & Workshops</li>
            <li>✔ Sports, Arts & Cultural Activities</li>
          </ul>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
              Explore Campus
            </button>

            <button className="text-blue-600 font-medium text-sm">
              View Activities →
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="/assets/student-life.jpg"
            alt="student life"
            className="rounded-2xl w-full h-[380px] object-cover shadow-sm"
          />
        </div>

      </div>

    </section>
  );
}