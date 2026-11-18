import { Check } from "lucide-react";
import type { Metadata } from "next";
import CTA from "@/components/home/CTA";
import PageHeader from "@/components/ui/PageHeader";
import { services } from "@/data/site";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="What We Offer"
        description="Comprehensive technology solutions to help your business grow."
      />

      <section className="py-10 sm:py-14 lg:py-16">
        <div className="container-site grid gap-5 sm:gap-6 md:grid-cols-2">
          {services.map(({ title, description, icon: Icon, details }) => (
            <article key={title} className="card p-5 sm:p-7 md:p-8 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
              <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <Icon size={24} />
              </span>
              <h2 className="mt-4 sm:mt-5 text-lg sm:text-xl font-bold">{title}</h2>
              <p className="mt-2 text-sm sm:text-base text-ink-soft leading-relaxed">{description}</p>
              <ul className="mt-5 space-y-2.5 border-t border-gray-50 pt-4">
                {details.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-snug">
                    <Check size={16} className="mt-0.5 shrink-0 text-brand-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
