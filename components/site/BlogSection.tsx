import Link from "next/link";

const posts = [
  {
    category: "Branding",
    title: "Why Most Startups Keep Getting Design Wrong",
    excerpt:
      "Many teams move fast on product but fall behind on design. This post breaks down why that happens, how it holds you back, and what to do instead if you want to stay clear and competitive.",
    meta: "5 min read by Whenevr®",
    image: "ghost",
    featured: true,
  },
  {
    category: "Strategy",
    title: "Why Most Startups Keep Getting Design Wrong",
    excerpt:
      "A quick look at why design slows teams down and how to turn it into a strength.",
    image: "orb",
  },
  {
    category: "Operations",
    title: "How to Get More Done Without Hiring a Full Design Team",
    excerpt:
      "Lean teams are using design subscriptions to stay fast without hiring.",
    image: "handshake",
  },
  {
    category: "Workflow",
    title: "What Working With a Design Subscription Actually Looks Like",
    excerpt:
      "A behind the scenes look at how founders use design subscriptions to move faster.",
    image: "mesh",
  },
];

function CardVisual({ type }: { type: string }) {
  if (type === "ghost") {
    return (
      <>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(0,0,0,0.14),transparent_14%),linear-gradient(180deg,#ececec_0%,#f7f7f7_100%)]" />
        <div className="absolute left-[28%] top-[12%] h-[74%] w-[27%] rounded-[999px] bg-black/14 blur-[2px]" />
        <div className="absolute left-[35%] top-[19%] h-[62%] w-[20%] rounded-[999px] bg-white/50 blur-[15px]" />
      </>
    );
  }

  if (type === "handshake") {
    return (
      <>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#f9e7dc_0%,#ffffff_70%)]" />
        <div className="absolute left-[20%] top-[44%] h-8 w-[28%] origin-right rotate-[22deg] rounded-full bg-[#d8ab8c]" />
        <div className="absolute right-[20%] top-[44%] h-8 w-[28%] origin-left rotate-[-22deg] rounded-full bg-[#e3b79a]" />
      </>
    );
  }

  if (type === "mesh") {
    return (
      <>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8dbdb_0%,#ffffff_68%)]" />
        <div className="absolute left-[32%] top-[24%] h-[44%] w-[36%] rounded-full bg-[#efb7b7]/55 blur-[14px]" />
        <div className="absolute left-[18%] top-[18%] h-[54%] w-[54%] rounded-full border border-[#ffffff]/60" />
      </>
    );
  }

  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_34%,rgba(0,0,0,0.12),transparent_16%),linear-gradient(180deg,#f2f2f2_0%,#ffffff_100%)]" />
      <div className="absolute left-[22%] top-[26%] h-[48%] w-[48%] rounded-full border border-white/80" />
      <div className="absolute right-[18%] top-[18%] h-[58%] w-[18%] rounded-full bg-black/7 blur-[1px]" />
    </>
  );
}

export function BlogSection() {
  const [featuredPost, ...sidePosts] = posts;

  return (
    <section id="blog" className="scroll-mt-[80px] bg-[#f5f5f5] py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-9">
        <div className="border-t border-black/[0.05] pt-16 md:pt-20">
          <div className="flex flex-col items-center text-center">
            <span className="rounded-full border border-black/[0.06] bg-white px-3 py-1 text-[11px] font-semibold text-[#6f6f6f]">
              Blog
            </span>
            <h2 className="mt-4 max-w-[980px] text-balance text-[clamp(2rem,5vw,4.3rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#000]">
              Practical reads to help you move{" "}
              <span className="font-serif italic">faster</span>.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-[1.45fr_1fr]">
            <Link
              href="https://whenevr.framer.website/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-hidden rounded-[28px] border border-black/[0.06] bg-white shadow-[0_22px_54px_-36px_rgba(0,0,0,0.22)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-[320px] overflow-hidden bg-[#f0f0f0] md:h-[420px]">
                <CardVisual type={featuredPost.image} />
              </div>
              <div className="p-8 md:p-10">
                <span className="rounded-full bg-[#f2f2f2] px-4 py-2 text-[12px] font-semibold text-[#202020]">
                  {featuredPost.category}
                </span>
                <h3 className="mt-7 text-[34px] font-semibold leading-[1.05] tracking-[-0.06em] text-[#000] md:text-[42px]">
                  {featuredPost.title}
                </h3>
                <p className="mt-5 text-[17px] leading-[1.55] text-[#7b7b7b] md:text-[18px]">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-7 text-[13px] font-medium text-[#969696]">
                  {featuredPost.meta}
                </div>
              </div>
            </Link>

            <div className="grid gap-5 md:grid-rows-3">
              {sidePosts.map((post) => (
                <Link
                  key={post.title + post.category}
                  href="https://whenevr.framer.website/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid overflow-hidden rounded-[24px] border border-black/[0.06] bg-white shadow-[0_22px_54px_-36px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1 md:grid-cols-[160px_1fr]"
                >
                  <div className="relative h-[180px] overflow-hidden bg-[#f2f2f2] md:h-full">
                    <CardVisual type={post.image} />
                  </div>
                  <div className="p-5 md:p-6">
                    <span className="rounded-full bg-[#f2f2f2] px-3 py-1.5 text-[11px] font-semibold text-[#202020]">
                      {post.category}
                    </span>
                    <h3 className="mt-4 text-[22px] font-semibold leading-[1.15] tracking-[-0.05em] text-[#000]">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.6] text-[#7b7b7b]">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
