"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const demoImages = [
  "https://framerusercontent.com/images/UK3ji9XKftVKablDa07xbZ7o.jpeg",
  "https://framerusercontent.com/images/gdoBqgMU9ke6K07ShZLmpfUoWc.jpeg",
  "https://framerusercontent.com/images/ldLzFEXXuK2q3bgbFfV6MlgqbSw.jpeg",
  "https://framerusercontent.com/images/XTdwXzaaZ0uFZA76FvHmRgz1z4.jpeg",
];

export function ShowcaseSection() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [scrollWidth, setScrollWidth] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useLayoutEffect(() => {
    const update = () => {
      if (!trackRef.current) return;

      const totalWidth = trackRef.current.scrollWidth;
      const screenWidth = window.innerWidth;

      const distance = totalWidth - screenWidth;

      const maxScroll = Math.min(distance, window.innerHeight * 2);

      setScrollWidth(maxScroll);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollWidth]);

  return (
    <section
      ref={targetRef}
      id="projects"
      className="relative bg-[#0c0c0c]"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-4 md:gap-6 lg:gap-8 px-4 md:px-6"
        >
          {demoImages.map((src, i) => (
            <div
              key={i}
              className="
                relative flex-shrink-0
                h-[55vh] 
                w-[85vw] 
                sm:w-[80vw]
                md:h-[65vh] md:w-[65vw]
                lg:h-[70vh] lg:w-[60vw]
              "
            >
              <Image
                src={src}
                alt="Project"
                fill
                priority={i === 0}
                className="rounded-[20px] md:rounded-[28px] object-cover"
              />

              <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-center px-4">
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-white/40">
                  Example content for demo purposes only.
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}