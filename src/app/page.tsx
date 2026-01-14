import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl border border-zinc-200 bg-zinc-50" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">TERAHAUS</div>
              <div className="text-xs text-zinc-500">premium surfaces</div>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="#proiecte"
              className="hidden text-sm text-zinc-700 hover:text-zinc-900 md:inline"
            >
              Proiecte
            </Link>
            <Link
              href="#contact"
              className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Cere ofertă
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs text-zinc-600">
                Riflăje WPC • Decking • Placări • Accesorii
              </p>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                Finisaje premium pentru spații care arată impecabil.
              </h1>

              <p className="mt-4 text-base text-zinc-600 md:text-lg">
                Terahaus livrează materiale și soluții premium pentru pereți, fațade
                și terase — cu consultanță, ofertare și montaj.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#contact"
                  className="rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                >
                  Cere ofertă
                </Link>
                <Link
                  href="#proiecte"
                  className="rounded-2xl border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                >
                  Vezi proiecte
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 text-sm text-zinc-600">
                <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                  <div className="text-xl font-semibold text-zinc-900">Premium</div>
                  <div>look & execuție</div>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                  <div className="text-xl font-semibold text-zinc-900">Rapid</div>
                  <div>ofertare</div>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                  <div className="text-xl font-semibold text-zinc-900">Corect</div>
                  <div>montaj</div>
                </div>
              </div>
            </div>

            {/* Placeholder imagine (înlocuim cu poze reale) */}
            <div className="relative">
              <div className="aspect-[4/5] w-full rounded-3xl border border-zinc-200 bg-gradient-to-b from-zinc-50 to-zinc-100" />
              <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.12)]" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-y border-zinc-200/70 bg-zinc-50/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">De ce Terahaus</h2>
          <p className="mt-2 text-zinc-600">
            Un mix echilibrat între estetic, tehnic și execuție.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Aspect premium", "Texturi moderne, finisaje curate."],
              ["Durabilitate", "Materiale gândite pentru utilizare îndelungată."],
              ["Întreținere ușoară", "Soluții practice, fără bătăi de cap."],
              ["Consultanță", "Îți recomandăm configurația potrivită."],
              ["Montaj", "Execuție atentă la detalii, fără improvizații."],
              ["Proiecte reale", "Portofoliu cu lucrări și inspirație."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-3xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-semibold">{t}</div>
                <div className="mt-2 text-sm text-zinc-600">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROIECTE */}
      <section id="proiecte">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Proiecte</h2>
          <p className="mt-2 text-zinc-600">
            Înlocuim aceste placeholder-e cu pozele tale reale.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-3xl border border-zinc-200 bg-white"
              >
                <div className="aspect-[4/3] bg-gradient-to-b from-zinc-50 to-zinc-100" />
                <div className="p-5">
                  <div className="text-sm font-semibold">Proiect {i + 1}</div>
                  <div className="mt-1 text-xs text-zinc-600">Riflaje / Decking</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-zinc-200/70 bg-zinc-50/40">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Cere ofertă</h2>
              <p className="mt-2 text-zinc-600">
                Spune-ne orașul, suprafața și ce vrei să acoperi. Îți răspundem cu
                recomandări și estimare.
              </p>

              <div className="mt-6 grid gap-2 text-sm text-zinc-700">
                <div>Telefon/WhatsApp: +40 XXX XXX XXX</div>
                <div>Email: contact@terahaus.ro</div>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  className="rounded-2xl border border-zinc-200 bg-white px-6 py-3 text-sm font-medium hover:bg-zinc-50"
                  href="https://wa.me/40700000000"
                >
                  WhatsApp
                </a>
                <a
                  className="rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                  href="mailto:contact@terahaus.ro"
                >
                  Email
                </a>
              </div>
            </div>

            <form
              className="rounded-3xl border border-zinc-200 bg-white p-7"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Formular demo. Următorul pas: trimitere automată pe email.");
              }}
            >
              <div className="grid gap-4">
                <label className="grid gap-2 text-sm">
                  Nume
                  <input
                    className="rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-900/10"
                    required
                  />
                </label>

                <label className="grid gap-2 text-sm">
                  Telefon (WhatsApp)
                  <input
                    className="rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-900/10"
                    required
                  />
                </label>

                <label className="grid gap-2 text-sm">
                  Mesaj
                  <textarea
                    className="min-h-[120px] rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-900/10"
                    required
                  />
                </label>

                <button className="rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800">
                  Trimite
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200/70 py-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Terahaus. Toate drepturile rezervate.
      </footer>
    </main>
  );
}
