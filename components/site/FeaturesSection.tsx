"use client";

import { motion } from "framer-motion";

const features = [
  { title: "Simple design queue", desc: "Track tasks easily in Notion.", icon: "bars" },
  { title: "One price, always", desc: "Flat monthly rate, no surprises.", icon: "chat" },
  { title: "Quick turnaround", desc: "Most requests done in a few days.", icon: "bolt" },
  { title: "High-quality every time", desc: "Senior designer, nothing less.", icon: "grid" },
  { title: "You're in control", desc: "Change or pause your plan anytime.", icon: "toggle" },
  { title: "100 percent yours", desc: "Custom work, fully owned by you.", icon: "lock" },
];

function FeatureIcon({ type }: { type: string }) {
  const iconClass = "text-black mb-6 block";
  if (type === "bars") return (
    <div className="flex gap-1 mb-8">
      <span className="h-8 w-3 rounded-[3px] bg-black" />
      <span className="h-8 w-3 rounded-[3px] bg-black" />
    </div>
  );
  if (type === "chat") return (
    <svg width="34" height="34" viewBox="0 0 256 256" fill="currentColor" className="mb-8">
      <path d="M216,40H40A16,16,0,0,0,24,56V208a8,8,0,0,0,11.58,7.15L64,200.94l28.42,14.21a8,8,0,0,0,7.16,0L128,200.94l28.42,14.21a8,8,0,0,0,7.16,0L192,200.94l28.42,14.21A8,8,0,0,0,232,208V56A16,16,0,0,0,216,40ZM176,144H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z" />
    </svg>
  );
  if (type === "bolt") return (
    <svg width="34" height="34" viewBox="0 0 256 256" fill="currentColor" className="mb-8">
      <path d="M213.85,125.46l-112,120a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l112-120a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95Z" />
    </svg>
  );
  if (type === "grid") return (
    <svg width="34" height="34" viewBox="0 0 256 256" fill="currentColor" className="mb-8">
      <path d="M86.9,73.82a16.72,16.72,0,0,1,0-23.65l29.27-29.28a16.75,16.75,0,0,1,23.66,0L169.1,50.17a16.72,16.72,0,0,1,0,23.65L139.83,103.1a16.75,16.75,0,0,1-23.66,0h0Zm148.21,42.35L205.83,86.89a16.74,16.74,0,0,0-23.65,0L152.9,116.17a16.75,16.75,0,0,0,0,23.66l29.28,29.28h0a16.74,16.74,0,0,0,23.65,0l29.28-29.28A16.75,16.75,0,0,0,235.11,116.17Zm-132,0L73.82,86.89a16.74,16.74,0,0,0-23.65,0L20.89,116.17a16.75,16.75,0,0,0,0,23.66l29.28,29.28h0a16.74,16.74,0,0,0,23.65,0l29.28-29.28A16.75,16.75,0,0,0,103.1,116.17Zm36.73,36.73a16.75,16.75,0,0,0-23.66,0L86.9,182.18a16.72,16.72,0,0,0,0,23.65l29.27,29.28h0a16.75,16.75,0,0,0,23.66,0l29.27-29.28a16.72,16.72,0,0,0,0-23.65Z" />
    </svg>
  );
  if (type === "toggle") return (
    <svg width="34" height="34" viewBox="0 0 256 256" fill="currentColor" className="mb-8">
      <path d="M176,56H80a72,72,0,0,0,0,144h96a72,72,0,0,0,0-144Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,176,168Z" />
    </svg>
  );
  return (
    <svg width="34" height="34" viewBox="0 0 256 256" fill="currentColor" className="mb-8">
      <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm32-84H96V56a32,32,0,0,1,64,0Z" />
    </svg>
  );
}

export function FeaturesSection() {
  return (
    <section className="bg-[#f1f0f0] py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[14px] font-medium text-black opacity-40 mb-4">
            Features
          </span>
          <h2 className="text-[52px] md:text-[84px] font-bold tracking-tight leading-[0.95] text-black max-w-3xl">
            Everything you need <br />
            and <span className="font-serif italic font-medium">nothing</span> you don't.
          </h2>
        </div>

        {/* FEATURE GRID */}
        <div className="grid md:grid-cols-3 gap-5">
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              className="rounded-[24px] bg-white p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between aspect-[4/3] md:aspect-square lg:aspect-[4/3]"
            >
              <div>
                <FeatureIcon type={feature.icon} />
                <h3 className="text-[22px] font-bold tracking-tight text-black leading-tight">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[16px] font-medium text-black/40">
                  {feature.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
        {/* MARQUEE SECTION */}
        <div className="relative flex flex-col items-center justify-center py-20">
          <div 
            className="relative flex w-full max-w-4xl overflow-hidden"
            style={{ 
              maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)"
            }}
          >
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="flex gap-4 whitespace-nowrap px-4"
            >
              {[
                "Social Graphics", "UX Design", "Pitch Decks", "Web Design", 
                "Branding", "Blog Graphics", "Landing Pages", "Illustrations"
              ].map((tag, i) => (
                <span 
                  key={i} 
                  className="rounded-full bg-white px-7 py-4 text-[17px] font-bold tracking-tight text-black shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-black/[0.03]"
                >
                  {tag}
                </span>
              ))}
              {/* Duplicate tags for seamless loop */}
              {[
                "Social Graphics", "UX Design", "Pitch Decks", "Web Design", 
                "Branding", "Blog Graphics", "Landing Pages", "Illustrations"
              ].map((tag, i) => (
                <span 
                  key={`dup-${i}`} 
                  className="rounded-full bg-white px-7 py-4 text-[17px] font-bold tracking-tight text-black shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-black/[0.03]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}