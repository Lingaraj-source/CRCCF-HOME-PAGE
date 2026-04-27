import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CategoryCard({
  title,
  image,
  icon: Icon,
  iconBg,
  index,
}) {
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate(`/category/${index}`)}
      whileHover={{ y: -5 }}
      className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Top Left Icon - Now only rotates when hovered DIRECTLY */}
        <div
          className="absolute top-2 left-2 w-8 h-8 rounded-full flex items-center justify-center shadow transition-transform duration-500 hover:rotate-[360deg]"
          style={{ backgroundColor: iconBg }}
        >
          <Icon className="w-4 h-4 text-white" />
        </div>
      </div>

      <div className="p-3 flex justify-between items-center">
        <h3 className="text-sm font-semibold text-[#0F172A]">{title}</h3>

        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-200 group-hover:bg-[#2563EB] group-hover:text-white transition">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}