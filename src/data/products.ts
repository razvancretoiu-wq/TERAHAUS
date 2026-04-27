export type ProductCategory =
  | "riflaje-interior"
  | "riflaje-exterior"
  | "accesorii"

export type Product = {
  title: string
  slug: string
  category: ProductCategory
  image: string
  images?: string[]
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
    images: ["/p1.jpg", "/p1-2.jpg"],
    badge: "Popular",
    short:
      "Riflaj WPC premium, cu finisaj elegant Stejar Noir, potrivit pentru placarea pereților și tavanelor la interior.",
    features: [
      "Dimensiuni: 2900mm x 168mm x 24mm",
      "Întreținere ușoară",
      "Montaj rapid",
    ],
  },
  {
    title: "Riflaj WPC Premium – Pearl White",
    slug: "riflaj-wpc-pearl-white",
    category: "riflaje-interior",
    image: "/p2.jpg",
    images: ["/p2.jpg", "/p2-2.jpg"],
    badge: "Popular",
    short:
      "Riflaj WPC premium, cu finisaj Pearl White, ideal pentru interioare luminoase, moderne și elegante.",
    features: [
      "Dimensiuni: 2900mm x 168mm x 24mm",
      "Întreținere ușoară",
      "Montaj rapid",
    ],
  },
  {
    title: "Riflaj WPC Premium – Grey Oak",
    slug: "riflaj-wpc-grey-oak",
    category: "riflaje-interior",
    image: "/p3.jpg",
    images: ["/p3.jpg", "/p3-2.jpg"],
    badge: "Popular",
    short:
      "Riflaj WPC premium, cu aspect Grey Oak, potrivit pentru pereți decorativi și tavane interioare.",
    features: [
      "Dimensiuni: 2900mm x 168mm x 24mm",
      "Întreținere ușoară",
      "Montaj rapid",
    ],
  },
  {
    title: "Riflaj WPC Coextrudat – Walnut Color",
    slug: "riflaj-wpc-coextrudat-walnut-color",
    category: "riflaje-exterior",
    image: "/p4.jpg",
    images: ["/p4.jpg", "/p4-2.jpg"],
    short:
      "Riflaj WPC premium, coextrudat, generația a II-a, potrivit pentru placarea pereților, tavanelor și gardurilor la exterior.",
    features: [
      "Dimensiuni: 2900mm x 220mm x 26mm",
      "Textură premium",
      "Rezistență UV",
    ],
  },
  {
    title: "Riflaj WPC Coextrudat – Blue Gray",
    slug: "riflaj-wpc-coextrudat-blue-gray",
    category: "riflaje-exterior",
    image: "/p5.jpg",
    images: ["/p5.jpg", "/p5-2.jpg"],
    short:
      "Riflaj WPC premium, coextrudat, generația a II-a, potrivit pentru placarea pereților, tavanelor și gardurilor la exterior.",
    features: [
      "Dimensiuni: 2900mm x 220mm x 26mm",
      "Textură premium",
      "Rezistență UV",
    ],
  },
{
    title: "Riflaj WPC – Coffee Brown",
    slug: "riflaj-wpc-coffee-brown",
    category: "riflaje-exterior",
    image: "/p6.jpg",
    images: ["/p6.jpg", "/p6-2.jpg"],
    short:
      "Riflaj WPC premium, coextrudat, prima generatie, potrivit pentru placarea pereților, tavanelor și gardurilor la exterior.",
    features: [
      "Dimensiuni: 2900mm x 220mm x 26mm",
      "Textură premium",
      "Rezistență UV",

    ],
  },
{
    title: "Riflaj WPC – Light Gray",
    slug: "riflaj-wpc-light-gray",
    category: "riflaje-exterior",
    image: "/p7.jpg",
    images: ["/p7.jpg", "/p7-2.jpg"],
    short:
      "Riflaj WPC premium, coextrudat, prima generatie, potrivit pentru placarea pereților, tavanelor și gardurilor la exterior.",
    features: [
      "Dimensiuni: 2900mm x 220mm x 26mm",
      "Textură premium",
      "Rezistență UV",
    ],
  },
  {
    title: "Profile & Îmbinări",
    slug: "profile-imbinari",
    category: "accesorii",
    image: "/p8.jpg",
    images: ["/p8.jpg", "/p8-2.jpg"],
    short: "Profile pentru colț, terminare și îmbinări curate.",
    features: ["Finisaj curat", "Compatibilitate", "Durabilitate"],
  },
]