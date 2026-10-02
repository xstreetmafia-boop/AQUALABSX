export function Fish({
  size = 48,
  color = "#3d8fd6",
  belly = "#8fd0e8",
  flip = false,
}: {
  size?: number;
  color?: string;
  belly?: string;
  flip?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size * 0.72}
      viewBox="-30 -22 60 44"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <path d="M18,0 C28,-8 32,-10 32,-10 C29,-4 29,4 32,10 C32,10 28,8 18,0 Z" fill={color} />
      <path
        d="M-24,0 C-24,-13 -10,-19 6,-19 C20,-19 28,-9 28,0 C28,9 20,19 6,19 C-10,19 -24,13 -24,0 Z"
        fill={color}
      />
      <path
        d="M-24,0 C-24,7 -12,14 2,15 C-6,10 -10,5 -10,0 C-10,-5 -6,-10 2,-15 C-12,-14 -24,-7 -24,0 Z"
        fill={belly}
      />
      <path d="M10,-14 C14,-18 20,-18 22,-15 C18,-14 14,-12 10,-9 Z" fill={color} opacity={0.9} />
      <circle cx={16} cy={-3} r={4.4} fill="#fff" />
      <circle cx={17.2} cy={-3} r={2.4} fill="#1c2733" />
      <circle cx={16.4} cy={-4} r={0.8} fill="#fff" />
    </svg>
  );
}
