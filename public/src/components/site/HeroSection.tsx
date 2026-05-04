import Link from "next/link";

const tags = [
  "Social Graphics",
  "UX Design",
  "Pitch Decks",
  "Web Design",
  "Branding",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-[74px]">
      <div
        className="pointer-events-none absolute -top-[900px] left-1/2 h-[891px] w-[min(1400px,100vw)] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(29,204,93,0.14),transparent_70%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[74px] bg-gradient-to-b from-white via-white/80 to-transparent [mask-image:linear-gradient(to_bottom,transparent,black_50%)]" />

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-5 pb-10 pt-6 md:gap-10 md:px-9 md:pb-9 md:pt-[19px] lg:gap-[120px] lg:pb-9">
        <div className="flex w-full flex-col items-center gap-8 md:gap-8 lg:gap-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-2.5">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[#00000012] bg-[#f8f8f8] px-3 py-1.5 text-[13px] font-medium tracking-tight text-[#1c1c1c] transition-colors duration-200 hover:border-[#dcdcdc] hover:bg-white"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex max-w-[677px] flex-col items-center gap-6 text-center">
            <h1 className="text-balance text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[#000]">
              World-class design{" "}
              <span className="font-serif text-[1.06em] font-medium italic tracking-[-0.02em]">
                whenevr
              </span>{" "}
              you need it.
            </h1>
            <p className="max-w-[547px] text-pretty text-[17px] leading-[1.55] text-[#7c7c7c] md:text-[18px]">
              A monthly design subscription for startups, creators, and teams
              who need work done without the wait.
            </p>
          </div>

          <div className="flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <Link
              href="#pricing"
              className="inline-flex h-[52px] items-center justify-center rounded-full bg-[#000] px-8 text-[15px] font-semibold text-white transition-[transform,box-shadow] duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
            >
              See Pricing
            </Link>
            <Link
              id="book-a-call"
              href="#book-a-call"
              className="group inline-flex h-[52px] scroll-mt-[90px] items-center justify-center gap-3 rounded-full border border-[#dcdcdc] bg-white px-6 text-[15px] font-semibold text-[#1c1c1c] transition-[border-color,transform] duration-200 hover:border-[#bdbdbd] hover:scale-[1.01] active:scale-[0.99]"
            >
              <span className="flex items-center gap-2">
                <span
                  className="relative flex h-2 w-2 shrink-0"
                  aria-hidden
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1dcc5d] opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1dcc5d]" />
                </span>
                Book a 15-min intro call
              </span>
              <span className="text-[13px] font-medium text-[#989898] transition-colors group-hover:text-[#7c7c7c]">
                Available now
              </span>
            </Link>
          </div>
        </div>

        <p className="text-center text-[13px] font-medium uppercase tracking-[0.12em] text-[#bdbdbd]">
          Trusted by the biggest brands worldwide
        </p>
      </div>
    </section>
  );
}
