import type { Metadata } from "next";
import CTA from "@/components/home/CTA";
import Stats from "@/components/home/Stats";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import { features } from "@/data/site";

export const metadata: Metadata = { title: "About" };

const values = [
  {
    title: "Our Mission",
    text: "To turn ideas into reliable digital products that help businesses grow.",
  },
  {
    title: "Our Vision",
    text: "To be the most trusted technology partner for growing businesses.",
  },
  {
    title: "Our Approach",
    text: "Clear communication, clean code and honest timelines on every project.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About STC"
        title="A Trusted Tech Partner for Your Growth"
        description="At STC, we believe in the power of technology to create better opportunities."
      />

      <section className="py-16">
        <div className="container-site">
          <SectionHeading eyebrow="Who We Are" title="Built on Innovation and Trust" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((item) => (
              <div key={item.title} className="card p-6">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ label, icon: Icon }) => (
              <li key={label} className="card flex items-center gap-4 p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                  <Icon size={20} />
                </span>
                <span className="text-sm font-semibold">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Stats />
      <CTA />
    </>
  );
}
