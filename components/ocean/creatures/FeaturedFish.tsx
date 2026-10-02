const VARIANTS = {
  clownfish: { body: "#f2843c", shade: "#d9631f", belly: "#ffcf9e", stripes: true, finColor: "#e8556a" },
  "blue-tang": { body: "#2f6fb0", shade: "#1f4d80", belly: "#7fb8e0", stripes: false, finColor: "#f2c94c" },
  "yellow-tang": { body: "#f2c94c", shade: "#d9a82e", belly: "#fff0c2", stripes: false, finColor: "#e89a2c" },
  "coral-beauty": { body: "#7c5cbf", shade: "#5a3f94", belly: "#f2994a", stripes: false, finColor: "#f2994a" },
} as const;

export type FishVariant = keyof typeof VARIANTS;

export function FeaturedFish({ variant = "clownfish", size = 260 }: { variant?: FishVariant; size?: number }) {
  const c = VARIANTS[variant];

  return (
    <svg width={size} height={size * 0.68} viewBox="-140 -100 280 200">
      <ellipse cx={-40} cy={70} rx={90} ry={14} fill="#04141f" opacity={0.12} />

      <path d="M78,0 C110,-30 132,-38 132,-38 C122,-14 122,14 132,38 C132,38 110,30 78,0 Z" fill={c.finColor} />

      <path
        d="M-104,0 C-104,-52 -46,-78 20,-78 C82,-78 112,-36 112,0 C112,36 82,78 20,78 C-46,78 -104,52 -104,0 Z"
        fill={c.body}
      />
      <path
        d="M-104,0 C-104,28 -52,58 4,62 C-20,42 -32,22 -32,0 C-32,-22 -20,-42 4,-62 C-52,-58 -104,-28 -104,0 Z"
        fill={c.belly}
      />

      {c.stripes && (
        <>
          <path d="M-30,-74 C-40,-74 -48,-40 -48,0 C-48,40 -40,74 -30,74 C-20,74 -12,40 -12,0 C-12,-40 -20,-74 -30,-74 Z" fill="#fff" stroke={c.shade} strokeWidth={4} />
          <path d="M14,-78 C4,-76 -4,-40 -4,0 C-4,40 4,76 14,78 C24,74 32,38 32,0 C32,-38 24,-74 14,-78 Z" fill="#fff" stroke={c.shade} strokeWidth={4} />
          <path d="M58,-64 C50,-60 44,-32 44,0 C44,32 50,60 58,64 C66,58 72,30 72,0 C72,-30 66,-58 58,-64 Z" fill="#fff" stroke={c.shade} strokeWidth={4} />
        </>
      )}

      <path d="M40,-58 C56,-70 76,-72 84,-64 C72,-58 60,-50 48,-40 Z" fill={c.finColor} opacity={0.92} />
      <path d="M40,58 C56,70 76,72 84,64 C72,58 60,50 48,40 Z" fill={c.finColor} opacity={0.92} />

      <circle cx={62} cy={-8} r={17} fill="#fff" />
      <circle cx={68} cy={-8} r={9} fill="#1c2733" />
      <circle cx={65} cy={-11} r={3} fill="#fff" />

      <path d="M-104,0 C-104,-52 -46,-78 20,-78" fill="none" stroke="#fff" strokeWidth={3} opacity={0.35} />
    </svg>
  );
}
