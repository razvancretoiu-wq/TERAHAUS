"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 20)
    })
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm py-3" : "bg-white py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold tracking-wide">
          TERAHAUS
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          <Link href="#">Produse</Link>
          <Link href="#">Proiecte</Link>
          <Link href="#">Despre</Link>
          <Link href="#">Contact</Link>
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/40700000000"
          className="bg-black text-white px-5 py-2 text-sm uppercase tracking-wider"
        >
          WhatsApp
        </a>
      </div>
    </header>
  )
}
