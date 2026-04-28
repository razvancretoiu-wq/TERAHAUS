"use client"

import Image from "next/image"
import Link from "next/link"
import { products } from "@/data/products"

const sections = [
  {
    title: "Riflaje Interior",
    category: "riflaje-interior",
  },
  {
    title: "Riflaje Exterior",
    category: "riflaje-exterior",
  },
  {
    title: "Accesorii",
    category: "accesorii",
  },
] as const

export default function ProductCategoryCarousels() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {sections.map((section) => {
          const items = products.filter((p) => p.category === section.category)

          if (!items.length) return null

          return (
            <div key={section.category}>
              <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-500">Categorie</p>
                  <h2 className="text-3xl font-semibold tracking-tight">
                    {section.title}
                  </h2>
                </div>

                <Link
                  href={`/produse?cat=${section.category}`}
                  className="text-sm underline underline-offset-4"
                >
                  Vezi toate
                </Link>
              </div>

              <div className="overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex gap-5">
                  {items.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/produse/${p.slug}`}
                      className="group min-w-[86%] sm:min-w-[48%] lg:min-w-[32%]"
                    >
                      <div className="overflow-hidden rounded-2xl border border-black bg-white">
                        <div className="relative h-[390px] bg-white overflow-hidden">
                          <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            className="object-contain p-3 transition-transform duration-700 group-hover:scale-105"
                          />

                          {p.badge && (
                            <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs text-white">
                              {p.badge}
                            </span>
                          )}
                        </div>

                        <div className="px-5 pb-5 pt-4">
                          <p className="text-xs text-gray-500 capitalize">
                            {section.title}
                          </p>

                          <h3 className="mt-1 text-base font-semibold leading-snug">
                            {p.title}
                          </h3>

                          <p className="mt-3 inline-block text-sm underline underline-offset-4">
                            Vezi detalii
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}