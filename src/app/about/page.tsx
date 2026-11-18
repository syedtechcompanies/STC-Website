import type { Metadata } from "next";
import CTA from "@/components/home/CTA";
import WorkApproach from "@/components/home/WorkApproach";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "About" };

const values = [
  {
    title: "Web and mobile",
    text: "Websites and mobile apps planned around the audience, features and platforms a project requires.",
  },
  {
    title: "Cloud solutions",
    text: "Cloud databases, authentication and serverless tools for applications that need a backend.",
  },
  {
    title: "Digital marketing",
    text: "SEO, content, social and paid campaign services to support a business's online presence.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About STC"
        title="Technology services for real project needs"
        description="Explore the capabilities listed below and share your requirements to discuss what fits your project."
      />

      <section className="py-10 sm:py-14 lg:py-16">
        <div className="container-site">
          <SectionHeading eyebrow="What We Do" title="A range of digital services" />
          <div className="mt-8 sm:mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {values.map((item) => (
              <div key={item.title} className="card p-5 sm:p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-base sm:text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WorkApproach />
      <CTA />
    </>
  );
}
