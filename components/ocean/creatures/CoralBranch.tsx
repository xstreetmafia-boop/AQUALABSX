const BRANCHES = [
  { d: "M0,0 C-4,-30 -18,-40 -22,-70", w: 5 },
  { d: "M0,0 C2,-34 14,-46 10,-78", w: 5 },
  { d: "M0,0 C-10,-20 -8,-40 -16,-58", w: 3.5 },
  { d: "M0,0 C8,-22 6,-38 16,-54", w: 3.5 },
  { d: "M0,0 C-2,-16 4,-28 0,-44", w: 4 },
];

export function CoralBranch({ size = 120, color = "#c23568" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="-40 -90 80 96">
      {BRANCHES.map((b, i) => (
        <path key={i} d={b.d} stroke={color} strokeWidth={b.w} fill="none" strokeLinecap="round" />
      ))}
    </svg>
  );
}
