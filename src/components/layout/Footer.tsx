import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-20 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">TERAHAUS</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Soluții premium WPC pentru exterior și interior.
              Riflaje, deck și sisteme de fațadă pentru proiecte moderne.
            </p>
          </div>

          {/* Produse */}
          <div>
            <h4 className="font-semibold mb-4">Produse</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/produse?cat=riflaje" className="hover:text-black">Riflaje WPC</Link></li>
              <li><Link href="/produse?cat=deck" className="hover:text-black">Deck WPC</Link></li>
              <li><Link href="/produse?cat=fatade" className="hover:text-black">Fațade</Link></li>
              <li><Link href="/produse?cat=accesorii" className="hover:text-black">Accesorii</Link></li>
            </ul>
          </div>

          {/* Linkuri rapide */}
          <div>
            <h4 className="font-semibold mb-4">Linkuri rapide</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-black">Acasă</Link></li>
              <li><Link href="/produse" className="hover:text-black">Produse</Link></li>
              <li><Link href="/contact" className="hover:text-black">Contact</Link></li>
              <li><Link href="#" className="hover:text-black">Termeni și condiții</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Telefon: <a href="tel:+40727608654" className="hover:text-black">+40 727 608 654</a></li>
              <li>Email: <a href="mailto:contact@terahaus.ro" className="hover:text-black">contact@terahaus.ro</a></li>
            </ul>

            <a
              href="https://wa.me/40727608654"
              className="inline-block mt-5 bg-black text-white px-5 py-3 text-sm uppercase tracking-wider"
            >
              WhatsApp
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t mt-16 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} TERAHAUS. Toate drepturile rezervate.</p>
          <p>Website dezvoltat cu Next.js</p>
        </div>

      </div>
    </footer>
  )
}
