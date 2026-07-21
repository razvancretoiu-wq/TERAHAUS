import Image from "next/image"
import Link from "next/link"
import {
  products,
  type ProductCategory,
} from "@/data/products"

const categories: {
  key?: ProductCategory
  label: string
  href: string
}[] = [
  {
    label: "Toate",
    href: "/produse",
  },
  {
    key: "deck",
    label: "Deck WPC",
    href: "/produse?cat=deck",
  },
  {
    key: "riflaje-exterior",
    label: "Riflaje Exterior",
    href: "/produse?cat=riflaje-exterior",
  },
  {
    key: "accesorii",
    label: "Accesorii",
    href: "/produse?cat=accesorii",
  },
  {
    key: "riflaje-interior",
    label: "Riflaje Interior",
    href: "/produse?cat=riflaje-interior",
  },
]

const categoryLabel: Record<ProductCategory, string> = {
  deck: "Deck WPC",
  "riflaje-interior": "Riflaje Interior",
  "riflaje-exterior": "Riflaje Exterior",
  accesorii: "Accesorii",
}

export default async function ProdusePage({
  searchParams,
}: {
  searchParams?: Promise<{ cat?: string }>
}) {
  const params = await searchParams
  const cat = params?.cat

  const active = categories.some((category) => category.key === cat)
    ? (cat as ProductCategory)
    : undefined

  const filtered = active
    ? products.filter((product) => product.category === active)
    : products

  return (
    <main className="bg-white pb-20 pt-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm text-gray-500">Catalog</p>

            <h1 className="heading-serif mt-2 text-4xl font-semibold md:text-5xl">
              Produse
            </h1>

            <p className="mt-3 max-w-2xl leading-relaxed text-gray-600">
              Descoperă gama TERAHAUS și cere rapid o ofertă pentru categoria
              dorită.
            </p>
          </div>

          <a
            href="https://wa.me/40727608654?text=Bun%C4%83!%20A%C8%99%20dori%20o%20ofert%C4%83%20pentru%20produse%20WPC."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#C8732D] px-6 py-3 text-sm uppercase tracking-wider text-white shadow-sm transition hover:bg-[#B96524]"
          >
            Cere ofertă
          </a>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive =
              (!category.key && !active) || category.key === active

            return (
              <Link
                key={category.href}
                href={category.href}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  isActive
                    ? "border-[#111111] bg-[#111111] text-white"
                    : "border-gray-300 bg-white text-gray-800 hover:bg-gray-50"
                }`}
              >
                {category.label}
              </Link>
            )
          })}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product) => (
            <Link
              key={product.slug}
              href={`/produse/${product.slug}`}
              className="group overflow-hidden rounded-2xl border border-black bg-white transition hover:shadow-sm"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-white">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {product.badge && (
                  <span className="absolute left-4 top-4 rounded-full bg-[#111111] px-3 py-1 text-xs text-white">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  {categoryLabel[product.category]}
                </p>

                <h3 className="mt-2 text-[15px] font-semibold leading-snug">
                  {product.title}
                </h3>

                <p className="mt-4 text-sm underline underline-offset-4">
                  Vezi detalii
                </p>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-xs text-gray-500">
          * Imaginile sunt cu titlu de prezentare. Pentru detalii, cere ofertă
          pe WhatsApp.
        </p>
      </div>
    </main>
  )
}