"use client";

import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageSquareText,
  Phone,
  Send,
  UserRound,
} from "lucide-react";
import { useState, type FormEvent } from "react";

const fieldClass =
  "min-w-0 w-full bg-transparent py-3 text-sm text-ink outline-none placeholder:text-gray-500 focus-visible:outline-none";

const fieldShellClass =
  "flex min-w-0 items-center gap-2.5 rounded-xl border border-gray-200 bg-white px-3 transition-colors duration-200 focus-within:border-brand-600 focus-within:ring-2 focus-within:ring-brand-100";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      id="message"
      className="contact-reveal contact-delay-2 scroll-mt-24 rounded-[26px] border border-brand-100 bg-[#f3faf5] p-5 shadow-card sm:p-6"
    >
      <div className="mb-4">
        <span className="inline-flex rounded-full bg-[#dcf5e5] px-3 py-1 text-xs font-bold text-brand-800">
          Send a Message
        </span>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-[1.8rem]">
          Drop Us a <span className="text-brand-700">Message</span>
        </h2>
        <p className="mt-1 text-xs leading-relaxed text-ink-soft sm:text-sm">
          Fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>
      </div>

      {submitted ? (
        <div
          className="flex min-h-[310px] flex-col items-center justify-center rounded-2xl border border-white bg-white p-8 text-center"
          role="status"
          aria-live="polite"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-700">
            <CheckCircle2 size={28} />
          </span>
          <h3 className="mt-4 text-xl font-bold">Thank you for your interest!</h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
            This contact form is a preview and does not send messages yet.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="btn-primary mt-6"
          >
            Back to Form
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-2.5 rounded-2xl border border-white bg-white p-4 sm:p-5"
        >
          <div className="grid gap-2.5 sm:grid-cols-2">
            <label className={fieldShellClass}>
              <UserRound size={17} className="shrink-0 text-ink-soft" aria-hidden="true" />
              <input
                name="name"
                required
                minLength={2}
                maxLength={100}
                placeholder="Your Name *"
                aria-label="Your name"
                autoComplete="name"
                className={fieldClass}
              />
            </label>
            <label className={fieldShellClass}>
              <Mail size={17} className="shrink-0 text-ink-soft" aria-hidden="true" />
              <input
                name="email"
                type="email"
                required
                placeholder="Your Email *"
                aria-label="Your email"
                autoComplete="email"
                className={fieldClass}
              />
            </label>
            <label className={fieldShellClass}>
              <MessageSquareText size={17} className="shrink-0 text-ink-soft" aria-hidden="true" />
              <input
                name="subject"
                maxLength={150}
                placeholder="Subject"
                aria-label="Subject"
                className={fieldClass}
              />
            </label>
            <label className={fieldShellClass}>
              <Phone size={17} className="shrink-0 text-ink-soft" aria-hidden="true" />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                aria-label="Phone number"
                autoComplete="tel"
                className={fieldClass}
              />
            </label>
          </div>
          <label className="flex items-start gap-2.5 rounded-xl border border-gray-200 bg-white px-3">
            <MessageSquareText
              size={17}
              className="mt-3 shrink-0 text-ink-soft"
              aria-hidden="true"
            />
            <textarea
              name="message"
              required
              minLength={10}
              maxLength={2000}
              rows={3}
              placeholder="Your Message *"
              aria-label="Your message"
              className={`${fieldClass} resize-y`}
            />
          </label>
          <p className="px-1 text-[11px] leading-relaxed text-ink-soft">
            Preview form only — your message won&apos;t be sent yet.
          </p>
          <button
            type="submit"
            className="btn-primary inline-flex w-full justify-center rounded-xl py-3"
          >
            <Send size={15} aria-hidden="true" />
            Send Message
            <ArrowRight size={15} aria-hidden="true" />
          </button>
        </form>
      )}
    </div>
  );
}
