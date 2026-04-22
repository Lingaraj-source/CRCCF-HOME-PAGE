// AboutSection (WHO WE ARE)
// Pixel-perfect based on screenshot
// - Exact layout (image left, content right)
// - Blue accent line
// - Mission & Vision cards
// - Floating "60+" badge
// - Clean spacing + production UI

export default function AboutSection() {
  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-20">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT IMAGE ================= */}
        <div className="relative">

          {/* Main Image */}
          <img
            src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a"
            alt="University"
            className="rounded-2xl shadow-soft w-full object-cover"
          />

          {/* Floating Badge */}
          <div className="absolute bottom-6 left-6 bg-blue-600 text-white px-8 py-5 rounded-xl shadow-lg">

            <h2 className="text-3xl font-bold">60+</h2>
            <p className="text-xs tracking-wide mt-1">
              YEARS OF EXCELLENCE
            </p>

          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div>

          {/* Section Label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-blue-600"></span>
            <p className="text-blue-600 text-sm font-semibold tracking-wide">
              WHO WE ARE
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] leading-snug">
            Shaping Futures Through Knowledge & Discovery
          </h2>

          {/* Description */}
          <p className="text-gray-600 mt-4 leading-relaxed">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Curabitur non nulla sit amet nisl tempus
            convallis quis ac lectus. Proin eget tortor risus viverra maecenas
            accumsan lacus vel facilisis.
          </p>

          {/* ================= CARDS ================= */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">

            {/* Mission Card */}
            <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-6 shadow-soft hover:shadow-md transition">

              {/* Icon */}
              <div className="text-blue-600 mb-3 text-xl">◎</div>

              <h4 className="font-semibold text-lg text-[#0f172a]">
                Our Mission
              </h4>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada
                feugiat praesent sapien massa convallis a pellentesque nec.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-6 shadow-soft hover:shadow-md transition">

              {/* Icon */}
              <div className="text-blue-600 mb-3 text-xl">👁</div>

              <h4 className="font-semibold text-lg text-[#0f172a]">
                Our Vision
              </h4>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Curabitur aliquet quam id dui posuere blandit. Mauris blandit
                aliquet elit eget tincidunt nibh pulvinar a viverra.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}