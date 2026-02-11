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
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="text-sm text-gray-500">Colecții</p>
            <h2 className="text-3xl font-semibold">Produse recomandate</h2>
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
              className={`px-4 py-2 rounded-full text-sm border transition ${
                active === t.key ? "bg-black text-white border-black" : "bg-white hover:bg-gray-50"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              href={`/produse/${p.slug}`}
              className="group rounded-2xl border bg-white overflow-hidden"
            >
              <div className="relative h-56 bg-gray-50">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
                {p.badge && (
                  <span className="absolute left-3 top-3 text-xs bg-black text-white px-2 py-1 rounded-full">
                    {p.badge}
                  </span>
                )}
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-500 capitalize">{p.category}</p>
                <h3 className="mt-1 font-semibold leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm underline underline-offset-4">Vezi detalii</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
