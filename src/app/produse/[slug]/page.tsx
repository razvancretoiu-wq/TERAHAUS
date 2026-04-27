import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { products } from "@/data/products"

const categoryLabel: Record<string, string> = {
  riflaje: "Riflaje",
  deck: "Deck",
  fatade: "Fațade",
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

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4)

  return (
    <main className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Acasă</Link> {" / "}
          <Link href="/produse" className="hover:underline">Produse</Link> {" / "}
          <Link href={`/produse?cat=${product.category}`} className="hover:underline">
            {categoryLabel[product.category] ?? product.category}
          </Link>
          {" / "}
          <span className="text-gray-800">{product.title}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="overflow-hidden rounded-2xl bg-white">
            <div className="relative h-[420px] sm:h-[520px] rounded-2xl bg-white overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-0"
                priority
              />

              {product.badge && (
                <span className="absolute left-4 top-4 text-xs bg-black text-white px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              {categoryLabel[product.category] ?? product.category}
            </p>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2 leading-tight">
  {product.title}
</h1>
            {product.short && (
              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                {product.short}
              </p>
            )}

            {product.features?.length ? (
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {product.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-[2px] inline-block h-2 w-2 rounded-full bg-black" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-8 flex gap-3 flex-wrap">
              <a
                href={`https://wa.me/40727608654?text=${encodeURIComponent(
                  `Bună! Vreau detalii pentru: ${product.title}`
                )}`}
                className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wider"
              >
                Cere ofertă pe WhatsApp
              </a>

              <Link
                href="/contact"
                className="px-6 py-3 text-sm uppercase tracking-wider border"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {related.length ? (
          <section className="mt-16">
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <h2 className="text-2xl font-semibold">Produse similare</h2>

              <Link
                href={`/produse?cat=${product.category}`}
                className="text-sm underline underline-offset-4"
              >
                Vezi categoria
              </Link>
            </div>

            <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/produse/${p.slug}`}
                  className="group block"
                >
                  <div className="bg-white transition-all duration-500 hover:-translate-y-1">
                    <div className="relative h-[520px] sm:h-[620px] lg:h-[680px] rounded-2xl bg-white overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-contain p-0 transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="pt-4">
                      <h3 className="text-base font-semibold leading-snug">
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
          </section>
        ) : null}
      </div>
    </main>
  )
}