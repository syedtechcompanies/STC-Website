import Link from "next/link";
import { siteConfig } from "@/data/site";

function LogoMark({ className = "h-12 w-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden="true">
      <path
        d="M8 62C14 28 52 6 104 10C64 14 36 34 22 66Z"
        fill="#0ea5e9"
      />
      <text
        x="22"
        y="62"
        fontSize="54"
        fontWeight="800"
        fontStyle="italic"
        fill="#0b1210"
        fontFamily="Arial, Helvetica, sans-serif"
        letterSpacing="-3"
      >
        STC
      </text>
    </svg>
  );
}

export { LogoMark };

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 sm:gap-3" aria-label={siteConfig.name}>
      <LogoMark className="h-10 w-14 sm:h-12 sm:w-16 shrink-0" />
      <span className="leading-tight">
        <span className="block text-base sm:text-lg font-bold text-ink whitespace-nowrap">{siteConfig.name}</span>
        <span className="hidden min-[360px]:block text-[11px] sm:text-xs text-ink-soft">{siteConfig.tagline}</span>
      </span>
    </Link>
  );
}
