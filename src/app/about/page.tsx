"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Award,
  Eye,
  Handshake,
  Layers,
  LifeBuoy,
  Lightbulb,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import frameImage from "@/data/Images/frame.png";
import teamImage from "@/data/Images/team-collaboration.jpg";

// ---------- Small helper components (animations) ----------

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms */
  delay?: number;
  className?: string;
};

/**
 * Fades + lifts its children in once, when they scroll into view.
 * Only animates opacity/transform. Disabled for prefers-reduced-motion.
 */
function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-[opacity,transform] duration-500 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

type CountUpProps = {
  to: number;
  suffix?: string;
  /** Animation length in ms */
  duration?: number;
};

/**
 * Counts from 0 to `to` once, when visible. Screen readers get the final
 * value immediately; reduced-motion users see it without animation.
 */
function CountUp({ to, suffix = "", duration = 1500 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out
          setValue(Math.round(to * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, duration]);

  return (
    <span ref={ref}>
      <span className="sr-only">
        {to}
        {suffix}
      </span>
      <span aria-hidden="true" className="tabular-nums">
        {value}
        {suffix}
      </span>
    </span>
  );
}

// ---------- Page data ----------

// TODO: replace with REAL numbers before launch. Do not publish made-up stats.
const stats = [
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 30, suffix: "+", label: "Happy clients" },
  { value: 5, suffix: "+", label: "Years of experience" },
  { value: 10, suffix: "+", label: "Team members" },
];

const pillars = [
  {
    title: "Our Mission",
    icon: Rocket,
    text: "To deliver innovative, scalable and affordable tech solutions that empower businesses.",
  },
  {
    title: "Our Vision",
    icon: Eye,
    text: "To become a leading technology partner recognized for innovation and trust.",
  },
];

// TODO: edit these so they match what STC really offers.
const reasons = [
  {
    title: "Affordable pricing",
    icon: Wallet,
    text: "Clear quotes with no hidden costs, built around your budget.",
  },
  {
    title: "Fast delivery",
    icon: Zap,
    text: "Short build cycles and regular demos, so you see progress early.",
  },
  {
    title: "Secure and reliable",
    icon: ShieldCheck,
    text: "Safe code, tested releases and dependable hosting.",
  },
  {
    title: "Built to scale",
    icon: Layers,
    text: "Solutions that keep working as your business and traffic grow.",
  },
  {
    title: "Clear communication",
    icon: MessageCircle,
    text: "One point of contact and honest updates at every step.",
  },
  {
    title: "Support after launch",
    icon: LifeBuoy,
    text: "We stay available for fixes, updates and new features.",
  },
];

const steps = [
  { title: "Discover", text: "We learn your goals, users and requirements." },
  {
    title: "Design",
    text: "Wireframes and visuals you approve before we build.",
  },
  {
    title: "Develop",
    text: "Clean, tested code delivered in small milestones.",
  },
  { title: "Test", text: "We check speed, security and every device size." },
  {
    title: "Launch and support",
    text: "We go live together and keep improving.",
  },
];

