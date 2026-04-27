import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { id } = useParams();

  const categoryNames = [
    "Our Student",
    "Media & Press Coverage",
    "Event",
    "Team Moments",
    "Certificates",
    "Client Work",
    "Training Programs",
    "Cyber Awareness Campaigns",
    "Product Launches",
    "Investigation Cases",
    "Research & Development",
    "Internship Activity",
    "UI & UX Designs",
    "Seminar Session",
  ];

  const title = categoryNames[id] || "Gallery";
  const heroImage =
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f";

  const sections = [
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      title: "Learning Environment",
      desc: "Students collaborating in a modern classroom with advanced tools and resources.",
    },
    {
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      title: "Group Activities",
      desc: "Teamwork and communication through engaging group activities.",
    },
    {
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      title: "Presentations",
      desc: "Students presenting ideas and improving confidence through discussions.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 sm:px-6 py-10">
      {/* TOP SECTION */}
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-8 items-center mb-10">
        {/* LEFT TEXT CARD */}
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
            {title}
          </h1>
          <div className="mt-3 w-12 h-1 bg-[#2563EB] rounded-full" />
          <p className="mt-4 sm:mt-6 text-[#64748B] leading-relaxed text-sm sm:text-base">
            Empowering students, inspiring excellence,
            <br className="hidden sm:block" />
            building a brighter future.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src={heroImage}
            alt="hero"
            className="w-full h-[200px] sm:h-[260px] object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>

      {/* CONTENT SECTIONS */}
      <div className="max-w-[1400px] mx-auto space-y-8">
        {sections.map((item, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-6 items-center">
            {/* LEFT IMAGE */}
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[200px] object-cover"
              />
            </div>

            {/* RIGHT CONTENT CARD - Changed to h-auto on mobile to prevent text clipping */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border-l-4 border-[#2563EB] h-auto md:h-[200px] flex flex-col justify-center">
              {/* NUMBER */}
              <div className="w-10 h-10 flex items-center justify-center bg-[#DBEAFE] text-[#2563EB] font-bold rounded-lg mb-3 shrink-0">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h2 className="text-lg font-bold text-[#0F172A]">{item.title}</h2>
              <p className="mt-2 text-[#64748B] text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}