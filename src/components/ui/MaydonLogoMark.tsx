interface Props {
  className?: string;
  size?: number;
}

/**
 * Maydon logo mark:
 *  – Left arch: blue outer band + purple inner band (two-tone ribbon)
 *  – Right arch: teal/blue outer band + purple inner band
 *  – Orange arc with football at the tip
 *  – Silver magnifying glass in the center valley
 *
 * ViewBox 460 × 460 (square).
 */
export default function MaydonLogoMark({ className, size = 40 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 460 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Maydon logo mark"
    >
      <defs>
        {/* Left arch outer — dark blue → teal */}
        <linearGradient id="mlg-lbo" x1="60" y1="442" x2="170" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#1848B0" />
          <stop offset="100%" stopColor="#40B8E0" />
        </linearGradient>

        {/* Left arch inner — purple */}
        <linearGradient id="mlg-lbi" x1="85" y1="442" x2="192" y2="76" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#5820A0" />
          <stop offset="100%" stopColor="#9040D8" />
        </linearGradient>

        {/* Right arch outer — teal/blue */}
        <linearGradient id="mlg-rbo" x1="238" y1="410" x2="358" y2="168" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#2878C8" />
          <stop offset="100%" stopColor="#44C0E8" />
        </linearGradient>

        {/* Right arch inner — purple */}
        <linearGradient id="mlg-rbi" x1="238" y1="410" x2="340" y2="175" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#5028A8" />
          <stop offset="100%" stopColor="#7840C8" />
        </linearGradient>

        {/* Orange arc */}
        <linearGradient id="mlg-oa" x1="236" y1="412" x2="415" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#B86810" />
          <stop offset="100%" stopColor="#F0A830" />
        </linearGradient>

        {/* Magnifying glass — silver */}
        <linearGradient id="mlg-mg" x1="205" y1="278" x2="272" y2="348" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#C8D8E4" />
          <stop offset="100%" stopColor="#5C7488" />
        </linearGradient>

        {/* Football — spherical shading */}
        <radialGradient id="mlg-fb" cx="40%" cy="34%" r="60%">
          <stop offset="0%"   stopColor="#EEF4FA" />
          <stop offset="50%"  stopColor="#A8BCC8" />
          <stop offset="100%" stopColor="#607080" />
        </radialGradient>
      </defs>

      {/* ── Left arch outer (blue) ──────────────────────────────── */}
      <path
        d="M 60,442 C 12,198 92,8 170,50 C 248,92 262,372 238,410"
        stroke="url(#mlg-lbo)"
        strokeWidth="42"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── Left arch inner (purple) — offset ~22px inward ────────── */}
      <path
        d="M 82,442 C 36,204 114,40 192,76 C 262,110 264,376 240,413"
        stroke="url(#mlg-lbi)"
        strokeWidth="22"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── Right arch outer (teal/blue) ────────────────────────── */}
      <path
        d="M 238,410 C 260,355 322,100 358,168 C 394,236 415,396 405,442"
        stroke="url(#mlg-rbo)"
        strokeWidth="42"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── Right arch inner (purple) — offset ~22px inward ────────── */}
      <path
        d="M 238,410 C 238,352 300,118 336,176 C 372,230 392,392 382,442"
        stroke="url(#mlg-rbi)"
        strokeWidth="22"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── Orange arc (ball trajectory) ────────────────────────── */}
      <path
        d="M 236,412 C 278,322 354,170 400,78 C 410,55 415,42 415,36"
        stroke="url(#mlg-oa)"
        strokeWidth="28"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── Football ─────────────────────────────────────────────── */}
      <circle cx="415" cy="36" r="34" fill="url(#mlg-fb)" />
      <circle cx="415" cy="36" r="34" stroke="#4A6070" strokeWidth="1.5" fill="none" />
      {/* Pentagon patch */}
      <path
        d="M 415,13 L 430,25 L 425,42 L 405,42 L 400,25 Z"
        fill="#1C2830"
        opacity="0.75"
      />
      {/* Side patch hints */}
      <path d="M 398,22 L 402,27" stroke="#1C2830" strokeWidth="1.8" opacity="0.5" strokeLinecap="round"/>
      <path d="M 432,22 L 428,27" stroke="#1C2830" strokeWidth="1.8" opacity="0.5" strokeLinecap="round"/>

      {/* ── Magnifying glass ─────────────────────────────────────── */}
      <circle
        cx="236" cy="314"
        r="30"
        stroke="url(#mlg-mg)"
        strokeWidth="20"
        fill="rgba(140,180,210,0.07)"
      />
      <line
        x1="258" y1="336"
        x2="280" y2="360"
        stroke="url(#mlg-mg)"
        strokeWidth="20"
        strokeLinecap="round"
      />
    </svg>
  );
}
