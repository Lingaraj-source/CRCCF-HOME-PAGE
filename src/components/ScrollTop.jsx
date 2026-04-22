import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 400);
    });
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg"
    >
      ↑
    </button>
  );
}