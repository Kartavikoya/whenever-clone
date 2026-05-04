"use client";

import { startTransition, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    quote: "I've loved working with Whenevr. I didn’t need to explain things twice. The design just showed up looking exactly how I pictured it.",
    name: "Alexia Fran",
    role: "Marketing Lead, RelayOne",
    image: "https://framerusercontent.com/images/DcNJgQIOkkv7HpGnt8XS2UJ0sGE.png?scale-down-to=512",
  },
  {
    quote: "Every request was handled quickly and nailed on the first pass. Genuinely the most efficient design experience I’ve had.",
    name: "Eli Ramos",
    role: "Founder, Minos",
    image: "https://framerusercontent.com/images/deHueM6CDFRvwo3KoYL9UlkKjo.png?scale-down-to=512",
  },
  {
    quote: "Clean process, great work, and no hand-holding required. It felt like having a senior designer on standby without the back-and-forth.",
    name: "Maya Kim",
    role: "Head of Product, Haptik",
    image: "https://framerusercontent.com/images/KsgfJQmkr2IUJ4C1etP8vC5ywSU.png?scale-down-to=512",
  },
  {
    quote: "The quality of design is top-tier and the process is frictionless. Whenevr feels like cheating in the best way.",
    name: "Tina Zhang",
    role: "Creative Director, Octave",
    image: "https://framerusercontent.com/images/9TFXEqtk3YFraXWfmvs6NgGjubE.png?scale-down-to=512",
  },
  {
    quote: "No meetings, no delays, no drama. Just smart design delivered when we needed it. I can't recommend Whenevr enough.",
    name: "Jared Cole",
    role: "Startup Founder, Nimbus Systems",
    image: "https://framerusercontent.com/images/PiA7xFeo1HUizwAFLgCrsctY.png?scale-down-to=512",
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
    }, 5000);
    return () => window.clearInterval(interval);
  }, []);

  const visibleItems = getVisibleItems(activeIndex);

  return (
    <section className="bg-[#f1f0f0] py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[14px] font-medium text-black opacity-40 mb-4">
            Testimonials
          </span>
          <h2 className="text-[48px] md:text-[72px] font-bold tracking-tight leading-[0.95] text-black max-w-3xl">
            Turns out, people like getting things <span className="font-serif italic font-medium">done</span>.
          </h2>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 min-h-[380px]">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, index) => (
              <motion.figure
                key={`${item.name}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className={`${index > 0 ? "hidden md:flex" : "flex"} flex-col justify-between rounded-[24px] bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-black/[0.03] aspect-[4/3]`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {/* Fixed Image Container */}
                    <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#ece7e0]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </span>
                    <div>
                      <p className="text-[16px] font-bold tracking-tight text-black">{item.name}</p>
                      <p className="text-[13px] font-medium text-black/40">{item.role}</p>
                    </div>
                  </div>
                  <span className="text-[40px] leading-none text-black/10 font-serif">“</span>
                </div>

                <blockquote className="mt-6 text-[16px] leading-[1.5] font-medium text-black/70 italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>

        {/* CONTROLS */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <button
            onClick={() => setActiveIndex((c) => (c - 1 + items.length) % items.length)}
            className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-black/[0.05] text-black shadow-sm hover:bg-gray-50 transition-colors"
          >
            ‹
          </button>

          <div className="flex gap-2 bg-black/5 px-3 py-2 rounded-full">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === activeIndex ? "bg-black w-4" : "bg-black/20"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveIndex((c) => (c + 1) % items.length)}
            className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-black/[0.05] text-black shadow-sm hover:bg-gray-50 transition-colors"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}