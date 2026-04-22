// src/sections/Activities.jsx

// ACTIVITIES CARDS (CLUBS, RESEARCH, ETC.)
// ✔ Clean card grid
// ✔ Matches screenshot

export default function Activities() {
  return (
    <section className="bg-[#f8fafc] py-20 px-6 md:px-12 lg:px-20">

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {[
          {
            title: "Academic Clubs",
            img: "/assets/life-1.jpg",
          },
          {
            title: "Research Initiatives",
            img: "/assets/life-2.jpg",
          },
          {
            title: "Volunteer Work",
            img: "/assets/life-3.jpg",
          },
          {
            title: "Creative Studios",
            img: "/assets/life-4.jpg",
          },
        ].map((item, i) => (

          <div
            key={i}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
          >

            {/* IMAGE */}
            <div className="h-[180px] overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">

              <h4 className="text-lg font-semibold text-[#0f172a] mb-2">
                {item.title}
              </h4>

              <p className="text-gray-500 text-sm mb-4">
                Ut enim ad minima veniam quis nostrum exercitationem ullam corporis.
              </p>

              <button className="text-blue-600 text-sm font-medium flex items-center gap-2 hover:gap-3 transition">
                Learn More →
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}