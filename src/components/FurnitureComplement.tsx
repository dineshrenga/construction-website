"use client"

export default function FurnitureComplement() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1536px] mx-auto px-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Side Content */}
          <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <h2 className="text-5xl font-black text-[#0d1117] leading-tight tracking-tighter">
              Furniture That Complements <br />
              <span className="text-[#f37021]">Your Construction</span>
            </h2>
            <p className="text-gray-600 text-xl font-bold leading-relaxed max-w-xl">
              We create spaces that are thoughtfully finished with furniture designed to fit your lifestyle.
              Integrating design from the foundation ensures a seamless transition between architecture and living.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="flex-1 w-full animate-in fade-in slide-in-from-right duration-1000">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100/50 aspect-video">
              <img
                src="/service_residential_house_1773034900322.png"
                alt="High-end construction with furniture"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#f37021]/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
