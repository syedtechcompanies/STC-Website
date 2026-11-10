import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { posts } from "@/data/site";

export const metadata: Metadata = { title: "Blog" };

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Insights from the STC Team"
        description="Practical articles on web, mobile, cloud and growth."
      />

      <section className="py-16">
        <div className="container-site grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="card flex flex-col p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                {post.category}
              </p>
              <h2 className="mt-3 text-lg font-bold leading-snug">{post.title}</h2>
              <p className="mt-3 flex-1 text-sm text-ink-soft">{post.excerpt}</p>
              <time dateTime={post.date} className="mt-5 text-xs text-ink-soft">
                {formatDate(post.date)}
              </time>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
