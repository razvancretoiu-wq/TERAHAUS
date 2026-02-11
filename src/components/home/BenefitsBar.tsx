export default function BenefitsBar() {
  return (
    <section className="py-12 border-t border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <p className="font-semibold">Livrare Rapidă</p>
          <p className="text-sm text-gray-500">Oriunde în România</p>
        </div>
        <div>
          <p className="font-semibold">Consultanță Gratuită</p>
          <p className="text-sm text-gray-500">Alegem soluția potrivită</p>
        </div>
        <div>
          <p className="font-semibold">Mostre Disponibile</p>
          <p className="text-sm text-gray-500">Vezi produsul real</p>
        </div>
        <div>
          <p className="font-semibold">Garanție Extinsă</p>
          <p className="text-sm text-gray-500">Calitate premium</p>
        </div>
      </div>
    </section>
  )
}
