// Hero Section (Production Level)
// - Pixel-perfect layout
// - Proper spacing + typography
// - Stats box with separators
// - Floating accreditation badge
// - Smooth hover + micro animations
// - Clean & reusable structure

export default function Hero() {
  // ✅ Use direct URL (no import issue)
  const heroImg =
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b";

  return (
    <section className="bg-[#f8fafc] px-6 md:px-12 lg:px-20 pt-16 pb-20">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div className="animate-fadeInUp">

          {/* 🔹 Top Badge */}
          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
            🎓 Premier Academic Institution
          </span>

          {/* 🔹 Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold mt-6 leading-tight text-[#0f172a]">
            Empowering Minds,
            <br />
            Shaping Tomorrow's
            <br />
            Leaders
          </h1>

          {/* 🔹 Description */}
          <p className="mt-4 text-gray-600 max-w-lg leading-relaxed">
            Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
            Curabitur aliquet quam id dui posuere blandit nulla quis lorem ut
            libero malesuada feugiat.
          </p>

          {/* ================= STATS BOX ================= */}
          <div className="bg-white shadow-soft rounded-xl mt-6 px-6 py-5 flex justify-between items-center">

            {/* Stat 1 */}
            <div className="text-center">
              <h2 className="text-blue-600 text-2xl font-bold">96%</h2>
              <p className="text-xs text-gray-500 mt-1 tracking-wide">
                EMPLOYMENT RATE
              </p>
            </div>

            {/* Divider */}
            <div className="h-10 w-px bg-gray-200"></div>

            {/* Stat 2 */}
            <div className="text-center">
              <h2 className="text-blue-600 text-2xl font-bold">12:1</h2>
              <p className="text-xs text-gray-500 mt-1 tracking-wide">
                STUDENT RATIO
              </p>
            </div>

            {/* Divider */}
            <div className="h-10 w-px bg-gray-200"></div>

            {/* Stat 3 */}
            <div className="text-center">
              <h2 className="text-blue-600 text-2xl font-bold">50+</h2>
              <p className="text-xs text-gray-500 mt-1 tracking-wide">
                PROGRAMS OFFERED
              </p>
            </div>

          </div>

          {/* ================= BUTTONS ================= */}
          <div className="flex flex-wrap gap-4 mt-8">

            {/* Primary Button */}
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
              Begin Your Journey
            </button>

            {/* Secondary Button */}
            <button className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300">
              <span className="text-blue-600">▶</span>
              Virtual Campus Tour
            </button>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative">

          {/* Image */}
          <img
            src={heroImg}
            alt="Campus"
            className="rounded-2xl shadow-soft w-full object-cover hover:scale-[1.02] transition duration-300"
          />

          {/* Floating Accreditation Badge */}
          <div className="absolute bottom-6 left-6 bg-white px-5 py-3 rounded-xl shadow-soft flex items-center gap-3">

            {/* Icon */}
            <div className="bg-blue-600 text-white p-2 rounded-full">
              ✔
            </div>

            {/* Text */}
            <div>
              <p className="font-semibold text-sm text-[#0f172a]">
                Fully Accredited
              </p>
              <p className="text-xs text-gray-500">
                Nationally Recognized
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
