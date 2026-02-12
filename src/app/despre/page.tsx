import Image from "next/image"
import Link from "next/link"

const pillars = [
  {
    title: "Produse pe stoc",
    desc: "Livrare rapidă din București, oriunde în România.",
  },
  {
    title: "Consultanță tehnică",
    desc: "Recomandări clare: produs + accesorii + pași de montaj.",
  },
  {
    title: "Standard european",
    desc: "Certificări și calitate premium, gândite pentru durabilitate.",
  },
]

const categories = [
  {
    title: "Soluții pentru Interior",
    subtitle: "Riflaje și placări decorative WPC",
    href: "/produse?cat=interior",
    image: "/about/interior.jpg",
  },
  {
    title: "Soluții pentru Exterior",
    subtitle: "Fațade, deck-uri și garduri moderne",
    href: "/produse?cat=exterior",
    image: "/about/exterior.jpg",
  },
  {
    title: "Accesorii & Sisteme de Montaj",
    subtitle: "Profile, prinderi și elemente tehnice",
    href: "/produse?cat=accesorii",
    image: "/about/accesorii.jpg",
  },
]

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative">
        <div className="relative h-[72vh] min-h-[520px] w-full">
          <Image
            src="/about/hero.jpg"
            alt="TERAHAUS - soluții WPC premium"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <p className="text-white/80 text-sm tracking-wide uppercase">
                Despre TERAHAUS
              </p>
              <h1 className="mt-3 text-white text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                Soluții WPC premium pentru interior și exterior
              </h1>
              <p className="mt-5 text-white/80 text-base md:text-lg leading-relaxed">
                Riflaje WPC, panouri pentru placări, deck, garduri și accesorii compatibile —
                importate la standarde UE și livrate rapid din stoc, din București.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/produse"
                  className="inline-flex items-center justify-center rounded-xl bg-white text-black px-5 py-3 text-sm font-medium shadow-sm hover:shadow transition"
                >
                  Vezi produsele
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 text-white px-5 py-3 text-sm font-medium hover:border-white/60 transition"
                >
                  Cere consultanță
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-black/10 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
              >
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-black/70 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 bg-black/[0.02]">
        <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-black/60 text-sm tracking-wide uppercase">Cine suntem</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Finisaje care arată bine și după ani.
            </h2>
            <p className="mt-5 text-black/70 leading-relaxed">
              Ne concentrăm pe materiale WPC cu aspect natural și stabilitate în timp, potrivite
              atât pentru spații interioare, cât și pentru exterior. Abordarea noastră este
              practică: produsul potrivit + accesoriile corecte + recomandare tehnică = un proiect reușit.
            </p>

            <div className="mt-8 grid gap-3">
              <div className="flex gap-3">
                <span className="mt-[6px] h-2 w-2 rounded-full bg-black/60" />
                <p className="text-black/70">Importator, cu produse disponibile din stoc.</p>
              </div>
              <div className="flex gap-3">
                <span className="mt-[6px] h-2 w-2 rounded-full bg-black/60" />
                <p className="text-black/70">Consultanță, estimare necesar și recomandare accesorii.</p>
              </div>
              <div className="flex gap-3">
                <span className="mt-[6px] h-2 w-2 rounded-full bg-black/60" />
                <p className="text-black/70">Suport pentru montaj și montaj prin parteneri.</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <div className="relative aspect-[4/3]">
              <Image
                src="/about/detail.jpg"
                alt="Detaliu textură WPC"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {categories.map((c) => (
              <Link
                key={c.title}
                href={c.href}
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
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                </div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <p className="text-white/80 text-sm tracking-wide uppercase">TERAHAUS</p>
                  <h3 className="mt-2 text-white text-2xl font-semibold tracking-tight leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-white/80 text-sm">{c.subtitle}</p>

                  <div className="mt-4 inline-flex items-center gap-2 text-white text-sm">
                    <span className="underline underline-offset-4 decoration-white/40 group-hover:decoration-white/80 transition">
                      Descoperă
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

      {/* SAMPLES / WAREHOUSE */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-white/70 text-sm tracking-wide uppercase">Mostre & vizionare</p>
            <h2 className="mt-3 text-white text-3xl md:text-4xl font-semibold tracking-tight">
              Vezi produsul real înainte de decizie.
            </h2>
            <p className="mt-5 text-white/75 leading-relaxed">
              Avem depozit în București unde produsele pot fi vizionate, iar la cerere putem oferi
              mostre pentru a alege corect textura și nuanța potrivită proiectului tău.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white text-black px-5 py-3 text-sm font-medium hover:shadow transition"
              >
                Cere mostre
              </Link>
              <Link
                href="/produse"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 text-white px-5 py-3 text-sm font-medium hover:border-white/50 transition"
              >
                Vezi produsele
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-white/10">
            <div className="relative aspect-[4/3]">
              <Image
                src="/about/warehouse.jpg"
                alt="Depozit și mostre TERAHAUS"
                fill
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl border border-black/10 p-10 md:p-14 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
            <p className="text-black/60 text-sm tracking-wide uppercase">Consultanță</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Ai un proiect în lucru?
            </h2>
            <p className="mt-5 text-black/70 leading-relaxed max-w-2xl">
              Spune-ne unde vrei să folosești WPC (interior/exterior) și îți recomandăm configurația
              potrivită: produs + accesorii + pași de montaj.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-black text-white px-5 py-3 text-sm font-medium hover:opacity-90 transition"
              >
                Cere recomandare
              </Link>
              <Link
                href="/produse"
                className="inline-flex items-center justify-center rounded-xl border border-black/15 text-black px-5 py-3 text-sm font-medium hover:border-black/30 transition"
              >
                Vezi colecțiile
              </Link>
            </div>
          </div>

          <p className="mt-8 text-center text-black/50 text-sm">
            TERAHAUS — importator WPC premium, livrare rapidă din stoc, București.
          </p>
        </div>
      </section>
    </main>
  )
}
