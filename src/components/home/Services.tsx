import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/site";

export default function Services() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container-site">
        <SectionHeading
          eyebrow="Our Services"
          title="What We Offer"
          description="Comprehensive technology solutions to help your business grow."
        />

        <div className="mt-10 sm:mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="card flex flex-col p-5 sm:p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <Icon size={24} />
              </span>
              <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-bold">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{description}</p>
              <div className="mt-5 pt-2 border-t border-gray-50">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-all hover:gap-2.5"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
