const DOTS = [
  [0, -34],
  [20, -16],
  [12, 8],
  [-12, 8],
  [-20, -16],
  [0, -18],
  [10, 20],
  [-10, 20],
  [22, 4],
  [-22, 4],
];

export function Starfish({
  size = 64,
  color = "#e8556a",
  shade = "#c73f54",
}: {
  size?: number;
  color?: string;
  shade?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="-40 -40 80 80">
      <path
        d="M0,-38 C6,-16 10,-10 34,-8 C14,4 10,10 20,34 C4,20 -4,20 -20,34 C-10,10 -14,4 -34,-8 C-10,-10 -6,-16 0,-38 Z"
        fill={color}
      />
      <path
        d="M0,-38 C6,-16 10,-10 34,-8 C14,4 10,10 20,34 C4,20 -4,20 -20,34 C-10,10 -14,4 -34,-8 C-10,-10 -6,-16 0,-38 Z"
        fill="none"
        stroke={shade}
        strokeWidth={1.5}
        opacity={0.4}
      />
      {DOTS.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={1.6} fill="#fff" opacity={0.75} />
      ))}
      <circle cx={-6} cy={-4} r={3.2} fill="#2b1d1f" />
      <circle cx={6} cy={-4} r={3.2} fill="#2b1d1f" />
      <circle cx={-5} cy={-5.2} r={1} fill="#fff" />
      <circle cx={7} cy={-5.2} r={1} fill="#fff" />
      <path d="M-4,4 C-2,7 2,7 4,4" fill="none" stroke="#2b1d1f" strokeWidth={1.6} strokeLinecap="round" />
    </svg>
  );
}
