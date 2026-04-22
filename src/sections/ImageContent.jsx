// src/sections/ImageContent.jsx

// ✔ FIXED IMAGE
// ✔ BALANCED LAYOUT
// ✔ BETTER TYPOGRAPHY
// ✔ CLEAN SPACING

export default function ImageContent() {
  return (
    <section className="bg-[#f8fafc] py-20 px-6 md:px-12 lg:px-20">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div className="relative">

          <img
            src="/assets/campus.jpg" // ✅ FIX PATH (put image in public/assets)
            alt="campus"
            className="w-full h-[400px] object-cover rounded-2xl shadow-md"
          />

          {/* BADGE */}
          <div className="
            absolute bottom-6 left-6
            bg-blue-600 text-white
            px-6 py-3 rounded-xl shadow-lg
          ">
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
            Transforming Education for the Future
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            We combine innovation, research, and global exposure to ensure students achieve academic excellence and career success.
          </p>

          {/* LIST */}
          <ul className="space-y-3 text-sm text-gray-600 mb-6">
            <li>✔ Industry-driven curriculum</li>
            <li>✔ Global partnerships & exchange programs</li>
            <li>✔ Highly experienced faculty</li>
            <li>✔ Career-focused learning approach</li>
          </ul>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
              Learn More
            </button>

            <button className="text-blue-600 text-sm font-medium">
              Contact Us →
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}