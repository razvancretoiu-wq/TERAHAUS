"use client";
import Link from "next/link";
import { useState } from "react";


export default function Home() {
	const [sent, setSent] = useState(false);
	const [loading, setLoading] = useState(false);

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <a
  href="https://wa.me/40727608654"
  className="fixed bottom-5 right-5 z-50 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-medium shadow-lg hover:bg-zinc-50"
>
  WhatsApp
</a>
<header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <img
  		src="/logo-terahaus.png"
 		 alt="Terahaus"
 		 className="h-12 w-auto"
		/>

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
                <div>Telefon/WhatsApp: +40 727 608 654</div>
                <div>Email: razvancretoiu@gmail.com</div>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  className="rounded-2xl border border-zinc-200 bg-white px-6 py-3 text-sm font-medium hover:bg-zinc-50"
                  href="https://wa.me/40727608654"
                >
                  WhatsApp
                </a>
                <a
                  className="rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                  href="mailto:razvancretoiu@gmail.com"
                >
                  Email
                </a>
              </div>
            </div>

            <form
 		 onSubmit={async (e) => {
   		 e.preventDefault();
   		 setLoading(true);

   		 const form = e.currentTarget;
   		 const data = new FormData(form);

   		 const response = await fetch("https://formspree.io/f/xykkkgjk", {
     		 method: "POST",
     		 body: data,
     		 headers: {
      		  Accept: "application/json",
     		 },
   		 });

  		  if (response.ok) {
   		   setSent(true);
   		   form.reset();
  		  }

  		  setLoading(false);
		  }}
		  className="rounded-3xl border border-zinc-200 bg-white p-7"
		>



              <div className="grid gap-4">
                <label className="grid gap-2 text-sm">
                  Nume
                  <input
  			name="name"
 			 className="rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-900/10"
 			 required
			/>

                </label>
		<label className="grid gap-2 text-sm">
 		 Email
 			 <input
  			  type="email"
  			  name="email"
  			  className="rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-900/10"
  			  required
 			 />
		</label>

                <label className="grid gap-2 text-sm">
                  Telefon (WhatsApp)
                  <input
 			 name="phone"
  			className="rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-900/10"
 			 required
			/>

                </label>

                <label className="grid gap-2 text-sm">
                  Mesaj
                  <textarea
  			name="message"
 			 className="min-h-[120px] rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-900/10"
 			 required
			/>

                </label>

                {sent ? (
 		 <div className="rounded-2xl border border-green-200 bg-green-50 px-6 py-4 text-sm text-green-700">
 		   Mulțumim! Mesajul a fost trimis cu succes. Te vom contacta în cel mai scurt timp.
 		 </div>
		) : (
		  <button
  		  type="submit"
  		  disabled={loading}
  		  className="rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-60"
 		 >
  		  {loading ? "Se trimite..." : "Trimite"}
 		 </button>
		)}



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
