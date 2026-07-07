import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BookingFlow from "@/components/booking/BookingFlow";

export const metadata: Metadata = {
  title: "Book a Demo — TrackDots",
  description: "See TrackDots live in a 30-minute walkthrough, tailored to your team. Pick a time that works for you.",
};

export default function BookDemoPage() {
  return (
    <main className="flex-1 bg-white">
      <Navbar />

      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-50"
          style={{ background: "radial-gradient(closest-side, rgba(109,94,244,0.18), transparent)" }}
        />
        <div className="relative mx-auto max-w-3xl px-5 pb-10 pt-20 text-center md:px-8 lg:pt-24">
          <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold text-brand-600 ring-1 ring-brand-200/60">
            BOOK A DEMO
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.08] tracking-tight text-gray-900 sm:text-6xl">
            See TrackDots{" "}
            <span className="bg-gradient-to-r from-brand-600 to-violet-500 bg-clip-text text-transparent">
              Live.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
            Pick a time that works for you — no back-and-forth emails, no sales pressure.
          </p>
        </div>
      </section>

      <section className="w-full px-5 pb-24 md:px-8 lg:px-[80px]">
        <BookingFlow />
      </section>
    </main>
  );
}
