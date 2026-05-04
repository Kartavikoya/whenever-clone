const included = [
  "Unlimited design requests",
  "One active task at a time",
  "Delivered in a few business days",
  "Source files included",
  "Cancel or pause anytime",
];

export function PricingDetailSection() {
  return (
    <section
      id="pricing"
      className="scroll-mt-[80px] overflow-hidden bg-[#f5f5f5] py-24 text-white md:py-32"
    >
      <div className="mx-auto max-w-[1460px] px-5 md:px-9">
        <div className="grid gap-4 rounded-[30px] border border-white bg-white p-4 shadow-[0_26px_60px_-42px_rgba(0,0,0,0.22)] md:grid-cols-[1.1fr_1fr] md:gap-5">
          <div className="overflow-hidden rounded-[22px] bg-[#0c0c0c] p-4">
            <div className="relative h-[320px] overflow-hidden rounded-[18px] bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.08),transparent_24%),linear-gradient(135deg,#232323_0%,#111111_55%,#1f1f1f_100%)] md:h-full md:min-h-[640px]">
              <div className="absolute inset-x-[11%] top-[7%] h-[42%] rounded-[10px] border border-white/6 bg-[#111] shadow-[0_30px_40px_-30px_rgba(0,0,0,0.7)]">
                <div className="absolute left-6 top-6 text-[9px] font-medium text-white/40">
                  Timeless
                </div>
                <div className="absolute left-6 top-16 max-w-[220px] text-[28px] font-medium leading-[1.05] text-white">
                  Creating timeless brands that inspire.
                </div>
                <div className="absolute right-[7%] top-0 h-full w-[24%] rounded-[999px] bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.02))] opacity-80 [filter:blur(1px)]" />
              </div>
              <div className="absolute left-1/2 top-[55%] w-[62%] -translate-x-1/2 text-center text-[26px] font-medium leading-[1.2] text-white/90">
                <div className="mb-3 text-[14px] tracking-[0.3em] text-white">★★★★★</div>
                Timeless transformed our brand into a powerful presence allowing us to work with the best.
              </div>
              <div className="absolute inset-x-0 bottom-8 text-center text-[12px] text-white/55">
                Example content for demo purposes only.
              </div>
            </div>
          </div>

          <div className="rounded-[22px] bg-[#1c1c1c] p-8 md:p-10">
            <div className="flex items-start justify-between gap-6">
              <div className="font-serif text-[52px] font-medium italic tracking-tight text-white">
                whenevr
                <sup className="ml-0.5 align-super font-sans text-[14px] not-italic text-white/50">
                  ®
                </sup>
              </div>
              <div className="text-right text-[18px] font-semibold leading-[1.2] text-white/45">
                Additional Active Task
                <div className="mt-1 text-[20px]">+$995</div>
              </div>
            </div>

            <p className="mt-7 max-w-[540px] text-[18px] leading-[1.5] text-white/50">
              Submit any design task you need. Landing pages, product visuals, brand assets, and more.
            </p>

            <div className="mt-10 flex items-end gap-2">
              <span className="text-[64px] font-semibold tracking-[-0.06em] text-white">
                $2,995
              </span>
              <span className="pb-3 text-[20px] text-white/35">/month</span>
            </div>

            <ul className="mt-10 space-y-5">
              {included.map((line) => (
                <li key={line} className="flex items-center gap-4 text-[18px] font-medium text-white/95">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[24px] font-light text-[#1c1c1c]">
                    +
                  </span>
                  {line}
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="mt-12 inline-flex h-[72px] w-full items-center justify-center rounded-full bg-white text-[22px] font-semibold text-[#000] shadow-[0_24px_40px_-28px_rgba(255,255,255,0.25)]"
            >
              Join today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
