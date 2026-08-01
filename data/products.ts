export interface Product {
  slug: string;
  name: string;
  price: number;
  family: string;
  description: string;
}

export const products: Product[] = [
  {
    slug: "obsidian-noir",
    name: "Obsidian Noir",
    price: 45000,
    family: "Woody",
    description: "Dark oud and smoked vetiver for the after-hours presence.",
  },
  {
    slug: "champagne-dusk",
    name: "Champagne Dusk",
    price: 38000,
    family: "Oriental",
    description: "Amber and warm vanilla, worn like golden hour.",
  },
  {
    slug: "rose-silence",
    name: "Rose Silence",
    price: 41000,
    family: "Floral",
    description: "Bulgarian rose softened by white musk.",
  },
  {
    slug: "citrus-veil",
    name: "Citrus Veil",
    price: 32000,
    family: "Fresh",
    description: "Bergamot and sea salt for a quiet morning confidence.",
  },
];
