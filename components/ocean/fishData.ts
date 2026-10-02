import type { FishVariant } from "./creatures/FeaturedFish";

export type FishEntry = {
  id: FishVariant;
  name: string;
  latin: string;
  origin: string;
  price: string;
  stock: string;
  caption: string;
};

export const FISH_ENTRIES: FishEntry[] = [
  {
    id: "clownfish",
    name: "Clownfish",
    latin: "Amphiprion ocellaris",
    origin: "Indo-Pacific",
    price: "$24.99",
    stock: "In Stock",
    caption:
      "A hardy, reef-safe classic — perfect for beginner tanks and famously symbiotic with anemones.",
  },
  {
    id: "blue-tang",
    name: "Blue Tang",
    latin: "Paracanthurus hepatus",
    origin: "Indo-Pacific",
    price: "$89.99",
    stock: "3 Left",
    caption:
      "A vibrant, active swimmer that thrives in established reef tanks with plenty of open water.",
  },
  {
    id: "yellow-tang",
    name: "Yellow Tang",
    latin: "Zebrasoma flavescens",
    origin: "Hawaii",
    price: "$64.99",
    stock: "In Stock",
    caption:
      "A bright algae-grazer that adds constant motion and color to any mid-to-large reef system.",
  },
  {
    id: "coral-beauty",
    name: "Coral Beauty",
    latin: "Centropyge bispinosa",
    origin: "Western Pacific",
    price: "$54.99",
    stock: "5 Left",
    caption:
      "A compact dwarf angelfish with rich purple tones — peaceful enough for most reef communities.",
  },
];
