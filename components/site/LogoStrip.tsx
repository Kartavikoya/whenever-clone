"use client";

import Image from "next/image";

const LOGOS = [
  "/logos/logo1.svg",
  "/logos/logo2.svg",
  "/logos/logo3.svg",
  "/logos/logo4.svg",
  "/logos/logo5.svg",
];

export function LogoStrip() {
  return (
    <div className="
      relative z-10 
      -mt-4 md:-mt-12 lg:-mt-20
      pb-8 md:pb-14
    ">
      <div className="
        mx-auto 
        max-w-[1200px] 
        px-6 md:px-16 lg:px-24 
        flex flex-col md:flex-row 
        items-center 
        gap-4 md:gap-10
      ">
        
        <p className="
          text-[11px] md:text-[13px] 
          text-[#989898] 
          max-w-[140px] 
          text-center md:text-left
        ">
          Trusted by the biggest brands worldwide
        </p>

        <div className="relative w-full overflow-hidden mask-framer">
          <div className="
            flex w-max 
            gap-8 md:gap-12 
            animate-logo-scroll 
            items-center
          ">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <Image
                key={i}
                src={logo}
                alt=""
                width={100}
                height={24}
                className="h-4 md:h-6 w-auto opacity-70 grayscale"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}