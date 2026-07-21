"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "../icons";

const TEAM_SIZES = ["1–10 employees", "11–50 employees", "51–200 employees", "200+ employees"];

const WP_SITE_URL = process.env.NEXT_PUBLIC_WP_SITE_URL ?? "https://cms.trackdots.net";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[13.5px] font-semibold text-gray-700">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

const inputClasses =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[14.5px] text-gray-900 placeholder:text-gray-400 transition-colors focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-gray-100 bg-white p-10 text-center shadow-[0_30px_80px_-20px_rgba(80,63,205,0.2)]">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600">
          <CheckCircle className="h-7 w-7" strokeWidth={1.8} />
        </span>
        <h3 className="mt-5 text-[22px] font-bold text-gray-900">Message Sent</h3>
        <p className="mt-2 max-w-xs text-[14.5px] leading-relaxed text-gray-500">
          Thanks for reaching out — our team typically replies within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("loading");
        const data = Object.fromEntries(new FormData(e.currentTarget));
        try {
          const res = await fetch(`${WP_SITE_URL}/wp-json/trackdots/v1/contact`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          const json = await res.json();
          if (!res.ok || !json.success) throw new Error(json.error ?? "Submission failed");
          setStatus("success");
        } catch {
          setStatus("error");
        }
      }}
      className="rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_30px_80px_-20px_rgba(80,63,205,0.2)] sm:p-10"
    >
      <h3 className="text-[22px] font-bold text-gray-900">Send Us a Message</h3>
      <p className="mt-1.5 text-[14.5px] text-gray-500">We&apos;ll get back to you within one business day.</p>

      <div className="mt-7 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full Name">
            <input required name="name" type="text" placeholder="Jordan Blake" className={inputClasses} />
          </Field>
          <Field label="Work Email">
            <input required name="email" type="email" placeholder="jordan@company.com" className={inputClasses} />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Company">
            <input required name="company" type="text" placeholder="Your company name" className={inputClasses} />
          </Field>
          <Field label="Team Size">
            <select required name="teamSize" defaultValue="" className={inputClasses}>
              <option value="" disabled>
                Select team size
              </option>
              {TEAM_SIZES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="How can we help?">
          <textarea
            required
            name="message"
            rows={4}
            placeholder="Tell us a bit about what you're looking for..."
            className={`${inputClasses} resize-none`}
          />
        </Field>

        {/* Honeypot — hidden from real visitors, bots tend to fill every field */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
          aria-hidden="true"
        />
      </div>

      {status === "error" && (
        <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-[13.5px] font-medium text-red-600">
          Something went wrong sending your message. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-7 flex w-full items-center justify-center gap-2.5 rounded-xl bg-brand-600 px-7 py-4 text-[16px] font-semibold text-white shadow-lg shadow-brand-600/30 transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
        <ArrowRight className="h-4.5 w-4.5" />
      </button>

      <p className="mt-4 text-center text-[12.5px] text-gray-400">
        No spam. No sales pressure. Just a real reply from a real person.
      </p>
    </form>
  );
}
