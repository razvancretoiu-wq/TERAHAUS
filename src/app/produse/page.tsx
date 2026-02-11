import Image from "next/image"
import Link from "next/link"
import { products } from "@/data/products"

type Category = "riflaje" | "deck" | "fatade" | "accesorii"

const categories: { key?: Category; label: string; href: string }[] = [
  { label: "Toate", href: "/produse" },
  { key: "riflaje", label: "Riflaje", href: "/produse?cat=riflaje" },
  { key: "deck", label: "Deck", href: "/produse?cat=deck" },
  { key: "fatade", label: "Fațade", href: "/produse?cat=fatade" },
  { key: "accesorii", label: "Accesorii", href: "/produse?cat=accesorii" },
]

export default function ProdusePage({
  searchParams,
}: {
  searchParams?: { cat?: string }
}) {
  const active = (searchParams?.cat as Category | undefined) ?? undefined

  const filtered = active
    ? products.filter((p) => p.category === active)
    : products

  return (
    <main className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <p className="text-sm text-gray-500">Catalog</p>
            <h1 className="heading-serif text-4xl md:text-5xl font-semibold mt-2">
              Produse
            </h1>
            <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
              Descoperă gama TERAHAUS și cere ofertă rapid pentru categoria dorită.
            </p>
          </div>

          <a
            href="https://wa.me/407272608654?text=Bun%C4%83!%20A%C8%99%20dori%20o%20ofert%C4%83%20pentru%20produse%20WPC."
            className="inline-flex items-center justify-center bg-[#C8732D] hover:bg-[#B96524] transition text-white px-6 py-3 rounded-full text-sm uppercase tracking-wider shadow-sm"
          >
            Cere ofertă
          </a>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map((c) => {
            const isActive = (!c.key && !active) || (c.key && c.key === active)

            return (
              <Link
                key={c.href}
                href={c.href}
                className={`px-4 py-2 rounded-full text-sm border transition ${
                  isActive
                    ? "bg-[#111111] text-white border-[#111111]"
                    : "bg-white text-gray-800 hover:bg-gray-50"
                }`}
              >
                {c.label}
              </Link>
            )
          })}
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              href={`/produse/${p.slug}`}
              className="group rounded-2xl border bg-white overflow-hidden hover:shadow-sm transition"
            >
              <div className="relative h-64 bg-gray-50">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
                {p.badge && (
                  <span className="absolute left-4 top-4 text-xs bg-[#111111] text-white px-3 py-1 rounded-full">
                    {p.badge}
                  </span>
                )}
              </div>

              <div className="p-5">
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  {p.category}
                </p>
                <h3 className="mt-2 font-semibold leading-snug text-[15px]">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm underline underline-offset-4">
                  Vezi detalii
                </p>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-xs text-gray-500">
          * Imaginile sunt cu titlu de prezentare. Pentru detalii, cere ofertă pe WhatsApp.
        </p>
      </div>
    </main>
  )
}
