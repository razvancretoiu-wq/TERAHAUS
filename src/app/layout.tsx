import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://terahaus.ro"),
  title: "Terahaus | Riflaje WPC, Decking și Placări Premium pentru Interior & Exterior",
  description:
    "Terahaus oferă riflaje WPC, decking și placări premium pentru interior și exterior. Durabil. Funcțional. Estetic. Natural. Consultanță, ofertare și montaj în România.",
  openGraph: {
    type: "website",
    url: "https://terahaus.ro",
    title: "Terahaus | Interior & Exterior",
    description:
      "Riflaje WPC, decking și placări premium. Durabil. Funcțional. Estetic. Natural.",
    siteName: "Terahaus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terahaus | Interior & Exterior",
    description:
      "Riflaje WPC, decking și placări premium. Durabil. Funcțional. Estetic. Natural.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}

