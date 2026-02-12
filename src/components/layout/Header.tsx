"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Închide meniul la schimbarea paginii
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Blochează scroll când meniul e deschis
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [open])

  return (
    <>
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

          {/* Desktop Menu */}
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

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          ></div>

          {/* Slide Menu */}
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl p-8 flex flex-col">
            
            <button
              className="self-end text-xl mb-8"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <nav className="flex flex-col gap-6 text-lg uppercase tracking-wider">
              <Link href="/produse">Produse</Link>
              <Link href="/proiecte">Proiecte</Link>
              <Link href="/despre">Despre</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
