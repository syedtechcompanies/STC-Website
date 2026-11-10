import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-8 sm:py-12">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-3xl bg-brand-900 px-8 py-10 text-white sm:px-12">
          {/* decorative building lines */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 w-1/2 bg-[repeating-linear-gradient(120deg,rgba(255,255,255,0.06)_0_2px,transparent_2px_34px)] [clip-path:polygon(35%_0,100%_0,100%_100%,0_100%)]"
          />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-3 text-sm font-medium text-white/90">
                Let&apos;s Work Together <span className="h-px w-16 bg-white/60" />
              </div>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Have a Project in Mind?</h2>
              <p className="mt-2 text-white/85">
                Let&apos;s turn your idea into a successful product.
              </p>
            </div>
            <Link href="/contact" className="btn-light px-8 py-4">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
