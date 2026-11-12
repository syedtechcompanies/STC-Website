import Link from "next/link";
import { LogoMark } from "@/components/ui/Logo";
import { navLinks, services, siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-[#f0f9ff] text-ink">
      <div className="container-site grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr] lg:gap-14 lg:py-12">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 sm:gap-3"
            aria-label={siteConfig.name}
          >
            <LogoMark className="h-10 w-14 sm:h-12 sm:w-16 shrink-0" />
            <span className="leading-tight">
              <span className="block text-base sm:text-lg font-bold text-ink">
                {siteConfig.name}
              </span>
              <span className="mt-0.5 block text-xs text-ink-soft">
                {siteConfig.tagline}
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
            {siteConfig.description}
          </p>
        </div>

        <nav aria-label="Footer pages">
          <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block py-1 text-sm text-ink-soft transition-colors duration-150 hover:text-brand-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">
            Services
          </h2>
          <ul className="mt-4 space-y-2.5">
            {services.map(({ title }) => (
              <li key={title}>
                <Link
                  href="/services"
                  className="inline-block py-1 text-sm text-ink-soft transition-colors duration-150 hover:text-brand-700"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-100/70">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-ink-soft text-center sm:text-left sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
