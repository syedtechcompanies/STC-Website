import PageHeader from "@/components/ui/PageHeader";
import { resources } from "@/data/site";

export const metadata = { title: "Resources" };

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Trusted guides to help you get started"
        description="A short list of official product and search documentation for planning web and cloud projects."
      />

      <section className="py-10 sm:py-14 lg:py-16">
        <div className="container-site grid gap-5 sm:gap-6 sm:grid-cols-2">
          {resources.map((resource) => (
            <article key={resource.href} className="card flex flex-col p-5 sm:p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                {resource.category}
              </p>
              <h2 className="mt-2.5 sm:mt-3 text-base sm:text-lg font-bold leading-snug">{resource.title}</h2>
              <p className="mt-2.5 sm:mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                {resource.description}
              </p>
              <div className="mt-5 pt-3 border-t border-gray-50">
                <a
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-700 hover:underline"
                >
                  Read official guide <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
