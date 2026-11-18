import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { LogoMark } from "@/components/ui/Logo";
import { navLinks, services, siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-brand-100 bg-[#f3faf5] text-ink">
      <div
        className="pointer-events-none absolute -right-36 -top-40 -z-10 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site">
       

        <div className="grid gap-10 py-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12 lg:py-12">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-3" aria-label={siteConfig.name}>
              <LogoMark className="h-12 w-[4.5rem] shrink-0" />
              <span className="leading-tight">
                <span className="block text-base font-extrabold sm:text-lg">{siteConfig.name}</span>
                <span className="mt-1 block text-xs text-ink-soft">{siteConfig.tagline}</span>
              </span>
            </Link>
            <p className="mt-5 text-sm leading-6 text-ink-soft">
              Practical digital solutions designed to help your business innovate, build and grow.
            </p>
            <Link
              href="/about"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-800 transition-colors hover:text-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
            >
              Get to know us <ArrowUpRight size={15} />
            </Link>
          </div>

          <nav aria-label="Footer services">
            <h3 className="text-sm font-bold">What we do</h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.title}>
                  <Link
                    href="/services"
                    className="text-sm text-ink-soft transition-colors hover:text-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-bold">Explore</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-soft transition-colors hover:text-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-bold">Let&apos;s connect</h3>
            <p className="mt-4 text-sm leading-6 text-ink-soft">
              Have a question or an idea to explore? We&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-800 transition-colors hover:text-brand-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
            >
              Visit our contact page <ArrowUpRight size={15} />
            </Link>
            <Link
              href="/services"
              className="mt-3 block text-sm text-ink-soft transition-colors hover:text-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
            >
              Explore our services
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-brand-200 py-5 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Privacy Policy <span className="px-2 text-gray-400">|</span> Terms &amp; Conditions</p>
        </div>
      </div>
    </footer>
  );
}
