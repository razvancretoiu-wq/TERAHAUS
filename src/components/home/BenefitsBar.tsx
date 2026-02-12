import { MessageCircle, ShieldCheck, Award } from "lucide-react"

export default function BenefitsBar() {
  return (
    <section className="py-16 border-t border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* 1 */}
        <div className="flex items-start gap-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black/5">
            <MessageCircle className="h-7 w-7 text-black" />
          </div>
          <div>
            <p className="font-semibold text-black tracking-wide uppercase">
              Consultanță Gratuită
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Te ajutăm să alegi corect
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="flex items-start gap-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black/5">
            <ShieldCheck className="h-7 w-7 text-black" />
          </div>
          <div>
            <p className="font-semibold text-black tracking-wide uppercase">
              Durabilitate Garantată
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Materiale WPC rezistente în timp
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="flex items-start gap-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black/5">
            <Award className="h-7 w-7 text-black" />
          </div>
          <div>
            <p className="font-semibold text-black tracking-wide uppercase">
              Standard European Garantat
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Finisaj premium, rezistență în timp
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
