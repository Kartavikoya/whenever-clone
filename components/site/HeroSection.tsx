import Image from "next/image";
import Link from "next/link";
import { HeroTagMarquee } from "@/components/site/HeroTagMarquee";

function HeroBackgroundPanel() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#98bfe6]" aria-hidden>
      <div
        className="absolute inset-y-0 left-[-18%] w-[38%] bg-[#f5f5f5]"
        style={{ transform: "skewX(-14deg)" }}
      />
      <div className="absolute inset-y-0 right-0 w-[88%]">
        <Image
          src="/src/background.avif"
          alt=""
          fill
          sizes="(max-width: 1023px) 100vw, 58vw"
          className="object-cover object-left-center"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,245,245,0)_0%,rgba(245,245,245,0)_56%,rgba(255,255,255,0.06)_72%,rgba(255,255,255,0)_100%)]" />
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f5] pt-[74px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[74px] bg-gradient-to-b from-[#f5f5f5] via-[#f5f5f5]/90 to-transparent" />

      <div className="relative mx-auto max-w-[1200px] px-5 pb-14 pt-8 md:px-9 md:pb-16 md:pt-10 lg:min-h-[min(640px,75vh)] lg:pb-20">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 top-0 z-[1] hidden w-[56%] overflow-hidden lg:block"
          aria-hidden
        >
          <HeroBackgroundPanel />
        </div>

        <div className="relative z-[2] flex flex-col gap-8 lg:gap-10">
          <div className="relative z-[1] w-full">
            <HeroTagMarquee />
          </div>

          <div className="relative z-[4] flex flex-col items-center gap-8 text-center lg:max-w-[640px] lg:items-start lg:text-left">
            <div className="flex w-full flex-col gap-6">
              <h1 className="text-pretty text-[clamp(2.35rem,4.5vw+0.85rem,3.85rem)] font-semibold leading-[1.05] tracking-[-0.038em] text-[#000]">
                <span className="block">World-class</span>
                <span className="mt-1 block md:mt-1.5">
                  design{" "}
                  <span className="font-serif text-[1.06em] font-medium italic tracking-[-0.02em]">
                    whenevr
                    <sup className="ml-0.5 align-super text-[0.42em] font-sans font-medium not-italic tracking-normal text-[#7c7c7c]">
                      ®
                    </sup>
                  </span>{" "}
                  you need it.
                </span>
              </h1>
              <p className="max-w-[520px] text-pretty text-[17px] leading-[1.55] text-[#5c5c5c] md:text-[18px]">
                A monthly design subscription for startups, creators, and teams
                who need work done without the wait.
              </p>
            </div>

            <div className="flex w-full max-w-lg flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start">
              <Link
                href="#pricing"
                className="inline-flex h-[52px] shrink-0 items-center justify-center rounded-full bg-[#000] px-8 text-[15px] font-semibold text-white transition-[transform,box-shadow] duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
              >
                See Pricing
              </Link>
              <Link
                id="book-a-call"
                href="#book-a-call"
                aria-label="View calendar for a 15-minute intro call"
                className="group relative inline-flex min-h-[70px] scroll-mt-[90px] items-center overflow-hidden rounded-full border border-black/[0.06] bg-white px-4 py-3 text-[#1c1c1c] shadow-[0_18px_38px_-28px_rgba(0,0,0,0.32),0_3px_10px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.95)] transition-[border-color,transform,box-shadow] duration-300 ease-[var(--ease-out)] hover:border-black/10 hover:shadow-[0_22px_44px_-28px_rgba(0,0,0,0.36),0_4px_12px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.95)] active:scale-[0.99] sm:min-w-[320px] sm:px-5"
              >
                <span
                  className="flex items-center gap-3 transition-[transform,opacity] duration-300 ease-[var(--ease-out)] group-hover:-translate-y-2 group-hover:opacity-0 motion-reduce:group-hover:translate-y-0 motion-reduce:group-hover:opacity-100"
                  aria-hidden
                >
                  <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-1 ring-black/[0.06]">
                    <Image
                      src="/src/user.avif"
                      alt=""
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </span>
                  <span className="flex min-w-0 flex-col items-start">
                    <span className="whitespace-nowrap text-[14px] font-semibold tracking-[-0.02em] text-[#171717] sm:text-[15px]">
                      Book a 15-min intro call
                    </span>
                    <span className="mt-0.5 flex items-center gap-1.5 text-[13px] font-medium text-[#8f8f8f]">
                      <span className="relative flex h-2.5 w-2.5 shrink-0">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2bd866] opacity-35 motion-reduce:animate-none" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#2bd866]" />
                      </span>
                      Available now
                    </span>
                  </span>
                </span>
                <span
                  className="pointer-events-none absolute inset-0 flex translate-y-2 items-center justify-center px-6 text-center text-[15px] font-semibold tracking-[-0.02em] text-[#171717] opacity-0 transition-[transform,opacity] duration-300 ease-[var(--ease-out)] group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:translate-y-0 motion-reduce:group-hover:opacity-0"
                  aria-hidden
                >
                  View calendar
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none relative z-0 mt-10 h-[260px] w-full overflow-hidden rounded-[32px] lg:hidden"
          aria-hidden
        >
          <HeroBackgroundPanel />
        </div>

        <div className="mt-14 flex flex-col items-center gap-6 border-t border-black/[0.06] pt-10 md:mt-16 md:flex-row md:items-center md:justify-between md:pt-12 lg:mt-16">
          <p className="text-center text-[13px] font-medium uppercase tracking-[0.12em] text-[#a3a3a3] md:text-left">
            Trusted by the biggest brands worldwide
          </p>
          <a
            href="https://www.framer.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-black/[0.08] bg-white px-3 py-2 text-[12px] font-medium text-[#1c1c1c] shadow-sm transition-[opacity,transform] hover:opacity-90"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M4 0h6v9H4V0zm0 15h6v9H4v-9zM15 9h6v6h-6V9zM4 9h6v6H4V9zm11-9h5v6h-5V0z" />
            </svg>
            Made in Framer
          </a>
        </div>
      </div>
    </section>
  );
}
