// src/sections/Events.jsx

export default function Events() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#f8fafc]">

      <h2 className="text-2xl font-bold text-center">Events</h2>

      <div className="mt-10 grid md:grid-cols-2 gap-6">

        <div className="p-6 bg-white rounded-xl shadow-soft">
          <h3 className="font-semibold">Intercollegiate Soccer Tournament</h3>
          <p className="text-sm text-gray-500 mt-2">March 28</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-soft">
          <h3 className="font-semibold">Spring Cultural Festival</h3>
          <p className="text-sm text-gray-500 mt-2">April 10</p>
        </div>

      </div>

    </section>
  );
}