export type ProductCategory =
  | "panouri-decorative"
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
    title: "Panou Decorativ Premium – Nuc Greenwood",
    slug: "panou-decorativ-premium-nuc-greenwood",
    category: "panouri-decorative",
    image: "/p19.jpg",
    images: ["/p19.jpg"],
    badge: "Premium",
    short:
      "Panou decorativ premium din WPC, cu finisaj Nuc Greenwood și aspect cald de lemn natural. Este ideal pentru amenajarea pereților de accent din living, dormitor, hol, birou, hotel sau spații comerciale.",
    features: [
      "Dimensiuni: 2900 × 1220 × 5 mm",
      "Material: WPC",
      "Culoare și finisaj: Nuc Greenwood",
      "Greutate: 12,8 kg/panou",
      "Montaj: direct pe perete cu adeziv tip silicon",
      "Debitare ușoară cu cutterul",
      "Rezistent la umezeală",
      "Ignifug",
      "Întreținere ușoară",
      "Potrivit pentru pereți și tavane",
      "Recomandat pentru living, dormitor, hol, baie și bucătărie",
      "Potrivit pentru birouri, hoteluri și spații comerciale",
      "Accesorii și profile decorative disponibile",
    ],
  },
 {
    title: "Panou Decorativ Premium – Imitație Marmură",
    slug: "panou-decorativ-premium-imitatie-marmura",
    category: "panouri-decorative",
    image: "/p18.jpg",
    images: ["/p18.jpg"],
    badge: "Popular",
    short:
      "Panou decorativ premium din WPC, cu finisaj inspirat de marmura naturală. Oferă un aspect elegant și rafinat și este potrivit pentru pereți de accent, băi, bucătării, livinguri, recepții, hoteluri și spații comerciale.",
    features: [
      "Dimensiuni: 2900 × 1220 × 5 mm",
      "Material: WPC",
      "Finisaj: Imitație marmură",
      "Greutate: 12,8 kg/panou",
      "Montaj: direct pe perete cu adeziv tip silicon",
      "Debitare ușoară cu cutterul",
      "Rezistent la umezeală",
      "Ignifug",
      "Întreținere ușoară",
      "Potrivit pentru pereți și tavane",
      "Recomandat pentru living, dormitor, hol, baie și bucătărie",
      "Potrivit pentru hoteluri, recepții și spații comerciale",
      "Accesorii și profile decorative disponibile",
    ],
  },
 {
    title: "Panou Decorativ Premium – Gri Antracit",
    slug: "panou-decorativ-premium-gri-antracit",
    category: "panouri-decorative",
    image: "/p17.jpg",
    images: ["/p17.jpg"],
    badge: "Premium",
    short:
      "Panou decorativ premium din WPC, în nuanță gri antracit, ideal pentru amenajări moderne, minimaliste sau industriale. Poate fi utilizat pentru placarea pereților și tavanelor în spații rezidențiale și comerciale.",
    features: [
      "Dimensiuni: 2900 × 1220 × 5 mm",
      "Material: WPC",
      "Culoare și finisaj: Gri antracit",
      "Greutate: 12,8 kg/panou",
      "Montaj: direct pe perete cu adeziv tip silicon",
      "Debitare ușoară cu cutterul",
      "Rezistent la umezeală",
      "Ignifug",
      "Întreținere ușoară",
      "Potrivit pentru pereți și tavane",
      "Recomandat pentru living, dormitor, hol, baie și bucătărie",
      "Potrivit pentru birouri și spații comerciale",
      "Accesorii și profile decorative disponibile",
    ],
  },
  {
    title: "Panou Decorativ Premium – Alb",
    slug: "panou-decorativ-premium-alb",
    category: "panouri-decorative",
    image: "/p14.jpg",
    images: ["/p14.jpg"],
    badge: "Premium",
    short:
      "Panou decorativ premium din WPC, cu finisaj alb, luminos și minimalist. Este ideal pentru transformarea rapidă a pereților și tavanelor din living, dormitor, hol, baie, bucătărie, birou sau spații comerciale.",
    features: [
      "Dimensiuni: 2900 × 1220 × 5 mm",
      "Material: WPC",
      "Culoare și finisaj: Alb",
      "Greutate: 12,8 kg/panou",
      "Montaj: direct pe perete cu adeziv tip silicon",
      "Debitare ușoară cu cutterul",
      "Rezistent la umezeală",
      "Ignifug",
      "Întreținere ușoară",
      "Potrivit pentru pereți și tavane",
      "Recomandat pentru living, dormitor, hol, baie și bucătărie",
      "Potrivit pentru birouri și spații comerciale",
      "Accesorii și profile decorative disponibile",
    ],
  },
  {
    title: "Panou Decorativ Premium – Imitație Piatră",
    slug: "panou-decorativ-premium-imitatie-piatra",
    category: "panouri-decorative",
    image: "/p15.jpg",
    images: ["/p15.jpg"],
    badge: "Premium",
    short:
      "Panou decorativ premium din WPC, cu finisaj inspirat de piatra naturală. Oferă pereților un aspect elegant și modern și este potrivit pentru pereți de accent, recepții, livinguri, holuri, băi, bucătării și spații comerciale.",
    features: [
      "Dimensiuni: 2900 × 1220 × 5 mm",
      "Material: WPC",
      "Finisaj: Imitație piatră",
      "Greutate: 12,8 kg/panou",
      "Montaj: direct pe perete cu adeziv tip silicon",
      "Debitare ușoară cu cutterul",
      "Rezistent la umezeală",
      "Ignifug",
      "Întreținere ușoară",
      "Potrivit pentru pereți și tavane",
      "Recomandat pentru living, dormitor, hol, baie și bucătărie",
      "Potrivit pentru birouri, recepții și spații comerciale",
      "Accesorii și profile decorative disponibile",
    ],
  },
  {
    title: "Panou Decorativ Premium – Imitație Țesătură",
    slug: "panou-decorativ-premium-imitatie-tesatura",
    category: "panouri-decorative",
    image: "/p16.jpg",
    images: ["/p16.jpg"],
    badge: "Premium",
    short:
      "Panou decorativ premium din WPC, cu finisaj care imită textura unei țesături elegante. Creează o atmosferă sofisticată și confortabilă, potrivită pentru dormitoare, livinguri, birouri, hoteluri și spații comerciale.",
    features: [
      "Dimensiuni: 2900 × 1220 × 5 mm",
      "Material: WPC",
      "Finisaj: Imitație țesătură",
      "Greutate: 12,8 kg/panou",
      "Montaj: direct pe perete cu adeziv tip silicon",
      "Debitare ușoară cu cutterul",
      "Rezistent la umezeală",
      "Ignifug",
      "Întreținere ușoară",
      "Potrivit pentru pereți și tavane",
      "Recomandat pentru living, dormitor, hol, baie și bucătărie",
      "Potrivit pentru birouri, hoteluri și spații comerciale",
      "Accesorii și profile decorative disponibile",
    ],
  },
 
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
      "Dimensiuni: 2900 × 168 × 24 mm",
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
      "Dimensiuni: 2900 × 168 × 24 mm",
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
      "Dimensiuni: 2900 × 168 × 24 mm",
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
      "Dimensiuni: 2900 × 220 × 26 mm",
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
      "Dimensiuni: 2900 × 220 × 26 mm",
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
      "Dimensiuni: 2900 × 220 × 26 mm",
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
      "Dimensiuni: 2900 × 220 × 26 mm",
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
      "Dimensiuni: 2900 × 25 × 25 mm",
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
      "Dimensiuni: 2900 × 25 × 25 mm",
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
      "Dimensiuni: 2900 × 25 × 25 mm",
      "Compatibilitate",
      "Durabilitate",
    ],
  },
]