const features = [
  {
    title: "Simple design queue",
    desc: "Track tasks easily in Notion.",
    icon: "bars",
  },
  {
    title: "One price, always",
    desc: "Flat monthly rate, no surprises.",
    icon: "chat",
  },
  {
    title: "Quick turnaround",
    desc: "Most requests done in a few days.",
    icon: "bolt",
  },
  {
    title: "High-quality every time",
    desc: "Senior designer, nothing less.",
    icon: "grid",
  },
  {
    title: "You’re in control",
    desc: "Change or pause your plan anytime.",
    icon: "toggle",
  },
  {
    title: "100 percent yours",
    desc: "Custom work, fully owned by you.",
    icon: "lock",
  },
];

function FeatureIcon({ type }: { type: string }) {
  if (type === "bars") {
    return (
      <div className="flex gap-1">
        <span className="h-9 w-4 rounded-[4px] bg-[#000]" />
        <span className="h-9 w-4 rounded-[4px] bg-[#000]" />
      </div>
    );
  }

  if (type === "chat") {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
        <path d="M8 9h24v18H19l-7 5v-5H8V9Z" fill="#000" />
        <path d="M15 16h10M15 21h7" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "bolt") {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
        <path d="M22 4 8 22h8l-2 14 18-22h-9l1-10Z" fill="#000" />
      </svg>
    );
  }

  if (type === "grid") {
    return (
      <div className="grid grid-cols-2 gap-1.5">
        <span className="h-4 w-4 rotate-45 rounded-[4px] bg-[#000]" />
        <span className="h-4 w-4 rotate-45 rounded-[4px] bg-[#000]" />
        <span className="h-4 w-4 rotate-45 rounded-[4px] bg-[#000]" />
        <span className="h-4 w-4 rotate-45 rounded-[4px] bg-[#000]" />
      </div>
    );
  }

  if (type === "toggle") {
    return (
      <div className="flex h-8 w-12 items-center rounded-full bg-[#000] px-1">
        <span className="h-6 w-6 rounded-full bg-white" />
      </div>
    );
  }

  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      <rect x="9" y="14" width="22" height="17" rx="2.5" stroke="#000" strokeWidth="3" />
      <path d="M15 14V10a5 5 0 0 1 10 0v4" stroke="#000" strokeWidth="3" strokeLinecap="round" />
      <circle cx="20" cy="22" r="2.5" fill="#000" />
    </svg>
  );
}

export function FeaturesSection() {
  return (
    <section className="bg-[#f5f5f5] py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-5 md:px-9">
        <div className="flex flex-col items-center text-center">
          <span className="rounded-full border border-black/[0.06] bg-white px-3 py-1 text-[11px] font-semibold text-[#6f6f6f]">
            Features
          </span>
          <h2 className="mt-4 max-w-[980px] text-balance text-[clamp(2rem,5vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#000]">
            Everything you need and <span className="font-serif italic">nothing</span> you don&apos;t.
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1180px] gap-4 md:mt-16 md:grid-cols-3 md:gap-6">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[22px] border border-black/[0.06] bg-white p-7 shadow-[0_22px_54px_-36px_rgba(0,0,0,0.22)]"
            >
              <div className="mb-10">
                <FeatureIcon type={feature.icon} />
              </div>
              <h3 className="text-[18px] font-semibold tracking-[-0.04em] text-[#000] md:text-[20px]">
                {feature.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.55] text-[#9a9a9a]">
                {feature.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
