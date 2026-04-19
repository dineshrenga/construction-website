"use client"

import { ArrowRight } from "lucide-react"

export default function AboutUsSection() {
  const stats = [
    { label: "Projects Completed", value: "150+" },
    { label: "Industry Experience", value: "10+ Year" },
    { label: "Client Satisfaction", value: "100%" },
  ]

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-2 md:px-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            About <span className="text-[#f37021]">Us</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#f37021] mx-auto rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Side: Specialized Image with Angular Mask */}
          <div className="lg:w-1/3 relative">
            <div className="relative z-10 w-full aspect-[4/5] rounded-l-[2rem] overflow-hidden">
              <img
                src="./sectiontwo.png"
                alt="Architectural Excellence"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Background Decorative Frame */}
            <div className="absolute top-10 -left-10 w-full h-full border-[1.5rem] border-[#f37021]/5 rounded-[4rem] -z-10" />
          </div>

          {/* Right Side: Content and Stats */}
          <div className="lg:w-2/3 space-y-12 mt-10">
            <div className="space-y-6">
              <h3 className="text-xl md:text-4xl text-center font-black leading-tight text-[#0d1117]">
                Building Excellence. Delivering Trust. <br />
                <span className="text-[#0d1117]/60">Your Dream Project Starts</span> With Us.
              </h3>

              <div className="bg-[#FFF2E2] w-full px-2 md:px-20 py-10 rounded-r-[2rem]">
                <div className="grid grid-cols-3 gap-8 p-2 md:p-10 bg-white rounded-[1rem] md:rounded-[3rem] border border-[#f37021]/10">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center space-y-2">
                      <p className="text-xl md:text-5xl font-black text-[#f37021] tracking-tighter">{stat.value}</p>
                      <p className="text-[8px] md:text-xs font-black text-black/70 uppercase tracking-widest">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-sm md:text-xl text-gray-600 leading-relaxed font-medium mt-6">
                  We specialize in building durable, modern, and efficient spaces tailored to your needs.
                  Our commitment to quality, transparency, and timely delivery makes us the preferred
                  construction partner for residential and commercial projects.
                </p>
                <button className="group flex items-center gap-4 px-10 py-4 mt-6 border-2 border-[#f37021] text-[#f37021] font-black rounded-2xl hover:bg-[#f37021] hover:text-white transition-all duration-300 text-lg uppercase tracking-wider">
                  <span className="text-black">Start Your Project</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
