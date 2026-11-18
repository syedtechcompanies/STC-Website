import CTA from "@/components/home/CTA";
import PageHeader from "@/components/ui/PageHeader";
import { projectTypes } from "@/data/site";

export const metadata = { title: "Project Ideas" };

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Project Ideas"
        title="What would you like to build?"
        description="These are examples of project scopes—not client case studies. Share your requirements to discuss a solution for your business."
      />

      <section className="py-10 sm:py-14 lg:py-16">
        <div className="container-site grid gap-5 sm:gap-6 sm:grid-cols-2">
          {projectTypes.map((project) => (
            <article
              key={project.title}
              className="card flex flex-col p-5 sm:p-7 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                {project.category}
              </p>
              <h2 className="mt-2 text-base sm:text-lg font-bold">{project.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2 pt-3 border-t border-gray-50">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-ink">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
