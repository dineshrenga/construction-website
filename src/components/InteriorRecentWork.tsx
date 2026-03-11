"use client"

import { Check } from "lucide-react"

export default function InteriorRecentWork() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1536px] mx-auto px-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left Column - Text Content */}
          <div className="flex-1 space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl font-black text-[#0d1117] leading-none tracking-tighter">
                Our Recent <span className="text-[#f37021]">Work</span>
              </h2>
              <p className="text-gray-600 text-lg font-bold leading-relaxed max-w-xl">
                This project showcases a refined modern living space designed with clean lines, functional layouts, and a balanced color palette. Every detail is crafted to create a calm and elegant atmosphere.
              </p>
              <button className="px-8 py-3 rounded-xl border-2 border-[#f37021] text-[#f37021] font-black uppercase tracking-widest text-sm hover:bg-[#f37021] hover:text-white transition-all">
                View More
              </button>
            </div>

            {/* Highlights Dark Box */}
            <div className="bg-[#0b0f15] rounded-[2.5rem] p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10 space-y-8">
                <h3 className="text-3xl font-black tracking-tight">Project Highlights</h3>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {["3D Visualizations", "Custom Furniture", "Turnkey Delivery", "Lighting Design"].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 group/item">
                      <Check className="w-5 h-5 text-[#f37021] group-hover/item:scale-110 transition-transform" />
                      <span className="text-lg font-bold text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="px-8 py-4 rounded-2xl bg-[#fcdbb5] text-[#0d1117] font-black text-lg hover:bg-[#f37021] hover:text-white transition-all shadow-xl shadow-[#f37021]/10">
                  Explore Our Collection
                </button>
              </div>

              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f37021]/10 rounded-full -mr-16 -mt-16 blur-3xl" />
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-6">
              {/* Modern Living Room (top left, slightly larger) */}
              <div className="col-span-1 space-y-6">
                <div className="group cursor-pointer">
                  <div className="aspect-square rounded-[2rem] overflow-hidden shadow-xl border border-gray-100">
                    <img src="/gallery_living_room.png" alt="Modern Living Room" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <p className="text-center mt-4 font-bold text-[#0d1117]">Modern Living Room</p>
                </div>

                <div className="group cursor-pointer">
                  <div className="aspect-square rounded-[2rem] overflow-hidden shadow-xl border border-gray-100">
                    <img src="/gallery_bedroom.png" alt="Luxury Bedroom" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <p className="text-center mt-4 font-bold text-[#0d1117]">Luxury Bedroom</p>
                </div>
              </div>

              {/* Contemporary Kitchen & Elegant Office (offset grid) */}
              <div className="col-span-1 space-y-6 pt-12">
                <div className="group cursor-pointer">
                  <div className="aspect-square rounded-[2rem] overflow-hidden shadow-xl border border-gray-100">
                    <img src="/gallery_kitchen.png" alt="Contemporary Kitchen" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <p className="text-center mt-4 font-bold text-[#0d1117]">Contemporary Kitchen</p>
                </div>

                <div className="group cursor-pointer">
                  <div className="aspect-square rounded-[2rem] overflow-hidden shadow-xl border border-gray-100">
                    <img src="/gallery_office.png" alt="Elegant Office" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <p className="text-center mt-4 font-bold text-[#0d1117]">Elegant Office</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
