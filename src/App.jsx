// src/App.jsx

import Routes from "./routes";
import ScrollTop from "./components/ScrollTop";

// MAIN APP WRAPPER
// ✔ Default export REQUIRED
// ✔ Global components here

export default function App() {
  return (
    <>
      {/* Scroll to top button */}
      <ScrollTop />

      {/* All routes */}
      <Routes />
    </>
  );
}