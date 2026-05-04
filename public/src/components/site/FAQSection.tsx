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
      a: "Whenevr is focused on design, but if you need development — especially in Framer — just let us know. We offer it as an add-on when needed.",
    },
  ];
  
  export function FAQSection() {
    return (
      <section className="border-t border-[#0000000f] bg-[#fafafa] py-20 md:py-28">
        <div className="mx-auto max-w-[720px] px-5 md:px-9">
          <p className="mb-3 text-center text-[13px] font-semibold uppercase tracking-[0.14em] text-[#989898]">
            FAQs
          </p>
          <h2 className="text-center text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-[#000]">
            Frequently Asked Questions
          </h2>
  
          <div className="mt-12 space-y-3 md:mt-14">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-[16px] border border-[#0000000f] bg-white px-5 py-1 transition-[box-shadow] open:shadow-[0_12px_40px_-28px_rgba(0,0,0,0.12)] md:px-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15px] font-semibold tracking-tight text-[#000] marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#eee] bg-[#fafafa] text-[#7c7c7c] transition-transform duration-300 group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="border-t border-[#f0f0f0] pb-4 pt-3 text-[15px] leading-relaxed text-[#7c7c7c]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
  
          <div className="mt-14 rounded-[20px] border border-[#0000000f] bg-white p-8 text-center md:p-10">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#989898]">
              Email
            </p>
            <a
              href="mailto:hello@whenevr.com"
              className="mt-2 inline-block text-lg font-semibold text-[#000] underline decoration-[#dcdcdc] underline-offset-4 transition-colors hover:text-[#1c1c1c]"
            >
              hello@whenevr.com
            </a>
            <div className="mt-6">
              <a
                href="mailto:hello@whenevr.com"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#dcdcdc] bg-[#fafafa] px-8 text-[14px] font-semibold text-[#1c1c1c] transition-[background-color,transform] hover:bg-[#f0f0f0] hover:scale-[1.02]"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  