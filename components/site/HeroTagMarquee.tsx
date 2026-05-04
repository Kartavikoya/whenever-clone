"use client";

import { useSyncExternalStore } from "react";

const tags = [
  "Social Graphics",
  "UX Design",
  "Pitch Decks",
  "Web Design",
  "Branding",
];

const pillClass =
  "shrink-0 rounded-full border border-black/[0.06] bg-white px-4 py-1.5 text-[13px] font-semibold tracking-tight text-[#000] shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:px-[18px]";

function subscribeReducedMotion(cb: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerReducedMotionSnapshot() {
  return false;
}

export function HeroTagMarquee() {
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );

  if (reduceMotion) {
    return (
      <div className="relative overflow-hidden px-1 py-1 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex flex-wrap justify-start gap-3 md:gap-4">
          {tags.map((t) => (
            <span key={t} className={pillClass}>
              {t}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden px-1 py-1 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div className="hero-tag-marquee-track flex w-max gap-3 md:gap-4">
        <div className="flex gap-3 md:gap-4">
          {tags.map((t) => (
            <span key={t} className={pillClass}>
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3 md:gap-4" aria-hidden>
          {tags.map((t) => (
            <span key={`dup-${t}`} className={pillClass}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
