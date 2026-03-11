import { ChevronDown, Phone } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] bg-white overflow-hidden flex flex-col">
       <div className="relative mx-6 mt-5 flex-grow hero-cutout-container bg-[#0d1117] overflow-hidden flex flex-col justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10" />
          <img
            src="/hero_luxury_home_1773034232851.png"
            alt="Modern Luxury Home"
            className="w-full h-full object-cover scale-105"
          />
        </div>
 
        <div className="relative z-20 w-full max-w-[1536px] mx-auto px-10 lg:px-20 py-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
           <div className="max-w-4xl text-white flex-1 animate-in fade-in slide-in-from-left duration-1000">
            <h1 className="text-7xl font-black leading-[0.85] mb-10 tracking-tighter">
              Building Your Vision <br />
              <span className="text-[#f37021]">Into Reality</span>
            </h1>

            {/* The Specific Box with Orange Left Border */}
            <div className="backdrop-blur-[2px] p-6 mb-5 max-w-xl">
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed font-bold tracking-tight">
                Trusted construction services delivering quality, durability, and on-time completion across every project.
              </p>
            </div>

            <button className="px-12 py-4 rounded-2xl border-2 border-[#f37021] bg-[#f37021]/10 text-white font-black text-xl hover:bg-[#f37021] transition-all shadow-2xl shadow-[#f37021]/20 group">
              Get a Free Quote
            </button>
          </div>

           <div className="w-full max-w-lg glass-form p-6 lg:p-8 rounded-[2rem] text-white shadow-2xl overflow-hidden relative animate-in fade-in slide-in-from-right duration-1000 mt-8">
            

            <div className="relative z-10 border-l-[10px] border-[#f37021] pl-8 mb-5">
              <h2 className="text-[#f37021] text-xl font-black uppercase tracking-[0.4em] mb-2">Request a Quote</h2>
              <p className="text-lg font-black text-white leading-tight">Let's Build Something Great Together</p>
            </div>

            <form className="relative z-10 space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-6 py-2 !bg-white/50 rounded-2xl border border-white/10 placeholder:text-gray-800 text-white focus:outline-none focus:border-[#f37021] transition-all text-lg"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-6 py-2 !bg-white/50 rounded-2xl border border-white/10 placeholder:text-gray-800 text-white focus:outline-none focus:border-[#f37021] transition-all text-lg"
              />
              <input
                type="email"
                placeholder="Email Address (optional)"
                className="w-full px-6 py-2 !bg-white/50 rounded-2xl border border-white/10 placeholder:text-gray-800 text-white focus:outline-none focus:border-[#f37021] transition-all text-lg"
              />
              <div className="relative">
                <select className="w-full px-6 py-2 !bg-white/50 rounded-2xl border border-white/10 text-gray-800 focus:outline-none focus:border-[#f37021] transition-all appearance-none cursor-pointer text-lg">
                  <option className="bg-[#0d1117]">Project type</option>
                  <option className="bg-[#0d1117]">Residential</option>
                  <option className="bg-[#0d1117]">Commercial</option>
                  <option className="bg-[#0d1117]">Renovation</option>
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-[#f37021] pointer-events-none" />
              </div>

              <button className="w-fit flex items-center justify-center mx-auto px-2 py-2 rounded-2xl border-2 border-[#f37021] text-white font-black uppercase tracking-[0.2em] shadow-xl shadow-[#f37021]/30 hover:scale-[1.02] active:scale-95 transition-all text-base mt-2">
                Get Free Estimate
              </button>
            </form>

            <div className="relative z-10 mt-5 space-y-4 flex flex-col items-center justify-center">
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
