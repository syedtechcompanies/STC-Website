import ContactForm from "@/components/contact/ContactForm";
import PageHeader from "@/components/ui/PageHeader";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Let's Work Together"
        title="Have a Project in Mind?"
        description="Share a few details about what you need. Add as much or as little project context as you have."
      />

      <section className="py-10 sm:py-14 lg:py-16">
        <div className="container-site grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-10 items-start">
          <ContactForm />

          <aside className="card h-fit p-5 sm:p-7 md:p-8">
            <h2 className="text-base sm:text-lg font-bold">Helpful details to include</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              A little context makes it easier to understand what you have in mind. You can
              include:
            </p>
            <ul className="mt-4 sm:mt-5 list-disc space-y-2.5 sm:space-y-3 pl-5 text-sm text-ink-soft marker:text-brand-700">
              <li>What you want to build or improve</li>
              <li>Who will use it and which platforms you have in mind</li>
              <li>Any features, integrations or launch goals you already know about</li>
            </ul>
            <p className="mt-5 border-t border-gray-100 pt-4 sm:pt-5 text-xs sm:text-sm leading-relaxed text-ink-soft">
              Don&apos;t have all the details yet? Start with your idea and questions.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
