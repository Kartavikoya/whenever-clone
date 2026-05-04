"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const demoImages = [
  "https://framerusercontent.com/images/UK3ji9XKftVKablDa07xbZ7o.jpeg",
  "https://framerusercontent.com/images/gdoBqgMU9ke6K07ShZLmpfUoWc.jpeg",
  "https://framerusercontent.com/images/ldLzFEXXuK2q3bgbFfV6MlgqbSw.jpeg",
  "https://framerusercontent.com/images/XTdwXzaaZ0uFZA76FvHmRgz1z4.jpeg",
];

export function ShowcaseSection() {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // CHANGED: Start at 0% to remove initial left space. 
  // Adjust "-70%" based on the total width of your images to ensure the last one finishes at the right edge.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section 
      ref={targetRef} 
      id="projects" 
      className="relative h-[400vh] bg-[#0c0c0c]"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <motion.div 
          style={{ x }} 
          // CHANGED: Removed px-[5vw] to prevent extra space on the left during the scroll start
          className="flex gap-8"
        >
          {demoImages.map((src, i) => (
            <div 
              key={i} 
              className="relative h-[75vh] w-[90vw] flex-shrink-0 md:w-[70vw] lg:w-[60vw]"
            >
              <Image
                src={src} 
                alt="Project display" 
                fill
                priority={i === 0}
                className="rounded-[32px] object-cover"
              />
              
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
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