import Link from "next/link";
import { siteConfig } from "@/data/site";

function LogoMark({
  className = "h-12 w-16",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden="true">
      <path
        d="M8 62C14 28 52 6 104 10C64 14 36 34 22 66Z"
        fill={light ? "#ffffff" : "#15803d"}
      />
      <text
        x="22"
        y="62"
        fontSize="54"
        fontWeight="800"
        fontStyle="italic"
        fill={light ? "#ffffff" : "#0b1210"}
        fontFamily="Arial, Helvetica, sans-serif"
        letterSpacing="-3"
      >
        STC
      </text>
    </svg>
  );
}

export { LogoMark };

export default function Logo({
  compact = false,
  light = false,
}: {
  compact?: boolean;
  light?: boolean;
}) {
  return (
    <Link href="/" className="flex items-center gap-2.5 sm:gap-3" aria-label={siteConfig.name}>
      <LogoMark
        light={light}
        className={`${compact ? "h-8 w-12 sm:h-9 sm:w-14 lg:h-12 lg:w-16" : "h-10 w-14 sm:h-12 sm:w-16"} shrink-0`}
      />
      <span className="leading-tight">
        <span
          className={`block font-bold whitespace-nowrap ${
            light ? "text-white" : "text-ink"
          } ${
            compact ? "text-sm lg:text-lg" : "text-base sm:text-lg"
          }`}
        >
          {siteConfig.name}
        </span>
        <span
          className={`text-[11px] ${light ? "text-white/75" : "text-ink-soft"} ${
            compact ? "hidden lg:block sm:text-xs" : "hidden min-[360px]:block sm:text-xs"
          }`}
        >
          {siteConfig.tagline}
        </span>
      </span>
    </Link>
  );
}
