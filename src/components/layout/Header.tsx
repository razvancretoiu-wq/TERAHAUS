"use client"

import Image from "next/image"
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
        scrolled
          ? "bg-white/95 backdrop-blur shadow-sm py-3"
          : "bg-white/90 backdrop-blur py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-terahaus.png"
            alt="TERAHAUS"
            width={160}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider text-gray-800">
          <Link href="/produse" className="hover:text-black transition">
            Produse
          </Link>
          <Link href="/proiecte" className="hover:text-black transition">
            Proiecte
          </Link>
          <Link href="/despre" className="hover:text-black transition">
            Despre
          </Link>
          <Link href="/contact" className="hover:text-black transition">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/407272608654"
          className="bg-[#111111] hover:bg-black transition text-white px-5 py-2 text-sm uppercase tracking-wider"
        >
          WhatsApp
        </a>
      </div>
    </header>
  )
}
