// Timeline Section - Pixel Perfect Version
// Fixes:
// ✔ Perfect horizontal line alignment
// ✔ Centered dots
// ✔ Equal spacing between milestones
// ✔ Better typography spacing
// ✔ Taller premium cards
// ✔ Subtle hover polish

export default function Timeline() {
  const milestones = [
    {
      year: "1965",
      title: "Foundation Laid",
      desc: "Etiam at tincidunt arcu pellentesque habitant morbi tristique senectus et netus fames."
    },
    {
      year: "1982",
      title: "National Recognition",
      desc: "Donec dignissim odio ac imperdiet luctus ante nisl accumsan justo nec tempus augue."
    },
    {
      year: "1998",
      title: "Global Expansion",
      desc: "Suspendisse potenti nullam lacinia dictum auctor phasellus euismod sem imperdiet."
    },
    {
      year: "2010",
      title: "Research Hub",
      desc: "Vestibulum ultrices magna ut faucibus sollicitudin sed eget venenatis enim nec."
    }
  ];

  const features = [
    {
      no: "01",
      title: "Academic Excellence",
      desc: "Praesent sapien massa convallis a pellentesque nec egestas non nisi tempus convallis."
    },
    {
      no: "02",
      title: "Community Engagement",
      desc: "Vivamus magna justo lacinia eget consectetur sed convallis at tellus nunc."
    },
    {
      no: "03",
      title: "Innovation",
      desc: "Curabitur arcu erat accumsan id imperdiet et porttitor at sem ultricies magna."
    },
    {
      no: "04",
      title: "Global Perspective",
      desc: "Donec sollicitudin molestie malesuada curabitur non nulla sit amet nisl porttitor."
    }
  ];

  return (
    <section className="bg-[#f8fafc] px-6 md:px-12 lg:px-20 py-24">

      {/* ================= TITLE ================= */}
      <h2 className="text-3xl font-bold text-center text-[#0f172a]">
        Key Milestones
      </h2>

      {/* ================= TIMELINE ================= */}
      <div className="relative mt-16">

        {/* Line */}
        <div className="absolute top-[10px] left-0 w-full h-[2px] bg-blue-200"></div>

        {/* Points */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 relative">

          {milestones.map((item, i) => (
            <div key={i} className="text-center relative">

              {/* Dot perfectly aligned */}
              <div className="w-5 h-5 bg-white border-[3px] border-blue-600 rounded-full mx-auto relative z-10"></div>

              {/* Year */}
              <h3 className="text-blue-600 text-[34px] font-bold mt-8 tracking-wide">
                {item.year}
              </h3>

              {/* Title */}
              <p className="font-semibold mt-2 text-[#0f172a]">
                {item.title}
              </p>

              {/* Description */}
              <p className="text-gray-500 text-sm mt-2 leading-relaxed max-w-[260px] mx-auto">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>

      {/* ================= CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

        {features.map((item, i) => (
          <div
            key={i}
            className="
              bg-white 
              rounded-2xl 
              px-6 
              py-8 
              shadow-soft 
              border border-gray-100 
              relative 
              min-h-[180px]   /* 🔥 increased height */
              hover:shadow-lg 
              hover:-translate-y-1 
              transition-all duration-300
            "
          >

            {/* Left Accent */}
            <div className="absolute left-0 top-0 h-full w-[4px] bg-blue-600 rounded-l-2xl"></div>

            {/* Number */}
            <span className="text-blue-300 text-2xl font-bold">
              {item.no}
            </span>

            {/* Title */}
            <h4 className="font-semibold text-[#0f172a] mt-3 text-[16px]">
              {item.title}
            </h4>

            {/* Desc */}
            <p className="text-sm text-gray-500 mt-3 leading-relaxed">
              {item.desc}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}