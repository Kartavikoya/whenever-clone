const items = [
  {
    quote:
      "I've loved working with Whenevr. I didn't need to explain things twice. The design just showed up looking exactly how I pictured it.",
    name: "Alexia Fran",
    role: "Marketing Lead, RelayOne",
  },
  {
    quote:
      "Every request was handled quickly and nailed on the first pass. Genuinely the most efficient design experience I've had.",
    name: "Eli Ramos",
    role: "Founder, Minos",
  },
  {
    quote:
      "Clean process, great work, and no hand-holding required. It felt like having a senior designer on standby without the back-and-forth.",
    name: "Maya Kim",
    role: "Head of Product, Haptik",
  },
  {
    quote:
      "The quality of design is top-tier and the process is frictionless. Whenevr feels like cheating in the best way.",
    name: "Tina Zhang",
    role: "Creative Director, Octave",
  },
  {
    quote:
      "No meetings, no delays, no drama. Just smart design delivered when we needed it. I can't recommend Whenevr enough.",
    name: "Jared Cole",
    role: "Startup Founder, Nimbus Systems",
  },
];

export function TestimonialsSection() {
  return (
    <section className="border-t border-[#0000000f] bg-[#fafafa] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-9">
        <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#989898]">
          Testimonials
        </p>
        <h2 className="max-w-[560px] text-balance text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-[#000]">
          Turns out, people like getting things done.
        </h2>

        <div className="mt-12 grid gap-4 md:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {items.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-[18px] border border-[#0000000f] bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.15)]"
            >
              <blockquote className="flex-1 text-[15px] leading-[1.6] text-[#3a3a3a]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-[#f0f0f0] pt-5">
                <p className="text-[14px] font-semibold text-[#000]">{t.name}</p>
                <p className="mt-0.5 text-[13px] text-[#989898]">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-center text-[12px] text-[#bdbdbd]">
          Example content for demo purposes only.
        </p>
      </div>
    </section>
  );
}
