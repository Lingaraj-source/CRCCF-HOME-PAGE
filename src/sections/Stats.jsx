// src/sections/Stats.jsx

// BLUE STATS SECTION
// ✔ Separate from StudentLife
// ✔ Clean & centered

export default function Stats() {
  return (
    <section className="bg-blue-600 py-16 px-6 md:px-12 lg:px-20">

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">

        {[
          { value: "3200+", label: "Enrolled Scholars" },
          { value: "180+", label: "Course Programs" },
          { value: "45+", label: "Global Partners" },
          { value: "98%", label: "Satisfaction Rate" },
        ].map((item, i) => (
          <div key={i}>

            <h3 className="text-3xl md:text-4xl font-bold mb-2">
              {item.value}
            </h3>

            <p className="text-sm opacity-90">
              {item.label}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}