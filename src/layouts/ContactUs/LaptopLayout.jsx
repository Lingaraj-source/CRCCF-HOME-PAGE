import React, { useState, useRef, useEffect } from "react";
// Outlet tells React Router exactly where to render the nested pages
// useLocation gives us the current URL
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/ContactUs/Sidebar";
import FloatingBackground from "../../components/ContactUs/FloatingBackground";

// Importing all the icons needed for the categories
import {
  Headset,
  Share2,
  MapPin,
  BadgeCent,
  Users,
  BookOpen,
  Mic,
  Scale,
  Gavel,
  UserCheck,
  UserPlus,
  Star,
  MessageSquare,
  MessageCircle,
  Bot, // ✨ Added the Bot icon for the AI Chat!
} from "lucide-react";

// The master list of all sections in the dashboard.
// This array feeds both the Sidebar and the main Dashboard grid!
const categories = [
  { id: "help-desk", title: "Help Desk", icon: Headset },
  { id: "follow-apps", title: "Follow Apps", icon: Share2 },
  { id: "branch-details", title: "Branch Details", icon: MapPin },
  { id: "officer", title: "Officer", icon: BadgeCent },
  { id: "employee", title: "Employee", icon: Users },
  { id: "teacher", title: "Teacher", icon: BookOpen },
  { id: "reporter", title: "Reporter", icon: Mic },
  { id: "advocate", title: "Advocate", icon: Scale },
  { id: "legal-advisor", title: "Legal Advisor", icon: Gavel },
  { id: "board-of-director", title: "Board of Director", icon: UserCheck },
  { id: "board-of-member", title: "Board of Member", icon: UserPlus },

  // ✨ THE FIX: Changed ID to "ai-chat" (no spaces) and icon to Bot!
  { id: "ai-chat", title: "AI Chat", icon: Bot },

  { id: "review", title: "Review", icon: Star },
  { id: "feedback", title: "Feedback", icon: MessageSquare },
];

const LaptopLayout = () => {
  // State to track which card the user is hovering over on the dashboard
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const location = useLocation();

  // ✨ FIX: Mobile Hover Glitch Fix
  // Whenever the URL changes (meaning the user clicked a link),
  // this instantly clears the hovered state so it doesn't get "stuck" on mobile.
  useEffect(() => {
    setHoveredCardId(null);
  }, [location.pathname]);

  // --- SYNCHRONIZED SCROLLING LOGIC ---
  // We use refs to directly access the DOM elements without triggering re-renders
  const sidebarScrollRef = useRef(null);
  const mainScrollRef = useRef(null);
  // This acts as a lock to prevent an infinite loop where the sidebar scrolls the main,
  // which scrolls the sidebar, which scrolls the main...
  const isScrolling = useRef(null);

  // Function: When you scroll the dark blue Sidebar
  const handleSidebarScroll = () => {
    if (isScrolling.current === "main") return; // If main is currently scrolling, ignore this
    isScrolling.current = "sidebar"; // Lock it

    const sidebar = sidebarScrollRef.current;
    const main = mainScrollRef.current;

    // Calculate the percentage scrolled on the sidebar, and apply that exact percentage to the main view
    if (sidebar && main && main.scrollHeight > main.clientHeight) {
      const percentage =
        sidebar.scrollTop / (sidebar.scrollHeight - sidebar.clientHeight);
      main.scrollTop = percentage * (main.scrollHeight - main.clientHeight);
    }

    // Release the lock after scrolling stops
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
      isScrolling.current = null;
    }, 50);
  };

  // Function: When you scroll the main white content area
  const handleMainScroll = () => {
    if (isScrolling.current === "sidebar") return;
    isScrolling.current = "main";

    const sidebar = sidebarScrollRef.current;
    const main = mainScrollRef.current;

    // Calculate the percentage scrolled on the main view, and apply that exact percentage to the sidebar
    if (sidebar && main && sidebar.scrollHeight > sidebar.clientHeight) {
      const percentage =
        main.scrollTop / (main.scrollHeight - main.clientHeight);
      sidebar.scrollTop =
        percentage * (sidebar.scrollHeight - sidebar.clientHeight);
    }

    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
      isScrolling.current = null;
    }, 50);
  };

  return (
    // Outer Wrapper: Centers the laptop on the screen
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 lg:p-12 relative bg-[#F8FAFC] overflow-hidden">
      {/* The floating device icons in the background */}
      <FloatingBackground />

      {/* --- LAPTOP MOCKUP CONTAINER --- */}
      <div className="relative w-full max-w-[1200px] z-10">
        {/* The Screen Bezel (The black border around the screen) */}
        <div className="relative bg-[#121212] p-2 sm:p-4 md:p-5 rounded-xl sm:rounded-t-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
          {/* The Laptop Webcam dot */}
          <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-gray-800 rounded-full"></div>

          {/* The Actual Screen Content Area */}
          <div className="bg-bgMain h-[80vh] sm:h-[75vh] w-full rounded-sm sm:rounded-md overflow-hidden flex flex-col md:flex-row relative bg-white shadow-inner">
            {/* 📱 MOBILE HEADER (Only visible on small screens) */}
            <div className="md:hidden bg-navBg text-white px-5 py-4 shrink-0 shadow-md z-20 flex justify-between items-center">
              <div>
                <h1 className="text-xl font-bold tracking-wider">ContactHub</h1>
                <p className="text-[10px] text-lightBlue mt-0.5 opacity-80 uppercase tracking-widest">
                  Smart Dashboard
                </p>
              </div>
            </div>

            {/* 💻 DESKTOP SIDEBAR (Hidden on mobile, visible on medium+ screens) */}
            <div className="hidden md:block h-full z-10 relative">
              <Sidebar
                categories={categories}
                hoveredCardId={hoveredCardId}
                sidebarRef={sidebarScrollRef} // Attach sync scrolling ref
                onScroll={handleSidebarScroll} // Attach sync scrolling event
              />
            </div>

            {/* 📄 MAIN CONTENT AREA (Where the cards or pages render) */}
            <div
              ref={mainScrollRef} // Attach sync scrolling ref
              onScroll={handleMainScroll} // Attach sync scrolling event
              className="flex-1 h-full overflow-y-auto custom-scrollbar relative bg-[#F1F5F9]"
            >
              <main className="p-4 sm:p-6 md:p-8 lg:p-10">
                {/* Outlet is the placeholder where React Router injects the Dashboard.jsx component. 
                    We pass down categories and setHoveredCardId as context so the Dashboard can use them. */}
                <Outlet context={{ categories, setHoveredCardId }} />
              </main>
            </div>
          </div>
        </div>

        {/* --- LAPTOP BASE (The silver part under the screen) --- */}
        {/* Hidden on mobile so it doesn't take up precious screen space */}
        <div className="hidden md:flex relative bg-gradient-to-b from-[#e5e7eb] to-[#9ca3af] h-3 sm:h-5 md:h-7 rounded-b-lg sm:rounded-b-3xl w-[104%] -left-[2%] shadow-[0_15px_25px_-5px_rgba(0,0,0,0.5)] z-10 border-t border-[#f3f4f6] justify-center">
          {/* The little indentation where you'd open the laptop lid */}
          <div className="w-16 sm:w-24 md:w-32 h-1.5 sm:h-2 bg-[#9ca3af] rounded-b shadow-inner mt-0 border-x border-b border-[#6b7280]"></div>
        </div>
      </div>
    </div>
  );
};

export default LaptopLayout;
