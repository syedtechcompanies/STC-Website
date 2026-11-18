const steps = [
  {
    number: "01",
    title: "Share the brief",
    description: "Describe your audience, goals, must-have features and constraints.",
  },
  {
    number: "02",
    title: "Define the scope",
    description: "Agree on the deliverables, priorities and project requirements.",
  },
  {
    number: "03",
    title: "Build and review",
    description: "Develop the agreed solution and review progress against the scope.",
  },
  {
    number: "04",
    title: "Prepare to launch",
    description: "Check the finished work and plan handover or next steps together.",
  },
];

export default function WorkApproach() {
  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-700">
            A clear starting point
          </p>
          <h2 className="mt-2.5 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            From brief to launch
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-ink-soft leading-relaxed">
            Every project is different. These steps help make the requirements and next actions
            clear before work begins.
          </p>
        </div>
        <ol className="mt-8 sm:mt-10 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="card p-5 sm:p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
              <span className="inline-block rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-bold tracking-wider text-brand-700">
                {step.number}
              </span>
              <h3 className="mt-3 text-base sm:text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
