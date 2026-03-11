export default function AboutSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0d1117]">
            About <span className="text-[#f37021]">Us</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl skew-y-3 lg:skew-y-6 hover:skew-y-0 transition-transform duration-700">
              <img
                src="/about_orange_building_1773034247480.png"
                alt="Architectural Excellence"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            {/* Decorative background shape */}
            <div className="absolute -inset-4 bg-[#f37021]/10 rounded-[2.5rem] -z-10 translate-x-4 translate-y-4" />
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-extrabold text-[#0d1117] leading-tight">
                Building Excellence. Delivering Trust. <br />
                Your Dream Project Starts <span className="text-[#f37021]">With Us.</span>
              </h3>
            </div>

            {/* Stats Block */}
            <div className="bg-[#fff9f5] p-8 rounded-[2rem] border border-[#f37021]/10 shadow-sm relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                <div className="text-center md:border-r border-[#f37021]/20 px-4">
                  <p className="text-4xl font-black text-[#f37021] mb-1">150+</p>
                  <p className="text-xs font-bold text-[#0d1117] uppercase tracking-wider">Projects Completed</p>
                </div>
                <div className="text-center md:border-r border-[#f37021]/20 px-4">
                  <p className="text-4xl font-black text-[#f37021] mb-1">10+Year</p>
                  <p className="text-xs font-bold text-[#0d1117] uppercase tracking-wider">Industry Experience</p>
                </div>
                <div className="text-center px-4">
                  <p className="text-4xl font-black text-[#f37021] mb-1">100%</p>
                  <p className="text-xs font-bold text-[#0d1117] uppercase tracking-wider">Client Satisfaction</p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              We specialize in building durable, modern, and efficient spaces tailored to your needs.
              Our commitment to quality, transparency, and timely delivery makes us the preferred
              construction partner for residential and commercial projects.
            </p>

            <button className="px-8 py-3 rounded-lg border border-[#f37021] text-[#f37021] font-bold hover:bg-[#f37021] hover:text-white transition-all">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
