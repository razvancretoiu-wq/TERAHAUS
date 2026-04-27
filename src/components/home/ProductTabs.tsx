"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { products } from "@/data/products"

const tabs = [
  { key: "riflaje", label: "Riflaje" },
  { key: "deck", label: "Deck" },
  { key: "fatade", label: "Fațade" },
  { key: "accesorii", label: "Accesorii" },
] as const

type TabKey = (typeof tabs)[number]["key"]

export default function ProductTabs() {
  const [active, setActive] = useState<TabKey>("riflaje")

  const filtered = useMemo(() => {
    return products.filter((p) => p.category === active).slice(0, 8)
  }, [active])

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-sm text-gray-500">Colecții</p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Produse recomandate
            </h2>
          </div>

          <Link href="/produse" className="text-sm underline underline-offset-4">
            Vezi toate produsele
          </Link>
        </div>

        <div className="mt-8 flex gap-2 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-5 py-2 rounded-full text-sm border transition ${
                active === t.key
                  ? "bg-black text-white border-black"
                  : "bg-white border-gray-300 hover:bg-gray-50"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              href={`/produse/${p.slug}`}
              className="group block"
            >
              <div className="bg-white transition-all duration-500 hover:-translate-y-1">
                <div className="relative h-[320px] rounded-2xl bg-gray-50 flex items-center justify-center overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-contain p-5 transition-transform duration-700 group-hover:scale-105"
                  />

                  {p.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs text-white">
                      {p.badge}
                    </span>
                  )}
                </div>

                <div className="pt-4">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-gray-400">
                    {p.category}
                  </p>

                  <h3 className="mt-2 text-base font-semibold leading-snug text-black">
                    {p.title}
                  </h3>

                  <p className="mt-3 inline-block text-xs underline underline-offset-4">
                    Vezi detalii
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}