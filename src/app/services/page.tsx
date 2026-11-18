import {
  ArrowRight,
  BarChart3,
  Box,
  Code2,
  Monitor,
  Palette,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/data/Images/hero.png";

export const metadata: Metadata = { title: "Services" };

const serviceCards: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built for performance and growth.",
    icon: Code2,
  },
  {
    title: "Mobile App Development",
    description:
      "Intuitive iOS and Android apps designed around your customers.",
    icon: Smartphone,
  },
  {
    title: "Problem Solving",
    description:
      "Expert support for debugging and resolving technical challenges.",
    icon: Wrench,
  },
  {
    title: "UI/UX Design",
    description:
      "Thoughtful, user-friendly experiences for your digital products.",
    icon: Palette,
  },
  {
    title: "Digital Marketing",
    description:
      "SEO and digital campaigns that help more people find your business.",
    icon: BarChart3,
  },
  {
    title: "Desktop Software Development",
    description:
      "Custom desktop software designed around your business workflows.",
    icon: Monitor,
  },
  {
    title: "3D Modeling",
    description:
      "Detailed 3D models for products, prototypes and digital experiences.",
    icon: Box,
  },
];

const results = [
  { value: "500+", label: "Happy Clients" },
  { value: "1,200+", label: "Projects Completed" },
  { value: "10+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate min-h-[190px] overflow-hidden bg-[#f3f6f3] sm:min-h-[205px]">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[72%_46%]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f3f6f3] via-[#f3f6f3]/95 via-[46%] to-[#f3f6f3]/35" />
        <div className="container-site flex min-h-[190px] items-center py-7 sm:min-h-[205px]">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand-700">
              What we do
            </p>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Our Services
            </h1>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
              Innovative IT solutions to help your business thrive.
            </p>
          </div>
        </div>
      </section>

      <section className="container-site py-7 sm:py-9">
        <div className="mb-5 text-center sm:mb-6">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
            Solutions for Every Challenge
          </h2>
          <p className="mt-1 text-sm text-ink-soft">
            The expertise and technology to move your business forward.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="card flex min-h-[120px] items-start gap-4 rounded-xl p-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg sm:p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <Icon size={22} strokeWidth={2} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-ink sm:text-base">
                  {title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft sm:text-sm">
                  {description}
                </p>
                <Link
                  href="/contact"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-700 transition hover:gap-2"
                >
                  Learn More <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-site pb-6">
        <div className="grid grid-cols-2 divide-x divide-brand-100 rounded-xl border border-brand-100 bg-brand-50/70 py-4 sm:grid-cols-4">
          {results.map(({ value, label }) => (
            <div key={label} className="px-2 py-2 text-center">
              <p className="text-xl font-extrabold leading-tight text-brand-800 sm:text-2xl">
                {value}
              </p>
              <p className="mt-1 text-[11px] text-ink-soft sm:text-xs">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-site pb-8 sm:pb-10">
        <div className="flex flex-col items-start justify-between gap-4 rounded-xl bg-gradient-to-r from-brand-900 to-brand-700 px-5 py-5 text-white sm:flex-row sm:items-center sm:px-7">
          <div>
            <h2 className="text-lg font-bold sm:text-xl">
              Ready to get started?
            </h2>
            <p className="mt-1 text-sm text-white/80">
              Let&apos;s build something great together.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-brand-900 transition hover:bg-brand-50"
          >
            Contact Us <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
