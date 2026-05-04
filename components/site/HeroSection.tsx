"use client";

import Image from "next/image";
import Link from "next/link";
import { HeroTagMarquee } from "@/components/site/HeroTagMarquee";

function HeroBackgroundPanel() {
  return (
    <div
      className="relative h-full w-full"
       style={{
  transform: "rotate(-75deg)",        // ✅ exact angle
  transformOrigin: "65% 30%",         // ✅ exact pivot
}}
    >
      <Image
        src="https://framerusercontent.com/images/922LPrLT3JS7JXQbJxraBeoo8I.png"
        alt=""
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative bg-[#f5f5f5] pt-[74px]">
      
      {/* TOP FADE (same as yours) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[74px] bg-gradient-to-b from-[#f5f5f5] via-[#f5f5f5]/90 to-transparent" />

      <div className="relative mx-auto max-w-[1200px] px-5 pb-14 pt-8 md:px-9 md:pb-16 md:pt-10 lg:min-h-[min(640px,75vh)] lg:pb-20">

        {/* ✅ FIXED BLOB BACKGROUND */}
        <div className="pointer-events-none absolute right-[-10%] top-[-5%] z-[1] h-[700px] w-[700px] md:right-[-5%] md:top-[-5%] lg:h-[750px] lg:w-[750px]">
          <HeroBackgroundPanel />
        </div>

        {/* CONTENT */}
        <div className="relative z-[2] flex flex-col gap-8 lg:gap-10">

          {/* TAG MARQUEE */}
          <div className="relative z-[1] w-full">
            <HeroTagMarquee />
          </div>

          {/* TEXT SECTION */}
          <div className="relative z-[4] flex max-w-[660px] flex-col items-start gap-8 text-left">

            <div className="flex w-full max-w-[360px] flex-col gap-5 sm:max-w-[420px] lg:max-w-[640px]">
              <h1 className="text-pretty text-[clamp(2.35rem,4.5vw+0.85rem,6rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#000]">
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

              <p className="max-w-[320px] text-pretty text-[13px] leading-[1.55] text-[#6e6e6e] sm:max-w-[360px] sm:text-[15px] md:max-w-[430px] md:text-[17px]">
                A monthly design subscription for startups, creators, and teams
                who need work done without the wait.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex w-full max-w-lg flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">

              <Link
                href="#pricing"
                className="inline-flex h-[52px] shrink-0 items-center justify-center rounded-full bg-[#000] px-8 text-[15px] font-semibold text-white transition-[transform,box-shadow] duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
              >
                See Pricing
              </Link>

              <Link
                href="#book-a-call"
                className="group relative inline-flex min-h-[70px] scroll-mt-[90px] items-center overflow-hidden rounded-full border border-black/[0.06] bg-white px-4 py-3 text-[#1c1c1c] shadow-[0_18px_38px_-28px_rgba(0,0,0,0.32),0_3px_10px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.95)] transition-[border-color,transform,box-shadow] duration-300 ease-[var(--ease-out)] hover:border-black/10 hover:shadow-[0_22px_44px_-28px_rgba(0,0,0,0.36),0_4px_12px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.95)] active:scale-[0.99] sm:min-w-[320px] sm:px-5"
              >
                <span className="flex items-center gap-3 transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0">
                  <span className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-black/[0.06]">
                    <Image
                      src="/src/user.avif"
                      alt=""
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </span>

                  <span className="flex flex-col items-start">
                    <span className="text-[14px] font-semibold text-[#171717]">
                      Book a 15-min intro call
                    </span>
                    <span className="text-[13px] text-[#8f8f8f]">
                      ● Available now
                    </span>
                  </span>
                </span>

                <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                  View calendar
                </span>
              </Link>

            </div>
          </div>
        </div>

        {/* FOOTER LINE */}
        {/* <div className="mt-14 flex flex-col items-center gap-6 border-t border-black/[0.06] pt-10 md:flex-row md:justify-between">
          <p className="text-[13px] uppercase text-[#a3a3a3]">
            Trusted by the biggest brands worldwide
          </p>
        </div> */}

      </div>
      <div className="h-[60px] md:h-[90px]" />
    </section>
    
  );
}