// src/sections/Features.jsx

// Features Section (Fixed)
// ✔ No default highlight
// ✔ Hover-based highlight
// ✔ Smooth animations
// ✔ Pixel-perfect spacing

export default function Features() {
  const features = [
    {
      title: "Innovative Curriculum",
      desc: "Maecenas eget lacus id tortor facilisis tincidunt. Donec gravida risus at sollicitudin luctus vitae nulla.",
      link: "Explore Programs",
      number: "01"
    },
    {
      title: "State-of-the-Art Facilities",
      desc: "Nullam feugiat odio vitae justo pharetra condimentum. Vestibulum lacinia arcu ante facilisis blandit.",
      link: "View Campus",
      number: "02"
    },
    {
      title: "Distinguished Faculty",
      desc: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae dignissim.",
      link: "Meet the Team",
      number: "03"
    }
  ];

  return (
    <section className="bg-[#f8fafc] px-6 md:px-12 lg:px-20 py-16">

      <div className="grid md:grid-cols-3 gap-8">

        {features.map((item, i) => (
          <div
            key={i}
            className="
              group
              relative 
              bg-white 
              rounded-2xl 
              p-8 
              shadow-soft 
              border border-gray-100
              transition-all duration-300
              hover:shadow-lg 
              hover:-translate-y-1
              hover:border-blue-500
            "
          >

            {/* Number */}
            <span className="
              absolute top-6 right-6 
              text-gray-200 text-3xl font-bold
              group-hover:text-blue-100
              transition
            ">
              {item.number}
            </span>

            {/* Icon */}
            <div className="
              w-14 h-14 rounded-xl flex items-center justify-center
              bg-blue-100 text-blue-600
              group-hover:bg-blue-600 group-hover:text-white
              transition
            ">
              📘
            </div>

            {/* Title */}
            <h3 className="mt-5 text-lg font-semibold text-[#0f172a]">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              {item.desc}
            </p>

            {/* Link */}
            <button className="
              mt-4 
              text-blue-600 
              text-sm 
              font-semibold 
              flex items-center gap-1
              hover:gap-2
              transition-all
            ">
              {item.link} →
            </button>

          </div>
        ))}

      </div>
    </section>
  );
}