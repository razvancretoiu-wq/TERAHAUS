import Link from "next/link"
import Image from "next/image"

const promos = [
  {
    title: "Soluții pentru Interior",
    subtitle: "Riflaje și finisaje decorative WPC",
    href: "/produse?cat=interior",
    image: "/promo-interior.jpg",
  },
  {
    title: "Soluții pentru Exterior",
    subtitle: "Fațade, deck-uri și garduri moderne",
    href: "/produse?cat=exterior",
    image: "/promo-exterior.jpg",
  },
  {
    title: "Accesorii & Sisteme de Montaj",
    subtitle: "Profile, prinderi și elemente tehnice",
    href: "/produse?cat=accesorii",
    image: "/promo-accesorii.jpg",
  },
]

export default function PromoGrid() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {promos.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="
                group relative block overflow-hidden
                rounded-xl border border-black/10 bg-white
                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
              "
            >
              <div className="relative h-[340px]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                {/* Overlay premium european */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <p className="text-white/80 text-sm tracking-wide uppercase">
                  TERAHAUS
                </p>

                <h3 className="mt-2 text-white text-2xl font-semibold tracking-tight leading-snug">
                  {p.title}
                </h3>

                <p className="mt-2 text-white/80 text-sm">
                  {p.subtitle}
                </p>

                <div className="mt-4 inline-flex items-center gap-2 text-white text-sm">
                  <span className="underline underline-offset-4 decoration-white/40 group-hover:decoration-white/80 transition">
                    Descoperă colecția
                  </span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
