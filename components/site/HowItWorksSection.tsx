import Link from "next/link";

const tags = [
  "Pitch Decks",
  "Branding",
  "Social Graphics",
  "Email Design",
  "Blog Graphics",
  "Landing Pages",
  "Style Guides",
  "Icon Design",
  "Ad Creatives",
  "UI Design",
];

const steps = [
  {
    title: "Subscribe",
    body: "Pick a plan and get started right away. Clear pricing, no extra setup.",
    price: "$2,995",
    cta: "Join today",
  },
  {
    title: "Request",
    body: "Submit any design task you need and stack priorities without the chaos.",
  },
  {
    title: "Receive",
    body: "Your design is delivered in a few business days, polished and ready to use.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#f5f5f5] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-9">
        <div className="flex flex-col items-center text-center">
          <span className="rounded-full border border-black/[0.06] bg-white px-3 py-1 text-[11px] font-semibold text-[#6f6f6f]">
            How it works
          </span>
          <h2 className="mt-4 max-w-[980px] text-balance text-[clamp(2rem,5vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#000]">
            Welcome to the better way of getting design done.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-6">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="overflow-hidden rounded-[26px] border border-black/[0.06] bg-white shadow-[0_22px_54px_-36px_rgba(0,0,0,0.22)]"
            >
              <div className="h-[188px] border-b border-black/[0.05] bg-[#fafafa] p-6 md:h-[332px] md:p-10">
                {index === 0 ? (
                  <div className="rounded-[22px] bg-[#f0f0f0] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                    <div className="flex items-start justify-between gap-3">
                      <div className="font-serif text-[28px] font-medium italic tracking-tight text-[#000]">
                        whenevr
                        <sup className="ml-0.5 align-super font-sans text-[10px] not-italic text-[#7c7c7c]">
                          ®
                        </sup>
                      </div>
                      <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-[#000] shadow-sm">
                        Popular
                      </span>
                    </div>
                    <div className="mt-7 flex items-end gap-1">
                      <span className="text-[44px] font-semibold tracking-[-0.06em] text-[#000]">
                        {step.price}
                      </span>
                      <span className="pb-2 text-[14px] font-medium text-[#989898]">
                        /month
                      </span>
                    </div>
                    <Link
                      href="#pricing"
                      className="mt-7 inline-flex h-14 w-full items-center justify-center rounded-full bg-[#000] px-5 text-[15px] font-semibold text-white shadow-[0_18px_30px_-20px_rgba(0,0,0,0.45)]"
                    >
                      {step.cta}
                    </Link>
                  </div>
                ) : index === 1 ? (
                  <div className="relative h-full overflow-hidden rounded-[18px] bg-white">
                    <div className="absolute inset-0 flex flex-wrap content-start gap-3 p-5">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#f2f2f2] px-4 py-2 text-[12px] font-semibold text-[#202020] md:text-[14px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[26px] bg-[#000] text-[54px] font-serif italic text-white shadow-[0_30px_40px_-28px_rgba(0,0,0,0.5)]">
                      W
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <div className="relative h-[78%] w-[76%] rounded-[18px] bg-[linear-gradient(180deg,#ececec_0%,#f7f7f7_40%,#efefef_100%)]">
                      <div className="absolute left-1/2 top-[18%] h-10 w-24 -translate-x-1/2 rounded-t-[14px] bg-[#e7e7e7]" />
                      <div className="absolute left-1/2 top-[28%] h-[52%] w-[88%] -translate-x-1/2 rounded-[16px] bg-white shadow-[0_20px_28px_-24px_rgba(0,0,0,0.3)]" />
                      <div className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 text-[64px] font-serif italic text-[#d0d0d0]">
                        w
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-[26px] font-semibold tracking-[-0.05em] text-[#000]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-[#8a8a8a]">
                  {step.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
