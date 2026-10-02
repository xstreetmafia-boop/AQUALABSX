const BUMPS = [
  [-14, -6, 11],
  [4, -12, 13],
  [18, -4, 10],
  [-4, 2, 14],
  [-22, 4, 9],
  [24, 6, 8],
];

export function Coral({ size = 56, color = "#f2994a", shade = "#d67a2c" }: { size?: number; color?: string; shade?: string }) {
  return (
    <svg width={size} height={size * 0.7} viewBox="-32 -20 64 40">
      {BUMPS.map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={color} />
      ))}
      {BUMPS.map(([cx, cy, r], i) => (
        <circle key={`h-${i}`} cx={cx} cy={cy - r * 0.2} r={r * 0.28} fill={shade} opacity={0.5} />
      ))}
    </svg>
  );
}
