import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/data/Images/hero.png";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[min(560px,calc(100svh_-_70px))] sm:min-h-[min(580px,calc(100svh_-_76px))] overflow-hidden bg-white">
      <Image
        src={heroImage}
        alt="STC workspace with a laptop displaying the company logo"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[62%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/95 to-white/90 sm:to-white/20 sm:via-white/90" />
      <div className="container-site flex min-h-[min(560px,calc(100svh_-_70px))] sm:min-h-[min(580px,calc(100svh_-_76px))] items-center py-10 sm:py-14 lg:py-16">
        <div className="max-w-2xl sm:-translate-y-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/90 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-brand-800 shadow-sm backdrop-blur-sm">
            <span
              className="h-2 w-2 rounded-full bg-brand-600 animate-pulse"
              aria-hidden="true"
            />
            Built around your business
          </span>

          <h1 className="mt-5 sm:mt-6 text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] sm:leading-[1.12] tracking-tight text-ink">
            Technology that
            <span className="mt-1 sm:mt-2 block text-brand-700">Moves You Forward</span>
          </h1>

          <p className="mt-4 sm:mt-6 max-w-lg text-base sm:text-lg leading-relaxed sm:leading-8 text-ink/85">
            From web and mobile to cloud and digital marketing, we create
            practical solutions around your goals.
          </p>

          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <Link href="/services" className="btn-primary w-full sm:w-auto text-center justify-center">
              Explore Services <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="btn w-full sm:w-auto text-center justify-center rounded-full border border-gray-200 bg-white text-ink hover:border-brand-700 hover:text-brand-700"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
