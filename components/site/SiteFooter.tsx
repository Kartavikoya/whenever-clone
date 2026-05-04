"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const monthViews = [
  {
    label: "May 2026",
    weekdayOffset: 5,
    days: 31,
    availableDays: [11, 12, 13, 14, 15, 18, 19, 20, 21, 22, 25, 26, 27, 28, 29],
    slots: {
      11: ["11:30am", "1:00pm", "3:30pm"],
      12: ["10:00am", "12:30pm", "4:00pm"],
      13: ["9:30am", "2:00pm", "5:00pm"],
      14: ["11:00am", "1:30pm", "6:00pm"],
      15: ["10:30am", "12:00pm", "2:30pm"],
      18: ["9:00am", "1:00pm", "4:30pm"],
      19: ["10:00am", "11:30am", "3:00pm"],
      20: ["11:00am", "12:30pm", "4:00pm"],
      21: ["9:30am", "2:00pm", "5:30pm"],
      22: ["10:00am", "1:30pm", "3:30pm"],
      25: ["11:30am", "2:30pm", "5:00pm"],
      26: ["9:00am", "12:00pm", "4:00pm"],
      27: ["10:30am", "1:00pm", "3:00pm"],
      28: ["11:00am", "2:00pm", "6:00pm"],
      29: ["9:30am", "12:30pm", "4:30pm"],
    } as Record<number, string[]>,
  },
  {
    label: "June 2026",
    weekdayOffset: 1,
    days: 30,
    availableDays: [2, 3, 4, 5, 8, 9, 10, 11, 12, 16, 17, 18, 19, 23, 24, 25, 26],
    slots: {
      2: ["9:30am", "12:00pm", "4:00pm"],
      3: ["11:00am", "1:30pm", "5:00pm"],
      4: ["10:30am", "2:00pm", "4:30pm"],
      5: ["9:00am", "12:30pm", "3:00pm"],
      8: ["10:00am", "1:00pm", "6:00pm"],
      9: ["11:30am", "2:30pm", "4:30pm"],
      10: ["9:30am", "12:00pm", "3:30pm"],
      11: ["10:30am", "1:30pm", "5:30pm"],
      12: ["11:00am", "2:00pm", "4:00pm"],
      16: ["9:00am", "12:30pm", "5:00pm"],
      17: ["10:30am", "1:00pm", "3:30pm"],
      18: ["11:00am", "2:30pm", "4:30pm"],
      19: ["9:30am", "12:00pm", "3:00pm"],
      23: ["10:00am", "1:30pm", "4:00pm"],
      24: ["11:30am", "2:00pm", "5:00pm"],
      25: ["9:00am", "12:30pm", "4:30pm"],
      26: ["10:30am", "1:00pm", "3:30pm"],
    } as Record<number, string[]>,
  },
];

const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function formatDayLabel(label: string, day: number) {
  const month = label.split(" ")[0];
  return `${month.slice(0, 3)} ${day}`;
}

