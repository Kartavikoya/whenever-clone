import Link from "next/link";

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
      className="scroll-mt-[80px] bg-[#1c1c1c] py-20 text-white md:py-28"
    >
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:grid-cols-2 md:items-start md:gap-16 md:px-9 lg:gap-20">
        <div>
          <p className="font-serif text-3xl italic text-white/90 md:text-4xl">
            whenevr
          </p>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-white/65">
            Submit any design task you need. Landing pages, product visuals,
            brand assets, and more.
          </p>
          <div className="mt-8 inline-flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1dcc5d]">
              Additional Active Task
            </span>
            <span className="text-2xl font-semibold tracking-tight">+$995</span>
          </div>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-8 md:p-10">
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-[clamp(2.75rem,5vw,3.5rem)] font-semibold tracking-[-0.04em]">
              $2,995
            </span>
            <span className="text-lg font-medium text-white/45">/month</span>
          </div>
          <ul className="mt-8 space-y-4">
            {included.map((line) => (
              <li key={line} className="flex gap-3 text-[15px] text-white/80">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1dcc5d]/20 text-[#1dcc5d]"
                  aria-hidden
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="stroke-current"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 6l2.5 2.5L9.5 3.5" />
                  </svg>
                </span>
                {line}
              </li>
            ))}
          </ul>
          <Link
            href="https://stripe.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 flex h-[54px] w-full items-center justify-center rounded-full bg-white text-[16px] font-semibold text-[#000] transition-[transform,background-color] hover:bg-[#f0f0f0] hover:scale-[1.01] active:scale-[0.99]"
          >
            Join today
          </Link>
        </div>
      </div>
    </section>
  );
}
