"use client";

import { useRef, useState, type FormEvent } from "react";

const RECIPIENT = "info@imperialhealthsystems.com";

const TRIP_TYPES = [
  "Heritage Stays",
  "International Holiday",
  "Mountain Retreat",
  "Backwaters & Beaches",
  "Wildlife & Safari",
  "Corporate / MICE",
  "Honeymoon",
  "Not sure yet — help me plan",
];

const fieldClass =
  "w-full py-3.5 bg-transparent border-0 border-b border-line font-sans text-[15px] text-ink outline-none transition-colors duration-300 focus:border-accent font-normal";

const labelClass =
  "block text-[11px] uppercase text-muted mb-2.5 font-medium";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [label, setLabel] = useState<"idle" | "opening">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = (data.get("subject") || "Trip enquiry").toString();
    const body = [
      `Name:  ${data.get("name") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      `Trip:  ${data.get("type") || ""}`,
      "",
      (data.get("message") || "").toString(),
    ].join("\n");
    const mailto =
      `mailto:${RECIPIENT}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
    setLabel("opening");
    window.location.href = mailto;
    setTimeout(() => setLabel("idle"), 2000);
  };

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <div
        className="grid gap-6 mb-[22px] max-[880px]:grid-cols-1"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        <div>
          <label className={labelClass} style={{ letterSpacing: "0.2em" }}>
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your full name"
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} style={{ letterSpacing: "0.2em" }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div
        className="grid gap-6 mb-[22px] max-[880px]:grid-cols-1"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        <div>
          <label className={labelClass} style={{ letterSpacing: "0.2em" }}>
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+91 ·····"
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} style={{ letterSpacing: "0.2em" }}>
            Type of Trip
          </label>
          <select name="type" className={fieldClass}>
            {TRIP_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-[22px]">
        <label className={labelClass} style={{ letterSpacing: "0.2em" }}>
          Subject
        </label>
        <input
          type="text"
          name="subject"
          placeholder="A 10-day Kerala trip in March, etc."
          className={fieldClass}
        />
      </div>

      <div className="mb-[22px]">
        <label className={labelClass} style={{ letterSpacing: "0.2em" }}>
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Tell us about the trip you have in mind — dates, destinations, who's travelling, any inspiration..."
          className={`${fieldClass} resize-y min-h-[110px]`}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary w-full justify-center"
      >
        {label === "opening" ? "OPENING EMAIL..." : (
          <>
            Send Message <span className="arrow">→</span>
          </>
        )}
      </button>
      <p className="text-xs mt-4 text-center text-muted">
        No spam. We respond within one working day.
      </p>
    </form>
  );
}
