/** Illustrated desk scene (laptop + plant) used in the hero. Swap for a real photo anytime. */
export default function HeroVisual() {
  return (
    <svg
      viewBox="0 0 560 400"
      className="h-auto w-full"
      role="img"
      aria-label="Laptop showing the STC logo on a desk"
    >
      {/* plant */}
      <g transform="translate(70 40)">
        <rect x="40" y="170" width="70" height="110" rx="10" fill="#f3f4f6" stroke="#e5e7eb" />
        <path d="M75 180C60 120 30 90 20 40c35 20 52 60 55 140Z" fill="#2f8f4e" />
        <path d="M75 180C80 110 100 70 140 30c-5 50-25 100-65 150Z" fill="#1f7a3d" />
        <path d="M75 180C70 120 75 70 75 10c20 50 20 110 0 170Z" fill="#46a566" />
        <path d="M75 180C55 140 20 130 0 110c40-4 65 20 75 70Z" fill="#1f7a3d" />
        <path d="M75 180C95 140 130 130 150 115c-40-6-65 20-75 65Z" fill="#2f8f4e" />
      </g>

      {/* pen holder */}
      <rect x="250" y="225" width="44" height="62" rx="6" fill="#374151" />
      <rect x="258" y="190" width="4" height="40" rx="2" fill="#111827" transform="rotate(-8 260 210)" />
      <rect x="268" y="188" width="4" height="42" rx="2" fill="#111827" />
      <rect x="278" y="192" width="4" height="38" rx="2" fill="#111827" transform="rotate(8 280 210)" />

      {/* laptop screen */}
      <g transform="rotate(-6 400 190)">
        <rect x="300" y="60" width="240" height="160" rx="10" fill="#0b1210" stroke="#d1d5db" strokeWidth="4" />
        <path d="M352 150C358 120 395 98 440 102C405 108 385 125 372 152Z" fill="#0f7a3a" />
        <text
          x="368"
          y="152"
          fontSize="46"
          fontWeight="800"
          fontStyle="italic"
          fill="#ffffff"
          fontFamily="Arial, Helvetica, sans-serif"
          letterSpacing="-2"
        >
          STC
        </text>
      </g>

      {/* laptop base */}
      <path d="M290 262L520 232L548 262L310 296Z" fill="#e5e7eb" stroke="#d1d5db" />
      <path d="M312 270L510 245L526 262L326 284Z" fill="#cbd5e1" />

      {/* desk */}
      <rect x="0" y="292" width="560" height="14" fill="#f3f4f6" />
      <rect x="0" y="306" width="560" height="94" fill="#ffffff" />

      {/* phone */}
      <rect x="470" y="300" width="80" height="40" rx="8" fill="#1f2937" transform="rotate(-8 510 320)" />
    </svg>
  );
}
