const features = [
  {
    title: "Simple design queue",
    desc: "Track tasks easily in Notion.",
  },
  {
    title: "One price, always",
    desc: "Flat monthly rate, no surprises.",
  },
  {
    title: "Quick turnaround",
    desc: "Most requests done in a few days.",
  },
  {
    title: "High-quality every time",
    desc: "Senior designer, nothing less.",
  },
  {
    title: "You're in control",
    desc: "Change or pause your plan anytime.",
  },
  {
    title: "100 percent yours",
    desc: "Custom work, fully owned by you.",
  },
];

const tags = [
  "Social Graphics",
  "UX Design",
  "Pitch Decks",
  "Web Design",
  "Branding",
  "Blog Graphics",
  "Landing Pages",
  "Illustrations",
  "Product Design",
  "Email Design",
  "UI Design",
  "App Design",
  "Style Guides",
  "Icon Design",
  "Ad Creatives",
];

export function FeaturesSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-9">
        <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#989898]">
          Features
        </p>
        <h2 className="max-w-[640px] text-balance text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-[#000]">
          Everything you need and nothing you don&apos;t.
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-5">
          {features.map((f) => (
            <article
              key={f.title}
              className="rounded-[18px] border border-[#0000000f] bg-[#fafafa] p-6 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#dcdcdc] hover:shadow-[0_16px_48px_-28px_rgba(0,0,0,0.2)]"
            >
              <h3 className="text-lg font-semibold tracking-tight text-[#000]">
                {f.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#7c7c7c]">
                {f.desc}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2 lg:mt-12">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[#0000000d] bg-white px-3 py-1.5 text-[12px] font-medium text-[#4a4a4a] transition-colors hover:border-[#dcdcdc]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
