import Image from "next/image"
import Link from "next/link"
import { products } from "@/data/products"

export default function ProdusePage({
  searchParams,
}: {
  searchParams?: { cat?: string }
}) {
  const activeCategory = searchParams?.cat

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products

  return (
    <main className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-semibold mb-4">Toate produsele</h1>
          <p className="text-gray-500">
            Descoperă gama completă TERAHAUS.
          </p>
        </div>

        {/* Filter Links */}
        <div className="flex gap-3 flex-wrap mb-10">
          <Link href="/produse" className="px-4 py-2 border rounded-full text-sm">
            Toate
          </Link>
          <Link href="/produse?cat=riflaje" className="px-4 py-2 border rounded-full text-sm">
            Riflaje
          </Link>
          <Link href="/produse?cat=deck" className="px-4 py-2 border rounded-full text-sm">
            Deck
          </Link>
          <Link href="/produse?cat=fatade" className="px-4 py-2 border rounded-full text-sm">
            Fațade
          </Link>
          <Link href="/produse?cat=accesorii" className="px-4 py-2 border rounded-full text-sm">
            Accesorii
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              href={`/produse/${p.slug}`}
              className="group rounded-2xl border bg-white overflow-hidden"
            >
              <div className="relative h-64 bg-gray-50">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-500 capitalize">{p.category}</p>
                <h3 className="mt-1 font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm underline underline-offset-4">
                  Vezi detalii
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
