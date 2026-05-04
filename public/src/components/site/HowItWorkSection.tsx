const steps = [
    {
      title: "Subscribe",
      body: "Pick a plan and get started right away. No calls, no setup, just design on demand.",
      badge: "Popular",
      list: [
        "Social Graphics",
        "UX Design",
        "Pitch Decks",
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
      ],
    },
    {
      title: "Request",
      body: "Submit any design task you need. Landing pages, product visuals, brand assets, and more.",
    },
    {
      title: "Receive",
      body: "Your design is delivered in a few business days. Simple, fast, and ready to use.",
    },
  ];
  
  export function HowItWorksSection() {
    return (
      <section id="how-it-works" className="border-t border-[#0000000f] bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-5 md:px-9">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#989898]">
            How it works
          </p>
          <h2 className="max-w-[720px] text-balance text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-[#000]">
            Welcome to the better way of getting design done.
          </h2>
  
          <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8 lg:gap-10">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="group flex flex-col rounded-[20px] border border-[#0000000f] bg-[#fafafa] p-6 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-[#dcdcdc] hover:shadow-[0_12px_40px_-24px_rgba(0,0,0,0.18)] md:p-7"
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#000] text-[13px] font-bold text-white">
                    {i + 1}
                  </span>
                  {"badge" in s && s.badge && (
                    <span className="rounded-full bg-[#1dcc5d]/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#0a8f42]">
                      {s.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-[#000]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#7c7c7c]">
                  {s.body}
                </p>
                {"list" in s && s.list && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.list.slice(0, 8).map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-[#0000000d] bg-white px-2.5 py-1 text-[12px] font-medium text-[#4a4a4a]"
                      >
                        {item}
                      </li>
                    ))}
                    <li className="rounded-md border border-dashed border-[#dcdcdc] px-2.5 py-1 text-[12px] font-medium text-[#989898]">
                      + more
                    </li>
                  </ul>
                )}
              </div>
            ))}
          </div>
  
          <div className="mt-14 flex flex-col items-center gap-4 rounded-[20px] border border-[#0000000f] bg-[#f8f8f8] p-8 text-center md:mt-20 md:p-10">
            <p className="text-[15px] font-medium text-[#7c7c7c]">
              100+ clients getting better design, faster.
            </p>
            <a
              href="#book-a-call"
              className="inline-flex items-center gap-3 rounded-full border border-[#dcdcdc] bg-white px-6 py-3 text-[14px] font-semibold text-[#1c1c1c] transition-[transform,border-color] hover:scale-[1.02] hover:border-[#bdbdbd]"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1dcc5d] opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1dcc5d]" />
              </span>
              Book a 15-min intro call
              <span className="text-[13px] font-medium text-[#989898]">
                Open calendar
              </span>
            </a>
            <p className="text-[12px] text-[#bdbdbd]">
              Example content for demo purposes only.
            </p>
          </div>
        </div>
      </section>
    );
  }
  