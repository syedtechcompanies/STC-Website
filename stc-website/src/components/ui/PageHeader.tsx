type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-r from-white via-white to-gray-100">
      <div className="container-site py-14 sm:py-20">
        <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold">
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-ink-soft">{description}</p>
      </div>
    </section>
  );
}
