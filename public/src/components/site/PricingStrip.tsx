import Link from "next/link";

export function PricingStrip() {
  return (
    <section className="border-y border-[#0000000f] bg-[#fafafa] py-16 md:py-20">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-5 text-center md:px-9">
        <p className="font-serif text-2xl italic text-[#1c1c1c] md:text-3xl">
          whenevr
        </p>
        <div className="flex flex-wrap items-baseline justify-center gap-1">
          <span className="text-[clamp(2.5rem,6vw,4rem)] font-semibold tracking-[-0.04em] text-[#000]">
            $2,995
          </span>
          <span className="text-lg font-medium text-[#989898] md:text-xl">
            /month
          </span>
        </div>
        <Link
          href="#pricing"
          className="inline-flex h-[52px] items-center justify-center rounded-full bg-[#000] px-10 text-[15px] font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Join today
        </Link>
      </div>
    </section>
  );
}
