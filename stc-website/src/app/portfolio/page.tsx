import type { Metadata } from "next";
import CTA from "@/components/home/CTA";
import PageHeader from "@/components/ui/PageHeader";
import { projects } from "@/data/site";

export const metadata: Metadata = { title: "Portfolio" };

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Projects We Are Proud Of"
        description="A selection of web, mobile, cloud and marketing work delivered by our team."
      />

      <section className="py-16">
        <div className="container-site grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-brand-700 to-brand-900 text-4xl font-extrabold italic text-white/90">
                STC
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                  {project.category}
                </p>
                <h2 className="mt-2 text-lg font-bold">{project.title}</h2>
                <p className="mt-2 text-sm text-ink-soft">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
