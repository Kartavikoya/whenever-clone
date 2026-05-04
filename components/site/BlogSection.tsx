"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const posts = [
  {
    category: "Branding",
    title: "Why Most Startups Keep Getting Design Wrong",
    excerpt: "Many teams move fast on product but fall behind on design. This post breaks down why that happens, how it holds you back, and what to do instead if you want to stay clear and competitive.",
    meta: "5 min read",
    author: "by Whenevr",
    image: "https://framerusercontent.com/images/ueqZoCFRDc46Zk64JejcJN460.png",
    // Changed from https://whenevr.framer.website/blog/... to relative path
    href: "/blog/startup-design-struggles", 
    featured: true,
  },
  {
    category: "Operations",
    title: "How to Get More Done Without Hiring a Full Design Team",
    excerpt: "Lean teams are using design subscriptions to stay fast without hiring.",
    image: "https://framerusercontent.com/images/A2Jpv443KkrqGb6fQMCtPKhklI.png",
    href: "/blog/lean-design-teams",
  },
  {
    category: "Workflow",
    title: "What Working With a Design Subscription Actually Looks Like",
    excerpt: "A behind the scenes look at how founders use design subscriptions to move faster.",
    image: "https://framerusercontent.com/images/mMGyaOXjCOlqMFzBYOOC6xcyeR0.png",
    href: "/blog/design-subscription-workflow",
  },
  {
    category: "Growth",
    title: "The Real Cost of Bad Design (It’s Not What You Think)",
    excerpt: "Poor design slows down decisions, clutters your message, and stalls growth.",
    image: "https://framerusercontent.com/images/XqWtWOfsLoqWpqyf7St5rHsB2p4.png",
    href: "/blog/cost-of-bad-design",
  },
];

export function BlogSection() {
  const [featuredPost, ...sidePosts] = posts;

  return (
    <section id="blog" className="bg-[#f8f8f8] py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-6 rounded-full bg-white px-5 py-2 shadow-sm border border-black/5">
            <span className="text-[13px] font-semibold tracking-wide text-black">Blog</span>
          </div>
          <h2 className="max-w-[800px] text-[clamp(40px,6vw,64px)] font-semibold leading-[1.1] tracking-[-0.04em] text-black">
            Practical reads to help you move <span className="font-serif italic tracking-[-0.06em]">faster.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Featured Post */}
          <Link href={featuredPost.href} className="group">
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex h-full flex-col overflow-hidden rounded-[24px] border-[6px] border-white bg-white shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-8 md:p-10">
                <span className="inline-block rounded-full bg-[#f0f0f0] px-4 py-1.5 text-[12px] font-bold text-black mb-6">
                  {featuredPost.category}
                </span>
                <h3 className="text-[32px] md:text-[40px] font-bold leading-tight tracking-tight text-black mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-[17px] leading-relaxed text-[#7c7c7c] mb-8">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-black" />
                  <span className="text-sm font-semibold text-black">{featuredPost.meta}</span>
                  <span className="font-serif italic text-xl font-semibold text-black ml-1">
                    {featuredPost.author} <span className="font-sans not-italic text-xs">®</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Side Posts */}
          <div className="flex flex-col gap-6">
            {sidePosts.map((post) => (
              <Link key={post.title} href={post.href} className="group">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="flex h-full flex-col overflow-hidden rounded-[24px] border-[6px] border-white bg-white shadow-lg"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image} 
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-bold text-black">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-[22px] font-bold leading-snug tracking-tight text-black mb-3">
                      {post.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-[#7c7c7c]">
                      {post.excerpt}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}