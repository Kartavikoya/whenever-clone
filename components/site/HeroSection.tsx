"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export function HeroSection() {
  const [hovered, setHovered] = useState<"pricing" | "call" | null>(null);

  return (
    <section className="relative pt-[100px] bg-[#f5f5f5] overflow-hidden">
      <div
        className="
        relative flex flex-col justify-center 
        min-h-[80vh] md:min-h-[90vh] lg:min-h-screen 
        px-6 md:px-16 lg:px-24 
        pt-28 md:pt-32 lg:pt-40 
        pb-32 md:pb-40
      "
      >
        {/* ===== BACKGROUND (UNCHANGED) ===== */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div
            className="
            absolute 
            top-[-10%] md:top-0 
            right-[-40%] md:right-[-20%] lg:right-[-15%]
            w-[140vw] md:w-[90vw] lg:w-[70vw] 
            h-[120%]
          "
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -60 }}
              animate={{ opacity: 1, scale: 1.05, rotate: -75 }}
              transition={{ duration: 1.2 }}
              className="relative w-full h-full"
            >
              <Image
                src="https://framerusercontent.com/images/922LPrLT3JS7JXQbJxraBeoo8I.png"
                alt=""
                fill
                priority
                className="object-cover blur-[10px] md:blur-[8px] opacity-90"
              />
            </motion.div>
          </div>

          <div className="absolute top-0 left-0 w-[70%] md:w-[50%] h-full bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
          <div className="absolute bottom-0 left-0 w-full h-[250px] md:h-[400px] bg-gradient-to-b from-transparent via-white/70 to-white z-10" />
        </div>

        {/* ===== CONTENT ===== */}
        <div className="relative z-20 max-w-xl md:max-w-2xl lg:max-w-4xl">
          <h1
            className="
            text-[clamp(2.2rem,8vw,5.2rem)]
            leading-[1.05]
            tracking-[-0.04em]
            font-semibold
            text-black
            mb-6
          "
          >
            World-class design <br />
            <span className="italic font-serif font-normal">whenevr</span>{" "}
            <br />
            you need it.
          </h1>

          <p
            className="
            text-gray-500 
            text-base md:text-lg lg:text-xl 
            max-w-md 
            mb-10
          "
          >
            A monthly design subscription for startups, creators, and teams.
          </p>

          {/* ===== BUTTONS ===== */}
          <div
            className="flex items-center gap-[10px] md:gap-[14px] mt-2"
            onMouseLeave={() => setHovered(null)}
          >
            {/* ===== SEE PRICING ===== */}
            <motion.a
              href="#pricing"
              onMouseEnter={() => setHovered("pricing")}
              className="
      relative overflow-hidden
      inline-flex items-center justify-center
      h-[56px] md:h-[64px]
      px-8 md:px-10
      min-w-[180px] md:min-w-[200px]
      whitespace-nowrap
      flex-shrink-0
      rounded-full
      bg-black text-white
      text-[15px] md:text-[17px]
      font-semibold
    "
              whileHover={{ y: -2 }}
            >
              <span className="invisible">See Pricing</span>

              {/* DEFAULT */}
              <motion.span
                className="absolute"
                animate={{
                  opacity: hovered === "pricing" ? 0 : 1,
                  y: hovered === "pricing" ? -12 : 0,
                  filter: hovered === "pricing" ? "blur(3px)" : "blur(0px)",
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                See Pricing
              </motion.span>

              {/* HOVER */}
              <motion.span
                className="absolute"
                initial={{ opacity: 0, y: 12, filter: "blur(3px)" }}
                animate={{
                  opacity: hovered === "pricing" ? 1 : 0,
                  y: hovered === "pricing" ? 0 : 12,
                  filter: hovered === "pricing" ? "blur(0px)" : "blur(3px)",
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                See Pricing
              </motion.span>
            </motion.a>

            {/* ===== BOOK CALL ===== */}
            <motion.a
              href="#my-cal-inline"
                onMouseEnter={() => setHovered("call")}
                className="
                relative overflow-hidden
                inline-flex items-center gap-3
                h-[52px] md:h-[56px]
                px-5 md:px-6
                min-w-[240px] md:min-w-[260px]
                rounded-full
                bg-white
                border border-black/10
                shadow-[0_4px_14px_rgba(0,0,0,0.08)]
                whitespace-nowrap
                flex-shrink-0
              "
              whileHover={{ y: -2 }}
            >
              {/* AVATAR (FIXED) */}
              <motion.div
                className="relative w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden shrink-0"
                animate={{
                  opacity: hovered === "call" ? 0 : 1,
                }}
                transition={{ duration: 0.15 }}
              >
                <Image
                  src="/src/user.avif"
                  alt=""
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* TEXT */}
              {/* TEXT */}
              <div className="relative h-[34px] flex items-center justify-center w-full">
                {/* width keeper */}
                <span className="invisible text-[13px]">
                  Book a 15-min intro call
                </span>

                {/* DEFAULT */}
                <motion.div
                  className="absolute left-0 right-0 flex flex-col items-center"
                  animate={{
                    opacity: hovered === "call" ? 0 : 1,
                    y: hovered === "call" ? -12 : 0,
                    filter: hovered === "call" ? "blur(3px)" : "blur(0px)",
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <div className="text-[13px] md:text-[14px] font-medium text-black text-center">
                    Book a 15-min intro call
                  </div>

                  <div className="flex items-center justify-center gap-1 text-[11px] text-gray-500 mt-[2px]">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    Available now
                  </div>
                </motion.div>

                {/* HOVER */}
                <motion.div
                  className="absolute left-0 right-0 flex justify-center"
                  initial={{ opacity: 0, y: 12, filter: "blur(3px)" }}
                  style={{marginLeft: "-81px"}}
                  animate={{
                    opacity: hovered === "call" ? 1 : 0,
                    y: hovered === "call" ? 0 : 12,
                    filter: hovered === "call" ? "blur(0px)" : "blur(3px)",
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <div className="text-[13px] md:text-[14px] font-semibold text-black text-center">
                    View calendar
                  </div>
                </motion.div>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
