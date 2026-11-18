import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-8 sm:py-12">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-brand-900 px-6 py-8 sm:px-10 sm:py-10 md:px-12 text-white shadow-xl">
          {/* decorative background lines */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-full sm:w-1/2 bg-[repeating-linear-gradient(120deg,rgba(255,255,255,0.06)_0_2px,transparent_2px_34px)] [clip-path:polygon(35%_0,100%_0,100%_100%,0_100%)] opacity-60 sm:opacity-100"
          />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-white/90">
                Start a Conversation <span className="h-px w-12 sm:w-16 bg-white/60" />
              </div>
              <h2 className="mt-2.5 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                Have an idea to discuss?
              </h2>
              <p className="mt-2 text-sm sm:text-base text-white/85 leading-relaxed">
                Share what you need and the details you already know.
              </p>
            </div>
            <div className="w-full sm:w-auto">
              <Link href="/contact" className="btn-light w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 inline-flex justify-center text-center">
                Discuss Your Project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
