"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

// --- Strict Types for Cal.com ---
type CalApi = {
  (...args: unknown[]): void;
  q: unknown[][];
};

interface CalNamespace {
  (...args: unknown[]): void;
  ns: Record<string, CalApi>;
  q: unknown[][];
  loaded?: boolean;
}

interface CalWindow extends Window {
  Cal?: CalNamespace;
}

declare const window: CalWindow;

export function SiteFooter() {
  const calContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initCal = (C: CalWindow, A: string, L: string) => {
      const p = function (a: CalApi | CalNamespace, ar: unknown[]) {
        a.q.push(ar);
      };
      const d = document;

      C.Cal =
        C.Cal ||
        ((function (...args: unknown[]) {
          const cal = C.Cal!;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const s = d.createElement("script");
            s.src = A;
            d.head.appendChild(s);
            cal.loaded = true;
          }
          if (args[0] === L) {
            const api: CalApi = function (...apiArgs: unknown[]) {
              p(api, apiArgs);
            } as CalApi;
            const namespace = args[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], args);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, args);
            }
            return;
          }
          p(cal, args);
        }) as CalNamespace);
    };

    initCal(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = window.Cal;

    if (Cal && calContainerRef.current) {
      Cal("init", "booking", { origin: "https://cal.com" });

      // We use the ref directly to ensure the element exists in the DOM
      Cal.ns.booking("inline", {
        elementOrSelector: calContainerRef.current,
        config: { layout: "month_view", theme: "dark" },
        calLink: "hxmzaehsan/demo",
      });

      Cal.ns.booking("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#ffffff" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    }
  }, []);

  return (
    <footer id="book-a-call" className="bg-black text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Side: Branding and Text */}
          <div className="flex flex-col justify-start">
            <Link
              href="/"
              className="inline-flex items-baseline gap-0.5 font-serif text-[30px] font-semibold italic tracking-tighter text-white"
            >
              <span>whenevr</span>
              <span className="translate-y-[-12px] font-sans text-[14px] font-bold not-italic">
                ®
              </span>
            </Link>

            <h2 className="mt-12 text-[clamp(3.5rem,8vw,5.5rem)] font-semibold leading-[1] tracking-[-0.05em]">
              Design <span className="font-serif italic">doesn&apos;t</span> <br />
              need to be complicated.
            </h2>

            <p className="mt-8 max-w-[480px] text-[18px] leading-relaxed text-[#7c7c7c]">
              Book a quick call and get a clear look at how Whenevr works,
              what&apos;s included, and whether it fits your pace.
            </p>

            <div className="mt-10">
              <Link
                href="#pricing"
                className="inline-flex h-[54px] items-center justify-center rounded-full bg-white px-8 text-[16px] font-semibold text-black transition-transform hover:scale-105"
              >
                See Pricing
              </Link>
            </div>
          </div>

          {/* Right Side: Cal.com Embed */}
          <div className="relative min-h-[600px] overflow-hidden rounded-[24px] bg-[#111]">
            {/* 
                1. We use a ref here instead of just an ID.
                2. We set a fixed height and width to prevent collapse.
            */}
            <div 
              ref={calContainerRef}
              id="my-cal-inline" 
              style={{ width: "100%", height: "600px", overflow: "auto" }}
            />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-24 flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row">
          <p className="text-[14px] text-[#7c7c7c]">
            © {new Date().getFullYear()} Whenevr. Created by{" "}
            <a href="#" className="text-white hover:underline">
              Kartavi Koya
            </a>
          </p>
          <div className="mt-4 flex gap-6 text-[14px] text-[#7c7c7c] md:mt-0">
            <Link href="/thank-you" className="hover:text-white">
              Thank You
            </Link>
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}