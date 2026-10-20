export default function Arrow({ direction = "up-right" }: { direction?: "up-right" | "down-left" | "down" | "right" }) {
  const rotation = { "up-right": 0, "down-left": 180, down: 135, right: 45 }[direction];
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ verticalAlign: "-2px", transform: `rotate(${rotation}deg)` }}>
      <path d="M3 13 13 3M3 3h10v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
