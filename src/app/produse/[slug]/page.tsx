import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { products } from "@/data/products"

const categoryLabel: Record<string, string> = {
  "panouri-decorative": "Panouri Decorative",
  deck: "Deck WPC",
  "riflaje-interior": "Riflaje Interior",
  "riflaje-exterior": "Riflaje Exterior",
  accesorii: "Accesorii",
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const product = products.find((p) => p.slug === slug)

  if (!product) return notFound()

  const productImages = product.images?.length
    ? product.images
    : [product.image]

  const related = products
    .filter(
      (p) =>
        p.category === product.category &&
        p.slug !== product.slug
    )
    .slice(0, 4)

  const isDecorativePanel =
    product.category === "panouri-decorative"

  const isDeck = product.category === "deck"

  return (
    <main className="bg-white pb-20 pt-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            Acasă
          </Link>

          {" / "}

          <Link href="/produse" className="hover:underline">
            Produse
          </Link>

          {" / "}

          <Link
            href={`/produse?cat=${product.category}`}
            className="hover:underline"
          >
            {categoryLabel[product.category] ?? product.category}
          </Link>

          {" / "}

          <span className="text-gray-800">
            {product.title}
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="w-full space-y-6">
            {productImages.map((img, index) => (
              <div
                key={`${img}-${index}`}
                className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-white"
              >
                <Image
                  src={img}
                  alt={`${product.title} ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className={`rounded-2xl ${
                    isDeck
                      ? "object-contain p-8 sm:p-10"
                      : isDecorativePanel
                        ? "object-cover object-top"
                        : "object-cover"
                  }`}
                />

                {index === 0 && product.badge && (
                  <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs text-white">
                    {product.badge}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="lg:pt-2">
            <p className="text-sm text-gray-500">
              {categoryLabel[product.category] ?? product.category}
            </p>

            <h1 className="mt-2 text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
              {product.title}
            </h1>

            {product.short && (
              <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                {product.short}
              </p>
            )}

            {product.features?.length ? (
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-[6px] inline-block h-2 w-2 shrink-0 rounded-full bg-black" />

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/40727608654?text=${encodeURIComponent(
                  `Bună! Vreau detalii pentru: ${product.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black px-6 py-3 text-xs uppercase tracking-wider text-white sm:text-sm"
              >
                Cere ofertă pe WhatsApp
              </a>

              <Link
                href="/contact"
                className="border px-6 py-3 text-xs uppercase tracking-wider sm:text-sm"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {related.length ? (
          <section className="mt-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-2xl font-semibold">
                Produse similare
              </h2>

              <Link
                href={`/produse?cat=${product.category}`}
                className="text-sm underline underline-offset-4"
              >
                Vezi categoria
              </Link>
            </div>

            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((relatedProduct) => {
                const isRelatedDeck =
                  relatedProduct.category === "deck"

                const isRelatedDecorativePanel =
                  relatedProduct.category ===
                  "panouri-decorative"

                return (
                  <Link
                    key={relatedProduct.slug}
                    href={`/produse/${relatedProduct.slug}`}
                    className="group block"
                  >
                    <div className="bg-white transition-all duration-500 hover:-translate-y-1">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white">
                        <Image
                          src={relatedProduct.image}
                          alt={relatedProduct.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className={`rounded-2xl transition-transform duration-700 group-hover:scale-105 ${
                            isRelatedDeck
                              ? "object-contain p-6"
                              : isRelatedDecorativePanel
                                ? "object-cover object-top"
                                : "object-cover"
                          }`}
                        />
                      </div>

                      <div className="pt-4">
                        <h3 className="text-base font-semibold leading-snug">
                          {relatedProduct.title}
                        </h3>

                        <p className="mt-3 inline-block text-xs underline underline-offset-4">
                          Vezi detalii
                        </p>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  )
}