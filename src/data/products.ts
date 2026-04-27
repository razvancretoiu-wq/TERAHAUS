export type ProductCategory = "riflaje-interior" | "riflaje-exterior" | "accesorii"

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
    category: "riflaje-interior",
    image: "/p1.jpg",
    badge: "Popular",
    short: "Riflaj WPC premium, finisaj elegant, potrivit pentru placarea pereților și tavanelor la interior.",
    features: ["Dimensiuni: 2900mm x 168mm x 24mm", "Întreținere ușoară", "Montaj rapid"],
  },
  {
    title: "Riflaj WPC Premium – Pearl White",
    slug: "riflaj-wpc-pearl-white",
    category: "riflaje-interior",
    image: "/p2.jpg",
    badge: "Popular",
    short: "Riflaj WPC premium, finisaj elegant, potrivit pentru placarea pereților și tavanelor la interior.",
    features: ["Dimensiuni: 2900mm x 168mm x 24mm", "Întreținere ușoară", "Montaj rapid"],
  },
  {
    title: "Riflaj WPC Premium – Grey Oak",
    slug: "riflaj-wpc-grey-oak",
    category: "riflaje-interior",
    image: "/p3.jpg",
    badge: "Popular",
    short: "Riflaj WPC premium, finisaj elegant, potrivit pentru placarea pereților și tavanelor la interior.",
    features: ["Dimensiuni: 2900mm x 168mm x 24mm", "Întreținere ușoară", "Montaj rapid"],
  },
  {
    title: "Riflaj WPC Coextrudat – Walnut Color",
    slug: "riflaj-wpc-coextrudat-walnut-color",
    category: "riflaje-exterior",
    image: "/p4.jpg",
    short: "Riflaj WPC premium, coextrudat, generatia a II-a, potrivit pentru placarea peretilor, tavanelor, gardurilor la exterior.",
    features: ["Dimeniuni: 2900mm x 220mm x 26mm", "Textură premium", "Rezistență UV"],
  },
  {
    title: "Riflaj WPC Coextrudat – Blue Gray",
    slug: "riflaj-wpc-coextrudat-blue-gray",
    category: "riflaje-exterior",
    image: "/p5.jpg",
    short: "Riflaj WPC premium, coextrudat, generatia a II-a, potrivit pentru placarea peretilor, tavanelor, gardurilor la exterior.",
    features: ["Dimeniuni: 2900mm x 220mm x 26mm", "Textură premium", "Rezistență UV"],
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
