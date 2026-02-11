"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm py-3" : "bg-white py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold tracking-wide">
          TERAHAUS
        </Link>

        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          <Link href="/produse">Produse</Link>
          <Link href="/proiecte">Proiecte</Link>
          <Link href="/despre">Despre</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <a
          href="https://wa.me/407272608654"
          className="bg-black text-white px-5 py-2 text-sm uppercase tracking-wider"
        >
          WhatsApp
        </a>
      </div>
    </header>
  )
}
