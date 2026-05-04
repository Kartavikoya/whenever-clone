import Link from "next/link";

const posts = [
  {
    category: "Branding",
    title: "Why Most Startups Keep Getting Design Wrong",
    excerpt:
      "Many teams move fast on product but fall behind on design. This post breaks down why that happens, how it holds you back, and what to do instead if you want to stay clear and competitive.",
    meta: "5 min read · by Whenevr ®",
    href: "https://whenevr.framer.website/blog/startup-design-struggles",
  },
  {
    category: "Operations",
    title: "How to Get More Done Without Hiring a Full Design Team",
    excerpt:
      "Lean teams are using design subscriptions to stay fast without hiring.",
    href: "https://whenevr.framer.website/blog/lean-design-teams",
  },
  {
    category: "Workflow",
    title: "What Working With a Design Subscription Actually Looks Like",
    excerpt:
      "A behind the scenes look at how founders use design subscriptions to move faster.",
    href: "https://whenevr.framer.website/blog/design-subscription-workflow",
  },
  {
    category: "Growth",
    title: "The Real Cost of Bad Design (It’s Not What You Think)",
    excerpt:
      "Poor design slows down decisions, clutters your message, and stalls growth.",
    href: "https://whenevr.framer.website/blog/cost-of-bad-design",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="scroll-mt-[80px] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-9">
        <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#989898]">
          Blog
        </p>
        <h2 className="max-w-[520px] text-balance text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-[#000]">
          Practical reads to help you move faster.
        </h2>

        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-2 lg:gap-6">
          {posts.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-[20px] border border-[#0000000f] bg-[#fafafa] p-6 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#dcdcdc] hover:shadow-[0_20px_50px_-32px_rgba(0,0,0,0.18)] md:p-7"
            >
              <span className="text-[12px] font-semibold uppercase tracking-wider text-[#7c7c7c] transition-colors group-hover:text-[#000]">
                {p.category}
              </span>
              <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-[#000] md:text-[1.35rem]">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#7c7c7c]">
                {p.excerpt}
              </p>
              {"meta" in p && p.meta ? (
                <p className="mt-5 text-[13px] font-medium text-[#bdbdbd] transition-colors group-hover:text-[#989898]">
                  {p.meta}
                </p>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
