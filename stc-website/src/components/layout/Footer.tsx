import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { navLinks, siteConfig, socials } from "@/data/site";

const socialIcons = {
  Facebook,
  Twitter,
  LinkedIn: Linkedin,
  YouTube: Youtube,
} as const;

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container-site">
        <div className="flex flex-col items-center justify-between gap-6 border-b border-gray-200 py-8 lg:flex-row">
          <Logo />

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2" aria-label="Footer">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink transition-colors hover:text-brand-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-3">
            {socials.map((social) => {
              const Icon = socialIcons[social.label];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-ink transition hover:bg-brand-700 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <p className="py-6 text-center text-sm text-ink-soft">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
