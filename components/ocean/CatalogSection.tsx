"use client";

import { useState } from "react";
import { FeaturedFish } from "./creatures/FeaturedFish";
import { FishDetailModal } from "./FishDetailModal";
import { FISH_ENTRIES, type FishEntry } from "./fishData";

export function CatalogSection() {
  const [open, setOpen] = useState<FishEntry | null>(null);

  return (
    <section className="bg-sand-texture px-6 py-20 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-xs text-gray-400">• catalog</p>

        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-5xl leading-[0.95] font-black text-black sm:text-6xl">
            FISH
            <br />
            COLLECTION
          </h2>
          <p className="text-sm text-gray-500">
            <span className="font-bold text-black">AquaLabsX</span> Now shipping...
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FISH_ENTRIES.map((fish) => (
            <div key={fish.id} className="flex flex-col rounded-md bg-gray-100 p-6">
              <div className="flex flex-1 items-center justify-center py-6">
                <FeaturedFish variant={fish.id} size={140} />
              </div>
              <div className="mb-1 flex items-baseline justify-between">
                <h3 className="font-bold text-black">{fish.name}</h3>
                <button
                  type="button"
                  onClick={() => setOpen(fish)}
                  className="text-xs text-gray-400 underline underline-offset-2 hover:text-gray-600"
                >
                  more info
                </button>
              </div>
              <p className="mb-4 text-sm text-gray-500">
                {fish.price} <span className="ml-2">{fish.stock}</span>
              </p>
              <button
                type="button"
                onClick={() => setOpen(fish)}
                className="rounded-md bg-blue-500 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Buy
              </button>
            </div>
          ))}
        </div>
      </div>

      <FishDetailModal fish={open} onClose={() => setOpen(null)} />
    </section>
  );
}
