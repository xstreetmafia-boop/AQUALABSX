export function Crab({ size = 44, color = "#e8613f", shade = "#c94a2c" }: { size?: number; color?: string; shade?: string }) {
  return (
    <svg width={size} height={size * 0.75} viewBox="-30 -22 60 44">
      <path d="M-26,-4 C-30,-9 -27,-14 -22,-12 C-24,-8 -23,-5 -20,-3 Z" fill={color} />
      <path d="M26,-4 C30,-9 27,-14 22,-12 C24,-8 23,-5 20,-3 Z" fill={color} />
      <circle cx={-22} cy={-13} r={3} fill={color} />
      <circle cx={22} cy={-13} r={3} fill={color} />

      <ellipse cx={0} cy={2} rx={22} ry={14} fill={color} />
      <ellipse cx={0} cy={-1} rx={22} ry={14} fill="none" stroke={shade} strokeWidth={1.4} opacity={0.5} />

      {[-14, -6, 6, 14].map((x, i) => (
        <path
          key={i}
          d={`M${x},13 C${x - 3},18 ${x - 5},20 ${x - 8},23`}
          fill="none"
          stroke={color}
          strokeWidth={3}
          strokeLinecap="round"
        />
      ))}

      <circle cx={-7} cy={-2} r={4.2} fill="#fff" />
      <circle cx={7} cy={-2} r={4.2} fill="#fff" />
      <circle cx={-6} cy={-2} r={2.2} fill="#1c2733" />
      <circle cx={8} cy={-2} r={2.2} fill="#1c2733" />
    </svg>
  );
}
