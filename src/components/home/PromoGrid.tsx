import Link from "next/link"
import Image from "next/image"

const promos = [
  {
    title: "Riflaje WPC",
    subtitle: "Interior & exterior",
    href: "/produse?cat=riflaje",
    image: "/promo-riflaje.jpg",
  },
  {
    title: "Deck WPC",
    subtitle: "Terasă premium",
    href: "/produse?cat=deck",
    image: "/promo-deck.jpg",
  },
  {
    title: "Fațade",
    subtitle: "Arhitectură modernă",
    href: "/produse?cat=fatade",
    image: "/promo-fatade.jpg",
  },
]

export default function PromoGrid() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {promos.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group relative overflow-hidden rounded-2xl border bg-gray-50"
            >
              <div className="relative h-[320px]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-black/25" />
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <p className="text-white/80 text-sm">{p.subtitle}</p>
                <h3 className="text-white text-2xl font-semibold">{p.title}</h3>
                <span className="mt-3 inline-block text-white text-sm underline underline-offset-4">
                  Vezi colecția
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
