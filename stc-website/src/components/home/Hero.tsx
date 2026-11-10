import { ArrowRight } from "lucide-react";
import Link from "next/link";
import HeroVisual from "./HeroVisual";
import WatchVideoButton from "./WatchVideoButton";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-r from-white via-white to-gray-100">
      <div className="container-site grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-ink">
            Welcome to STC
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl">
            Turning Your Ideas
            <br />
            Into <span className="text-brand-700">Reality</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/90">
            We are a modern tech company, dedicated to building innovative solutions for a
            better tomorrow.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link href="/services" className="btn-primary">
              Explore Our Services <ArrowRight size={16} />
            </Link>
            <WatchVideoButton />
          </div>
        </div>

        <div className="mx-auto w-full max-w-xl lg:max-w-none">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
