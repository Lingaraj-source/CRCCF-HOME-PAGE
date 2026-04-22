// src/sections/Testimonials.jsx

// PRODUCTION READY TESTIMONIALS
// ✔ Cards layout
// ✔ Clean spacing
// ✔ Avatar + role + review
// ✔ Responsive

export default function Testimonials() {
  const data = [
    {
      name: "Aarav Sharma",
      role: "Computer Science Student",
      image: "/assets/user-1.jpg",
      text: "Amazing experience and great faculty! The learning environment is truly inspiring."
    },
    {
      name: "Priya Verma",
      role: "MBA Graduate",
      image: "/assets/user-2.jpg",
      text: "The university helped me build confidence and industry-ready skills."
    },
    {
      name: "Rahul Mehta",
      role: "Engineering Student",
      image: "/assets/user-3.jpg",
      text: "Best decision of my life. The campus and faculty are top-notch."
    }
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">

      {/* HEADING */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
          Testimonials
        </h2>
        <p className="text-gray-500 mt-3 text-sm">
          What our students say about us
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {data.map((item, i) => (
          <div
            key={i}
            className="
              bg-[#f8fafc] 
              p-6 rounded-xl 
              shadow-sm 
              hover:shadow-md 
              transition
            "
          >
            {/* USER */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h4 className="text-sm font-semibold text-[#0f172a]">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-500">
                  {item.role}
                </p>
              </div>
            </div>

            {/* TEXT */}
            <p className="text-sm text-gray-600 leading-relaxed">
              "{item.text}"
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}