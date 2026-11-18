"use client";

import { useEffect, useRef, useState } from "react";
import { FolderOpen, Star, Trophy, Users } from "lucide-react";

const stats = [
  { target: 500, suffix: "+", label: "Happy Clients", icon: Users },
  { target: 1000, suffix: "+", compact: true, label: "Projects Completed", icon: FolderOpen },
  { target: 5, suffix: "+", label: "Years Experience", icon: Star },
  { target: 99, suffix: "%", label: "Client Satisfaction", icon: Trophy },
];

function AnimatedStat({
  target,
  suffix,
  compact = false,
  label,
  icon: Icon,
  started,
  delay,
}: {
  target: number;
  suffix: string;
  compact?: boolean;
  label: string;
  icon: typeof Users;
  started: boolean;
  delay: number;
}) {
  const [count, setCount] = useState(target);
  const displayValue = compact && count >= 1000 ? `${Math.floor(count / 1000)}K` : count;

  useEffect(() => {
    if (!started) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(target);
      return;
    }

    let frameId = 0;
    let startTime: number | null = null;
    const delayId = window.setTimeout(() => {
      setCount(0);
      const animate = (time: number) => {
        if (startTime === null) startTime = time;
        const progress = Math.min((time - startTime) / 1400, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(target * easedProgress));
        if (progress < 1) frameId = window.requestAnimationFrame(animate);
      };
      frameId = window.requestAnimationFrame(animate);
    }, delay);

    return () => {
      window.clearTimeout(delayId);
      window.cancelAnimationFrame(frameId);
    };
  }, [delay, started, target]);

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white/80 px-3 py-4 shadow-sm sm:justify-center sm:rounded-none sm:border-0 sm:bg-transparent sm:px-4 sm:py-2 sm:shadow-none">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 sm:h-11 sm:w-11">
        <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
      </span>
      <div>
        <p className="font-mono text-2xl font-bold leading-none tracking-tight text-ink tabular-nums sm:text-[1.75rem]">
          {displayValue}{suffix}
        </p>
        <p className="mt-1.5 text-[10px] font-medium leading-tight text-ink-soft sm:text-xs">{label}</p>
      </div>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (!("IntersectionObserver" in window)) {
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} aria-labelledby="stats-heading" className="py-5 sm:py-8">
      <div className="container-site">
        <div className="rounded-3xl border border-gray-200 bg-[#f7f9f8] p-4 sm:p-6">
          <div className="mb-4 flex items-center gap-2 px-1 sm:mb-5">
            <span className="h-5 w-1 rounded-full bg-brand-600" aria-hidden="true" />
            <h2 id="stats-heading" className="text-xs font-bold uppercase tracking-[0.16em] text-ink-soft">
              Our impact at a glance
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:divide-x sm:divide-gray-200 sm:gap-0">
            {stats.map((stat, index) => (
              <AnimatedStat key={stat.label} {...stat} started={started} delay={index * 120} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
