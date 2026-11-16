"use client";

import { ArrowRight, Handshake, Headset, LockKeyhole, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import frameImage from "@/data/Images/frame.png";

const highlights = [
  { title: "Innovative Solutions", icon: ShieldCheck },
  { title: "Expert Support", icon: Headset },
  { title: "Secure & Reliable", icon: LockKeyhole },
  { title: "Long-Term Partnership", icon: Handshake },
];

export default function AboutPreview() {
  const highlightsRef = useRef<HTMLUListElement>(null);
  const [highlightsVisible, setHighlightsVisible] = useState(false);

  useEffect(() => {
    const highlightsElement = highlightsRef.current;
    if (!highlightsElement) return;

    if (!("IntersectionObserver" in window)) {
      setHighlightsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHighlightsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(highlightsElement);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-7 sm:py-9">
      <div className="container-site grid items-center gap-6 lg:grid-cols-[1fr_0.95fr_0.78fr] lg:gap-7">
        <div className="relative mx-auto w-full max-w-[430px] pb-4 pl-4 sm:pb-5 sm:pl-5">
          <span className="absolute left-0 top-3 h-[68%] w-5 rounded-l-2xl bg-brand-700 sm:w-6" />
          <span className="absolute bottom-0 right-1 h-5 w-[42%] rounded-b-2xl bg-brand-700 sm:h-6" />
          <div className="relative aspect-[1.38] overflow-hidden rounded-2xl shadow-card">
            <Image src={frameImage} alt="STC office building" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
          </div>
        </div>

        <div>
          <SectionHeading align="left" eyebrow="About STC" title="A Trusted Tech Partner for Your Growth" />
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            At STC, we believe in the power of technology to create better opportunities. Our team is passionate about delivering high-quality solutions.
          </p>
          <Link href="/about" className="btn-primary mt-4 inline-flex px-5 py-2.5 text-xs sm:text-sm">
            Learn More <ArrowRight size={15} />                   
          </Link>
        </div>

        <ul ref={highlightsRef} className="grid grid-cols-2 gap-3 border-t border-gray-100 pt-4 sm:grid-cols-4 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          {highlights.map(({ title, icon: Icon }, index) => (
            <li
              key={title}
              className={`flex items-center gap-2.5 text-xs font-semibold text-ink transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-x-0 motion-reduce:opacity-100 motion-reduce:transition-none sm:gap-3 sm:text-sm ${
                highlightsVisible ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
              }`}
              style={{ transitionDelay: highlightsVisible ? `${index * 140}ms` : "0ms" }}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 sm:h-10 sm:w-10">
                <Icon size={18} aria-hidden="true" />
              </span>
              <span>{title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
