import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import PageHeader from "@/components/ui/PageHeader";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

const details = [
  { icon: Mail, label: "Email", value: siteConfig.email },
  { icon: Phone, label: "Phone", value: siteConfig.phone },
  { icon: MapPin, label: "Location", value: siteConfig.address },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Let's Work Together"
        title="Have a Project in Mind?"
        description="Let's turn your idea into a successful product. Send us a message."
      />

      <section className="py-16">
        <div className="container-site grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />

          <ul className="space-y-4">
            {details.map(({ icon: Icon, label, value }) => (
              <li key={label} className="card flex items-center gap-4 p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="text-xs text-ink-soft">{label}</p>
                  <p className="text-sm font-semibold">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
