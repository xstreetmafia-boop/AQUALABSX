"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { FeaturedFish } from "./creatures/FeaturedFish";
import type { FishEntry } from "./fishData";

export function FishDetailModal({
  fish,
  onClose,
}: {
  fish: FishEntry | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!fish) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [fish, onClose]);

  if (!fish) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#04141f]/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-[24px] bg-white p-8 text-center"
        style={{ boxShadow: "0 30px 80px rgba(4,20,31,0.4)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-[var(--text-muted)] transition hover:bg-black/5"
        >
          <X size={16} />
        </button>

        <div className="mx-auto mb-2 flex justify-center">
          <FeaturedFish variant={fish.id} size={200} />
        </div>

        <h3 className="font-display text-2xl font-black tracking-[-0.02em] text-[var(--foreground)]">
          {fish.name}
        </h3>
        <p className="mt-0.5 text-sm text-[var(--text-muted-dim)] italic">{fish.latin}</p>

        <div className="mx-auto my-5 flex max-w-xs items-center justify-between border-t border-b border-black/10 py-3 font-mono text-[0.65rem] tracking-[0.14em] text-[var(--text-muted)] uppercase">
          <span>{fish.origin}</span>
          <span>{fish.stock}</span>
          <span className="font-display text-base font-black tracking-normal text-[var(--ocean-1)] normal-case">
            {fish.price}
          </span>
        </div>

        <p className="mb-6 text-sm leading-relaxed text-[var(--text-muted)]">{fish.caption}</p>

        <button
          type="button"
          disabled
          className="w-full cursor-not-allowed rounded-full bg-black/10 px-6 py-3 text-sm font-semibold text-[var(--text-muted-dim)]"
        >
          Add to Cart — Coming Soon
        </button>
      </div>
    </div>
  );
}
