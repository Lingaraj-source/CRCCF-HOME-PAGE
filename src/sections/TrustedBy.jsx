import LogoSlider from "../components/LogoSlider";

export default function Trustedby() {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png",
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-12 overflow-hidden">

      {/* TITLE */}
      <h2 className="text-center text-xs tracking-[0.35em] text-gray-500 mb-10">
        TRUSTED BY LEADING COMPANIES
      </h2>

      {/* SLIDER */}
      <LogoSlider logos={logos} />

    </section>
  );
}