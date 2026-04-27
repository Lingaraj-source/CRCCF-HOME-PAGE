import CategoryCard from "./CategoryCard";
import {
  GraduationCap,
  Newspaper,
  Video,
  Users,
  Award,
  Monitor,
  BookOpen,
  ShieldCheck,
  Bell,
  Search,
  FlaskConical,
  Briefcase,
  Palette,
  Presentation,
} from "lucide-react";

const categories = [
  { title: "Our Student", icon: GraduationCap, iconBg: "#2563EB" },
  { title: "Media & Press", icon: Newspaper, iconBg: "#22c55e" },
  { title: "Events", icon: Video, iconBg: "#ef4444" },
  { title: "Team Moments", icon: Users, iconBg: "#f97316" },
  { title: "Certificates", icon: Award, iconBg: "#8b5cf6" },
  { title: "Client Work", icon: Monitor, iconBg: "#06b6d4" },
  { title: "Training", icon: BookOpen, iconBg: "#22c55e" },
  { title: "Cyber Campaigns", icon: ShieldCheck, iconBg: "#14b8a6" },
  { title: "Product Launches", icon: Bell, iconBg: "#ef4444" },
  { title: "Investigation", icon: Search, iconBg: "#eab308" },
  { title: "R&D", icon: FlaskConical, iconBg: "#6366f1" },
  { title: "Internship", icon: Briefcase, iconBg: "#ec4899" },
  { title: "UI/UX", icon: Palette, iconBg: "#06b6d4" },
  { title: "Seminars", icon: Presentation, iconBg: "#f97316" },
  { title: "Course", icon: Presentation, iconBg: "#f97316" },
];

export default function CategoryGrid({ images }) {
  return (
    <section className="w-full py-10 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Changed grid to stack 1 column on mobile, 2 on tablet, up to 5 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {categories.map((cat, idx) => (
            <CategoryCard
              key={cat.title}
              title={cat.title}
              image={images[idx]}
              icon={cat.icon}
              iconBg={cat.iconBg}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}