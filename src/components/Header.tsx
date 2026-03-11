"use client"

import Link from "next/link"
import { MapPin } from "lucide-react"
import { usePathname } from "next/navigation"

const Logo = () => (
  <div className="flex items-center gap-3">
    <div className="relative w-10 h-10 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full border-2 border-[#f37021]/30 animate-pulse" />
      <div className="absolute inset-1 rounded-full border-[3px] border-[#f37021]" />
      <div className="w-2.5 h-2.5 rounded-full bg-white" />
    </div>
    <span className="text-3xl font-black italic tracking-tighter jagsan-logo-text flex">
      <span className="text-white">Dine</span> 
      <span className="text-[#f37021]">Construction</span>
    </span>
  </div>
)

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="absolute top-0 w-full z-50">
      <div className="h-28">
        <div className="max-w-[1536px] mx-auto px-10 flex items-center justify-between h-full">

          {/* Logo on Left Wing */}
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <Logo />
          </Link>

          {/* Central Nav Tab - This will "dip" into the hero */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-20 px-16 rounded-b-[3rem] bg-white flex items-center justify-center min-w-[600px]">
            <nav className="flex items-center gap-12">
              <Link
                href="/"
                className={`jagsan-nav-item ${pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
              <Link
                href="/design-packages"
                className={`jagsan-nav-item ${pathname === '/design-packages' ? 'active' : ''}`}
              >
                Design packages
              </Link>
              <Link
                href="/interior"
                className={`jagsan-nav-item ${pathname === '/interior' ? 'active' : ''}`}
              >
                Interior
              </Link>
              <Link
                href="/furniture"
                className={`jagsan-nav-item ${pathname === '/furniture' ? 'active' : ''}`}
              >
                Furniture
              </Link>
            </nav>
          </div>

          {/* Right Side Actions on Right Wing */}
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2 text-[#f37021]">
              <MapPin className="w-5 h-5 fill-current opacity-80" />
              <span className="text-sm font-black tracking-widest uppercase">Chennai</span>
            </div>
            <Link
              href="#"
              className="px-8 py-2.5 rounded-xl border-2 border-[#f37021] text-white text-sm font-black uppercase tracking-[0.1em] hover:bg-[#f37021] hover:border-[#f37021] hover:text-white transition-all"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
