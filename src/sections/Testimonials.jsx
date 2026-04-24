export default function Testimonials() {
  const data = [
    {
      name: "Rohit Kumar",
      role: "Cybersecurity Intern",
      image: "/assets/user-1.jpg",
      text: "The hands-on training and real-world cyber investigation exposure helped me build strong practical skills in cybersecurity."
    },
    {
      name: "Ananya Das",
      role: "Software Developer",
      image: "/assets/user-2.jpg",
      text: "CRCCF's secure development approach and guidance helped me understand how to build scalable and secure applications."
    },
    {
      name: "Siddharth Mishra",
      role: "Digital Forensics Trainee",
      image: "/assets/user-3.jpg",
      text: "Working on real cybercrime case studies gave me deep insights into digital forensics and investigation techniques."
    }
  ];

  return (
    <section className="bg-white py-16">

      {/* HEADER */}
      <div className="text-center mb-12 px-4 md:px-10 lg:px-20 max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a]">
          Testimonials
        </h2>
        <p className="text-gray-500 mt-3 text-sm">
          What our students say about us
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {data.map((item, i) => (
          <div
            key={i}
            className="bg-[#f8fafc] p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >

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

            <p className="text-sm text-gray-600 leading-relaxed">
              "{item.text}"
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}