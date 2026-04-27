export type ProductCategory = "riflaje" | "deck" | "fatade" | "accesorii"

export type Product = {
  title: string
  slug: string
  category: ProductCategory
  image: string
  badge?: string
  short?: string
  features?: string[]
}

export const products: Product[] = [
  {
    title: "Riflaj WPC Premium – Stejar Noir",
    slug: "riflaj-wpc-stejar-noir",
    category: "riflaje",
    image: "/p1.jpg",
    badge: "Popular",
    short: "Riflaj WPC premium, finisaj elegant, potrivit pentru placarea pereților și tavanelor la interior.",
    features: ["Dimensiuni: 2900mm x 168mm x 24mm", "Întreținere ușoară", "Montaj rapid"],
  },
  {
    title: "Riflaj WPC Premium – Pearl White",
    slug: "riflaj-wpc-pearl-white",
    category: "riflaje",
    image: "/p2.jpg",
    badge: "Popular",
    short: "Riflaj WPC premium, finisaj elegant, potrivit pentru placarea pereților și tavanelor la interior.",
    features: ["Dimensiuni: 2900mm x 168mm x 24mm", "Întreținere ușoară", "Montaj rapid"],
  },
  {
    title: "Deck WPC – Teak",
    slug: "deck-wpc-teak",
    category: "riflaje",
    image: "/p3.jpg",
    badge: "Popular",
    short: "Riflaj WPC premium, finisaj elegant, potrivit pentru placarea pereților și tavanelor la interior.",
    features: ["Dimensiuni: 2900mm x 168mm x 24mm", "Întreținere ușoară", "Montaj rapid"],
  },
  {
    title: "Deck WPC – Walnut",
    slug: "deck-wpc-walnut",
    category: "deck",
    image: "/p4.jpg",
    short: "Culoare caldă, ideal pentru terase și zone de relaxare.",
    features: ["Întreținere minimă", "Textură premium", "Rezistență UV"],
  },
  {
    title: "Sistem Fațadă WPC – Line",
    slug: "fatada-wpc-line",
    category: "fatade",
    image: "/p5.jpg",
    short: "Sistem de fațadă cu linii curate, pentru arhitectură contemporană.",
    features: ["Design arhitectural", "Fixare sigură", "Durabilitate ridicată"],
  },
  {
    title: "Sistem Fațadă WPC – Panel",
    slug: "fatada-wpc-panel",
    category: "fatade",
    image: "/p6.jpg",
    short: "Panouri WPC pentru fațade, cu finisaj uniform și montaj eficient.",
    features: ["Montaj eficient", "Finisaj uniform", "Rezistență la vreme"],
  },
  {
    title: "Clips + Șuruburi inox",
    slug: "clips-suruburi-inox",
    category: "accesorii",
    image: "/p7.jpg",
    short: "Set complet pentru montaj profesional și rezistent în timp.",
    features: ["Inox", "Montaj rapid", "Prindere sigură"],
  },
  {
    title: "Profile & Îmbinări",
    slug: "profile-imbinari",
    category: "accesorii",
    image: "/p8.jpg",
    short: "Profile pentru colț, terminare și îmbinări curate.",
    features: ["Finisaj curat", "Compatibilitate", "Durabilitate"],
  },
]
