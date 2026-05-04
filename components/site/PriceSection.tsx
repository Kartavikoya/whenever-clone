"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const tickerImages = [
  "https://framerusercontent.com/images/UK3ji9XKftVKablDa07xbZ7o.jpeg",
  "https://framerusercontent.com/images/gdoBqgMU9ke6K07ShZLmpfUoWc.jpeg",
  "https://framerusercontent.com/images/ldLzFEXXuK2q3bgbFfV6MlgqbSw.jpeg",
  "https://framerusercontent.com/images/XTdwXzaaZ0uFZA76FvHmRgz1z4.jpeg",
];

const features = [
  "Unlimited design requests",
  "One active task at a time",
  "Delivered in a few business days",
  "Source files included",
  "Cancel or pause anytime",
];

export function PriceSection() {
  return (
    <section id="pricing" className="bg-[#f8f8f8] py-20 px-4 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        {/* Main Card Container */}
        <div className="grid overflow-hidden rounded-[32px] border-[6px] border-white bg-black shadow-2xl md:grid-cols-2">
          
          {/* LEFT COLUMN: Vertical Ticker */}
          <div className="relative h-[500px] overflow-hidden bg-[#0c0c0c] md:h-[750px]">
            {/* Soft gradient overlays for top and bottom to blend ticker */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-black to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-black to-transparent" />
            
            <div className="animate-vertical-ticker flex flex-col gap-4 p-4">
              {/* Duplicate list for a seamless infinite loop */}
              {[...tickerImages, ...tickerImages, ...tickerImages].map((src, i) => (
                <div key={i} className="relative aspect-square w-full flex-shrink-0 overflow-hidden rounded-2xl">
                  <Image
                    src={src}
                    alt="Work sample"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-widest text-white/50">
                    Example content for demo purposes only.
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Pricing Details */}
          <div className="flex flex-col justify-between bg-[#121212] p-8 text-white md:p-14">
            <div>
              {/* Header with Logo and Toggle Note */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-1">
                  <h2 className="font-serif text-5xl italic font-semibold tracking-tighter">whenevr</h2>
                  <span className="text-xs font-semibold">®</span>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Additional Active Task</p>
                  <p className="text-sm font-medium text-white/60">+$995</p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 max-w-[340px] text-lg leading-snug text-white/50">
                Submit any design task you need. Landing pages, product visuals, brand assets, and more.
              </p>

              {/* Price */}
              <div className="mt-10 flex items-baseline gap-2">
                <span className="text-5xl font-bold tracking-tighter">$2,995</span>
                <span className="text-xl text-white/40">/month</span>
              </div>

              {/* Features List */}
              <div className="mt-12 space-y-5">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                      <PlusIcon />
                    </div>
                    <span className="text-sm font-medium text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button matched to your screenshot */}
            <div className="mt-12">
              <a 
                href="https://stripe.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full"
              >
                <motion.div
                  whileHover={{ scale: 0.99, backgroundColor: "#f2f2f2" }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center rounded-[18px] bg-white py-[18px] px-6 transition-all duration-200"
                >
                  <span className="text-[17px] font-bold tracking-tight text-black">
                    Join today
                  </span>
                </motion.div>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* CSS for the infinite vertical scroll animation */}
      <style jsx global>{`
        @keyframes vertical-ticker {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-vertical-ticker {
          animation: vertical-ticker 40s linear infinite;
        }
        /* Pause on hover if you want interactivity */
        .animate-vertical-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function PlusIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2.5V9.5M2.5 6H9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}