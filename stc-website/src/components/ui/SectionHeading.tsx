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
      <div
        className={`flex items-center gap-3 text-sm font-semibold text-brand-700 ${
          isCenter ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-10 bg-brand-700" />
        {eyebrow}
        {isCenter && <span className="h-px w-10 bg-brand-700" />}
      </div>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-ink-soft">{description}</p>}
    </div>
  );
}
