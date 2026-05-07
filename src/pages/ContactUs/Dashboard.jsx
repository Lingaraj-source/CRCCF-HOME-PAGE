import React from "react";
// useOutletContext is a super helpful React Router hook.
// It grabs the data we passed into the <Outlet /> back in your LaptopLayout.jsx file!
import { useOutletContext } from "react-router-dom";
import Card from "../../components/ContactUs/Card";
import { LayoutDashboard } from "lucide-react";

const Dashboard = () => {
  // ✨ THE MAGIC CONNECTION ✨
  // We extract 'categories' (to draw the cards) and 'setHoveredCardId'
  // (to track mouse hovers) directly from the parent layout.
  const { categories, setHoveredCardId } = useOutletContext();

  return (
    // <> is a React Fragment. It lets us return multiple elements (header + grid)
    // without having to wrap them in an unnecessary extra <div>.
    <>
      {/* --- DASHBOARD HEADER --- */}
      {/* flex-col on mobile, but switches to flex-row (side-by-side) on 'sm' screens and larger */}
      <header className="mb-8 flex flex-col sm:flex-row sm:items-center gap-4">
        {/* The Icon Box */}
        <div className="p-3 bg-white rounded-2xl shadow-sm inline-block w-fit">
          <LayoutDashboard size={28} className="text-primary" />
        </div>

        {/* Title and Subtitle Area */}
        <div>
          {/* tracking-tight pulls the letters slightly closer together for a modern look */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-textHeading tracking-tight">
            System Overview
          </h1>
          <p className="text-sm text-textSec font-medium mt-1">
            Hover over a module to highlight it, click to open.
          </p>
        </div>
      </header>

      {/* --- RESPONSIVE CARD GRID --- */}
      {/* This is a CSS Grid that automatically adjusts its columns based on screen size:
          - Mobile: 1 column (grid-cols-1)
          - Small Tablet: 2 columns (sm:grid-cols-2)
          - Laptop: 3 columns (lg:grid-cols-3)
          - Large Desktop: 4 columns (xl:grid-cols-4)
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* We loop through the 'categories' array from our layout context */}
        {categories.map((cat) => (
          <Card
            // 'key' is required by React whenever you map through an array
            key={cat.id}
            // Pass down the specific details for this single card
            title={cat.title}
            id={cat.id}
            Icon={cat.icon}
            // Pass down the hover function so the card can trigger the blue sidebar highlight!
            setHoveredCardId={setHoveredCardId}
          />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
