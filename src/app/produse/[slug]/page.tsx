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
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Acasă</Link> {" / "}
          <Link href="/produse" className="hover:underline">Produse</Link> {" / "}
          <Link href={`/produse?cat=${product.category}`} className="hover:underline">
            {categoryLabel[product.category] ?? product.category}
          </Link>
          {" / "}
          <span className="text-gray-800">{product.title}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Image */}
          <div className="rounded-2xl border overflow-hidden bg-gray-50">
            <div className="relative h-[520px]">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-4"
                priority
              />
              {product.badge && (
                <span className="absolute left-4 top-4 text-xs bg-black text-white px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-sm text-gray-500">
              {categoryLabel[product.category] ?? product.category}
            </p>

            <h1 className="text-4xl font-semibold mt-2">{product.title}</h1>

            {product.short && (
              <p className="mt-5 text-gray-600 leading-relaxed">
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

            {/* CTA */}
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

        {/* Related */}
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

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
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
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold leading-snug">{p.title}</h3>

                    <p className="mt-2 text-sm underline underline-offset-4">
                      Vezi detalii
                    </p>
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