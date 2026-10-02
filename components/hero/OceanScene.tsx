type Blob = {
  top: string;
  left: string;
  size: number;
  radius: string;
  opacity: number;
  light?: boolean;
};

const BLOBS: Blob[] = [
  { top: "2%", left: "8%", size: 220, radius: "62% 38% 55% 45% / 48% 42% 58% 52%", opacity: 0.1 },
  { top: "10%", left: "38%", size: 280, radius: "45% 55% 40% 60% / 55% 45% 60% 40%", opacity: 0.08, light: true },
  { top: "4%", left: "68%", size: 240, radius: "55% 45% 60% 40% / 40% 60% 45% 55%", opacity: 0.1 },
  { top: "24%", left: "18%", size: 200, radius: "40% 60% 45% 55% / 60% 40% 55% 45%", opacity: 0.08, light: true },
  { top: "30%", left: "55%", size: 260, radius: "58% 42% 52% 48% / 45% 55% 42% 58%", opacity: 0.09 },
  { top: "18%", left: "85%", size: 180, radius: "50% 50% 45% 55% / 55% 45% 50% 50%", opacity: 0.08, light: true },
];

const STARFISH = [
  { top: "20%", left: "10%", size: 24, color: "var(--coral-1)", rotate: -12 },
  { top: "45%", left: "88%", size: 18, color: "var(--coral-1)", rotate: 20 },
  { top: "65%", left: "6%", size: 20, color: "var(--coral-2)", rotate: 8 },
];

function StarfishIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 1.5 L14.7 8.8 L22.5 9 L16.2 13.8 L18.5 21.3 L12 16.9 L5.5 21.3 L7.8 13.8 L1.5 9 L9.3 8.8 Z" />
    </svg>
  );
}

function Bird({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg width="34" height="16" viewBox="0 0 34 16" className={className} style={style}>
      <path
        d="M1 10 C6 2, 11 2, 17 8 C23 2, 28 2, 33 10"
        stroke="#ffffff"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Big rolling lobes, closed close to the crest so this reads as a band, not a
// solid fill that swallows the sand beneath it.
const WAVE_BODY =
  "M0,80 C90,40 160,110 260,65 C360,20 420,100 520,60 C620,15 690,105 790,65 C890,20 950,100 1050,65 C1150,30 1220,75 1280,68 L1280,190 L0,190 Z";
const WAVE_CREST =
  "M0,80 C90,40 160,110 260,65 C360,20 420,100 520,60 C620,15 690,105 790,65 C890,20 950,100 1050,65 C1150,30 1220,75 1280,68";

// Deterministic pseudo-random scatter (sine-based) so SSR and client hydration match exactly.
function scatter(count: number, seed: number) {
  return Array.from({ length: count }, (_, i) => {
    const a = Math.sin(i * 12.9898 + seed) * 43758.5453;
    const b = Math.sin(i * 78.233 + seed * 1.7) * 12321.1234;
    const rand1 = a - Math.floor(a);
    const rand2 = b - Math.floor(b);
    return {
      cx: 40 + rand1 * 1200,
      cy: 55 + rand2 * 75,
      r: 4 + ((i * 5) % 12),
      opacity: 0.12 + rand2 * 0.18,
    };
  });
}

const FOAM_CELLS = scatter(30, 3.1);

function WaveLayer({
  gradientId,
  animationClass,
  animationDelay,
  offsetY = 0,
  scaleY = 1,
}: {
  gradientId: string;
  animationClass: string;
  animationDelay?: string;
  offsetY?: number;
  scaleY?: number;
}) {
  return (
    <svg
      className={`absolute bottom-0 left-0 h-full w-[200%] ${animationClass}`}
      style={{ animationDelay }}
      viewBox="0 0 2560 190"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5fd6b0" />
          <stop offset="35%" stopColor="#22a7c9" />
          <stop offset="100%" stopColor="var(--ocean-1)" />
        </linearGradient>
        <clipPath id={`${gradientId}-clip`}>
          <path d={WAVE_BODY} transform={`translate(0,${offsetY}) scale(1,${scaleY})`} />
        </clipPath>
      </defs>

      <path
        d={WAVE_BODY}
        fill={`url(#${gradientId})`}
        transform={`translate(0,${offsetY}) scale(1,${scaleY})`}
      />
      <path
        d={WAVE_BODY}
        fill={`url(#${gradientId})`}
        transform={`translate(1280,${offsetY}) scale(1,${scaleY})`}
      />

      <g clipPath={`url(#${gradientId}-clip)`} opacity={0.55}>
        {FOAM_CELLS.map((c, i) => (
          <circle
            key={i}
            cx={c.cx}
            cy={c.cy + offsetY}
            r={c.r}
            fill="none"
            stroke="#ffffff"
            strokeWidth={2.5}
            opacity={c.opacity}
          />
        ))}
        {FOAM_CELLS.map((c, i) => (
          <circle
            key={`b-${i}`}
            cx={c.cx + 1280}
            cy={c.cy + offsetY}
            r={c.r}
            fill="none"
            stroke="#ffffff"
            strokeWidth={2.5}
            opacity={c.opacity}
          />
        ))}
      </g>

      <path
        d={WAVE_CREST}
        fill="none"
        stroke="#ffffff"
        strokeWidth={7}
        strokeLinecap="round"
        opacity={0.9}
        transform={`translate(0,${offsetY}) scale(1,${scaleY})`}
        style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.6))" }}
      />
      <path
        d={WAVE_CREST}
        fill="none"
        stroke="#ffffff"
        strokeWidth={7}
        strokeLinecap="round"
        opacity={0.9}
        transform={`translate(1280,${offsetY}) scale(1,${scaleY})`}
        style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.6))" }}
      />
    </svg>
  );
}

