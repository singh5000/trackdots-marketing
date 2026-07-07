"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "../icons";

const WORK_DAYS = [1, 2, 3, 4, 5]; // JS getDay(): Mon=1 ... Fri=5
const DAYS_AHEAD = 21;
const WEEKDAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function toISODate(d: Date) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export default function Calendar({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (iso: string) => void;
}) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + DAYS_AHEAD);

  const [viewMonth, setViewMonth] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));

  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const firstDay = new Date(year, month, 1);
  const startWeekday = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (Date | null)[] = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));

  const canGoPrev = new Date(year, month, 1) > new Date(today.getFullYear(), today.getMonth(), 1);
  const canGoNext = new Date(year, month + 1, 1) <= new Date(maxDate.getFullYear(), maxDate.getMonth(), 1);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <button
          type="button"
          disabled={!canGoPrev}
          onClick={() => setViewMonth(new Date(year, month - 1, 1))}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Previous month"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <div className="text-[14.5px] font-bold text-gray-900">
          {viewMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </div>
        <button
          type="button"
          disabled={!canGoNext}
          onClick={() => setViewMonth(new Date(year, month + 1, 1))}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Next month"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 pb-1 text-center text-[11.5px] font-semibold text-gray-400">
        {WEEKDAY_LABELS.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {cells.map((d, i) => {
          if (!d) return <div key={i} />;
          const iso = toISODate(d);
          const disabled = d < today || d > maxDate || !WORK_DAYS.includes(d.getDay());
          const isSelected = selected === iso;
          return (
            <button
              key={i}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(iso)}
              className={`h-10 rounded-lg text-[13.5px] font-semibold transition-colors ${
                isSelected
                  ? "bg-brand-600 text-white shadow-md shadow-brand-600/30"
                  : disabled
                    ? "cursor-not-allowed text-gray-300"
                    : "text-gray-700 hover:bg-brand-50 hover:text-brand-700"
              }`}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
