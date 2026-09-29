"use client"

import Image from "next/image"
import Link from "next/link"
import { products } from "@/data/products"

const sections = [
  {
    title: "Riflaje Exterior",
    category: "riflaje-exterior",
  },
  {
    title: "Deck WPC",
    category: "deck",
  },
  {
    title: "Piatră Flexibilă",
    category: "piatra-flexibila",
  },
  {
    title: "Riflaje Interior",
    category: "riflaje-interior",
  },
  {
    title: "Panouri Decorative",
    category: "panouri-decorative",
  },
  {
    title: "Accesorii",
    category: "accesorii",
  },
] as const

export default function ProductCategoryCarousels() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl space-y-20 px-6">
        {sections.map((section) => {
          const items = products.filter(
            (product) =>
              product.category === section.category &&
              product.active !== false
          )

          if (!items.length) return null

          return (
            <div key={section.category}>
              <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-500">
                    Categorie
                  </p>

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
                  {items.map((product) => {
                    const isDeck = product.category === "deck"

                    return (
                      <Link
                        key={product.slug}
                        href={`/produse/${product.slug}`}
                        className="group w-[86%] shrink-0 sm:w-[48%] lg:w-[calc((100%-2.5rem)/3)]"
                      >
                        <div className="overflow-hidden rounded-2xl border border-black bg-white">
                          <div className="relative aspect-[4/5] overflow-hidden bg-white">
                            <Image
                              src={product.image}
                              alt={product.title}
                              fill
                              sizes="(max-width: 640px) 86vw, (max-width: 1024px) 48vw, 33vw"
                              className={`transition-transform duration-700 group-hover:scale-105 ${
                                isDeck
                                  ? "object-cover"
                                  : product.category === "panouri-decorative"
                                    ? "object-cover object-top"
                                    : "object-cover"
                              }`}
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
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}