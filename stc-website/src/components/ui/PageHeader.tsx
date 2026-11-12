type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-r from-white via-white to-gray-50 border-b border-gray-100/80">
      <div className="container-site py-10 sm:py-14 md:py-18">
        {eyebrow && (
          <span className="inline-block rounded-full bg-brand-50 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-brand-700 border border-brand-100/50">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 sm:mt-5 max-w-2xl text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
          {title}
        </h1>
        {description && (
          <p className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base md:text-lg text-ink-soft leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
