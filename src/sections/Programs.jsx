// src/sections/Programs.jsx

// Featured Programs Section (PIXEL PERFECT)
// ✔ Exact spacing system
// ✔ Proper grid alignment
// ✔ Consistent card height
// ✔ Perfect badge + overlay positioning
// ✔ Clean typography scale
// ✔ Production ready

export default function Programs() {
  return (
    <section className="bg-[#f8fafc] py-20 px-6 md:px-12 lg:px-20">

      {/* ================= HEADER ================= */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
          Featured Programs
        </h2>

        {/* underline */}
        <div className="w-16 h-[3px] bg-blue-600 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-500 mt-4 text-sm leading-relaxed">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      {/* ================= FEATURED MAIN ================= */}
      <div className="grid lg:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-14">

        {/* LEFT IMAGE */}
        <div className="relative h-[320px] md:h-[360px] lg:h-full">
          <img
            src="/assets/program-1.jpg"
            alt="program"
            className="w-full h-full object-cover"
          />

          {/* Trending Badge */}
          <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow">
            ★ TRENDING
          </span>
        </div>

        {/* RIGHT CONTENT */}
        <div className="p-8 md:p-10">

          <p className="text-blue-600 text-xs font-semibold tracking-wide uppercase mb-2">
            Featured Program
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-4 leading-snug">
            Computer Science & Innovation
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
          </p>

          {/* STATS */}
          <div className="flex flex-wrap gap-3 mb-6">

            <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700">
              👥 620+ Enrolled
            </div>

            <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700">
              🏆 98% Placement
            </div>

            <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700">
              ⏱ 4 Years
            </div>

          </div>

          {/* CTA */}
          <button className="text-blue-600 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
            Explore Program →
          </button>

        </div>
      </div>

      {/* ================= PROGRAM CARDS ================= */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {[
          {
            title: "Strategic Leadership",
            type: "MASTER'S DEGREE",
            duration: "3 Years",
            img: "/assets/program-2.jpg"
          },
          {
            title: "Media & Communications",
            type: "CERTIFICATE",
            duration: "2 Years",
            img: "/assets/program-3.jpg"
          },
          {
            title: "Biomedical Research",
            type: "BACHELOR'S DEGREE",
            duration: "5 Years",
            img: "/assets/program-4.jpg"
          },
          {
            title: "Visual & Performing Arts",
            type: "BACHELOR'S DEGREE",
            duration: "3 Years",
            img: "/assets/program-5.jpg"
          }
        ].map((item, i) => (

          <div
            key={i}
            className="
              bg-white 
              rounded-2xl 
              overflow-hidden 
              border border-gray-100 
              shadow-sm
              hover:shadow-lg 
              transition-all duration-300
              hover:-translate-y-1
            "
          >

            {/* IMAGE */}
            <div className="relative h-[180px]">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Duration Badge */}
              <span className="
                absolute bottom-3 right-3 
                bg-white text-gray-700 text-xs 
                px-3 py-1 rounded-full shadow
              ">
                {item.duration}
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-5">

              <p className="text-blue-600 text-xs font-semibold uppercase mb-1 tracking-wide">
                {item.type}
              </p>

              <h4 className="text-lg font-semibold text-[#0f172a] mb-2 leading-snug">
                {item.title}
              </h4>

              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.
              </p>

              <button className="text-gray-700 text-sm font-medium flex items-center gap-1 hover:text-blue-600 hover:gap-2 transition-all">
                View Details →
              </button>

            </div>
          </div>

        ))}

      </div>

    </section>
  );
}