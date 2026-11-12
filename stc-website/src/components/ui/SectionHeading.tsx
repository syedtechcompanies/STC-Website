type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      {eyebrow && (
        <div
          className={`flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-700 ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-8 sm:w-10 bg-brand-700" />
          {eyebrow}
          {isCenter && <span className="h-px w-8 sm:w-10 bg-brand-700" />}
        </div>
      )}
      <h2 className="mt-2.5 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-2.5 sm:mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-ink-soft">
          {description}
        </p>
      )}
    </div>
  );
}
