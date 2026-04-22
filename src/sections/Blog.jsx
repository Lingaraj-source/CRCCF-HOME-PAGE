// Blog Section
// Displays latest articles/news

export default function Blog() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16">

      <h2 className="text-3xl font-bold text-center mb-10">
        Latest News & Articles
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {[1,2,3].map((i) => (
          <div key={i} className="bg-white rounded-xl shadow-soft overflow-hidden">
            
            <img
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c"
              className="h-40 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold">
                University Achieves New Milestone
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}