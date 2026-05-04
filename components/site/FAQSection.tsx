"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How many design requests can I submit?",
    a: "You can submit as many requests as you’d like. They’ll be handled one at a time, in the order they’re added to your Notion board.",
  },
  {
    q: "What kind of design work is included?",
    a: "Most requests related to web, product, and marketing design are covered.",
  },
  {
    q: "How fast will I receive my designs?",
    a: "Most tasks are completed in two to three business days.",
  },
  {
    q: "Can I pause my subscription?",
    a: "Yes. If you’re in between projects, you can pause at any time.",
  },
];

export function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <section className="bg-[#f3f3f3] py-20 px-4">
      {/* The White Card Container */}
      <div className="mx-auto max-w-[900px] overflow-hidden rounded-[40px] bg-white px-8 py-12 md:px-16 md:py-20 shadow-sm">
        
        <div className="relative mb-16">
          {/* FAQ Badge */}
          <span className="inline-block rounded-full bg-[#f3f3f3] px-4 py-1 text-[13px] font-bold text-black">
            FAQs
          </span>

          <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h2 className="text-[48px] md:text-[64px] font-bold leading-[0.95] tracking-[-0.05em] text-black">
                Frequently <br />
                Asked <span className="font-serif italic font-medium tracking-tight">Questions</span>
              </h2>
              
              <div className="mt-10">
                <p className="text-[14px] font-medium text-gray-400">Email</p>
                <p className="text-[18px] font-bold text-black">hello@whenevr.com</p>
              </div>
            </div>

            {/* CTA Button positioned like the screenshot */}
            <button className="h-[64px] rounded-full bg-black px-10 text-[18px] font-bold text-white transition-transform active:scale-95">
              Get in touch
            </button>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openItem === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-[20px] bg-[#f8f8f8]"
              >
                <button
                  onClick={() => setOpenItem(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-8 py-7 text-left"
                >
                  <span className="text-[17px] md:text-[19px] font-bold tracking-tight text-black">
                    {item.q}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-transparent border border-black/5">
                    <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div className="px-8 pb-8 text-[16px] leading-relaxed text-gray-600">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}