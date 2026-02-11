import type { Metadata } from "next"
import { Poppins, Playfair_Display } from "next/font/google"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import WhatsAppFloating from "@/components/layout/WhatsAppFloating"

import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Terahaus | Riflaje WPC, Placări Premium Interior & Exterior",
  description:
    "Riflaje WPC, placări premium pentru interior și exterior. Consultanță și ofertare în România.",
  metadataBase: new URL("https://www.terahaus.ro"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro">
      <body className={`${poppins.className} ${playfair.variable}`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  )
}
