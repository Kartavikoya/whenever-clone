"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const overlayLinks = [
  { href: "/", label: "Home" },
  { href: "#pricing", label: "Pricing" },
  { href: "#blog", label: "Blog" },
  { href: "/404", label: "404" },
];

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
    >
      <path
        d="M2.5 4.5L6 8l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronUp({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
    >
      <path
        d="M2.5 7.5L6 4l3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] ${
          open
            ? "pointer-events-none opacity-0"
            : scrolled
              ? "border-b border-black/[0.06] bg-white/80 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-xl"
              : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[74px] max-w-[1200px] items-center justify-between px-5 md:px-9">
          <Link
            href="/"
            className="pointer-events-auto group flex items-baseline gap-0.5 font-serif text-[17px] font-medium italic tracking-tight text-[#000]"
          >
            <span>whenevr</span>
            <span className="translate-y-[-3px] font-sans text-[11px] font-medium not-italic text-[#7c7c7c] transition-colors group-hover:text-[#989898]">
              ®
            </span>
          </Link>

          <button
            type="button"
            className="pointer-events-auto inline-flex h-11 items-center gap-2 rounded-full border border-black/[0.06] bg-white px-5 text-[14px] font-semibold text-[#000] shadow-[0_10px_24px_-20px_rgba(0,0,0,0.22)] transition-[transform,box-shadow,background-color] hover:shadow-md active:scale-[0.98]"
            aria-expanded={open}
            aria-controls="site-menu-overlay"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            Menu
            <ChevronDown className="text-[#7c7c7c]" />
          </button>
        </div>
      </header>

      <div
        id="site-menu-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-0 z-[200] flex flex-col bg-[#f5f5f5] transition-[opacity,visibility] duration-300 ease-out ${
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-[74px] shrink-0 items-center justify-between px-5 md:px-9">
          <Link
            href="/"
            className="group flex items-baseline gap-0.5 font-serif text-[17px] font-medium italic tracking-tight text-[#000]"
            onClick={() => setOpen(false)}
          >
            <span>whenevr</span>
            <span className="translate-y-[-3px] font-sans text-[11px] font-medium not-italic text-[#7c7c7c] transition-colors group-hover:text-[#989898]">
              ®
            </span>
          </Link>

          <button
            type="button"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-black/[0.12] bg-white px-4 text-[14px] font-semibold text-[#000] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-[transform,box-shadow] hover:shadow-md active:scale-[0.98]"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            Close
            <ChevronUp className="text-[#7c7c7c]" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col items-center justify-center px-5">
          <ul className="flex flex-col items-center gap-2 md:gap-3">
            {overlayLinks.map((item) => (
              <li key={item.href + item.label}>
                <Link
                  href={item.href}
                  className="block py-1 text-center text-[clamp(2rem,6vw,3.5rem)] font-semibold leading-tight tracking-[-0.03em] text-[#000] transition-opacity hover:opacity-65"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid shrink-0 grid-cols-1 items-end gap-6 px-5 py-8 md:grid-cols-3 md:px-9 md:py-10">
          <div className="hidden md:block" aria-hidden />
          <p className="text-center text-[13px] font-medium text-[#989898] md:justify-self-center">
            © {new Date().getFullYear()} Whenevr®
          </p>
          <a
            href="https://www.framer.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 justify-self-center rounded-lg border border-black/[0.08] bg-white px-3 py-2 text-[12px] font-medium text-[#1c1c1c] shadow-sm transition-opacity hover:opacity-90 md:justify-self-end"
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
    </>
  );
}
