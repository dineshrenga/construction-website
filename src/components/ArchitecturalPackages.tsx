"use client"

import { Check } from "lucide-react"

const packages = [
  {
    tier: "BASIC",
    title: "Basic",
    description: "Ideal for small residential projects",
    features: ["Floor Plan", "Elevation Design", "Furniture Layout", "Exterior Drawings"],
  },
  {
    tier: "STANDARD",
    title: "Standard",
    description: "Balanced package for most design",
    features: ["Floor Plan", "Working Drawings", "Furniture Layout", "Exterior Drawings"],
  },
  {
    tier: "PREMIUM",
    title: "Premium",
    description: "Ideal for large, detailed project",
    features: ["3D Floor Plans", "Interior Design", "Structural Analysis", "Material Selection"],
  },
  {
    tier: "ULTRA",
    title: "Ultra",
    description: "For high-end custom projects",
    features: ["Structural Cals", "4K 3D Walkthrough", "Interior Walkthrough", "Detailed Estimate"],
  },
]

export default function ArchitecturalPackages() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1536px] mx-auto px-10">
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-4xl md:text-5xl font-black text-[#0d1117]">
            Architectural Design <span className="text-[#f37021]">Packages</span>
          </h2>
          <p className="text-gray-500 font-bold">
            Designed with precision, but with expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="bg-[#fff9f5] rounded-3xl overflow-hidden shadow-sm border border-orange-100 flex flex-col group hover:shadow-xl transition-all duration-500"
            >
              {/* Top Orange Bar */}
              <div className="h-4 bg-[#F98800]" />
                <div className="bg-[#FFECD6] px-6 py-4 text-center">
                  <p className="text-[#F98800] text-xs font-black tracking-[0.2em]">{pkg.tier}</p>
                </div>

              <div className="p-4 flex flex-col items-center flex-grow">

                <h3 className="text-[#0d1117] text-3xl font-black mb-2">{pkg.title}</h3>
                <p className="text-gray-700 text-xs font-bold text-center mb-4 max-w-[150px] leading-relaxed">
                  {pkg.description}
                </p>

                {/* Features Container */}
                <div className="w-full bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-50 mb-4">
                  <ul className="space-y-4">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-[#f37021] shrink-0" />
                        <span className="text-[#0d1117] text-xs font-black">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-auto px-10 py-2.5 rounded-xl border border-[#f37021] text-[#f37021] text-xs font-black hover:bg-[#f37021] hover:text-white transition-all">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <div className="space-y-1">
            <p className="text-gray-500 font-bold text-sm">Not sure which package fits you?</p>
            <p className="text-gray-400 text-xs font-medium italic">Site Supervision & Construction Support not included</p>
          </div>

          <button className="px-12 py-3 rounded-xl border border-[#f37021] text-[#f37021] font-black uppercase tracking-widest text-sm hover:bg-[#f37021] hover:text-white transition-all">
            Get a Free Quote
          </button>
        </div>
      </div>
    </section>
  )
}
