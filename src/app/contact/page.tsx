import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-semibold mb-4">Contact</h1>
          <p className="text-gray-500">
            Pentru oferte, mostre sau informații suplimentare, ne poți contacta direct.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">TERAHAUS</h2>
              <p className="text-gray-600 text-sm">
                Soluții premium WPC pentru exterior și interior.
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Telefon</p>
              <a href="tel:+40727608654" className="text-lg font-medium">
                +40 727 608 654
              </a>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <a href="mailto:contact@terahaus.ro" className="text-lg font-medium">
                contact@terahaus.ro
              </a>
            </div>

            <div>
              <p className="text-sm text-gray-500">WhatsApp</p>
              <a
                href="https://wa.me/40727608654"
                className="inline-block mt-2 bg-black text-white px-6 py-3 text-sm uppercase tracking-wider"
              >
                Scrie-ne pe WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="border rounded-2xl p-8 bg-gray-50">
            <h2 className="text-xl font-semibold mb-6">Trimite un mesaj</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nume"
                className="w-full border px-4 py-3 rounded-lg"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border px-4 py-3 rounded-lg"
              />

              <input
                type="tel"
                placeholder="Telefon"
                className="w-full border px-4 py-3 rounded-lg"
              />

              <textarea
                placeholder="Mesaj"
                rows={4}
                className="w-full border px-4 py-3 rounded-lg"
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-3 uppercase tracking-wider text-sm"
              >
                Trimite mesaj
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  )
}
