export default function EventBanner() {
  return (
    <section className="bg-[#f8fafc] pb-20">

      {/* ✅ MATCHED CONTAINER */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">

        <div className="
          relative 
          bg-white 
          rounded-2xl 
          shadow-md 
          p-6 md:p-8 
          flex flex-col md:flex-row 
          items-center justify-between
        ">

          {/* LEFT BLUE STRIP */}
          <div className="absolute left-0 top-0 h-full w-[6px] bg-blue-600 rounded-l-2xl"></div>

          {/* LEFT CONTENT */}
          <div className="flex items-center gap-6">

            {/* DATE BOX */}
            <div className="
              bg-blue-600 text-white rounded-xl 
              px-5 py-6 text-center min-w-[90px]
            ">
              <p className="text-xs uppercase">May</p>
              <h3 className="text-3xl font-bold leading-none mt-1">8</h3>
            </div>

            {/* TEXT */}
            <div>

              <span className="
                text-blue-600 text-xs font-semibold uppercase 
                bg-blue-50 px-3 py-1 rounded-full
              ">
                Upcoming Event
              </span>

              <h3 className="text-lg md:text-xl font-semibold text-[#0f172a] mt-2">
                Company Inauguration
              </h3>

              <p className="text-gray-500 text-sm mt-1 max-w-xl">
                Discover state-of-the-art facilities, connect with distinguished faculty,
                and explore scholarship opportunities available to incoming students.
              </p>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="mt-6 md:mt-0 flex flex-col items-end">

            <button className="
              bg-blue-600 text-white px-6 py-3 rounded-lg 
              font-medium hover:bg-blue-700 transition
            ">
              Reserve Your Seat
            </button>

            <span className="text-gray-400 text-xs mt-2 flex items-center gap-1">
              ⏱ Only 3 weeks away
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}