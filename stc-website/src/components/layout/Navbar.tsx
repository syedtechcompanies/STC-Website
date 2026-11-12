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
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Close mobile menu on Escape key press or resize to desktop
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    function handleResize() {
      if (window.innerWidth >= 1024) setOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="container-site flex h-[70px] sm:h-[76px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative py-2 text-sm font-medium transition-colors duration-150 ease-out ${
                isActive(link.href)
                  ? "text-brand-700"
                  : "text-ink hover:text-brand-700"
              }`}
            >
              {link.label}
              <span
                className={`absolute inset-x-0 -bottom-[13px] h-0.5 origin-center rounded bg-brand-700 transition-transform duration-150 ease-out motion-reduce:transition-none ${
                  isActive(link.href)
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/contact" className="btn-primary hidden sm:inline-flex">
            CONTACT US <ArrowRight size={16} />
          </Link>
          <button
            type="button"
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl text-ink transition-colors duration-150 hover:bg-brand-50 active:bg-brand-100 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <Menu
              size={24}
              aria-hidden="true"
              className={`absolute transition-all duration-200 ease-out motion-reduce:transition-none ${
                open
                  ? "rotate-90 scale-75 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            />
            <X
              size={24}
              aria-hidden="true"
              className={`absolute transition-all duration-200 ease-out motion-reduce:transition-none ${
                open
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-75 opacity-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {open && (
        <div
          className="fixed inset-0 top-[70px] sm:top-[76px] z-40 bg-ink/20 backdrop-blur-sm lg:hidden transition-opacity duration-200"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        id="mobile-navigation"
        aria-hidden={!open}
        className={`absolute inset-x-0 top-full z-50 grid max-h-[calc(100svh_-_70px)] sm:max-h-[calc(100svh_-_76px)] overflow-y-auto shadow-[0_16px_32px_rgba(11,18,16,0.12)] transition-[grid-template-rows,opacity,transform] duration-200 ease-out motion-reduce:transition-none lg:hidden ${
          open
            ? "grid-rows-[1fr] translate-y-0 opacity-100"
            : "grid-rows-[0fr] -translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav
            className="border-t border-gray-100 bg-white"
            aria-label="Mobile"
          >
            <div className="container-site flex flex-col py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3.5 text-base font-medium transition-colors duration-150 ease-out ${
                    isActive(link.href)
                      ? "bg-brand-50 text-brand-700 font-semibold"
                      : "text-ink hover:bg-gray-50 active:bg-gray-100"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full py-3.5 text-base"
                >
                  Contact Us <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}