"use client";

import {
  ArrowRight,
  BarChart3,
  Code2,
  Database,
  Layers3,
  Palette,
  Search,
  ShoppingCart,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const filters = [
  "All Projects",
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "E-Commerce",
  "Custom Solutions",
] as const;

type ProjectCategory = (typeof filters)[number];
type PreviewKind =
  | "commerce"
  | "mobile"
  | "analytics"
  | "enterprise"
  | "marketing"
  | "fitness"
  | "tasks";

type Project = {
  title: string;
  categories: ProjectCategory[];
  description: string;
  tags: string[];
  preview: PreviewKind;
};

const projects: Project[] = [
  {
    title: "E-Commerce Website",
    categories: ["Web Development", "E-Commerce"],
    description: "An online store concept with a clear product and checkout flow.",
    tags: ["React", "Next.js", "MongoDB"],
    preview: "commerce",
  },
  {
    title: "Customer Mobile App",
    categories: ["Mobile Apps", "UI/UX Design"],
    description: "A mobile experience concept for customer services and updates.",
    tags: ["React Native", "Cloud API", "API"],
    preview: "mobile",
  },
  {
    title: "Analytics Dashboard",
    categories: ["Custom Solutions", "UI/UX Design"],
    description: "A sample dashboard concept for viewing business activity.",
    tags: ["React", "D3.js", "Tailwind CSS"],
    preview: "analytics",
  },
  {
    title: "Enterprise Solution",
    categories: ["Custom Solutions"],
    description: "A scalable workspace concept for everyday business operations.",
    tags: ["Laravel", "MySQL", "PHP"],
    preview: "enterprise",
  },
  {
    title: "Marketing Website",
    categories: ["Web Development", "UI/UX Design"],
    description: "A content-led website concept focused on clear messaging.",
    tags: ["WordPress", "SEO", "Elementor"],
    preview: "marketing",
  },
];

const previewStyles: Record<
  PreviewKind,
  { icon: LucideIcon; background: string; accent: string; bars: string[] }
> = {
  commerce: {
    icon: ShoppingCart,
    background: "from-emerald-100 via-white to-lime-50",
    accent: "text-emerald-700",
    bars: ["h-5", "h-8", "h-6", "h-10"],
  },
  mobile: {
    icon: Smartphone,
    background: "from-green-100 via-white to-teal-50",
    accent: "text-green-700",
    bars: ["h-4", "h-6", "h-8", "h-5"],
  },
  analytics: {
    icon: BarChart3,
    background: "from-slate-100 via-white to-emerald-50",
    accent: "text-emerald-700",
    bars: ["h-6", "h-9", "h-5", "h-10"],
  },
  enterprise: {
    icon: Database,
    background: "from-teal-100 via-white to-green-50",
    accent: "text-teal-700",
    bars: ["h-5", "h-7", "h-9", "h-6"],
  },
  marketing: {
    icon: Search,
    background: "from-emerald-100 via-white to-yellow-50",
    accent: "text-emerald-700",
    bars: ["h-9", "h-6", "h-8", "h-10"],
  },
  fitness: {
    icon: Palette,
    background: "from-green-100 via-white to-cyan-50",
    accent: "text-green-700",
    bars: ["h-6", "h-10", "h-7", "h-9"],
  },
  tasks: {
    icon: Layers3,
    background: "from-slate-100 via-white to-lime-50",
    accent: "text-lime-700",
    bars: ["h-8", "h-6", "h-10", "h-5"],
  },
};

function ProjectPreview({ kind }: { kind: PreviewKind }) {
  const { icon: Icon, background, accent, bars } = previewStyles[kind];

  return (
    <div
      aria-hidden="true"
      className={`relative h-[138px] overflow-hidden bg-gradient-to-br ${background} sm:h-[152px]`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(21,128,61,0.12),transparent_35%)]" />
      <div className="absolute left-3 top-3 flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-700/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-brand-700/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-brand-700/25" />
      </div>
      <div className="absolute inset-x-4 bottom-2 top-7 rounded-t-lg border border-white bg-white/90 p-2.5 shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-100 pb-1">
          <span className="h-1 w-10 rounded-full bg-gray-200" />
          <span className="h-1.5 w-5 rounded-full bg-brand-700/70" />
        </div>
        <div className="mt-2 flex items-end justify-between">
          <div className="flex items-center gap-1.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50">
              <Icon size={17} className={accent} />
            </span>
            <div className="space-y-1">
              <span className="block h-1 w-10 rounded-full bg-gray-300" />
              <span className="block h-1 w-7 rounded-full bg-gray-200" />
            </div>
          </div>
          <div className="flex h-9 items-end gap-1">
            {bars.map((height, index) => (
              <span
                key={index}
                className={`w-2 rounded-t-sm bg-brand-700/70 ${height}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectCategory>("All Projects");

  const visibleProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  return (
    <>
      <section className="container-site pb-7 pt-6 sm:pb-9 sm:pt-7">
        <p className="sr-only">
          These are sample project concepts. Technology tags are suggested options,
          not descriptions of completed client work.
        </p>
        <div className="mb-4 text-center">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
            A Selection of Our Work
          </h2>
          <p className="mt-1 text-sm text-ink-soft">
            A few examples of the digital solutions we can create for you.
          </p>
        </div>
        <div
          aria-label="Filter projects by category"
          className="-mx-1 mb-4 flex justify-center gap-2 overflow-x-auto px-1 pb-2"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 rounded-full border px-3.5 py-2 text-xs font-semibold transition sm:px-4 ${
                activeFilter === filter
                  ? "border-brand-700 bg-brand-700 text-white shadow-sm"
                    : "border-gray-200 bg-white text-ink hover:border-brand-700 hover:text-brand-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className="card flex h-full min-h-[285px] min-w-0 flex-col overflow-hidden rounded-xl transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <ProjectPreview kind={project.preview} />
              <div className="flex flex-1 flex-col p-4">
                <h2 className="text-base font-bold leading-snug">
                  {project.title}
                </h2>
                <p className="mt-1 flex-1 text-xs leading-relaxed text-ink-soft sm:text-sm">
                  {project.description}
                </p>
                <ul
                  aria-label="Suggested technologies"
                  className="mt-3 flex flex-wrap gap-1"
                >
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-brand-50 px-2 py-1 text-[10px] font-medium text-brand-800"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex items-center gap-1.5 border-t border-gray-100 pt-3">
                  <Link
                    href="/contact"
                    className="inline-flex min-w-0 flex-1 items-center justify-center gap-1 rounded-md bg-brand-700 px-2 py-2 text-xs font-semibold text-white transition hover:bg-brand-800"
                  >
                    Discuss a Project <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                  <Link
                    href="/services"
                    aria-label={`Explore services for ${project.title}`}
                    className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2 py-2 text-xs font-semibold text-ink transition hover:border-brand-700 hover:text-brand-700"
                  >
                    <Code2 size={14} aria-hidden="true" /> Services
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

    </>
  );
}
