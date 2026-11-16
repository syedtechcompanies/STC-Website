import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/data/Images/hero.png";
import WatchVideoButton from "@/components/home/WatchVideoButton";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-68px)] overflow-hidden bg-white sm:min-h-[calc(100svh-76px)]">
      <Image
        src={heroImage}
        alt="Bright workspace with a laptop displaying the STC logo"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[65%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/95 via-[42%] to-white/5" />
      <div className="container-site flex flex-1 items-center py-10 sm:py-12">
        <div className="max-w-[560px] animate-fade-in">
          <span className="inline-flex items-center rounded-full bg-[#dcf5e5] px-3 py-1.5 text-xs font-bold text-[#064e2b] sm:text-sm">
            Welcome to STC
          </span>
          <h1 className="mt-3 text-[2.15rem] font-extrabold leading-[1.04] tracking-[-0.045em] text-ink sm:text-5xl lg:text-[3.35rem]">
            Turning Your Ideas
            <span className="block">Into <span className="text-brand-700">Reality</span></span>
          </h1>
          <p className="mt-4 max-w-[470px] text-sm leading-relaxed text-ink sm:text-base">
            We are a modern tech company, dedicated to building innovative solutions for a better tomorrow.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link href="/services" className="btn-primary px-5 py-2.5 text-xs sm:text-sm">
              Explore Our Services <ArrowRight size={15} />
            </Link>
            <WatchVideoButton />
          </div>
        </div>
      </div>
    </section>
  );
}