export function OceanScene() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, var(--ocean-1) 0%, var(--ocean-2) 55%, var(--ocean-3) 100%)",
        }}
      />

      {BLOBS.map((blob, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: blob.top,
            left: blob.left,
            width: blob.size,
            height: blob.size,
            borderRadius: blob.radius,
            background: blob.light
              ? "rgba(255,255,255,0.5)"
              : "rgba(4,45,60,0.5)",
            opacity: blob.opacity,
            filter: "blur(2px)",
          }}
        />
      ))}

      <Bird className="animate-bob-slow absolute top-[8%] left-[14%]" />
      <Bird className="animate-bob-slow absolute top-[16%] left-[80%]" style={{ animationDelay: "1.5s" }} />
      <Bird className="animate-bob-slow absolute top-[28%] left-[6%]" style={{ animationDelay: "0.8s" }} />

      <div className="absolute inset-x-0 bottom-0" style={{ height: "26%" }}>
        <div
          className="absolute inset-x-0 bottom-0 h-full"
          style={{
            background:
              "linear-gradient(180deg, var(--sand-wet) 0%, var(--sand-2) 22%, var(--sand-1) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(120,90,45,0.35) 1px, transparent 1.5px)",
            backgroundSize: "14px 14px",
          }}
        />

        {STARFISH.map((s, i) => (
          <div
            key={i}
            className="absolute"
            style={{ top: s.top, left: s.left, transform: `rotate(${s.rotate}deg)` }}
          >
            <StarfishIcon size={s.size} color={s.color} />
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-[26%] h-[170px]">
        <div className="animate-wave-surge-slow absolute inset-0">
          <WaveLayer gradientId="wave-back" animationClass="animate-drift-slow" scaleY={0.9} offsetY={-14} />
        </div>
        <div className="animate-wave-surge absolute inset-0">
          <WaveLayer gradientId="wave-front" animationClass="animate-drift-mid" offsetY={16} />
        </div>
      </div>
    </div>
  );
}
