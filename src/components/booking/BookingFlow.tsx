"use client";

import { useEffect, useState, type FormEvent } from "react";
import Calendar from "./Calendar";
import { ArrowRight, CheckCircle, Clock, Eye, Users } from "../icons";
import { fetchAvailability, submitBooking } from "@/lib/booking";

const INFO_POINTS = [
  { icon: Eye, label: "Real product, live — not slides" },
  { icon: Users, label: "Tailored to your team's use case" },
  { icon: Clock, label: "30 minutes, one meeting link" },
];

const inputClasses =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[14.5px] text-gray-900 placeholder:text-gray-400 transition-colors focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100";

function formatTimeLabel(time24: string) {
  const [h, m] = time24.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${period}`;
}

function formatDateLabel(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

type Step = "slot" | "details" | "done";

export default function BookingFlow() {
  const [step, setStep] = useState<Step>("slot");
  const [date, setDate] = useState<string | null>(null);
  const [slots, setSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [time, setTime] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmedSlot, setConfirmedSlot] = useState("");

  useEffect(() => {
    if (!date) return;
    fetchAvailability(date).then((s) => {
      setSlots(s);
      setLoadingSlots(false);
    });
  }, [date]);

  function handleDateSelect(iso: string) {
    setDate(iso);
    setTime(null);
    setLoadingSlots(true);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!date || !time) return;
    setSubmitting(true);
    setError(null);
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;

    const res = await submitBooking({
      name: data.name,
      email: data.email,
      company: data.company,
      message: data.message,
      date,
      time,
    });
    setSubmitting(false);

    if (!res.success) {
      if (res.error === "slot_taken") {
        setError("That time was just booked by someone else — pick another slot.");
        setStep("slot");
        fetchAvailability(date).then(setSlots);
      } else {
        setError("Something went wrong sending your booking. Please try again.");
      }
      return;
    }

    setConfirmedSlot(res.slot ?? `${formatDateLabel(date)} · ${formatTimeLabel(time)}`);
    setStep("done");
  }

  return (
    <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_30px_80px_-20px_rgba(80,63,205,0.2)]">
      <div className="grid lg:grid-cols-[300px_1fr]">
        {/* ── Left info panel ── */}
        <div className="border-b border-gray-100 p-8 lg:border-b-0 lg:border-r">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 text-[13px] font-bold text-white">
            TD
          </span>
          <h2 className="mt-5 text-[19px] font-bold text-gray-900">30-Minute Demo</h2>
          <p className="mt-2 text-[13.5px] leading-relaxed text-gray-500">
            A live walkthrough of TrackDots, tailored to your team — no slides, no pressure.
          </p>
          <ul className="mt-6 space-y-3.5">
            {INFO_POINTS.map((point) => (
              <li key={point.label} className="flex items-start gap-2.5 text-[13.5px] text-gray-600">
                <point.icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" strokeWidth={1.8} />
                {point.label}
              </li>
            ))}
          </ul>

          {date && step !== "slot" && (
            <div className="mt-7 rounded-xl bg-brand-50/70 p-4 ring-1 ring-brand-100">
              <div className="text-[10.5px] font-bold uppercase tracking-wide text-brand-700">Selected Time</div>
              <div className="mt-1.5 text-[14px] font-bold text-gray-900">{formatDateLabel(date)}</div>
              {time && <div className="text-[12.5px] text-gray-600">{formatTimeLabel(time)} (IST)</div>}
              {step === "details" && (
                <button
                  type="button"
                  onClick={() => setStep("slot")}
                  className="mt-2.5 text-[12px] font-semibold text-brand-600 hover:text-brand-700"
                >
                  Change time
                </button>
              )}
            </div>
          )}
        </div>

        {/* ── Right panel ── */}
        <div className="p-8">
          {step === "slot" && (
            <div className="grid gap-8 sm:grid-cols-[1fr_210px]">
              <Calendar selected={date} onSelect={handleDateSelect} />
              <div>
                <div className="mb-3 text-[13px] font-semibold text-gray-700">
                  {date ? formatDateLabel(date) : "Pick a date"}
                </div>
                {!date && <p className="text-[13px] text-gray-400">Choose a date to see open times.</p>}
                {date && loadingSlots && <p className="text-[13px] text-gray-400">Loading times…</p>}
                {date && !loadingSlots && slots.length === 0 && (
                  <p className="text-[13px] text-gray-400">No times left this day — try another date.</p>
                )}
                <div className="space-y-2">
                  {slots.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => {
                        setTime(s);
                        setStep("details");
                      }}
                      className="w-full rounded-lg border border-gray-200 py-2.5 text-[13.5px] font-semibold text-gray-700 transition-colors hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700"
                    >
                      {formatTimeLabel(s)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === "details" && (
            <form onSubmit={handleSubmit} className="max-w-md">
              <h3 className="text-[19px] font-bold text-gray-900">Your details</h3>
              <p className="mt-1.5 text-[13.5px] text-gray-500">We&apos;ll send a confirmation and meeting link.</p>

              <div className="mt-6 space-y-4">
                <input required name="name" type="text" placeholder="Full name" className={inputClasses} />
                <input required name="email" type="email" placeholder="Work email" className={inputClasses} />
                <input required name="company" type="text" placeholder="Company" className={inputClasses} />
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Anything specific you'd like us to cover? (optional)"
                  className={`${inputClasses} resize-none`}
                />
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute left-[-9999px] h-0 w-0 opacity-0"
                  aria-hidden="true"
                />
              </div>

              {error && (
                <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-[13px] font-medium text-red-600">{error}</p>
              )}

              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep("slot")}
                  className="rounded-xl border border-gray-200 px-5 py-3 text-[14px] font-semibold text-gray-700 transition-colors hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-600 py-3 text-[14px] font-semibold text-white shadow-lg shadow-brand-600/30 transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Booking…" : "Confirm Demo"}
                  {!submitting && <ArrowRight className="h-4 w-4" />}
                </button>
              </div>
            </form>
          )}

          {step === "done" && (
            <div className="flex h-full min-h-[320px] flex-col items-center justify-center py-6 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600">
                <CheckCircle className="h-7 w-7" strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 text-[22px] font-bold text-gray-900">Demo Confirmed</h3>
              <p className="mt-2 max-w-xs text-[14.5px] leading-relaxed text-gray-500">
                {confirmedSlot} (IST). We&apos;ve sent a confirmation to your email with the details.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
