const VIEW_W = 1440;
const VIEW_H = 640;

// Three variants of the same curve (identical command structure) so the
// browser can morph smoothly between them — the boundary itself ripples,
// rather than the whole graphic sliding as one rigid block.
const SHORE_REST =
  "M0,360 C180,300 300,430 520,385 C740,340 840,455 1080,400 C1240,365 1340,370 1440,378";
const SHORE_IN =
  "M0,372 C180,314 300,448 520,404 C740,360 840,472 1080,416 C1240,382 1340,386 1440,392";
const SHORE_OUT =
  "M0,350 C180,290 300,418 520,372 C740,328 840,442 1080,388 C1240,354 1340,360 1440,368";

function buildFill(shoreLine: string) {
  return `M0,0 L${shoreLine.slice(1)} L${VIEW_W},0 Z`;
}

const LINE_VALUES = `${SHORE_REST};${SHORE_IN};${SHORE_OUT};${SHORE_REST}`;
const FILL_VALUES = `${buildFill(SHORE_REST)};${buildFill(SHORE_IN)};${buildFill(SHORE_OUT)};${buildFill(SHORE_REST)}`;
const SPLINE = "0.45 0 0.4 1";
const KEY_SPLINES = `${SPLINE};${SPLINE};${SPLINE}`;

// Long sweeping strokes standing in for underwater caustic/marbled texture —
// hand-placed curves rather than a repeating tile, so it doesn't read as a pattern.
const TEXTURE_LINES = [
  "M60,90 C260,150 420,70 640,130 C860,190 1020,110 1240,160",
  "M-40,180 C180,230 360,160 580,210 C820,260 980,190 1260,230",
  "M100,260 C320,200 480,290 700,240 C920,190 1100,270 1340,230",
  "M-20,60 C220,20 380,90 600,50 C840,10 1000,70 1280,40",
  "M40,320 C260,280 440,340 660,300 C900,260 1080,330 1320,300",
];

export function OceanBand() {
  return (
    <div className="relative h-[58vh] min-h-[420px] w-full overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMin slice"
      >
        <defs>
          <linearGradient id="ocean-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a5f80" stopOpacity={1} />
            <stop offset="50%" stopColor="#1494b4" stopOpacity={0.95} />
            <stop offset="85%" stopColor="#3fbcd4" stopOpacity={0.72} />
            <stop offset="100%" stopColor="#4fc7dc" stopOpacity={0.5} />
          </linearGradient>
          <clipPath id="ocean-clip">
            <path d={buildFill(SHORE_REST)}>
              <animate
                attributeName="d"
                values={FILL_VALUES}
                keyTimes="0;0.4;0.7;1"
                calcMode="spline"
                keySplines={KEY_SPLINES}
                dur="7s"
                repeatCount="indefinite"
              />
            </path>
          </clipPath>
        </defs>

        <path d={buildFill(SHORE_REST)} fill="url(#ocean-fill)">
          <animate
            attributeName="d"
            values={FILL_VALUES}
            keyTimes="0;0.4;0.7;1"
            calcMode="spline"
            keySplines={KEY_SPLINES}
            dur="7s"
            repeatCount="indefinite"
          />
        </path>

        <g clipPath="url(#ocean-clip)" stroke="#ffffff" fill="none" strokeWidth={2}>
          {TEXTURE_LINES.map((d, i) => (
            <path key={i} d={d} opacity={0.14} />
          ))}
        </g>

        {/* secondary loose ripple, offset above the main foam line */}
        <path
          d={SHORE_REST}
          transform="translate(0,-16)"
          fill="none"
          stroke="#ffffff"
          strokeWidth={3}
          strokeLinecap="round"
          opacity={0.35}
        >
          <animate
            attributeName="d"
            values={LINE_VALUES}
            keyTimes="0;0.4;0.7;1"
            calcMode="spline"
            keySplines={KEY_SPLINES}
            dur="7s"
            repeatCount="indefinite"
          />
        </path>

        {/* main foam edge */}
        <path
          d={SHORE_REST}
          fill="none"
          stroke="#ffffff"
          strokeWidth={12}
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0 2px 4px rgba(10,60,80,0.25))" }}
        >
          <animate
            attributeName="d"
            values={LINE_VALUES}
            keyTimes="0;0.4;0.7;1"
            calcMode="spline"
            keySplines={KEY_SPLINES}
            dur="7s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
}
