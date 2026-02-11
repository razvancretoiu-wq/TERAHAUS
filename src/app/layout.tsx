import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import WhatsAppFloating from "@/components/layout/WhatsAppFloating"
import { Poppins, Playfair_Display } from "next/font/google"

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



const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://terahaus.ro"),
  title: "Terahaus | Riflaje WPC, Placări Premium Interior & Exterior",
  description:
    "Riflaje WPC, placări premium pentru interior și exterior. Consultanță, ofertare și montaj în România.",
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${inter.variable} ${playfair.variable}`}>
     <body className={`${poppins.className} ${playfair.variable}`}>
 	<Header />
	{children}
	<Footer />
	<WhatsAppFloating />
</body>

    </html>
  );
}
