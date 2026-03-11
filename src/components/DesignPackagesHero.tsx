"use client"

import { Check } from "lucide-react"

const packages = [
  {
    title: "Basic",
    subtitle: "Simple Start",
    price: "₹1,499/sqft",
    features: ["Structure", "Basic Finish", "Standard Materials"],
    color: "#f37021",
  },
  {
    title: "Standard",
    subtitle: "Popular Choice",
    price: "₹1,899/sqft",
    features: ["Structure", "Superior Finish", "Quality Materials"],
    color: "#f37021",
  },
  {
    title: "Premium",
    subtitle: "Smart Living",
    price: "₹2,299/sqft",
    features: ["Premium Finish", "Modular Kitchen", "Better Design"],
    color: "#f37021",
  },
  {
    title: "Ultra Luxury",
    subtitle: "Ultimate Experience",
    price: "₹2,999/sqft",
    features: ["Luxury Finish", "Smart Home", "Imported Materials"],
    color: "#f37021",
  },
]

export default function DesignPackagesHero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] bg-white overflow-hidden flex flex-col">
      {/* The Header Pill Space */}
 
      <div className="relative mx-6 mt-5 flex-grow hero-cutout-container bg-[#0d1117] overflow-hidden flex flex-col justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/design_packages_hero_bg.png"
            alt="Architectural Background"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] via-transparent to-[#0d1117]" />
        </div>

        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-10 py-20">
          <div className="text-center mb-12 space-y-4 animate-in fade-in slide-in-from-top duration-1000">
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none mb-4">
              Our Home Construction <br />
              <span className="text-[#f37021]">Packages</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg font-bold tracking-tight">
              Tailored building plans to suit every lifestyle and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className="glass-form rounded-[2.5rem] p-8 flex flex-col items-center text-center group hover:scale-[1.02] transition-all duration-500 animate-in fade-in slide-in-from-bottom duration-1000"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <h3 className="text-[#f37021] text-2xl font-black mb-1">{pkg.title}</h3>
                <p className="text-gray-400 font-bold mb-6 italic text-sm">{pkg.subtitle}</p>

                <div className="w-full bg-[#f37021] py-2.5 rounded-xl mb-6 shadow-xl shadow-[#f37021]/20">
                  <span className="text-white text-xl font-black">{pkg.price}</span>
                </div>

                <ul className="space-y-3 mb-8 w-full">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-white/90 font-bold text-[12px]">
                      <Check className="w-4 h-4 text-[#f37021] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-auto px-6 py-2 rounded-xl border-2 border-[#f37021] text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#f37021] transition-all">
                  View More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots - Matching HeroSection style */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
          <div className="w-14 h-2.5 rounded-full bg-[#f37021] shadow-lg shadow-[#f37021]/20" />
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full bg-white/20" />
          ))}
        </div>
      </div>
    </section>
  )
}
