"use client";

import { useEffect, useState } from "react";

const TAGLINES = [
  "Marine Ornamentals",
  "Ornamentales Marinos",
  "Poissons Marins",
  "Meerestiere",
  "海水観賞魚",
  "海洋观赏鱼",
  "Pesci Marini Ornamentali",
  "해양 관상어",
];

export function BrandMark() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TAGLINES.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="pointer-events-none flex flex-col items-center text-center">
      <h1
        className="font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-none font-black tracking-[-0.04em] text-white"
        style={{ textShadow: "0 6px 28px rgba(5,40,55,0.4)" }}
      >
        AQUALABSX
      </h1>
      <div className="mt-4 h-[1.4em] overflow-hidden">
        <p
          key={index}
          className="animate-fade-up font-mono text-[0.8rem] tracking-[0.24em] text-white/90 uppercase opacity-0"
          style={{ textShadow: "0 2px 10px rgba(5,40,55,0.35)" }}
        >
          {TAGLINES[index]}
        </p>
      </div>
    </div>
  );
}
