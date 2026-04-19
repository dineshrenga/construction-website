"use client"

import { useState } from "react"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useQuote } from "@/context/QuoteContext"

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="relative w-8 h-8">
      <div className="absolute inset-0 rounded-full border-4 border-white opacity-20" />
      <div className="absolute inset-1 rounded-full border-4 border-[#f37021]" />
    </div>
    <span className="text-2xl font-black tracking-tight text-white italic jagsan-logo-text flex">
      <span className="text-[#f37021]">D</span>
      <span className="text-white">ine</span>
      <span className="text-[#f37021]">C</span>
      <span className="text-white">onstruction</span>
    </span>
  </div>
)

export default function Footer() {
  const { openModal } = useQuote()

  return (
    <footer className="bg-[#0b0f15] text-white pt-20 pb-10">
      <div className="max-w-[1536px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Logo and Mission */}
          <div className="lg:col-span-4 space-y-6">
            <Logo />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Building timeless spaces with precision, quality, and trust.
              We transform ideas into strong, lasting structures.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-[#f37021] font-bold text-xl leading-none">150+</p>
                  <p className="text-[10px] text-gray-500 uppercase">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-[#f37021] font-bold text-xl leading-none">10+</p>
                  <p className="text-[10px] text-gray-500 uppercase">Years</p>
                </div>
                <div className="text-center">
                  <p className="text-[#f37021] font-bold text-xl leading-none">100%</p>
                  <p className="text-[10px] text-gray-500 uppercase">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-bold border-b border-[#f37021] w-fit mb-6 pb-2">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-[#f37021] transition-colors">Home</Link></li>
              <li><Link href="/design-packages" className="hover:text-[#f37021] transition-colors">Design packages</Link></li>
              <li><Link href="/interior" className="hover:text-[#f37021] transition-colors">Interior</Link></li>
              <li><Link href="/furniture" className="hover:text-[#f37021] transition-colors">Furniture</Link></li>
              <li><Link href="/contact" className="hover:text-[#f37021] transition-colors">Contact us</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-bold border-b border-[#f37021] w-fit mb-6 pb-2">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/interior" className="hover:text-[#f37021] transition-colors">Residential</Link></li>
              <li><Link href="/interior" className="hover:text-[#f37021] transition-colors">Commercial</Link></li>
              <li><Link href="/interior" className="hover:text-[#f37021] transition-colors">Interior Design</Link></li>
              <li><Link href="/furniture" className="hover:text-[#f37021] transition-colors">Renovation</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-[#161b22] p-8 rounded-[2rem] border border-white/5 space-y-6">
              <h4 className="text-xl font-bold">Let's Build Together</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#f37021] shrink-0" />
                  <span>Chennai, Tamil Nadu</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#f37021] shrink-0" />
                  <span>Call Now: +91 9876543210</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#f37021] shrink-0" />
                  <span>dineconstruction@gmail.com</span>
                </li>
              </ul>
              <button 
                onClick={openModal}
                className="w-full py-3 rounded-lg border border-[#f37021] text-[#f37021] font-bold hover:bg-[#f37021] hover:text-white transition-all"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> dineConstruction. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <Link key={i} href="#" className="p-2 rounded-full border border-white/10 hover:bg-[#f37021] hover:text-white transition-all text-gray-500">
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}