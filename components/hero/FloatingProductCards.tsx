import { Fish, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type CardConfig = {
  variant: "sliver" | "product" | "value" | "center" | "stat";
  rotateY: number;
  translateY: number;
  scale: number;
  z: number;
  blur?: boolean;
};

const CARD_POSITIONS: CardConfig[] = [
  { variant: "sliver", rotateY: 32, translateY: 18, scale: 0.72, z: 0, blur: true },
  { variant: "product", rotateY: 20, translateY: 6, scale: 0.88, z: 1 },
  { variant: "stat", rotateY: 9, translateY: -2, scale: 0.96, z: 2 },
  { variant: "center", rotateY: 0, translateY: -10, scale: 1.08, z: 3 },
  { variant: "value", rotateY: -9, translateY: -2, scale: 0.96, z: 2 },
  { variant: "product", rotateY: -20, translateY: 6, scale: 0.88, z: 1 },
  { variant: "sliver", rotateY: -32, translateY: 18, scale: 0.72, z: 0, blur: true },
];

function Card({
  config,
  index,
  children,
}: {
  config: CardConfig;
  index: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className="animate-fade-up opacity-0"
      style={{
        transform: `perspective(1200px) rotateY(${config.rotateY}deg) translateY(${config.translateY}px) scale(${config.scale})`,
        zIndex: config.z,
        filter: config.blur ? "blur(1.5px)" : undefined,
        animationDelay: `${0.5 + index * 0.08}s`,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
}

function CardShell({
  children,
  dark,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className="w-[150px] rounded-2xl border p-3.5"
      style={{
        background: dark ? "var(--ocean-1)" : "#ffffff",
        borderColor: dark ? "rgba(255,255,255,0.15)" : "rgba(10,109,143,0.1)",
        boxShadow: "0 20px 40px rgba(10,58,77,0.18)",
      }}
    >
      {children}
    </div>
  );
}

function IconBadge({ icon: Icon, dark }: { icon: LucideIcon; dark?: boolean }) {
  return (
    <div
      className="flex h-6 w-6 items-center justify-center rounded-md"
      style={{ background: dark ? "rgba(255,255,255,0.15)" : "rgba(10,109,143,0.1)" }}
    >
      <Icon size={13} color={dark ? "#ffffff" : "var(--ocean-1)"} strokeWidth={2.5} />
    </div>
  );
}

const PRODUCTS = [
  { name: "Clownfish", price: "$24.99", stock: "In Stock" },
  { name: "Yellow Tang", price: "$89.99", stock: "3 Left" },
];

export function FloatingProductCards() {
  return (
    <div className="flex items-end justify-center gap-3">
      {CARD_POSITIONS.map((config, i) => {
        if (config.variant === "sliver") {
          return (
            <Card key={i} config={config} index={i}>
              <CardShell>
                <div className="h-20 w-[70px]" />
              </CardShell>
            </Card>
          );
        }

        if (config.variant === "product") {
          const product = PRODUCTS[(i > 3 ? 1 : 0) % PRODUCTS.length];
          return (
            <Card key={i} config={config} index={i}>
              <CardShell>
                <div className="mb-2.5 flex items-center justify-between">
                  <IconBadge icon={Fish} />
                  <span className="text-[0.6rem] font-semibold text-[var(--ocean-2)] uppercase tracking-wide">
                    {product.stock}
                  </span>
                </div>
                <p className="text-xs font-semibold text-[var(--foreground)]">
                  {product.name}
                </p>
                <p className="mt-1 font-display text-lg font-black text-gradient-accent">
                  {product.price}
                </p>
              </CardShell>
            </Card>
          );
        }

        if (config.variant === "stat") {
          return (
            <Card key={i} config={config} index={i}>
              <CardShell>
                <div className="mb-2.5 flex items-center gap-1.5">
                  <TrendingUp size={13} color="var(--ocean-1)" />
                  <span className="text-[0.6rem] font-semibold text-[var(--text-muted-dim)] uppercase tracking-wide">
                    Live Arrival
                  </span>
                </div>
                <p className="font-display text-2xl font-black text-[var(--foreground)]">
                  98%
                </p>
                <p className="mt-1 text-[0.65rem] text-[var(--text-muted-dim)]">
                  Guaranteed
                </p>
              </CardShell>
            </Card>
          );
        }

        if (config.variant === "center") {
          return (
            <Card key={i} config={config} index={i}>
              <div
                className="flex w-[164px] flex-col items-center rounded-2xl p-5 text-center"
                style={{
                  background: "linear-gradient(160deg, var(--ocean-2), var(--ocean-1))",
                  boxShadow: "0 25px 50px rgba(10,58,77,0.3)",
                }}
              >
                <div
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-full"
                  style={{
                    background: "linear-gradient(135deg, var(--coral-1), var(--coral-2))",
                    boxShadow: "0 0 24px rgba(242,153,74,0.5)",
                  }}
                >
                  <Fish size={18} color="#3a2205" strokeWidth={2.5} />
                </div>
                <p className="text-xs font-semibold text-white">Live Stock</p>
                <p className="mt-1 font-display text-sm font-black text-white/90">
                  Updated Daily
                </p>
              </div>
            </Card>
          );
        }

        return (
          <Card key={i} config={config} index={i}>
            <CardShell dark>
              <IconBadge icon={ShieldCheck} dark />
              <p className="mt-2.5 text-xs leading-snug font-medium text-white">
                <span className="text-[var(--coral-2)]">Hand-selected</span>{" "}
                by marine biologists
              </p>
              <div className="mt-2 flex items-center gap-1">
                <Sparkles size={11} color="var(--coral-2)" />
                <span className="text-[0.6rem] text-white/70">
                  Quarantined 14 days
                </span>
              </div>
            </CardShell>
          </Card>
        );
      })}
    </div>
  );
}
