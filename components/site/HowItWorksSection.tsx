"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tagsRow1 = ["Branding", "Social Graphics", "UX Design", "Pitch Decks", "Illustration"];
const tagsRow2 = ["Style Guides", "Icon Design", "Ad Creatives", "App Design", "Websites"];

const buttonVariants = {
  initial: { scale: 1, backgroundColor: "#000000" },
  hover: { scale: 1.05, backgroundColor: "#1a1a1a" }
};

export function HowItWorksSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">How it works</p>
          <h2 className="text-5xl md:text-[75px] font-semibold tracking-tight leading-[1.05]">
            Welcome to the <span className="italic font-serif font-medium">better</span> way <br /> of getting design done.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* CARD 1: SUBSCRIBE - Updated with Video-style Text Switch */}
          <article className="bg-white rounded-[24px] md:rounded-[40px] p-5 md:p-8 border border-black/5 shadow-sm flex flex-col justify-between">
            <motion.div 
              initial="initial"
              whileHover="hover"
              className="bg-[#f2f2f2] rounded-[30px] p-10 mb-8 relative flex flex-col items-center cursor-pointer"
            >
              <div className="w-full flex justify-between items-center mb-12">
                <span className="font-serif italic text-2xl">whenevr®</span>
                <span className="bg-white px-3 py-1 rounded-full text-[10px] font-bold shadow-sm">Popular</span>
              </div>
              <div className="mb-12 text-center">
                <span className="text-7xl font-bold tracking-tighter text-black">$2,995</span>
                <span className="text-gray-400 ml-1 text-sm font-medium">/month</span>
              </div>

              {/* VIDEO-STYLE ANIMATED BUTTON */}
              <motion.a
               href="#pricing"
                variants={buttonVariants}
                className="w-full h-[64px] text-white rounded-full font-bold text-lg shadow-xl relative overflow-hidden flex items-center justify-center"
              >
                <div className="relative h-full w-full flex items-center justify-center">
                  {/* Primary Text: Slides Up and Out */}
                  <motion.span
                    className="absolute"
                    variants={{
                      initial: { y: 0, opacity: 1 },
                      hover: { y: -40, opacity: 0 }
                    }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    Join today
                  </motion.span>

                  {/* Secondary Text: Slides Up and In */}
                  <motion.span
                  
                    className="absolute"
                    variants={{
                      initial: { y: 40, opacity: 0 },
                      hover: { y: 0, opacity: 1 }
                    }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    Join Today
                  </motion.span>
                </div>
              </motion.a>
            </motion.div>
            
            <div>
              <h3 className="text-2xl font-bold mb-2">Subscribe</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Pick a plan and get started right away. No calls, no setup, just design on demand.</p>
            </div>
          </article>

          {/* CARD 2: REQUEST */}
          <article className="bg-white rounded-[24px] md:rounded-[40px] p-5 md:p-8 border border-black/5 shadow-sm flex flex-col justify-between group cursor-pointer">
            <motion.div 
              initial="initial"
              whileHover="hover"
              className="bg-[#fafafa] rounded-[30px] h-[340px] mb-8 relative flex flex-col justify-center overflow-hidden border border-black/[0.03]"
            >
              <div className="space-y-4 opacity-25 group-hover:opacity-40 transition-opacity duration-500">
                <MarqueeRow items={tagsRow1} duration={40} />
                <MarqueeRow items={tagsRow2} duration={45} reverse />
                <MarqueeRow items={tagsRow1} duration={42} />
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  variants={{ hover: { scale: 1.1, rotate: -5 } }}
                  className="w-24 h-24 bg-black rounded-[28px] shadow-2xl flex items-center justify-center relative overflow-hidden"
                >
                  <motion.span 
                    className="font-serif italic text-white text-5xl absolute"
                    variants={{
                      initial: { opacity: 1, y: 0 },
                      hover: { opacity: 0, y: 20 }
                    }}
                  >
                    W
                  </motion.span>
                  
                  <motion.div
                    className="absolute"
                    variants={{
                      initial: { opacity: 0, scale: 0.5, y: -20 },
                      hover: { opacity: 1, scale: 1.1, y: 0 }
                    }}
                  >
                    <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Request</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Submit any design task you need. Landing pages, product visuals, brand assets, and more.</p>
            </div>
          </article>

          {/* CARD 3: RECEIVE */}
          <article className="bg-white rounded-[24px] md:rounded-[40px] p-5 md:p-8 border border-black/5 shadow-sm flex flex-col justify-between group cursor-pointer">
            <motion.div 
              initial="initial"
              whileHover="hover"
              className="bg-[#fafafa] rounded-[30px] h-[340px] mb-8 relative flex items-center justify-center overflow-hidden border border-black/[0.03]"
            >
              <div className="relative w-48 h-40 flex items-center justify-center">
                <motion.div 
                  variants={{
                    initial: { x: 0, y: 0, rotate: 0 },
                    hover: { x: -90, y: -45, rotate: -15 }
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className="absolute w-32 h-40 z-10 rounded-xl overflow-hidden shadow-2xl border-4 border-white"
                >
                  <Image src="https://framerusercontent.com/images/ebwTJIBeD2MM3iPO4JB6BPWF8.jpg?scale-down-to=512" alt="Graphic" fill className="object-cover" />
                </motion.div>

                <motion.div 
                  variants={{
                    initial: { x: 0, y: 0, rotate: 0 },
                    hover: { x: 90, y: -45, rotate: 15 }
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className="absolute w-32 h-40 z-10 rounded-xl overflow-hidden shadow-2xl border-4 border-white"
                >
                  <Image src="https://framerusercontent.com/images/FO0GbO8rNEXzxKJ7N9jYNS92Nvk.jpg?scale-down-to=512" alt="UI" fill className="object-cover" />
                </motion.div>

                <motion.div 
                  variants={{
                    initial: { y: 0, scale: 1 },
                    hover: { y: -115, scale: 1.1, zIndex: 40 }
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 12 }}
                  className="absolute w-32 h-40 z-20 rounded-xl overflow-hidden shadow-2xl border-4 border-white"
                >
                  <Image src="https://framerusercontent.com/images/MRXSykppVewwilGAfSKu7eZdgg.jpg?scale-down-to=512" alt="User" fill className="object-cover" />
                </motion.div>

                <div className="absolute w-44 h-36 bg-white rounded-2xl shadow-xl border border-black/5 flex items-center justify-center z-30 pointer-events-none">
                   <span className="font-serif italic text-6xl text-gray-100">w</span>
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-5 bg-[#e8e8e8] rounded-t-lg" />
                </div>
              </div>
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Receive</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Your design is delivered in a few business days. Simple, fast, and ready to use.</p>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

function MarqueeRow({ items, duration, reverse = false }: { items: string[], duration: number, reverse?: boolean }) {
  return (
    <motion.div 
      animate={{ x: reverse ? [-1000, 0] : [0, -1000] }}
      transition={{ repeat: Infinity, duration, ease: "linear" }}
      className="flex gap-4 whitespace-nowrap"
    >
      {[...items, ...items, ...items].map((item, i) => (
        <span key={i} className="px-6 py-3 bg-white border border-black/5 rounded-full text-[13px] font-bold shadow-sm">
          {item}
        </span>
      ))}
    </motion.div>
  );
}