export function SiteFooter() {
  const [monthIndex, setMonthIndex] = useState(0);
  const [hourMode, setHourMode] = useState<"12h" | "24h">("12h");
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const month = monthViews[monthIndex];

  const currentDay = selectedDay ?? month.availableDays[0];
  const currentSlot =
  selectedSlot ?? month.slots[currentDay][0];

  const days = Array.from({ length: month.days }, (_, index) => index + 1);
  const calendarCells = [
    ...Array.from({ length: month.weekdayOffset }, (_, index) => ({
      key: `empty-${index}`,
      value: null as number | null,
    })),
    ...days.map((day) => ({ key: `day-${day}`, value: day })),
  ];

  const selectedSlots = month.slots[currentDay] ?? [];
  return (
    <footer id="book-a-call" className="scroll-mt-[88px] bg-[#050505] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-12 md:px-9 md:py-16">
        <div className="grid gap-10 rounded-[28px] bg-[#050505] md:grid-cols-[1.2fr_0.9fr]">
          <div className="py-4 md:py-6">
            <Link
              href="/"
              className="inline-flex items-baseline gap-0.5 font-serif text-[18px] font-medium italic tracking-tight text-white"
            >
              <span>whenevr</span>
              <span className="translate-y-[-3px] font-sans text-[10px] font-medium not-italic text-white/45">
                ®
              </span>
            </Link>

            <h2 className="mt-8 max-w-[760px] text-[clamp(3rem,7vw,6.6rem)] font-semibold leading-[0.94] tracking-[-0.07em] text-white">
              Design <span className="font-serif italic">doesn&apos;t</span>{" "}
              need to be complicated.
            </h2>

            <p className="mt-8 max-w-[760px] text-[22px] leading-[1.45] text-white/45">
              Book a quick call and get a clear look at how Whenevr works,
              what&apos;s included, and whether it fits your pace.
            </p>

            <Link
              href="#pricing"
              className="mt-10 inline-flex h-[68px] items-center justify-center rounded-full bg-white px-12 text-[20px] font-semibold text-[#000] transition-transform hover:-translate-y-0.5"
            >
              See Pricing
            </Link>
          </div>

          <div className="rounded-[22px] bg-[#1d1d1d] p-6 md:p-8">
            <div className="flex items-center justify-between">
              <div className="text-[20px] font-semibold text-white/55">
                {month.label}
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Previous month"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[22px] text-white/35 transition-colors hover:bg-white/5 hover:text-white/70"
                  onClick={() =>
                    setMonthIndex((current) =>
                      current === 0 ? monthViews.length - 1 : current - 1,
                    )
                  }
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next month"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[22px] text-white/35 transition-colors hover:bg-white/5 hover:text-white/70"
                  onClick={() =>
                    setMonthIndex((current) => (current + 1) % monthViews.length)
                  }
                >
                  ›
                </button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-7 gap-3 text-center text-[13px] font-semibold tracking-[0.12em] text-white/55">
              {weekdays.map((day) => (
                <div key={day}>{day}</div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-7 gap-3 text-center text-[18px] text-white/75">
              {calendarCells.map((cell) => {
                if (!cell.value) {
                  return <div key={cell.key} className="aspect-square" />;
                }

                const isAvailable = month.availableDays.includes(cell.value);
                const isSelected = cell.value === selectedDay;

                return (
                  <button
                    key={cell.key}
                    type="button"
                    disabled={!isAvailable}
                    className={`aspect-square rounded-[14px] text-[18px] transition-colors ${
                      isSelected
                        ? "bg-white text-[#111]"
                        : isAvailable
                          ? "bg-white/15 text-white hover:bg-white/20"
                          : "bg-transparent text-white/45"
                    }`}
                    onClick={() => {
                      setSelectedDay(cell.value!);
                      setSelectedSlot(month.slots[cell.value!][0]);
                    }}
                  >
                    {cell.value}
                  </button>
                );
              })}
            </div>

            <div className="mt-10 flex items-center justify-between gap-4">
              <div className="text-[18px] font-semibold text-white">
                {formatDayLabel(month.label, currentDay)}
              </div>
              <div className="rounded-full bg-white/5 p-1 text-[14px] font-semibold text-white/70">
                <button
                  type="button"
                  className={`rounded-full px-3 py-2 ${
                    hourMode === "12h" ? "bg-[#111] text-white" : ""
                  }`}
                  onClick={() => setHourMode("12h")}
                >
                  12h
                </button>
                <button
                  type="button"
                  className={`rounded-full px-3 py-2 ${
                    hourMode === "24h" ? "bg-[#111] text-white" : ""
                  }`}
                  onClick={() => setHourMode("24h")}
                >
                  24h
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              {selectedSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  className={`rounded-[16px] border px-5 py-4 text-center text-[18px] font-semibold transition-colors ${
                    selectedSlot === slot
                      ? "border-white bg-white text-[#111]"
                      : "border-white/12 text-white/80 hover:border-white/25 hover:bg-white/5"
                  }`}
                  onClick={() => setSelectedSlot(slot)}
                >
                  {hourMode === "24h"
                    ? to24Hour(slot)
                    : slot}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-[11px] text-white/40 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="inline-flex items-baseline gap-0.5 font-serif text-[16px] font-medium italic tracking-tight text-white"
          >
            <span>whenevr</span>
            <span className="translate-y-[-3px] font-sans text-[9px] font-medium not-italic text-white/45">
              ®
            </span>
          </Link>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-white/55">
            <Link href="#pricing" className="transition-colors hover:text-white">
              Pricing
            </Link>
            <Link href="#blog" className="transition-colors hover:text-white">
              Blog
            </Link>
            <Link
              href="https://whenevr.framer.website/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://whenevr.framer.website/terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
          </nav>
          <p>© {new Date().getFullYear()} Whenevr. Clone for portfolio purposes.</p>
        </div>
      </div>
    </footer>
  );
}

function to24Hour(slot: string) {
  const [, hours, minutes, period] =
    slot.match(/^(\d{1,2}):(\d{2})(am|pm)$/i) ?? [];

  if (!hours || !minutes || !period) {
    return slot;
  }

  let normalizedHour = Number(hours) % 12;
  if (period.toLowerCase() === "pm") {
    normalizedHour += 12;
  }

  return `${String(normalizedHour).padStart(2, "0")}:${minutes}`;
}
