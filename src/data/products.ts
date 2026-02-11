export type Product = {
  title: string
  slug: string
  category: "riflaje" | "deck" | "fatade" | "accesorii"
  image: string
  badge?: string
}

export const products: Product[] = [
  { title: "Riflaj WPC Premium – Nuc", slug: "riflaj-wpc-nuc", category: "riflaje", image: "/p1.jpg", badge: "Popular" },
  { title: "Riflaj WPC Premium – Grafit", slug: "riflaj-wpc-grafit", category: "riflaje", image: "/p2.jpg" },

  { title: "Deck WPC – Teak", slug: "deck-wpc-teak", category: "deck", image: "/p3.jpg", badge: "Nou" },
  { title: "Deck WPC – Walnut", slug: "deck-wpc-walnut", category: "deck", image: "/p4.jpg" },

  { title: "Sistem Fațadă WPC – Line", slug: "fatada-wpc-line", category: "fatade", image: "/p5.jpg" },
  { title: "Sistem Fațadă WPC – Panel", slug: "fatada-wpc-panel", category: "fatade", image: "/p6.jpg" },

  { title: "Clips + Șuruburi inox", slug: "clips-suruburi-inox", category: "accesorii", image: "/p7.jpg" },
  { title: "Profile & Îmbinări", slug: "profile-imbinari", category: "accesorii", image: "/p8.jpg" },
]
