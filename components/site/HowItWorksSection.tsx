"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const tagsRow1 = ["Branding", "Social Graphics", "UX Design", "Pitch Decks", "Illustration"];
const tagsRow2 = ["Style Guides", "Icon Design", "Ad Creatives", "App Design", "Websites"];

export function HowItWorksSection() {
  return (
    <section className="bg-[#f5f5f5] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">How it works</p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            Welcome to the <span className="italic font-serif font-medium">better</span> way <br /> of getting design done.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* CARD 1: SUBSCRIBE */}
          <article className="bg-white rounded-[40px] p-8 border border-black/5 shadow-sm flex flex-col justify-between">
            <div className="bg-[#f0f0f0] rounded-[30px] p-8 mb-8 relative overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <span className="font-serif italic text-2xl">whenevr®</span>
                <span className="bg-white px-3 py-1 rounded-full text-[10px] font-bold shadow-sm">Popular</span>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-bold">$2,995</span>
                <span className="text-gray-400 ml-1">/month</span>
              </div>
              <button className="w-full bg-black text-white py-4 rounded-full font-bold hover:scale-[1.02] transition-transform">
                Join today
              </button>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Subscribe</h3>
              <p className="text-gray-500">Pick a plan and get started right away. No calls, no setup, just design on demand.</p>
            </div>
          </article>

          {/* CARD 2: REQUEST (The Marquee Design) */}
          <article className="bg-white rounded-[40px] p-8 border border-black/5 shadow-sm flex flex-col justify-between group">
            <div className="bg-[#fafafa] rounded-[30px] h-[320px] mb-8 relative flex flex-col justify-center overflow-hidden border border-black/[0.03]">
              
              {/* Marquee Rows */}
              <div className="space-y-3 opacity-30 group-hover:opacity-50 transition-opacity">
                <MarqueeRow items={tagsRow1} direction={-20} />
                <MarqueeRow items={tagsRow2} direction={20} />
                <MarqueeRow items={tagsRow1} direction={-20} />
              </div>

              {/* Central Changing Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <ChangingIconBox />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Request</h3>
              <p className="text-gray-500">Submit any design task you need. Landing pages, product visuals, brand assets, and more.</p>
            </div>
          </article>

          {/* CARD 3: RECEIVE (The Flying Documents) */}
          <article className="bg-white rounded-[40px] p-8 border border-black/5 shadow-sm flex flex-col justify-between group">
            <div className="bg-[#fafafa] rounded-[30px] h-[320px] mb-8 relative flex items-center justify-center overflow-hidden border border-black/[0.03]">
              <div className="relative w-48 h-40">
                {/* Documents that fly out */}
                <motion.div 
                  variants={{ hover: { x: 40, y: -60, rotate: 10, opacity: 1 } }}
                  initial={{ opacity: 0 }}
                  className="absolute inset-0 bg-blue-100 rounded-xl shadow-lg border border-white p-2"
                >
                  <div className="w-full h-full bg-white/50 rounded-sm" />
                </motion.div>
                <motion.div 
                  variants={{ hover: { x: -50, y: -50, rotate: -15, opacity: 1 } }}
                  initial={{ opacity: 0 }}
                  className="absolute inset-0 bg-orange-100 rounded-xl shadow-lg border border-white p-2"
                >
                  <div className="w-full h-full bg-white/50 rounded-sm" />
                </motion.div>

                {/* The Main Folder */}
                <motion.div 
                  whileHover="hover"
                  className="absolute inset-0 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-black/5 flex items-center justify-center z-10"
                >
                   <span className="font-serif italic text-4xl text-gray-200">w</span>
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-6 bg-[#e5e5e5] rounded-t-lg" />
                </motion.div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Receive</h3>
              <p className="text-gray-500">Your design is delivered in a few business days. Simple, fast, and ready to use.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* Helper for Row Animation */
function MarqueeRow({ items, direction }: { items: string[], direction: number }) {
  return (
    <motion.div 
      animate={{ x: [0, direction > 0 ? -100 : 100] }}
      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      className="flex gap-3 whitespace-nowrap"
    >
      {[...items, ...items].map((item, i) => (
        <span key={i} className="px-5 py-2.5 bg-white border border-black/5 rounded-full text-sm font-bold shadow-sm">
          {item}
        </span>
      ))}
    </motion.div>
  );
}

/* Helper for changing "W" box icon */
function ChangingIconBox() {
  const [iconIndex, setIconIndex] = useState(0);
  const icons = ["W", "✈️", "🖱️", "✏️"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIconIndex((prev) => (prev + 1) % icons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="w-24 h-24 bg-black rounded-[28px] shadow-2xl flex items-center justify-center text-white text-4xl font-serif italic z-20 cursor-pointer"
    >
      <motion.span
        key={iconIndex}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {icons[iconIndex]}
      </motion.span>
    </motion.div>
  );
}