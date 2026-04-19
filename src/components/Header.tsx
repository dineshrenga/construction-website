"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MapPin, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const Logo = () => (
  <div className="flex items-center gap-2 md:gap-3">
    <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full border-2 border-[#f37021]/30 animate-pulse" />
      <div className="absolute inset-1 rounded-full border-[3px] border-[#f37021]" />
      <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white" />
    </div>
    <span className="text-xl md:text-3xl font-black italic tracking-tighter jagsan-logo-text flex">
      <span className="text-[#f37021]">D</span> 
      <span className="text-white">ine</span>
      <span className="text-[#f37021]">C</span> 
      <span className="text-white">onstruction</span>
    </span>
  </div>
)

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Design packages", href: "/design-packages" },
    { name: "Interior", href: "/interior" },
    { name: "Furniture", href: "/furniture" },
  ];

  return (
    <header className="absolute top-0 w-full z-50">
      <div className="h-20 md:h-28">
        <div className="max-w-[1536px] mx-auto px-4 md:px-10 flex items-center justify-between h-full">

          {/* Logo on Left Wing */}
          <Link href="/" className="hover:opacity-90 transition-opacity z-50">
            <Logo />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>

          {/* Central Nav Tab - Laptop Only */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 h-20 px-16 rounded-b-[3rem] bg-white items-center justify-center min-w-[600px]">
            <nav className="flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`jagsan-nav-item ${pathname === link.href ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Side Actions - Laptop Only */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-2 text-[#f37021]">
              <MapPin className="w-5 h-5 fill-current opacity-80" />
              <span className="text-sm font-black tracking-widest uppercase">Chennai</span>
            </div>
            <Link
              href="/contact"
              className="px-8 py-2.5 rounded-xl border-2 border-[#f37021] text-white text-sm font-black uppercase tracking-[0.1em] hover:bg-[#f37021] hover:border-[#f37021] hover:text-white transition-all"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile Menu Overlay */}
          <div className={`fixed inset-0 bg-[#0d1117] transition-transform duration-500 ease-in-out md:hidden flex flex-col pt-32 px-10 gap-8 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-2xl font-black uppercase tracking-widest ${pathname === link.href ? 'text-[#f37021]' : 'text-white'}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="h-px bg-white/10 w-full" />

            <div className="flex flex-col gap-6 mt-4">
              <div className="flex items-center gap-3 text-[#f37021]">
                <MapPin className="w-6 h-6 fill-current" />
                <span className="text-lg font-black tracking-widest uppercase">Chennai</span>
              </div>
              <Link
                href="/contact"
                className="w-full py-4 rounded-2xl bg-[#f37021] text-white text-center font-black uppercase tracking-widest shadow-xl shadow-[#f37021]/30"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

