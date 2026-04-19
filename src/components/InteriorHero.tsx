"use client"

import { useState, useEffect } from "react"
import { Check } from "lucide-react"
import { useQuote } from "@/context/QuoteContext"

export default function InteriorHero() {
  const { openModal } = useQuote()

  return (
    <section className="relative min-h-[calc(100vh-80px)] bg-white overflow-hidden flex flex-col pb-4 md:pb-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 z-30 rounded-b-[3.5rem] hidden lg:block" />

      <div className="relative mx-1 md:mx-6 mt-5 flex-grow hero-cutout-container bg-[#0b0f15] overflow-hidden flex flex-col justify-center">

        <div className="relative z-20 w-full max-w-[1536px] mx-auto px-4 md:px-10 lg:px-20 py-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Main Image on Left */}
          <div className="flex-1 w-full animate-in fade-in slide-in-from-left duration-1000 mt-10">
            <div className="relative rounded-[3rem] overflow-hidden border-2 border-white/5 aspect-[4/3]">
              <img
                src="/interior_hero.png"
                alt="Interior Designers working on blueprints"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content on Right */}
          <div className="flex-1 text-white animate-in fade-in slide-in-from-right duration-1000 mt-1 md:mt-10">
            <div className="space-y-8 max-w-xl">
              <div className="space-y-4">
                <h1 className="text-2xl md:text-4xl font-medium">
                  High-End Interior <br />
                  <span className="text-[#f37021]">Design & Architecture</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Transform your space into a perfect blend of elegance and functionality. We create interiors that reflect your lifestyle and vision.
                </p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-4 group">
                  <div className="flex items-center justify-center w-6 h-6 rounded-md bg-[#f37021]/20 border border-[#f37021]/30">
                    <Check className="w-4 h-4 text-[#f37021]" />
                  </div>
                  <span className="text-lg font-bold text-gray-200">Customized space planning</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="flex items-center justify-center w-6 h-6 rounded-md bg-[#f37021]/20 border border-[#f37021]/30">
                    <Check className="w-4 h-4 text-[#f37021]" />
                  </div>
                  <span className="text-lg font-bold text-gray-200">Modern & timeless design solutions</span>
                </li>
              </ul>

              <button 
                onClick={openModal}
                className="px-10 py-4 rounded-2xl border-2 border-[#f37021] text-[#f37021] font-black text-xl hover:bg-[#f37021] hover:text-white transition-all shadow-2xl shadow-[#f37021]/10"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
