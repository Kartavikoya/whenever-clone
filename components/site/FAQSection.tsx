"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How many design requests can I submit?",
    a: "You can submit as many requests as you’d like. They’ll be handled one at a time, in the order they’re added to your Notion board.",
  },
  {
    q: "What kind of design work is included?",
    a: "Most requests related to web, product, and marketing design are covered. That includes landing pages, UI design, Framer builds, brand assets, and more.",
  },
  {
    q: "How fast will I receive my designs?",
    a: "Most tasks are completed in two to three business days. Larger or more complex requests may take a bit longer, but we’ll always keep you updated.",
  },
  {
    q: "Can I pause my subscription?",
    a: "Yes. If you’re in between projects, you can pause at any time. You’ll keep the remaining days of your billing cycle to use later.",
  },
  {
    q: "What if I need development too?",
    a: "Whenevr is focused on design, but if you need development, especially in Framer, just let us know. We offer it as an add-on when needed.",
  },
];

export function FAQSection() {
  const [openItem, setOpenItem] = useState(0);

  return (
    <section className="bg-[#f5f5f5] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-9">
        <div className="rounded-[28px] border border-black/[0.06] bg-white p-8 shadow-[0_22px_54px_-36px_rgba(0,0,0,0.22)] md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-[520px]">
              <span className="rounded-full border border-black/[0.06] bg-[#f7f7f7] px-3 py-1 text-[11px] font-semibold text-[#6f6f6f]">
                FAQs
              </span>
              <h2 className="mt-6 text-[clamp(2rem,5vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#000]">
                Frequently Asked <span className="font-serif italic">Questions</span>
              </h2>
              <div className="mt-12">
                <div className="text-[15px] text-[#9a9a9a]">Email</div>
                <a
                  href="mailto:hello@whenevr.com"
                  className="mt-1 block text-[20px] font-semibold tracking-[-0.03em] text-[#000]"
                >
                  hello@whenevr.com
                </a>
              </div>
            </div>

            <a
              href="mailto:hello@whenevr.com"
              className="inline-flex h-[70px] items-center justify-center rounded-full bg-[#000] px-12 text-[18px] font-semibold text-white shadow-[0_22px_38px_-28px_rgba(0,0,0,0.42)] transition-transform hover:-translate-y-0.5"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openItem === index;

              return (
                <div
                  key={item.q}
                  className="rounded-[18px] bg-[#f8f8f8] px-6 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)]"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-[18px] font-semibold tracking-[-0.03em] text-[#000]"
                    aria-expanded={isOpen}
                    onClick={() => setOpenItem(isOpen ? -1 : index)}
                  >
                    <span>{item.q}</span>
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f1f1f1] text-[34px] font-light text-[#626262] transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[var(--ease-out)] ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-black/[0.04] pb-6 pt-5 text-[15px] leading-[1.6] text-[#7a7a7a]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
