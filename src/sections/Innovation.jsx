// src/sections/Innovation.jsx

// ACADEMIC INNOVATION SECTION
// ✔ Text + progress/stat bars
// ✔ Clean professional UI
// ✔ Matches section #14

export default function Innovation() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div>

          <p className="text-blue-600 text-sm font-semibold uppercase mb-2">
            Academic Innovation
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-5">
            Driving Innovation Through Education
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            We integrate cutting-edge technologies, research methodologies, and
            global collaborations to ensure our students stay ahead in a rapidly
            evolving world.
          </p>

          <p className="text-gray-500 text-sm leading-relaxed">
            Our programs are designed to foster creativity, critical thinking,
            and real-world problem-solving skills.
          </p>

        </div>

        {/* ================= RIGHT STATS BARS ================= */}
        <div className="space-y-6">

          {[
            { label: "Research & Development", value: "90%" },
            { label: "Industry Collaboration", value: "85%" },
            { label: "Student Innovation", value: "92%" },
            { label: "Global Outreach", value: "88%" },
          ].map((item, i) => (

            <div key={i}>

              {/* LABEL + VALUE */}
              <div className="flex justify-between mb-1 text-sm">
                <span className="text-gray-700 font-medium">
                  {item.label}
                </span>
                <span className="text-blue-600 font-semibold">
                  {item.value}
                </span>
              </div>

              {/* PROGRESS BAR */}
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: item.value }}
                ></div>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}