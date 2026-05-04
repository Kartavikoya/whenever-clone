"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  { href: "#pricing", label: "Pricing" },
  { href: "#blog", label: "Blog" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] ${
          scrolled
            ? "border-b border-black/[0.06] bg-white/80 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[74px] max-w-[1200px] items-center justify-between px-5 md:px-9">
          <Link
            href="/"
            className="group flex items-baseline gap-0.5 text-[15px] font-semibold tracking-tight text-[#000]"
            onClick={() => setOpen(false)}
          >
            <span>Whenevr</span>
            <span className="translate-y-[-2px] text-[10px] font-medium text-[#7c7c7c] transition-colors group-hover:text-[#989898]">
              ®
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] font-medium text-[#7c7c7c] transition-colors duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)] hover:text-[#989898]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#pricing"
              className="rounded-full bg-[#000] px-4 py-2.5 text-[14px] font-semibold text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              See Pricing
            </Link>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-[#dcdcdc] bg-white md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-4 rounded-full bg-[#1c1c1c] transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-4 rounded-full bg-[#1c1c1c] transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-4 rounded-full bg-[#1c1c1c] transition-transform ${open ? "-translate-y-[9px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed inset-x-0 top-[74px] z-40 border-b border-[#eee] bg-white px-5 py-6 shadow-lg transition-[transform,opacity] duration-300 ease-out md:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-medium text-[#1c1c1c]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#pricing"
            className="mt-2 rounded-full bg-[#000] py-3 text-center text-[15px] font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            See Pricing
          </Link>
        </nav>
      </div>
    </>
  );
}
