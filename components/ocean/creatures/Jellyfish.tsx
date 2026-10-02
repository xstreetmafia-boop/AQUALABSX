export function Jellyfish({ size = 160 }: { size?: number }) {
  return (
    <svg width={size} height={size * 1.3} viewBox="-70 -70 140 182">
      <defs>
        <radialGradient id="jelly-glow" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#7fe0e8" stopOpacity={0.9} />
          <stop offset="100%" stopColor="#7fe0e8" stopOpacity={0} />
        </radialGradient>
        <linearGradient id="jelly-bell" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9be9ef" />
          <stop offset="100%" stopColor="#3fb3c4" />
        </linearGradient>
      </defs>

      <circle cx={0} cy={10} r={70} fill="url(#jelly-glow)" />

      <path
        d="M-46,10 C-46,-30 -26,-52 0,-52 C26,-52 46,-30 46,10 C46,22 36,28 0,28 C-36,28 -46,22 -46,10 Z"
        fill="url(#jelly-bell)"
      />
      <path
        d="M-46,10 C-46,-30 -26,-52 0,-52 C26,-52 46,-30 46,10"
        fill="none"
        stroke="#eafcff"
        strokeWidth={3}
        opacity={0.5}
      />
      <path d="M-30,-38 C-24,-46 -14,-50 -4,-50" fill="none" stroke="#eafcff" strokeWidth={2} opacity={0.35} />

      <circle cx={-16} cy={-6} r={12} fill="#fff" />
      <circle cx={16} cy={-6} r={12} fill="#fff" />
      <circle cx={-13} cy={-4} r={6.5} fill="#12222a" />
      <circle cx={19} cy={-4} r={6.5} fill="#12222a" />
      <circle cx={-15} cy={-7} r={2} fill="#fff" />
      <circle cx={17} cy={-7} r={2} fill="#fff" />

      <path d="M-30,26 C-34,50 -24,60 -28,84" stroke="#6a5acd" strokeWidth={5} fill="none" strokeLinecap="round" opacity={0.85} />
      <path d="M-10,28 C-14,54 -6,66 -10,92" stroke="#8a7ff0" strokeWidth={5} fill="none" strokeLinecap="round" opacity={0.85} />
      <path d="M10,28 C14,54 6,66 10,90" stroke="#6a5acd" strokeWidth={5} fill="none" strokeLinecap="round" opacity={0.85} />
      <path d="M30,26 C36,48 26,58 32,80" stroke="#8a7ff0" strokeWidth={5} fill="none" strokeLinecap="round" opacity={0.85} />
      <path
        d="M0,28 C4,58 -8,70 2,98 C6,104 0,110 4,116"
        stroke="#9fe8ee"
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
        opacity={0.6}
      />

      <circle cx={52} cy={40} r={2.5} fill="#eafcff" opacity={0.7} />
      <circle cx={58} cy={30} r={1.5} fill="#eafcff" opacity={0.6} />
    </svg>
  );
}
