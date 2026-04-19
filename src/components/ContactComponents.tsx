"use client"

import { Phone, Mail, MapPin, Layout, ShieldCheck, Clock } from "lucide-react"
import { useQuote } from "@/context/QuoteContext"

export const ContactHero = () => (
  <section className="relative bg-[#0d1117] text-white overflow-hidden pb-16">
 
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f37021]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

    <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 md:px-10 lg:px-20 pt-12">
      <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-16 mb-10">
        {/* Content on Left */}
        <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left duration-1000 mt-14 md:mt-10">
          <h1 className="text-2xl md:text-5xl leading-[1.1] tracking-tight">
            Start Your Project With Us
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium max-w-xl">
            Have a plan in mind? Let's discuss your ideas and turn them into a well-crafted space with precision and care.
          </p>
        </div>

        {/* Hero Image on Right */}
        <div className="flex-1 w-full mt-4 md:mt-16 animate-in fade-in slide-in-from-right duration-1000 border-white border-2 md:rounded-[2rem] rounded-2xl">
          <div className="relative group">
            <div className="md:rounded-[2rem] rounded-2xl overflow-hidden border-4 border-[#0d1117] shadow-3xl transform group-hover:scale-[1.02] transition-transform duration-700 shadow-white">
              <img
                src="/contact_house.png"
                alt="Modern Architecture"
                className="w-full h-[300px] object-cover"
              /> 
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: Phone,
            title: "Call Us",
            info: "+91 9876543210",
            desc: "Speak directly with our team for quick assistance and project discussions."
          },
          {
            icon: Mail,
            title: "Email Us",
            info: "dineconstruction@gmail.com",
            desc: "Send your requirements and we'll get back with the best solutions."
          },
          {
            icon: MapPin,
            title: "Visit Us",
            info: "MM Complex Near Anna Nagar, Chennai",
            desc: "Step into our office and explore design ideas with our experts."
          }
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div  
              key={i} 
              className="group p-5 md:rounded-[2rem] rounded-2xl border border-gray-800 bg-[#0d1117] hover:border-[#f37021]/50 transition-all duration-500 flex flex-col items-center text-center space-y-4"
            >
              <h3 className="text-[#f37021] text-2xl font-black">{item.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed font-medium">
                {item.desc}
              </p>
              <div className="flex items-center gap-4">
                <Icon className="w-8 h-8 text-[#f37021] group-hover:scale-110 transition-transform" />
                <span className="text-base font-bold tracking-tight">{item.info}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export const ContactForm = () => {
  const { triggerSuccess } = useQuote()

  return (
    <section className="py-12 bg-white w-full">
      <div className="w-full md:px-10 px-4">
        <div className="text-center">
          <h2 className="md:text-4xl text-2xl font-black text-[#0d1117]">
            Get In <span className="text-[#f37021]">Touch</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto relative group"> 
          <div className="bg-[#fff8f1] md:rounded-[2rem] rounded-2xl md:p-12 p-4 lg:p-20 relative overflow-hidden">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 md:w-80 w-60 md:h-10 h-6 bg-white md:rounded-b-[2rem] rounded-b-2xl" />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 md:w-64 w-56 md:h-10 h-6 bg-white md:rounded-t-[2rem] rounded-t-2xl" />

            <form 
              className="relative z-10 space-y-6 mx-auto mt-4 md:mt-0"
              onSubmit={(e) => {
                e.preventDefault();
                triggerSuccess();
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="First Name*" 
                  required
                  className="w-full md:px-8 px-4 py-4 rounded-xl bg-white border border-[#f37021]/10 placeholder-gray-400 focus:border-[#f37021]/40 outline-none text-sm font-bold shadow-sm transition-all"
                />
                <input 
                  type="text" 
                  placeholder="Last Name*" 
                  required
                  className="w-full md:px-8 px-4 py-4 rounded-xl bg-white border border-[#f37021]/10 placeholder-gray-400 focus:border-[#f37021]/40 outline-none text-sm font-bold shadow-sm transition-all"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="email" 
                  placeholder="Email*" 
                  required
                  className="w-full md:px-8 px-4 py-4 rounded-xl bg-white border border-[#f37021]/10 placeholder-gray-400 focus:border-[#f37021]/40 outline-none text-sm font-bold shadow-sm transition-all"
                />
                <input 
                  type="tel" 
                  placeholder="Phone number" 
                  className="w-full md:px-8 px-4 py-4 rounded-xl bg-white border border-[#f37021]/10 placeholder-gray-400 focus:border-[#f37021]/40 outline-none text-sm font-bold shadow-sm transition-all"
                />
              </div>
              <textarea 
                placeholder="Write your message" 
                rows={4}
                className="w-full md:px-8 px-4 py-4 rounded-xl bg-white border border-[#f37021]/10 placeholder-gray-400 focus:border-[#f37021]/40 outline-none text-sm font-bold shadow-sm resize-none transition-all"
              />
              
              <div className="text-center pt-2 mb-4 md:mb-0">
                <button 
                  type="submit"
                  className="md:px-12 px-4 py-2 md:py-4 bg-white border-2 border-[#f37021] rounded-2xl text-[#0d1117] font-black uppercase tracking-widest hover:bg-[#f37021] hover:text-white transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-[#f37021]/5"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export const WhyChooseUs = () => {
  const { openModal } = useQuote()

  return (
    <section className="md:py-10 py-4 bg-white md:mx-20 mx-2">
      <div className="max-w-[1536px] mx-auto md:px-10 px-4">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between md:gap-12 gap-4 mb-12">
          <h2 className="md:text-4xl text-2xl font-black text-[#0d1117]">Why Choose Us</h2>
          <div className="flex flex-wrap items-center justify-center md:gap-10 gap-4">
            <div className="flex items-center gap-3">
              <Layout className="w-6 h-6 text-[#f37021]" />
              <span className="text-lg font-bold text-gray-800">Smart Planning</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#f37021]" />
              <span className="text-lg font-bold text-gray-800">Quality Materials</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#f37021]" />
              <span className="text-lg font-bold text-gray-800">On-Time Delivery</span>
            </div>
          </div>
        </div>

        {/* Content Box */}
        <div className="border border-gray-200 md:rounded-[2rem] rounded-2xl p-4 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-32">
            {/* Map Image Section */}
            <div className="">
              <div className="md:rounded-[2rem] rounded-2xl overflow-hidden border border-gray-100">
                <img 
                  src="/map_mockup.png" 
                  alt="Our Location" 
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div> 
            </div>

            {/* Text Content */}
            <div className="space-y-8 ">
              <div className="space-y-2">
                <h3 className="md:text-4xl text-2xl text-[#0d1117] leading-tight">
                  Let's Build Something
                </h3>
                <h3 className="md:text-4xl text-2xl text-[#f37021] leading-tight">
                  Get Together
                </h3>
                <p className="md:text-xl text-base text-gray-600 font-bold max-w-lg leading-relaxed">
                  From concept to completion, we're here to make your version a reality.
                </p>
              </div>
              <button 
                onClick={openModal}
                className="px-10 py-4 rounded-2xl border-2 border-[#f37021] text-[#0d1117] font-black text-lg hover:bg-[#f37021] hover:text-white transition-all shadow-lg active:scale-95"
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