const values = [
  {
    title: "Innovation",
    description: "Always explore new technologies.",
    icon: Lightbulb,
  },
  {
    title: "Integrity",
    description: "Build trust through honesty.",
    icon: Handshake,
  },
  { title: "Collaboration", description: "Grow together.", icon: Users },
  { title: "Excellence", description: "Deliver the best.", icon: Award },
];

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-3 text-brand-700">
        <span aria-hidden="true" className="h-px w-10 bg-brand-600" />
        <h2 className="text-xl font-extrabold sm:text-2xl">{title}</h2>
        <span aria-hidden="true" className="h-px w-10 bg-brand-600" />
      </div>
      <p className="mx-auto mt-2 max-w-xl text-sm text-ink-soft sm:text-base">
        {subtitle}
      </p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-white">
        <Image
          src={frameImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/95 via-[48%] to-white/5" />
        <div className="container-site flex min-h-[260px] items-center py-10 sm:min-h-[300px] lg:min-h-[340px]">
          <Reveal className="max-w-[570px]">
            <nav
              aria-label="Breadcrumb"
              className="mb-3 text-xs font-medium text-ink-soft sm:text-sm"
            >
              <Link href="/" className="hover:text-brand-700">
                Home
              </Link>
              <span aria-hidden="true" className="mx-2">
                /
              </span>
              <span aria-current="page" className="text-brand-700">
                About
              </span>
            </nav>
            <span className="inline-flex rounded-full bg-[#dcf5e5] px-3 py-1.5 text-xs font-bold text-[#064e2b] sm:text-sm">
              About STC
            </span>
            <h1 className="mt-3 text-3xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Building a Smarter
              <br />
              Digital Future <span className="text-brand-700">Together</span>
            </h1>
            <p className="mt-4 max-w-[480px] text-base leading-relaxed text-ink">
              We are a dedicated tech company, focused on innovation, quality
              and long-term client success.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Who we are */}
      <section className="container-site grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-[0.95fr_1fr] lg:gap-12">
        <div className="relative aspect-[1.42] overflow-hidden rounded-2xl shadow-card">
          <Image
            src={teamImage}
            alt="STC team collaborating around a laptop"
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover"
          />
        </div>
        <div>
          <span
            aria-hidden="true"
            className="mb-3 block h-0.5 w-24 bg-brand-600"
          />
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Who We Are?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            STC (Syed Tech Company) is a modern technology company that provides
            innovative and reliable digital solutions. We specialize in web
            development, mobile app development, cloud solutions and IT
            consulting to help businesses grow in the digital world.
          </p>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            With a passion for technology and a commitment to excellence, we
            turn ideas into reality.
          </p>
          <Link
            href="/services"
            className="btn-primary group mt-6 inline-flex px-5 py-2.5 text-sm"
          >
            View Our Services
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
            />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section
        aria-label="STC in numbers"
        className="container-site pb-12 sm:pb-16"
      >
        <dl className="grid grid-cols-2 gap-y-8 rounded-2xl bg-brand-900 px-4 py-8 text-center text-white sm:px-8 lg:grid-cols-4">
          {stats.map(({ value, suffix, label }, i) => (
            <Reveal key={label} delay={i * 100}>
              <dd className="text-3xl font-extrabold sm:text-4xl">
                <CountUp to={value} suffix={suffix} />
              </dd>
              <dt className="mt-1 text-sm text-white/80 sm:text-base">
                {label}
              </dt>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* Mission and vision */}
      <section className="container-site grid gap-4 pb-12 sm:grid-cols-2 sm:pb-16">
        {pillars.map(({ title, icon: Icon, text }) => (
          <article
            key={title}
            className="flex items-center gap-4 rounded-2xl border border-[#dcefe2] bg-[#eaf8ef] p-5 sm:p-6"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#d8f2e1] text-brand-700">
              <Icon size={30} />
            </span>
            <div>
              <h2 className="text-lg font-extrabold text-ink sm:text-xl">
                {title}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft sm:text-base">
                {text}
              </p>
            </div>
          </article>
        ))}
      </section>

      {/* Why choose us */}
      <section className="container-site pb-12 sm:pb-16">
        <SectionHeading
          title="Why Choose Us"
          subtitle="What you can expect when you work with STC"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ title, icon: Icon, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 100} className="h-full">
              <article className="h-full rounded-xl border border-[#e0f0e5] bg-white p-5 transition duration-200 hover:-translate-y-1 hover:shadow-card motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d8f2e1] text-brand-700">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 text-base font-extrabold text-ink">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="container-site pb-12 sm:pb-16">
        <SectionHeading
          title="How We Work"
          subtitle="A simple process from first call to launch day"
        />
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(({ title, text }, i) => (
            <li key={title}>
              <Reveal delay={i * 100} className="h-full">
                <div className="h-full rounded-xl border border-[#e0f0e5] bg-[#f1faf4] p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 text-base font-extrabold text-[#064e2b]">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* Values */}
      <section className="container-site pb-12 sm:pb-16">
        <SectionHeading
          title="Our Values"
          subtitle="The core values that drive our success"
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {values.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="flex min-h-[130px] flex-col items-center justify-center rounded-xl border border-[#e0f0e5] bg-[#f1faf4] px-3 py-5 text-center transition-colors duration-200 hover:bg-[#e8f7ed] motion-reduce:transition-none"
            >
              <Icon
                size={28}
                className="text-brand-700"
                fill="currentColor"
                strokeWidth={1.8}
              />
              <h3 className="mt-3 text-sm font-extrabold text-[#064e2b] sm:text-base">
                {title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-site pb-12 sm:pb-16">
        <div className="relative isolate overflow-hidden rounded-2xl bg-brand-900 px-5 py-6 text-white sm:px-8 sm:py-8">
          <Image
            src={frameImage}
            alt=""
            fill
            sizes="100vw"
            className="-z-20 object-cover object-[70%_center]"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#00652f] via-[#087a3d]/95 to-[#052719]/55" />
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/10">
                <Rocket size={32} strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-xs font-semibold text-white/90 sm:text-sm">
                  Let&apos;s Grow Together
                </p>
                <h2 className="mt-1 text-lg font-extrabold sm:text-xl">
                  Partner with STC for your next project.
                </h2>
              </div>
            </div>
            <Link
              href="/contact"
              className="btn-light group shrink-0 self-start px-5 py-2.5 text-sm sm:self-center"
            >
              Contact Us
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
