import { Truck, MessageCircle, PackageOpen } from "lucide-react"

export default function BenefitsBar() {
  return (
    <section className="py-14 border-t border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/5">
            <Truck className="h-6 w-6 text-black" />
          </div>
          <div>
            <p className="font-semibold text-black">Livrare Rapidă</p>
            <p className="text-sm text-gray-500">Oriunde în România</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/5">
            <MessageCircle className="h-6 w-6 text-black" />
          </div>
          <div>
            <p className="font-semibold text-black">Consultanță Gratuită</p>
            <p className="text-sm text-gray-500">Alegem soluția potrivită</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/5">
            <PackageOpen className="h-6 w-6 text-black" />
          </div>
          <div>
            <p className="font-semibold text-black">Mostre Disponibile</p>
            <p className="text-sm text-gray-500">Vezi produsul real</p>
          </div>
        </div>

      </div>
    </section>
  )
}
