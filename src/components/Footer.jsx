export default function Footer() {
  return (
    <footer className="bg-[#0f2b5b] text-white px-10 py-12 mt-20">

      <h2 className="text-2xl font-bold">UniPulse</h2>

      <div className="grid md:grid-cols-4 gap-6 mt-6">
        <div>
          <p className="text-sm opacity-80">
            Cras fermentum odio eu feugiat lide par naso terra.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Useful Links</h4>
          <p>Home</p>
          <p>About</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <p>Web Design</p>
          <p>Marketing</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p>New York, USA</p>
          <p>info@example.com</p>
        </div>
      </div>

      <p className="text-center mt-10 text-sm opacity-70">
        © UniPulse All Rights Reserved
      </p>
    </footer>
  );
}