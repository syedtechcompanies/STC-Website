import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { features } from "@/data/site";

function BuildingVisual() {
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full" role="img" aria-label="STC office building">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cfe3f5" />
          <stop offset="1" stopColor="#eaf3fb" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b5d7c" />
          <stop offset="1" stopColor="#1f3a54" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#sky)" />
      <path d="M150 40L370 0V230L150 250Z" fill="url(#glass)" />
      {Array.from({ length: 7 }).map((_, i) => (
        <line key={i} x1="150" x2="370" y1={70 + i * 25} y2={28 + i * 29} stroke="#8fb0cf" strokeOpacity="0.35" />
      ))}
      <text
        x="170"
        y="120"
        fontSize="44"
        fontWeight="800"
        fontStyle="italic"
        fill="#fff"
        fontFamily="Arial, Helvetica, sans-serif"
        transform="rotate(-6 170 120)"
      >
        STC
      </text>
      <ellipse cx="60" cy="200" rx="70" ry="60" fill="#2f7d3e" />
      <ellipse cx="120" cy="220" rx="50" ry="50" fill="#256a33" />
      <ellipse cx="330" cy="235" rx="60" ry="35" fill="#2f7d3e" />
      <rect x="0" y="238" width="400" height="22" fill="#374151" />
    </svg>
  );
}

export default function AboutPreview() {
  return (
    <section className="py-8 sm:py-12">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[1fr_1fr_0.7fr]">
        <div className="relative pb-4 pl-4">
          <span className="absolute bottom-0 left-0 top-6 w-8 rounded-l-3xl bg-brand-700" />
          <span className="absolute bottom-0 right-8 h-5 w-2/3 rounded-b-3xl bg-brand-700" />
          <div className="relative aspect-[16/11] overflow-hidden rounded-3xl shadow-card">
            <BuildingVisual />
          </div>
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About STC"
            title="A Trusted Tech Partner for Your Growth"
          />
          <p className="mt-4 text-sm leading-relaxed text-ink">
            At STC, we believe in the power of technology to create better opportunities. Our
            team is passionate about delivering high-quality solutions.
          </p>
          <Link href="/about" className="btn-primary mt-6">
            Learn More <ArrowRight size={16} />
          </Link>
        </div>

        <ul className="space-y-4 border-gray-200 lg:border-l lg:pl-8">
          {features.map(({ label, icon: Icon }) => (
            <li key={label} className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <Icon size={20} />
              </span>
              <span className="text-sm font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
