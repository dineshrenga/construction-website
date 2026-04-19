"use client"

import { X, CheckCircle2 } from "lucide-react"
import { useQuote } from "@/context/QuoteContext"

export default function GlobalQuote() {
  const { isModalOpen, closeModal, showToast, hideToast, triggerSuccess } = useQuote()

  return (
    <>
      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[#0b0f15]/80 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={closeModal}
          />
          
          {/* Modal Card */}
          <div className="relative bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
            >
              <X className="w-6 h-6 text-[#0d1117]" />
            </button>

            <div className="p-8 md:p-12">
              <div className="mb-8 text-center md:text-left">
                <h2 className="text-3xl font-black text-[#0d1117]">Get a <span className="text-[#f37021]">Free Quote</span></h2>
                <p className="text-gray-500 font-medium mt-2">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <form 
                className="space-y-4" 
                onSubmit={(e) => { 
                  e.preventDefault(); 
                  closeModal(); 
                  triggerSuccess();
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Full Name*" 
                    required
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#f37021]/30 outline-none text-sm font-bold transition-all"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number*" 
                    required
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#f37021]/30 outline-none text-sm font-bold transition-all"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#f37021]/30 outline-none text-sm font-bold transition-all"
                />
                <textarea 
                  placeholder="Tell us about your project" 
                  rows={3}
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#f37021]/30 outline-none text-sm font-bold resize-none transition-all"
                />
                <button 
                  type="submit"
                  className="w-full py-4 bg-[#f37021] text-white rounded-2xl font-black uppercase tracking-widest hover:bg-[#d95f1a] transition-all shadow-lg shadow-[#f37021]/20 mt-2"
                >
                  Request Quote Now
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Success Toast */}
      {showToast && (
        <div className="fixed top-12 right-6 md:right-12 z-[110] animate-in slide-in-from-top-6 fade-in duration-500">
          <div className="bg-white px-6 py-4 rounded-[1.5rem] shadow-[0_25px_50px_-12px_rgba(243,112,33,0.2)] border-l-[6px] border-[#f37021] flex items-center gap-5 min-w-[320px]">
            <div className="w-12 h-12 rounded-full bg-[#f37021]/10 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-7 h-7 text-[#f37021]" />
            </div>
            <div className="flex-grow flex flex-col justify-center">
              <p className="font-black text-[#0d1117] text-base uppercase tracking-wider leading-none">Success!</p>
              <p className="text-sm text-gray-500 font-bold mt-1">Request sent successfully.</p>
            </div>
            <button 
              onClick={hideToast}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
