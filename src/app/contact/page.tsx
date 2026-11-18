import {
  ArrowRight,
  ExternalLink,
  Headphones,
  Handshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import heroImage from "@/data/Images/hero.png";

export const metadata: Metadata = { title: "Contact" };

const locationAddress = "Railway Road, near Sahara Bakers, in Bannu, Pakistan";
const locationCoordinates = "32.9834821,70.607757";
const locationMapUrl = "https://maps.app.goo.gl/CqfY1V9VtQpZfnpW6";
const locationMapEmbedUrl = `https://maps.google.com/maps?q=${locationCoordinates}&z=18&output=embed`;

const contactItems = [
  {
    title: "Phone Number",
    description: "+92 300 1234567",
    note: "Mon - Fri, 9AM - 6PM",
    icon: Phone,
    href: "tel:+923001234567",
    delay: "contact-delay-1",
  },
  {
    title: "Email Address",
    description: "info@syedtech.com",
    note: "We reply within 24h",
    icon: Mail,
    href: "mailto:info@syedtech.com",
    delay: "contact-delay-2",
  },
  {
    title: "Our Location",
    description: locationAddress,
    note: "Pakistan",
    icon: MapPin,
    href: locationMapUrl,
    delay: "contact-delay-3",
  },
  {
    title: "Live Support",
    description: "Quick response",
    note: "Chat with us anytime",
    icon: Headphones,
    href: "mailto:info@syedtech.com",
    delay: "contact-delay-4",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#f7fbf8]">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[72%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/95 via-[46%] to-white/20" />
        <div className="container-site relative flex min-h-[300px] items-center py-9 sm:min-h-[330px] sm:py-12">
          <div className="contact-reveal relative z-10 max-w-[550px]">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#dcf5e5] px-3 py-1.5 text-xs font-bold text-[#064e2b] sm:text-sm">
              <MessageCircle size={15} aria-hidden="true" />
              Contact Us
            </span>
            <h1 className="mt-3 text-[2.4rem] font-extrabold leading-[1.05] tracking-[-0.045em] text-ink sm:text-5xl lg:text-[3.55rem]">
              Let&apos;s Get in Touch
              <span className="block">
                with <span className="text-brand-700">STC</span>
              </span>
            </h1>
            <p className="mt-3 max-w-[440px] text-sm leading-relaxed text-ink sm:text-base">
              Have a question, project in mind, or need support? We&apos;re here
              to help — get in touch with us today!
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                href="#message"
                className="btn-primary px-5 py-2.5 text-xs sm:text-sm"
              >
                <Send size={15} aria-hidden="true" />
                Send Message
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <a
                href="tel:+923001234567"
                className="btn border border-brand-700 bg-white/80 px-5 py-2.5 text-xs text-brand-800 hover:bg-brand-50 sm:text-sm"
              >
                <Phone size={15} aria-hidden="true" />
                Call Us
              </a>
            </div>
          </div>

          <div
            className="pointer-events-none absolute bottom-7 right-[7%] hidden items-end gap-2 sm:flex lg:right-[10%]"
            aria-hidden="true"
          >
            <span className="contact-tile contact-float-1">
              <Mail size={31} strokeWidth={1.8} />
            </span>
            <span className="contact-tile contact-float-2">
              <Phone size={31} strokeWidth={1.8} />
            </span>
            <span className="contact-tile contact-float-3">
              <MapPin size={31} strokeWidth={1.8} />
            </span>
          </div>
          <div
            className="contact-spark absolute right-[39%] top-[24%] hidden text-brand-700 sm:block"
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section
        className="container-site grid gap-3 py-6 sm:grid-cols-2 sm:gap-4 sm:py-8 lg:grid-cols-4"
        aria-label="Contact details"
      >
        {contactItems.map(({ title, description, note, icon: Icon, href, delay }) => (
          <a
            key={title}
            href={href}
            target={title === "Our Location" ? "_blank" : undefined}
            rel={title === "Our Location" ? "noreferrer" : undefined}
            className={`contact-card contact-reveal ${delay} group flex min-h-[94px] items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-lg`}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition duration-300 group-hover:rotate-[-8deg] group-hover:bg-brand-100">
              <Icon size={22} aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-bold text-ink sm:text-sm">
                {title}
              </span>
              <span className="mt-1 block truncate text-sm font-semibold text-ink">
                {description}
              </span>
              <span className="mt-0.5 block text-[11px] text-ink-soft">
                {note}
              </span>
            </span>
          </a>
        ))}
      </section>

      <section className="container-site grid gap-6 pb-10 sm:gap-7 lg:grid-cols-2 lg:pb-12">
        <div className="contact-reveal contact-delay-1 relative min-h-[330px] overflow-hidden rounded-[26px] border border-gray-100 bg-[#e6f4ea] shadow-card sm:min-h-[390px]">
          <iframe
            title="Map showing Syed Tech Company in Bannu, Pakistan"
            src={locationMapEmbedUrl}
            className="absolute inset-0 z-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10" />
          <div className="absolute left-4 top-4 flex max-w-[260px] items-start gap-3 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-lg backdrop-blur sm:left-5 sm:top-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
              <MapPin size={20} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-bold text-ink">
                Syed Tech Company
              </span>
              <span className="mt-1 block text-xs text-ink-soft">
                {locationAddress}
              </span>
              <a
                href={locationMapUrl}
                target="_blank"
                rel="noreferrer"
                className="pointer-events-auto mt-2 inline-flex items-center gap-1 text-xs font-bold text-brand-800 hover:underline"
              >
                View larger map <ExternalLink size={12} aria-hidden="true" />
              </a>
            </span>
          </div>
          <a
            href={locationMapUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-2.5 text-xs font-bold text-brand-800 shadow-md transition hover:bg-brand-50 sm:bottom-5 sm:left-5"
          >
            <MapPin size={15} aria-hidden="true" />
            Open in Google Maps
            <ArrowRight size={14} aria-hidden="true" />
          </a>
          <span
            className="contact-map-pin absolute left-[49%] top-[46%] flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white shadow-lg"
            aria-hidden="true"
          >
            <MapPin size={22} fill="currentColor" />
          </span>
        </div>

        <ContactForm />
      </section>

      <section className="container-site pb-8 sm:pb-10">
        <div className="contact-cta relative isolate flex flex-col gap-5 overflow-hidden rounded-[24px] bg-gradient-to-r from-[#076330] via-[#078341] to-[#0ba45a] px-6 py-7 text-white shadow-[0_14px_35px_rgba(6,99,48,0.2)] sm:flex-row sm:items-center sm:justify-between sm:px-9 sm:py-8">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
            <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border-[34px] border-white/40" />
            <div className="absolute right-[20%] top-[-60%] h-72 w-72 rotate-45 border border-white/50" />
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/10 sm:flex">
              <Handshake size={30} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-xl font-extrabold sm:text-2xl">
                Partner with STC
              </span>
              <span className="mt-1 block text-sm text-white/85">
                Let&apos;s work together to turn your ideas into reality.
              </span>
            </span>
          </div>
          <Link
            href="/contact#message"
            className="btn-light w-fit px-5 py-2.5 text-xs sm:text-sm"
          >
            Get a Quote <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
