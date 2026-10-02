"use client";

import { useState } from "react";
import { FeaturedFish } from "./creatures/FeaturedFish";
import { FishDetailModal } from "./FishDetailModal";
import { FISH_ENTRIES } from "./fishData";

export function FishShowcase() {
  const [index, setIndex] = useState(0);
  const [detailOpen, setDetailOpen] = useState(false);

  const count = FISH_ENTRIES.length;
  const current = FISH_ENTRIES[index];

  const goTo = (i: number) => setIndex(((i % count) + count) % count);

  return (
    <>
      <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-8">
        <div
          className="relative overflow-hidden rounded-[28px] px-6 py-10 sm:px-10"
          style={{
            background: "linear-gradient(160deg, var(--ocean-1), #073048)",
            boxShadow: "0 30px 70px rgba(4,20,31,0.35)",
          }}
        >
          <p className="mb-8 flex items-center justify-center gap-3 font-mono text-[0.65rem] tracking-[0.28em] text-white/50 uppercase">
            <span className="h-px w-8 bg-white/25" />
            Featured Species
            <span className="h-px w-8 bg-white/25" />
          </p>

          <div className="mb-6 flex items-start justify-between px-1 font-mono text-[0.65rem] tracking-[0.18em] text-white/45 uppercase">
            <span>{current.origin}</span>
            <span>{current.stock}</span>
          </div>

          <div className="relative flex h-[220px] items-center justify-center">
            <span
              key={current.id}
              className="animate-fade-up pointer-events-none absolute font-display text-[clamp(2.5rem,9vw,5rem)] font-black tracking-[-0.04em] whitespace-nowrap text-white/10 select-none"
            >
              {current.name.toUpperCase()}
            </span>

            <button
              type="button"
              onClick={() => setDetailOpen(true)}
              key={`${current.id}-main`}
              className="animate-fade-up relative z-10 transition-transform hover:scale-105"
              aria-label={`View details for ${current.name}`}
            >
              <FeaturedFish variant={current.id} size={230} />
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {FISH_ENTRIES.map((fish, i) => (
              <button
                key={fish.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show ${fish.name}`}
                className="rounded-full transition-all"
                style={{
                  width: i === index ? 20 : 6,
                  height: 6,
                  background: i === index ? "var(--coral-2)" : "rgba(255,255,255,0.3)",
                }}
              />
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-md text-center text-[0.8rem] leading-relaxed text-white/60">
            <span className="font-semibold text-white/80 italic">{current.latin}</span>
            {" — "}
            {current.caption}
          </p>

          <div className="mt-7 flex justify-center">
            <button
              type="button"
              onClick={() => setDetailOpen(true)}
              className="bg-gradient-cta rounded-full px-7 py-2.5 text-sm font-semibold text-[#3a2205]"
              style={{ boxShadow: "0 8px 24px rgba(242,153,74,0.4)" }}
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      <FishDetailModal
        fish={detailOpen ? current : null}
        onClose={() => setDetailOpen(false)}
      />
    </>
  );
}
