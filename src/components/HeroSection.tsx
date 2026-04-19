"use client"
import { useState, useRef, useEffect } from "react"
import { ChevronDown, Phone } from "lucide-react"
import { useQuote } from "@/context/QuoteContext"

export default function HeroSection() {
  const { openModal, triggerSuccess } = useQuote()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedType, setSelectedType] = useState("Project type")
  const dropdownRef = useRef<HTMLDivElement>(null)

  const projectTypes = ["Residential", "Commercial", "Renovation"]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-80px)] bg-white overflow-hidden flex flex-col">
       <div className="relative mx-1 md:mx-6 mt-5 flex-grow hero-cutout-container bg-[#0d1117] overflow-hidden flex flex-col justify-center">
         <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10" />
          <img
            src="/hero_luxury_home_1773034232851.png"
            alt="Modern Luxury Home"
            className="w-full h-full object-cover scale-105"
          />
        </div>
 
        <div className="relative z-20 w-full max-w-[1536px] mx-auto px-2 md:px-10 lg:px-20 py-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
           <div className="w-full md:max-w-4xl text-white flex-1 animate-in fade-in slide-in-from-left duration-1000">
            <h1 className="text-2xl md:text-7xl font-black mb-10 tracking-tighter">
              Building Your Vision <br />
              <span className="">Into Reality</span>
            </h1>

            {/* The Specific Box with Orange Left Border */}
            <div className="backdrop-blur-[2px] mb-10 max-w-xl">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-200 font-bold tracking-tight">
                Trusted construction services delivering quality, durability, and on-time completion across every project.
              </p>
            </div>

            <button 
              onClick={openModal}
              className="px-6 md:px-12 py-2 md:py-4 rounded-2xl border-2 border-[#f37021] bg-[#f37021]/10 text-white font-black text-xl hover:bg-[#f37021] transition-all shadow-2xl shadow-[#f37021]/20 group"
            >
              Get a Free Quote
            </button>
           </div>

           <div className="w-full max-w-lg glass-form p-2 md:p-6 lg:p-8 rounded-[2rem] text-white shadow-2xl relative animate-in fade-in slide-in-from-right duration-1000 mt-8">
            

            <div className="relative z-10 pl-8 mb-5">
              <h2 className="text-[#f37021] text-xl font-black uppercase mb-2 tracking-[0.4rem] text-center">Request a Quote</h2>
              <p className="text-lg font-black text-white leading-tight text-center">Let's Build Something Great Together</p>
            </div>

            <form 
              className="relative z-10 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                triggerSuccess();
              }}
            >
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-6 py-2 !bg-white/50 rounded-xl border border-white/10 placeholder:text-gray-800 text-white focus:outline-none focus:border-[#f37021] transition-all text-lg"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-6 py-2 !bg-white/50 rounded-xl border border-white/10 placeholder:text-gray-800 text-white focus:outline-none focus:border-[#f37021] transition-all text-lg"
              />
              <input
                type="email"
                placeholder="Email Address (optional)"
                className="w-full px-6 py-2 !bg-white/50 rounded-xl border border-white/10 placeholder:text-gray-800 text-white focus:outline-none focus:border-[#f37021] transition-all text-lg"
              />
              <div className="relative" ref={dropdownRef}>
                <div 
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full px-6 py-2 !bg-white/50 rounded-xl border border-white/10 text-white focus:outline-none focus:border-[#f37021] transition-all cursor-pointer text-lg flex items-center justify-between"
                >
                  <span className={selectedType === "Project type" ? "text-gray-400" : "text-white"}>
                    {selectedType}
                  </span>
                  <ChevronDown className={`w-6 h-6 text-[#f37021] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </div>
                
                {isOpen && (
                  <div className="absolute z-[99999] w-full mt-2 bg-[#0d1117]/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                    {projectTypes.map((type) => (
                      <div
                        key={type}
                        onClick={() => {
                          setSelectedType(type)
                          setIsOpen(false)
                        }}
                        className="px-6 py-3 hover:bg-[#f37021] hover:text-white cursor-pointer transition-colors text-white font-medium"
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button 
                type="submit"
                className="w-fit flex items-center justify-center mx-auto px-2 py-2 rounded-2xl border-2 border-[#f37021] text-white font-black uppercase tracking-[0.2em] shadow-xl shadow-[#f37021]/30 hover:scale-[1.02] active:scale-95 transition-all text-base mt-2"
              >
                Get Free Estimate
              </button>
            </form>

            <div className="relative mt-5 space-y-4 flex flex-col items-center justify-center">
              <div className="flex items-center gap-4 text-[#f37021] font-black text-lg">
                <Phone className="w-6 h-6 fill-current" />
                <span className="text-center text-white">Call Now: +91 9876543210</span>
              </div>
              <p className="text-[10px] !text-white font-black uppercase tracking-[0.3em]">100% Free Consultation - No Obligation</p>
            </div>
          </div>
        </div>

        {/* Precise Carousel Dots */}
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
