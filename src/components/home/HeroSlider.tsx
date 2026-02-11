"use client"

import { motion } from "framer-motion"
import Image from "next/image"

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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-light mb-6"
        >
          Finisaje premium pentru
          <br /> spații care arată impecabil
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="heading-serif text-5xl md:text-6xl font-medium mb-6"
        >
          Riflaje, deck, fațade și soluții complete pentru interior/exterior.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="heading-serif text-5xl md:text-6xl font-medium mb-6"
        >
          Vezi Produsele
        </motion.button>
      </div>
    </section>
  )
}
