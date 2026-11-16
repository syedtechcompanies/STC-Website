"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import {
  ArrowRight,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Code2,
  Box,
  Monitor,
  Palette,
  Smartphone,
  Wrench,
  X,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useOutsideClick } from "@/hooks/use-outside-click";

type CardData = {
  category?: string;
  title: string;
  description: string;
  iconKey: string;
  image: StaticImageData;
  content: React.ReactNode;
};

const serviceIcons: Record<string, LucideIcon> = {
  "Web Development": Code2,
  "Mobile App Development": Smartphone,
  "Problem Solving": Wrench,
  "Digital Marketing": BarChart3,
  "UI/UX Design": Palette,
  "Desktop Software Development": Monitor,
  "3D Modeling": Box,
};

const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
}>({
  onCardClose: () => {},
});

export const Carousel = ({
  items,
  initialScroll = 0,
}: {
  items: React.ReactNode[];
  initialScroll?: number;
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselId = useId();
  const prefersReducedMotion = useReducedMotion();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScrollability = useCallback(() => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = carousel;
    const carouselLeft = carousel.getBoundingClientRect().left;
    const cards = Array.from(carousel.children);
    const visibleIndex = cards.findIndex(
      (card) => card.getBoundingClientRect().right > carouselLeft + 1,
    );

    setCanScrollLeft(scrollLeft > 1);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    setCurrentIndex(Math.max(0, visibleIndex));
  }, []);

  useEffect(() => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollLeft = initialScroll;
    checkScrollability();
  }, [checkScrollability, initialScroll]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", checkScrollability);
      return () => window.removeEventListener("resize", checkScrollability);
    }

    const observer = new ResizeObserver(checkScrollability);
    observer.observe(carousel);
    Array.from(carousel.children).forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [checkScrollability, items.length]);

  const scrollToCard = useCallback(
    (index: number) => {
      const carousel = carouselRef.current;
      const card = carousel?.children.item(index);
      if (!carousel || !card) return;

      const offset =
        carousel.scrollLeft +
        card.getBoundingClientRect().left -
        carousel.getBoundingClientRect().left;
      carousel.scrollTo({
        left: offset,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    },
    [prefersReducedMotion],
  );

  const handleCardClose = useCallback(
    (index: number) => {
      scrollToCard(Math.min(index + 1, items.length - 1));
    },
    [items.length, scrollToCard],
  );

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose }}>
      <div className="w-full">
        <div
          ref={carouselRef}
          onScroll={checkScrollability}
          id={`services-carousel-${carouselId}`}
          role="region"
          aria-label="Our services"
          tabIndex={0}
          className="services-carousel-scroll flex w-full snap-x snap-proximity gap-4 overflow-x-auto overscroll-x-contain px-1 py-6 scroll-smooth touch-pan-x sm:gap-5 sm:px-2"
        >
          {items.map((item, index) => (
            <motion.div
              key={`card-${index}`}
              initial={false}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: prefersReducedMotion ? 0 : 0.45,
                  delay: prefersReducedMotion ? 0 : 0.07 * index,
                  ease: "easeOut",
                },
              }}
              className="shrink-0 snap-start"
            >
              {item}
            </motion.div>
          ))}
        </div>

        <div className="mt-1 flex items-center justify-between gap-4">
          <p
            className="text-xs font-medium text-ink-soft"
            aria-live="polite"
            aria-atomic="true"
          >
            {currentIndex + 1} of {items.length} services
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Scroll services left"
              aria-controls={`services-carousel-${carouselId}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-[background-color,border-color,color,transform] duration-200 hover:border-brand-100 hover:bg-brand-50 hover:text-brand-800 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transform-none motion-reduce:transition-none"
              onClick={() => scrollToCard(Math.max(0, currentIndex - 1))}
              disabled={!canScrollLeft}
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Scroll services right"
              aria-controls={`services-carousel-${carouselId}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-[background-color,border-color,color,transform] duration-200 hover:border-brand-100 hover:bg-brand-50 hover:text-brand-800 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transform-none motion-reduce:transition-none"
              onClick={() => scrollToCard(Math.min(currentIndex + 1, items.length - 1))}
              disabled={!canScrollRight}
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: CardData;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);
  const { onCardClose } = useContext(CarouselContext);
  const Icon = serviceIcons[card.iconKey];
  const prefersReducedMotion = useReducedMotion();

  if (!Icon) {
    throw new Error(`No service icon is registered for "${card.iconKey}".`);
  }

  const handleClose = useCallback(() => {
    setOpen(false);
    onCardClose(index);
  }, [index, onCardClose]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [handleClose, open]);

  useEffect(() => {
    if (open) {
      closeButtonRef.current?.focus();
      wasOpen.current = true;
    } else if (wasOpen.current) {
      triggerRef.current?.focus();
      wasOpen.current = false;
    }
  }, [open]);

  useOutsideClick(containerRef, handleClose, open);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            key={`service-modal-${index}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/70 p-3 backdrop-blur-sm sm:p-5"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: prefersReducedMotion ? 0 : 18,
                scale: prefersReducedMotion ? 1 : 0.98,
              }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                y: prefersReducedMotion ? 0 : 12,
                scale: prefersReducedMotion ? 1 : 0.98,
              }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`service-modal-title-${index}`}
              tabIndex={-1}
              className="relative mx-auto my-2 h-fit max-h-[calc(100vh-1.5rem)] w-full max-w-5xl overflow-y-auto overscroll-contain rounded-2xl bg-white p-4 font-sans shadow-2xl sm:my-4 sm:max-h-[calc(100vh-2.5rem)] sm:rounded-3xl sm:p-6 md:p-10"
            >
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close service details"
                className="sticky top-1 z-10 ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-brand-900 text-white transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                onClick={handleClose}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
              {card.category && (
                <motion.p
                  layoutId={layout ? `category-${card.title}` : undefined}
                  className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700 sm:text-sm"
                >
                  {card.category}
                </motion.p>
              )}
              <motion.h2
                id={`service-modal-title-${index}`}
                layoutId={layout ? `title-${card.title}` : undefined}
                className="mt-3 text-2xl font-bold leading-tight text-ink sm:text-3xl md:mt-4 md:text-5xl"
              >
                {card.title}
              </motion.h2>
              <div className="py-5 sm:py-8 md:py-10">{card.content}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        ref={triggerRef}
        type="button"
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={() => setOpen(true)}
        aria-label={`View ${card.title} service details`}
        aria-haspopup="dialog"
        aria-expanded={open}
        whileHover={prefersReducedMotion ? undefined : { y: -4 }}
        whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
        className="group relative z-10 flex h-[19rem] w-[84vw] max-w-[18rem] shrink-0 flex-col items-start justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 p-5 text-left shadow-card transition-shadow duration-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-4 sm:h-[23rem] sm:w-72 sm:p-6 lg:h-[26rem] lg:w-80"
      >
        <Image
          src={card.image}
          alt=""
          fill
          sizes="(max-width: 640px) 84vw, 320px"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-30 bg-black/0 transition-colors duration-300 group-hover:bg-black/60 group-focus-visible:bg-black/60 motion-reduce:transition-none" />
        <Icon
          aria-hidden="true"
          strokeWidth={1.2}
          className="pointer-events-none absolute -right-6 top-16 z-20 h-40 w-40 text-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none sm:-right-8 sm:h-52 sm:w-52 lg:h-56 lg:w-56"
        />

        <div className="relative z-40 translate-y-2 opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transform-none motion-reduce:transition-none">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur sm:h-12 sm:w-12">
            <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
          </span>
          {card.category && (
            <motion.p
              layoutId={layout ? `category-${card.title}` : undefined}
              className="mt-4 text-left font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80 sm:text-xs"
            >
              {card.category}
            </motion.p>
          )}
        </div>

        <div className="relative z-40 translate-y-2 opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transform-none motion-reduce:transition-none">
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="max-w-xs text-left font-sans text-lg font-semibold leading-snug text-white sm:text-xl lg:text-2xl"
          >
            {card.title}
          </motion.p>
        </div>
      </motion.button>
    </>
  );
};

export const ServiceModalContent = ({
  description,
}: {
  description: string;
}) => (
  <div className="rounded-2xl bg-brand-50 p-5 sm:rounded-3xl sm:p-8 md:p-12">
    <p className="mx-auto max-w-3xl font-sans text-base leading-relaxed text-ink-soft sm:text-lg md:text-2xl">
      {description}
    </p>
    <Link
      href="/services"
      className="mx-auto mt-6 flex w-fit max-w-3xl items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-brand-700 shadow-sm transition-[color,background-color,transform] hover:bg-brand-100 hover:text-brand-900 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 sm:mt-8 sm:text-base motion-reduce:transform-none motion-reduce:transition-none"
    >
      Learn more <ArrowRight size={18} aria-hidden="true" />
    </Link>
  </div>
);
