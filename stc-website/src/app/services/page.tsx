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

      <section className="py-16">
        <div className="container-site grid gap-6 md:grid-cols-2">
          {services.map(({ title, description, icon: Icon, details }) => (
            <article key={title} className="card p-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <Icon size={26} />
              </span>
              <h2 className="mt-5 text-xl font-bold">{title}</h2>
              <p className="mt-2 text-ink-soft">{description}</p>
              <ul className="mt-5 space-y-2.5">
                {details.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check size={16} className="mt-0.5 shrink-0 text-brand-700" />
                    {item}
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
