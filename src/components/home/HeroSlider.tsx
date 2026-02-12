"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function HeroSlider() {
  return (
    <section className="relative h-[85vh] flex items-center bg-black text-white">
      <Image
        src="/hero-terahaus.jpg"
        alt="TERAHAUS WPC"
        fill
        className="object-cover opacity-60"
        priority
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-left md:text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="heading-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight"
        >
          Finisaje premium <br className="hidden sm:block" />
  pentru spații care arată impecabil

        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl leading-relaxed"
        >
          Riflaje, deck, fațade și soluții complete pentru interior și exterior.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="flex gap-3 flex-wrap"
        >
          <Link
            href="/produse"
            className="bg-[#C8732D] hover:bg-[#B96524] transition text-white px-7 py-3 rounded-full text-sm uppercase tracking-wider shadow-sm"
          >
            Vezi produsele
          </Link>

          <a
            href="https://wa.me/407272608654?text=Bun%C4%83!%20A%C8%99%20dori%20o%20ofert%C4%83%20pentru%20produse%20WPC."
            className="bg-white/10 hover:bg-white/15 transition text-white px-7 py-3 rounded-full text-sm uppercase tracking-wider border border-white/20"
          >
            Cere ofertă
          </a>
        </motion.div>
      </div>
    </section>
  )
}
