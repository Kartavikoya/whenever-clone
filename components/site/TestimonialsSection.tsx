"use client";

import { startTransition, useEffect, useState } from "react";

const stripTags = [
  "Branding",
  "Blog Graphics",
  "Landing Pages",
  "Illustrations",
  "Product Design",
  "Email Design",
];

const items = [
  {
    quote:
      "I've loved working with Whenevr. I didn’t need to explain things twice. The design just showed up looking exactly how I pictured it.",
    name: "Alexia Fran",
    role: "Marketing Lead, RelayOne",
    image:
      "https://framerusercontent.com/images/zmsN1XwHAmUsgVTOdNQvAcnvqQ.jpg",
  },
  {
    quote:
      "Every request was handled quickly and nailed on the first pass. Genuinely the most efficient design experience I’ve had.",
    name: "Eli Ramos",
    role: "Founder, Minos",
    image:
      "https://framerusercontent.com/images/cNuMB8s4uwKr9FVt0t4tgzcUgI.jpg",
  },
  {
    quote:
      "Clean process, great work, and no hand-holding required. It felt like having a senior designer on standby without the back-and-forth.",
    name: "Maya Kim",
    role: "Head of Product, Haptik",
    image:
      "https://framerusercontent.com/images/Drwqz4MLhE4AnpElEhs0VWgvB0.jpg",
  },
  {
    quote:
      "The quality of design is top-tier and the process is frictionless. Whenevr feels like cheating in the best way.",
    name: "Tina Zhang",
    role: "Creative Director, Octave",
    image:
      "https://framerusercontent.com/images/IBxgNWC1wIpJOyrj2ARLBN5jK9Q.jpg",
  },
  {
    quote:
      "No meetings, no delays, no drama. Just smart design delivered when we needed it. I can't recommend Whenevr enough.",
    name: "Jared Cole",
    role: "Startup Founder, Nimbus Systems",
    image:
      "https://framerusercontent.com/images/XTsj4M8JHLsi4H2Pc00WHOpQY.jpg",
  },
];

function getVisibleItems(index: number) {
  return [
    items[index],
    items[(index + 1) % items.length],
    items[(index + 2) % items.length],
  ];
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      startTransition(() => {
        setActiveIndex((current) => (current + 1) % items.length);
      });
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  const visibleItems = getVisibleItems(activeIndex);

  return (
    <section className="bg-[#f5f5f5] py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-5 md:px-9">
        <div className="mb-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="testimonial-marquee-track gap-4">
            {[...stripTags, ...stripTags].map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="rounded-full border border-black/[0.06] bg-white px-6 py-2 text-[14px] font-semibold text-[#202020] shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <span className="rounded-full border border-black/[0.06] bg-white px-3 py-1 text-[11px] font-semibold text-[#6f6f6f]">
            Testimonials
          </span>
          <h2 className="mt-4 max-w-[980px] text-balance text-[clamp(2rem,5vw,4.3rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#000]">
            Turns out, people like getting things{" "}
            <span className="font-serif italic">done</span>.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-5">
          {visibleItems.map((item, index) => (
            <figure
              key={`${activeIndex}-${item.name}`}
              className={`${index > 0 ? "hidden md:block" : ""} rounded-[24px] border border-black/[0.06] bg-white p-7 shadow-[0_22px_54px_-36px_rgba(0,0,0,0.22)] transition-transform duration-500 ease-[var(--ease-out)]`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <span className="relative h-14 w-14 overflow-hidden rounded-full bg-[#ece7e0]">
                    <img
                      src={item.image}
                      alt={`${item.name} portrait`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <div>
                    <p className="text-[16px] font-semibold tracking-[-0.03em] text-[#000]">
                      {item.name}
                    </p>
                    <p className="mt-1 text-[13px] text-[#a5a5a5]">{item.role}</p>
                  </div>
                </div>
                <span className="text-[72px] leading-none text-[#ececec]">
                  &ldquo;
                </span>
              </div>
              <blockquote className="mt-6 text-[15px] leading-[1.65] text-[#6f6f6f]">
                {item.quote}
              </blockquote>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous testimonial"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.08] bg-white text-[20px] text-[#4c4c4c] shadow-[0_10px_24px_-18px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-0.5"
            onClick={() =>
              setActiveIndex((current) => (current - 1 + items.length) % items.length)
            }
          >
            &#8249;
          </button>

          <div className="flex items-center justify-center gap-2 rounded-full bg-[#cfcfcf] px-4 py-2">
            {items.map((item, index) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                aria-pressed={index === activeIndex}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-white" : "bg-white/70"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.08] bg-white text-[20px] text-[#4c4c4c] shadow-[0_10px_24px_-18px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-0.5"
            onClick={() => setActiveIndex((current) => (current + 1) % items.length)}
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}
