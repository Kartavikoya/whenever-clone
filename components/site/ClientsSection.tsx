"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const avatars = [
  { src: "https://framerusercontent.com/images/D4OlAav8RISd0opp4Z1aT4ypRXw.png" },
  { src: "https://framerusercontent.com/images/w5X4QRiIXVeXf71DL6mW0nV6Awk.png" },
  { src: "https://framerusercontent.com/images/UT4fxQBnxf542T5Cf7zZOvBxy0.png" },
  { src: "https://framerusercontent.com/images/4UX9uXT3N0WRExPOcc1r8bpVQAk.png" },
  { src: "https://framerusercontent.com/images/pSEmRq7TZ5niunpklVk0dvh1mDA.png" },
  { src: "https://framerusercontent.com/images/AcrDBNPoA5kazwDFtUC2IeoPoo.png" },
  { src: "https://framerusercontent.com/images/d8p3LHFKtLnBbQ65oGYA48cZwYI.png" },
  { src: "https://framerusercontent.com/images/505rrWNYkeLbF8KyvL2Owkhh7I.png" },
  { src: "https://framerusercontent.com/images/lEVDQNWDkdXcIlfM1j2Kfmp8at8.png" },
  
];

export function ClientsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth rotation for the whole ring
  const rotateRaw = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const rotate = useSpring(rotateRaw, { stiffness: 50, damping: 25 });

  // Reverse rotation to keep images upright
  const reverseRotate = useTransform(rotate, (v) => v * -1);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#f8f8f8] py-32 min-h-[90vh] flex items-center justify-center">
      <div className="relative w-full max-w-[1200px] h-[600px] flex items-center justify-center">
        
        {/* ROTATING CONTAINER */}
        <motion.div style={{ rotate }} className="absolute inset-0 flex items-center justify-center">
          {avatars.map((item, i) => {
            // Distribute avatars across a 220-degree arc at the top
            const startAngle = -200; 
            const endAngle = 20;
            const angle = startAngle + (i / (avatars.length - 1)) * (endAngle - startAngle);
            
            return (
              <Avatar 
                key={i} 
                src={item.src} 
                angle={angle} 
                reverseRotate={reverseRotate} 
              />
            );
          })}
        </motion.div>

        {/* CENTER TEXT */}
        <div className="relative z-10 text-center pointer-events-none">
          <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-tight leading-[1.1] text-[#1a1a1a]" style={{ fontSize: "xxx-large" }}>
            100+ clients getting <br />
            <span className="font-serif italic font-medium">better</span> design, faster.
          </h2>
          
          <div className="mt-10 pointer-events-auto flex justify-center">
            <Link href="#" className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-xl border border-gray-100 hover:scale-105 transition-transform">
              <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden relative">
                 <Image src= "/src/user.avif" alt="user" fill className="object-cover" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold leading-none">Book a 15-min intro call</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Available Now</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

function Avatar({ src, angle, reverseRotate }: { src: string; angle: number; reverseRotate: MotionValue<number> }) {
  const rad = (angle * Math.PI) / 180;
  
  // Elliptical radius: X is wider, Y is shorter to create the "horseshoe"
  const radiusX = 450; 
  const radiusY = 280;

  const x = Math.cos(rad) * radiusX;
  const y = Math.sin(rad) * radiusY;

  // Depth effect based on Y position (items further down are smaller/lighter)
  const depthFactor = (y + radiusY) / (2 * radiusY); // 0 to 1
  const scale = 0.8 + (1 - depthFactor) * 0.4;
  const opacity = 0.4 + (1 - depthFactor) * 0.6;

  return (
    <motion.div
      style={{
        position: "absolute",
        x,
        y,
        scale,
        opacity,
        rotate: reverseRotate, // This keeps the photo from tilting
      }}
      className="w-24 h-24 md:w-32 md:h-32 rounded-full border-[8px] border-white shadow-2xl overflow-hidden bg-white"
    >
      <Image src={src} alt="client" fill className="object-cover" />
    </motion.div>
  );
}