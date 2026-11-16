"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";
import { navLinks } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const closeOnDesktop = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-[0_2px_12px_rgba(15,23,42,0.04)] backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="container-site flex h-[68px] items-center justify-between gap-4 sm:h-[76px]">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`whitespace-nowrap rounded-full px-3 py-2 text-xs font-bold tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 xl:px-3.5 ${
                isActive(link.href)
                  ? "bg-brand-50 text-brand-800"
                  : "text-ink hover:bg-gray-50 hover:text-brand-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/contact"
            className="btn-primary hidden px-4 py-2.5 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 lg:inline-flex xl:px-5 xl:text-sm"
          >
            Get a Quote <ArrowRight size={15} />
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-ink transition-colors hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-gray-100 bg-white shadow-lg shadow-gray-900/5 transition-[max-height,opacity] duration-200 ease-out motion-reduce:transition-none lg:hidden ${
          open ? "max-h-[85svh] opacity-100" : "max-h-0 border-t-transparent opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="container-site flex flex-col gap-1 py-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`rounded-xl px-4 py-3 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-inset ${
                isActive(link.href) ? "bg-brand-50 text-brand-800" : "text-ink hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
            tabIndex={open ? 0 : -1}
          >
            Get a Quote <ArrowRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
