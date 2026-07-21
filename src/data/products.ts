export type ProductCategory =
  | "deck"
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
    title:
      "Placă Deck Lemn Compozit (WPC) Coffee Brown – 146 × 25 × 2900 mm",
    slug: "placa-deck-wpc-coffee-brown-146x25x2900",
    category: "deck",
    image: "/p11.jpg",
    images: ["/p11.jpg", "/p11-2.jpg"],
    badge: "Standard",
    short:
      "Placa Deck WPC Coffee Brown este o soluție elegantă și rezistentă pentru amenajarea teraselor, aleilor, balcoanelor, foișoarelor și altor spații exterioare. Aspectul cald, inspirat de lemnul natural, este completat de avantajele materialului compozit: întreținere redusă, stabilitate și rezistență excelentă la factorii de mediu.",
    features: [
      "Dimensiuni: 2900 × 146 × 25 mm",
      "Culoare: Coffee Brown",
      "Compoziție: 60% lemn, 30% HDPE, 10% aditivi",
      "Construcție: profil cu 4 goluri dreptunghiulare",
      "Greutate: 2,3 kg/ml",
      "Densitate: 713,5 kg/m³",
      "Absorbție apă (24h): 2,8%",
      "Umflare (24h): 0,4%",
      "Umflare la 100°C (2h): 0,08%",
      "Modul de elasticitate: 3387 N/mm²",
      "Rezistență la îndoire: 2654 MPa",
    ],
  },

  {
    title:
      "Placă Deck Lemn Compozit (WPC) Light Gray – 146 × 25 × 2900 mm",
    slug: "placa-deck-wpc-light-gray-146x25x2900",
    category: "deck",
    image: "/p12.jpg",
    images: ["/p12.jpg", "/p12-2.jpg"],
    badge: "Standard",
    short:
      "Placa Deck WPC Light Gray oferă un design modern și elegant pentru terase, alei, piscine, foișoare și alte spații exterioare. Nuanța contemporană Light Gray se îmbină perfect cu arhitectura modernă, iar materialul compozit asigură durabilitate ridicată și întreținere minimă.",
    features: [
      "Dimensiuni: 2900 × 146 × 25 mm",
      "Culoare: Light Gray",
      "Compoziție: 60% lemn, 30% HDPE, 10% aditivi",
      "Construcție: profil cu 4 goluri dreptunghiulare",
      "Greutate: 2,3 kg/ml",
      "Densitate: 713,5 kg/m³",
      "Absorbție apă (24h): 2,8%",
      "Umflare (24h): 0,4%",
      "Umflare la 100°C (2h): 0,08%",
      "Modul de elasticitate: 3387 N/mm²",
      "Rezistență la îndoire: 2654 MPa",
    ],
  },
{
  title:
    "Placă Deck WPC Coextrudat Gen. II Walnut Color – 150 × 22 × 2900 mm",
  slug: "placa-deck-wpc-coextrudat-walnut-color-150x22x2900",
  category: "deck",
  image: "/p13.jpg",
  images: ["/p13.jpg", "/p13-2.jpg"],
  badge: "Premium",
  short:
    "Placa Deck WPC Coextrudat Generația II Walnut Color este soluția premium pentru terase, piscine, balcoane, foișoare și alte amenajări exterioare. Stratul protector coextrudat oferă o rezistență superioară la razele UV, pete, zgârieturi și umezeală, iar finisajul cu aspect natural de lemn păstrează un design elegant pentru mulți ani.",
  features: [
    "Dimensiuni: 2900 × 150 × 22 mm",
    "Culoare: Walnut Color",
    "Generația II – Coextrudat",
    "Compoziție: 60% fibre de lemn, 30% HDPE, 10% aditivi",
    "Greutate: 2,9 kg/ml",
    "Rezistență ridicată la UV",
    "Rezistență superioară la zgârieturi",
    "Rezistență la pete și umezeală",
    "Întreținere redusă",
    "Ideal pentru terase, piscine, alei, balcoane și foișoare",
  ],
},
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
      "Riflaj WPC premium, prima generație, potrivit pentru placarea pereților, tavanelor și gardurilor la exterior.",
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
      "Riflaj WPC premium, prima generație, potrivit pentru placarea pereților, tavanelor și gardurilor la exterior.",
    features: [
      "Dimensiuni: 2900mm x 220mm x 26mm",
      "Textură premium",
      "Rezistență UV",
    ],
  },
  {
    title: "Profil Colțar – Pearl White",
    slug: "profil-coltar-pearl-white",
    category: "accesorii",
    image: "/p8.jpg",
    images: ["/p8.jpg"],
    short:
      "Profil colțar pentru finisarea curată a marginilor și îmbinărilor.",
    features: [
      "Dimensiuni: 2900mm x 25mm x 25mm",
      "Compatibilitate",
      "Durabilitate",
    ],
  },
  {
    title: "Profil Colțar – Stejar Noir",
    slug: "profil-coltar-stejar-noir",
    category: "accesorii",
    image: "/p9.jpg",
    images: ["/p9.jpg"],
    short:
      "Profil colțar pentru finisarea curată a marginilor și îmbinărilor.",
    features: [
      "Dimensiuni: 2900mm x 25mm x 25mm",
      "Compatibilitate",
      "Durabilitate",
    ],
  },
  {
    title: "Profil Colțar – Grey Oak",
    slug: "profil-coltar-grey-oak",
    category: "accesorii",
    image: "/p10.jpg",
    images: ["/p10.jpg"],
    short:
      "Profil colțar pentru finisarea curată a marginilor și îmbinărilor.",
    features: [
      "Dimensiuni: 2900mm x 25mm x 25mm",
      "Compatibilitate",
      "Durabilitate",
    ],
  },
]