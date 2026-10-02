import { Jellyfish } from "./creatures/Jellyfish";
import { CoralBranch } from "./creatures/CoralBranch";

const STARS = [
  { top: "8%", left: "12%", size: 2, delay: "0s" },
  { top: "16%", left: "30%", size: 1.5, delay: "0.5s" },
  { top: "10%", left: "62%", size: 2, delay: "1.1s" },
  { top: "22%", left: "80%", size: 1.5, delay: "0.3s" },
  { top: "30%", left: "10%", size: 1.5, delay: "1.6s" },
  { top: "6%", left: "88%", size: 2, delay: "0.8s" },
  { top: "36%", left: "48%", size: 1.5, delay: "1.3s" },
  { top: "14%", left: "45%", size: 1.5, delay: "2s" },
];

const CORAL_CLUSTER_LEFT = [
  { x: -60, size: 130, color: "#c23568" },
  { x: 10, size: 100, color: "#a52456" },
  { x: 70, size: 80, color: "#d94a78" },
];

const CORAL_CLUSTER_RIGHT = [
  { x: -60, size: 90, color: "#d94a78" },
  { x: 10, size: 130, color: "#a52456" },
  { x: 75, size: 100, color: "#c23568" },
];

export function DeepSea() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#04141f]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 38%, #123a4d 0%, #082332 45%, #04141f 80%)",
        }}
      />

      {STARS.map((s, i) => (
        <div
          key={i}
          className="animate-twinkle pointer-events-none absolute rounded-full bg-white"
          style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: s.delay }}
        />
      ))}

      <div className="relative z-10 animate-jelly-float">
        <Jellyfish size={190} />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-[220px] items-end justify-between px-4 sm:px-10">
        <div className="relative h-full w-[260px]">
          {CORAL_CLUSTER_LEFT.map((c, i) => (
            <div key={i} className="absolute bottom-0" style={{ left: c.x + 80 }}>
              <CoralBranch size={c.size} color={c.color} />
            </div>
          ))}
          <div
            className="absolute bottom-0 left-0 h-16 w-full rounded-t-[50%]"
            style={{ background: "#051a26" }}
          />
        </div>
        <div className="relative h-full w-[260px]">
          {CORAL_CLUSTER_RIGHT.map((c, i) => (
            <div key={i} className="absolute bottom-0" style={{ right: c.x + 80 }}>
              <CoralBranch size={c.size} color={c.color} />
            </div>
          ))}
          <div
            className="absolute right-0 bottom-0 h-16 w-full rounded-t-[50%]"
            style={{ background: "#051a26" }}
          />
        </div>
      </div>
    </section>
  );
}
