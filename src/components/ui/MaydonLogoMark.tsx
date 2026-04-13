interface Props {
  className?: string;
  size?: number;
}

/**
 * Maydon logo — metallic chrome text "MAYDON" with a dark-blue swoosh.
 * Inspired by the 3D-metallic brand mark style.
 * Compact SVG, no external assets.
 */
export default function MaydonLogoMark({ className, size = 40 }: Props) {
  // Aspect ratio ≈ 3.6 : 1
  const w = size * 3.6;
  const h = size;

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 360 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Maydon logo"
    >
      <defs>
        {/* Metallic text gradient — top highlight → mid silver → bottom shadow */}
        <linearGradient id="ml-chrome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#F0F4F8" />
          <stop offset="25%"  stopColor="#D8DEE6" />
          <stop offset="50%"  stopColor="#B0BCC8" />
          <stop offset="75%"  stopColor="#8896A4" />
          <stop offset="100%" stopColor="#A8B8C8" />
        </linearGradient>

        {/* Subtle top-edge highlight for 3D effect */}
        <linearGradient id="ml-highlight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="40%"  stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        {/* Swoosh gradient — dark navy → teal */}
        <linearGradient id="ml-swoosh" x1="0" y1="0.5" x2="1" y2="0.5">
          <stop offset="0%"   stopColor="#0A1628" />
          <stop offset="50%"  stopColor="#102040" />
          <stop offset="100%" stopColor="#1A3A5C" />
        </linearGradient>

        {/* Glow at swoosh tip */}
        <radialGradient id="ml-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%"   stopColor="#40E8D0" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#40E8D0" stopOpacity="0" />
        </radialGradient>

        {/* Text shadow filter */}
        <filter id="ml-shadow" x="-4%" y="-4%" width="108%" height="116%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* ── Swoosh / wave element ───────────────────────────────── */}
      <path
        d="M 8,42 C 40,38 80,20 130,18 C 180,16 200,32 160,40 C 120,48 60,44 8,42 Z"
        fill="url(#ml-swoosh)"
      />
      {/* Swoosh tail — thin elegant extension */}
      <path
        d="M 130,18 C 155,14 175,12 190,16 Q 200,18 195,22 C 185,20 170,16 150,19"
        fill="url(#ml-swoosh)"
      />
      {/* Glow dot at the swoosh tip */}
      <circle cx="135" cy="19" r="8" fill="url(#ml-glow)" />

      {/* ── "MAYDON" chrome text ────────────────────────────────── */}
      <text
        x="180"
        y="74"
        textAnchor="middle"
        fontFamily="'Inter', 'Segoe UI', 'Arial Black', sans-serif"
        fontWeight="800"
        fontSize="62"
        letterSpacing="6"
        fill="url(#ml-chrome)"
        filter="url(#ml-shadow)"
      >
        MAYDON
      </text>

      {/* Top highlight pass — same text, clipped to upper portion */}
      <text
        x="180"
        y="74"
        textAnchor="middle"
        fontFamily="'Inter', 'Segoe UI', 'Arial Black', sans-serif"
        fontWeight="800"
        fontSize="62"
        letterSpacing="6"
        fill="url(#ml-highlight)"
      >
        MAYDON
      </text>
    </svg>
  );
}
