import { OceanScene } from "./OceanScene";

const STATS = [
  { value: "500+", label: "Species Stocked" },
  { value: "98%", label: "Live Arrival" },
  { value: "48hr", label: "Express Shipping" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">
      <OceanScene />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-14 px-6">
        <div className="flex flex-col items-center text-center">
          <p
            className="animate-fade-up mb-8 flex items-center gap-2 font-mono text-[0.6rem] tracking-[0.22em] text-white uppercase opacity-0"
            style={{ textShadow: "0 2px 12px rgba(4,45,60,0.35)" }}
          >
            <span className="inline-block h-px w-[18px] bg-white/50" />
            AquaLabsX · Marine Ornamentals
          </p>

          <div className="mb-8">
            <div className="overflow-hidden">
              <div
                className="animate-reveal-up font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] font-black tracking-[-0.05em] text-white opacity-0"
                style={{ textShadow: "0 4px 24px rgba(4,45,60,0.35)" }}
              >
                We source
              </div>
            </div>
            <div className="min-h-[1em] overflow-hidden">
              <div
                className="animate-reveal-up font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] font-black tracking-[-0.05em] opacity-0"
                style={{
                  animationDelay: "0.15s",
                  color: "var(--coral-2)",
                  textShadow: "0 4px 24px rgba(4,45,60,0.35)",
                }}
              >
                living reef art.
              </div>
            </div>
          </div>

          <p
            className="animate-fade-up mb-11 max-w-[46ch] text-[0.9375rem] leading-[1.8] text-white/85 opacity-0"
            style={{ animationDelay: "0.3s", textShadow: "0 2px 10px rgba(4,45,60,0.3)" }}
          >
            Quarantined, hand-selected marine fish, corals, and invertebrates
            — shipped direct from our reef labs to your tank, with a live
            arrival guarantee.
          </p>

          <div
            className="animate-fade-up mb-9 flex w-full max-w-md items-center rounded-2xl border border-white/30 bg-white/10 py-4 opacity-0 backdrop-blur-sm"
            style={{ animationDelay: "0.4s" }}
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-1 flex-col items-center px-2"
                style={{
                  borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.25)" : undefined,
                }}
              >
                <span className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] leading-none font-black tracking-[-0.04em] text-white">
                  {stat.value}
                </span>
                <span className="mt-1 font-mono text-[0.55rem] tracking-[0.1em] text-white/70 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div
            className="animate-fade-up flex items-center gap-3 opacity-0"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="/collections"
              className="rounded-full border border-white/50 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              View Collection
            </a>
            <a
              href="/shop"
              className="bg-gradient-cta rounded-full px-6 py-2.5 text-sm font-semibold text-[#3a2205] shadow-lg"
              style={{ boxShadow: "0 8px 24px rgba(242,153,74,0.45)" }}
            >
              Shop Livestock
            </a>
          </div>
        </div>

        <div className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur-sm">
          <div
            className="animate-pulse-dot h-[7px] w-[7px] rounded-full bg-white"
            style={{ boxShadow: "0 0 8px rgba(255,255,255,0.9)" }}
          />
          <span className="text-[0.6875rem] font-bold tracking-[0.14em] text-white uppercase">
            Inventory synced live
          </span>
        </div>
      </div>
    </section>
  );
}
