"use client"

import Image from "next/image"
import Link from "next/link"
import { products } from "@/data/products"

const sections = [
  {
    title: "Deck WPC",
    category: "deck",
  },
  {
    title: "Riflaje Exterior",
    category: "riflaje-exterior",
  },
  {
    title: "Accesorii",
    category: "accesorii",
  },
  {
    title: "Riflaje Interior",
    category: "riflaje-interior",
  },
] as const

export default function ProductCategoryCarousels() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl space-y-20 px-6">
        {sections.map((section) => {
          const items = products.filter(
            (product) => product.category === section.category
          )

          const isInterior = section.category === "riflaje-interior"

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

              {isInterior && (
                <div className="mb-8 flex flex-col gap-5 rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                  <div>
                    <p className="text-base font-semibold text-neutral-900">
                      Riflajele de interior revin în stoc după 15 septembrie
                    </p>

                    <p className="mt-1 max-w-2xl text-sm leading-6 text-neutral-600">
                      Poți face o rezervare în avans, iar noi te vom contacta
                      când produsele vor fi din nou disponibile.
                    </p>
                  </div>

                  <a
                    href="https://wa.me/40727608654?text=Bun%C4%83%21%20Doresc%20s%C4%83%20rezerv%20riflaje%20WPC%20pentru%20interior%20care%20revin%20%C3%AEn%20stoc%20dup%C4%83%2015%20septembrie."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-700"
                  >
                    Rezervă în avans
                  </a>
                </div>
              )}

              <div className="overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex gap-5">
                  {items.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/produse/${product.slug}`}
                      className="group min-w-[86%] sm:min-w-[48%] lg:min-w-[32%]"
                    >
                      <div className="overflow-hidden rounded-2xl border border-black bg-white">
                        <div className="relative aspect-[4/5] overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />

                          {product.badge && (
                            <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs text-white">
                              {product.badge}
                            </span>
                          )}
                        </div>

                        <div className="px-5 pb-5 pt-4">
                          <p className="text-xs capitalize text-gray-500">
                            {section.title}
                          </p>

                          <h3 className="mt-1 text-base font-semibold leading-snug">
                            {product.title}
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