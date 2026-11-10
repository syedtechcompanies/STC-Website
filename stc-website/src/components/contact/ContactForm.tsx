"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { services } from "@/data/site";
import { submitInquiry } from "@/lib/inquiries";

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-700 focus:ring-2 focus:ring-brand-100";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    setError("");

    try {
      await submitInquiry({
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        phone: String(data.get("phone") ?? ""),
        service: String(data.get("service") ?? ""),
        message: String(data.get("message") ?? ""),
      });
      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card flex flex-col items-center p-10 text-center">
        <CheckCircle2 size={48} className="text-brand-700" />
        <h3 className="mt-4 text-xl font-bold">Thank you!</h3>
        <p className="mt-2 text-sm text-ink-soft">
          We received your message and will get back to you shortly.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-primary mt-6">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required minLength={2} maxLength={100} placeholder="Your name" className={fieldClass} />
        <input name="email" type="email" required placeholder="Email address" className={fieldClass} />
        <input name="phone" type="tel" placeholder="Phone (optional)" className={fieldClass} />
        <select name="service" defaultValue="" className={fieldClass} aria-label="Service">
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.title} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>
      <textarea
        name="message"
        required
        minLength={10}
        maxLength={2000}
        rows={5}
        placeholder="Tell us about your project"
        className={fieldClass}
      />

      {status === "error" && (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <button type="submit" disabled={status === "loading"} className="btn-primary disabled:opacity-60">
        {status === "loading" ? "Sending..." : "Send Message"} <ArrowRight size={16} />
      </button>
    </form>
  );
}
