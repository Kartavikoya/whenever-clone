import type { CSSProperties } from "react";
import Link from "next/link";

const avatars = [
  {
    src: "https://framerusercontent.com/images/BO0gqMrfuh0s8JmDOxMojB5OI.jpg",
    alt: "Client portrait",
    className:
      "left-[2%] top-[46%] h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28",
    rotate: "-18deg",
    duration: "9s",
    delay: "-1.5s",
  },
  {
    src: "https://framerusercontent.com/images/0B4Bnyg6icYpa3t2QzkfMSqA4.jpg",
    alt: "Client portrait",
    className:
      "left-[9%] top-[72%] h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28",
    rotate: "-10deg",
    duration: "8.5s",
    delay: "-2.2s",
  },
  {
    src: "https://framerusercontent.com/images/jkQ44jyxWbNQngQ6VemDRhTpdIs.jpg",
    alt: "Client portrait",
    className:
      "left-[18%] top-[21%] h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32",
    rotate: "-14deg",
    duration: "10s",
    delay: "-0.5s",
  },
  {
    src: "https://framerusercontent.com/images/EZf2sd1ERitV0fyc1B6iUYvb4.jpg",
    alt: "Client portrait",
    className:
      "left-[36%] top-[4%] h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32",
    rotate: "-4deg",
    duration: "9.5s",
    delay: "-2.8s",
  },
  {
    src: "https://framerusercontent.com/images/i0NTUd9AYtRyn4DgPcd9Alwyw.jpg",
    alt: "Client portrait",
    className:
      "left-1/2 top-0 h-24 w-24 -translate-x-1/2 sm:h-28 sm:w-28 lg:h-32 lg:w-32",
    rotate: "2deg",
    duration: "8.8s",
    delay: "-1.1s",
  },
  {
    src: "https://framerusercontent.com/images/BO0gqMrfuh0s8JmDOxMojB5OI.jpg",
    alt: "Client portrait",
    className:
      "right-[18%] top-[6%] h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32",
    rotate: "10deg",
    duration: "9.8s",
    delay: "-3.2s",
  },
  {
    src: "https://framerusercontent.com/images/0B4Bnyg6icYpa3t2QzkfMSqA4.jpg",
    alt: "Client portrait",
    className:
      "right-[7%] top-[22%] h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32",
    rotate: "14deg",
    duration: "8.7s",
    delay: "-1.8s",
  },
  {
    src: "https://framerusercontent.com/images/jkQ44jyxWbNQngQ6VemDRhTpdIs.jpg",
    alt: "Client portrait",
    className:
      "right-[1%] top-[52%] h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28",
    rotate: "-12deg",
    duration: "9.1s",
    delay: "-2.6s",
  },
  {
    src: "https://framerusercontent.com/images/EZf2sd1ERitV0fyc1B6iUYvb4.jpg",
    alt: "Client portrait",
    className:
      "left-[-2%] top-[92%] h-[4.5rem] w-[4.5rem] opacity-35 blur-[1px] sm:h-20 sm:w-20",
    rotate: "0deg",
    duration: "7.5s",
    delay: "-1s",
  },
  {
    src: "https://framerusercontent.com/images/i0NTUd9AYtRyn4DgPcd9Alwyw.jpg",
    alt: "Client portrait",
    className:
      "right-[-2%] top-[92%] h-[4.5rem] w-[4.5rem] opacity-35 blur-[1px] sm:h-20 sm:w-20",
    rotate: "0deg",
    duration: "7.5s",
    delay: "-1.7s",
  },
];

export function PricingStrip() {
  return (
    <section className="overflow-hidden bg-[#f5f5f5] py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-9">
        <div className="relative mx-auto h-[430px] w-full max-w-[1380px] sm:h-[520px] lg:h-[760px]">
          {avatars.map((avatar) => (
            <div
              key={`${avatar.src}-${avatar.className}`}
              className={`floating-avatar absolute overflow-hidden rounded-full border-[6px] border-white bg-white shadow-[0_28px_50px_-32px_rgba(0,0,0,0.24)] ${avatar.className}`}
              style={
                {
                  "--avatar-rotate": avatar.rotate,
                  "--avatar-duration": avatar.duration,
                  "--avatar-delay": avatar.delay,
                } as CSSProperties
              }
            >
              <img
                src={avatar.src}
                alt={avatar.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}

          <div className="absolute inset-x-0 top-[38%] mx-auto flex max-w-[960px] flex-col items-center px-2 text-center sm:top-[40%]">
            <h2 className="max-w-[980px] text-balance text-[clamp(2.5rem,6vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-[#000]">
              100+ clients getting
              <br />
              <span className="font-serif font-medium italic">better</span>{" "}
              design, faster.
            </h2>

            <Link
              href="#book-a-call"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-black/[0.06] bg-white px-4 py-3 text-left shadow-[0_24px_44px_-30px_rgba(0,0,0,0.24)] transition-transform duration-300 hover:-translate-y-0.5 md:mt-10 md:gap-4 md:px-5"
            >
              <span className="relative h-10 w-10 overflow-hidden rounded-full md:h-12 md:w-12">
                <img
                  src="https://framerusercontent.com/images/zmsN1XwHAmUsgVTOdNQvAcnvqQ.jpg"
                  alt="Call host portrait"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="flex flex-col">
                <span className="text-[13px] font-semibold tracking-[-0.03em] text-[#171717] md:text-[18px]">
                  Book a 15-min intro call
                </span>
                <span className="mt-0.5 flex items-center gap-1.5 text-[12px] font-medium text-[#9a9a9a] md:gap-2 md:text-[14px]">
                  <span className="soft-pulse h-2 w-2 rounded-full bg-[#2bd866] md:h-2.5 md:w-2.5" />
                  Available now
                </span>
              </span>
            </Link>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#f5f5f5]" />
        </div>
      </div>
    </section>
  );
}
