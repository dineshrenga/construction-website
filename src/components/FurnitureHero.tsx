"use client"

import { Check } from "lucide-react"

export default function FurnitureHero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] bg-white overflow-hidden flex flex-col pb-10">
      <div className="relative mx-6 mt-5 flex-grow hero-cutout-container overflow-hidden flex flex-col justify-center">
        {/* Background Texture/Image (Subtle) */}
        <div className="absolute inset-0 z-0 opacity-50">
          <img
            src="/fur.png"
            alt="Interior Context"
            className="w-full h-full"
          />
        </div>

        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-10 lg:px-20 py-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          {/* Main Furniture Piece on Left */}
          <div className="flex-1 w-full animate-in fade-in slide-in-from-left duration-1000 relative">
            <div className="relative z-10 hover:scale-105 transition-transform duration-700 pointer-events-none drop-shadow-2xl">
              <img
                src="/chair.png"
                alt="Luxury Designer Sofa"
                className="w-full h-auto object-contain -rotate-[10deg]"
              />
            </div>
          </div>

          {/* Content on Right */}
          <div className="flex-1 text-[#0d1117] animate-in fade-in slide-in-from-right duration-1000">
            <div className="space-y-8 max-w-xl">
              <div className="space-y-4">
                <h1 className="text-6xl font-black leading-[0.9] tracking-tighter">
                  Design Comfort for <br />
                  <span className="text-[#f37021]">Every Space</span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed font-bold tracking-tight">
                  Designed for durability, comfort and modern aesthetics. Quality craftsmanship for your dream home.
                </p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-4 group">
                  <div className="flex items-center justify-center w-6 h-6 rounded-md bg-[#f37021]/10 border border-[#f37021]/20">
                    <Check className="w-4 h-4 text-[#f37021]" />
                  </div>
                  <span className="text-lg font-bold text-gray-800">Customized planning</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="flex items-center justify-center w-6 h-6 rounded-md bg-[#f37021]/10 border border-[#f37021]/20">
                    <Check className="w-4 h-4 text-[#f37021]" />
                  </div>
                  <span className="text-lg font-bold text-gray-800">Modern & timeless design solutions</span>
                </li>
              </ul>

              <button className="px-10 py-4 rounded-2xl border-2 border-[#f37021] text-[#f37021] font-black text-xl hover:bg-[#f37021] hover:text-white transition-all shadow-2xl shadow-[#f37021]/10 active:scale-95">
                Get Custom Design
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
