"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "#pricing", label: "Pricing" },
  { href: "#blog", label: "Blog" },
  { href: "/404", label: "404" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* ===== HEADER ===== */}
<header className="fixed top-0 left-0 w-full z-[100] bg-transparent">        <div className="mx-auto flex h-[70px] max-w-[1200px] items-center justify-between px-5 md:px-8 lg:px-10">
          
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-baseline gap-0.5 font-serif text-[18px] italic font-medium tracking-tight"
          >
            <span>whenevr</span>
            <span className="text-[10px] not-italic text-gray-500 translate-y-[-4px]">
              ®
            </span>
          </Link>

          {/* MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold shadow-sm hover:shadow-md transition"
          >
            Menu
            <svg width="12" height="12" viewBox="0 0 12 12">
              <path
                d="M2.5 4.5L6 8l3.5-3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* ===== OVERLAY MENU ===== */}
      <div
        className={`fixed inset-0 z-[200] bg-[#f5f5f5] transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* TOP BAR */}
        <div className="flex h-[70px] items-center justify-between px-5 md:px-8">
          
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-serif text-[18px] italic"
          >
            whenevr
          </Link>

          <button
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm"
          >
            Close
            <svg width="12" height="12" viewBox="0 0 12 12">
              <path
                d="M2.5 7.5L6 4l3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col items-center justify-center h-full gap-6 -mt-16">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="
                text-[clamp(2rem,8vw,4rem)]
                font-semibold
                tracking-tight
                hover:opacity-60
                transition
              "
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* FOOTER */}
        <div className="absolute bottom-6 w-full text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Whenevr®
        </div>
      </div>
    </>
  );
}