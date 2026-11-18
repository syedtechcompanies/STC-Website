import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-8 sm:py-12">
      <div className="container-site">
        <div className="grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-card lg:min-h-[380px] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col items-start justify-center px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-800">
              <Sparkles size={14} aria-hidden="true" />
              GOOD IDEAS START HERE



            </span>
            <h2 className="mt-5 max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              Got a big idea?
              <span className="block text-brand-700">Let&apos;s make it real.</span>
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-ink-soft sm:text-base sm:leading-7">
              From the first sketch to the finished product, we&apos;ll help you shape the right digital solution for your business.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="btn-primary group px-5 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
              >
                Start a conversation
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-sm font-semibold text-ink-soft transition-colors hover:text-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
              >
                Explore services <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
