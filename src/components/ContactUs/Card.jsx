import React from "react";
// Link is used to navigate between pages without reloading the browser
import { Link } from "react-router-dom";
// Importing the little arrow icon that goes in the top right corner
import { ArrowUpRight } from "lucide-react";

// The Card component receives 4 props:
// - title: The name of the card (e.g., "Help Desk")
// - id: The URL path it should go to (e.g., "help-desk")
// - Icon: The specific Lucide icon component for this card
// - setHoveredCardId: The function to tell the layout which card is currently hovered
const Card = ({ title, id, Icon, setHoveredCardId }) => {
  return (
    <Link
      // 1. Navigation: Clicking this card goes to the route matching the 'id'
      to={`/contact/${id}`}
      // 2. Hover State Management:
      // When the mouse enters the card, tell the dashboard to highlight the sidebar link
      onMouseEnter={() => setHoveredCardId(id)}
      // When the mouse leaves, remove the highlight
      onMouseLeave={() => setHoveredCardId(null)}
      // ✨ Mobile Fix: Instantly erase the hover state when tapped,
      // otherwise mobile devices get "stuck" in the hover state
      onClick={() => setHoveredCardId(null)}
      // 3. Card Styling:
      // 'group' is a special Tailwind class. It lets us trigger hover effects
      // on inside elements (like text and icons) when the outside card is hovered!
      className="group bg-bgCard rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col cursor-pointer"
    >
      {/* --- TOP ROW: Icon Box and Arrow --- */}
      <div className="flex items-start justify-between mb-4">
        {/* Icon Container */}
        {/* group-hover:bg-primary-gradient -> Changes to blue when the CARD is hovered */}
        {/* [&>svg]:hover:animate-[flipIcon...] -> Flips the icon 360 degrees ONLY when this specific BOX is hovered */}
        <div className="p-3 bg-lightBlue rounded-xl text-primary group-hover:bg-primary-gradient group-hover:text-white transition-all duration-300 shadow-sm [&>svg]:hover:animate-[flipIcon_0.6s_ease-in-out]">
          {/* This renders the dynamic icon passed in via props */}
          <Icon size={24} />
        </div>

        {/* Top Right Arrow */}
        {/* group-hover:text-primary -> Turns blue when the CARD is hovered */}
        <ArrowUpRight
          size={20}
          className="text-slate-300 group-hover:text-primary transition-colors"
        />
      </div>

      {/* --- BOTTOM ROW: Title and Subtitle --- */}
      <div>
        {/* Card Title */}
        <h3 className="text-lg font-bold text-textHeading group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Subtitle / Helper Text */}
        <p className="text-sm text-textSec mt-1">Click to open page</p>
      </div>
    </Link>
  );
};

export default Card;
