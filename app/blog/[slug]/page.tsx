"use client";

import React from "react"; // Added React import
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Post {
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  content: string;
}

const BLOG_CONTENT: Record<string, Post> = {
  "startup-design-struggles": {
    title: "Why Most Startups Keep Getting Design Wrong",
    category: "Branding",
    author: "Whenevr",
    date: "May 4, 2026",
    image: "https://framerusercontent.com/images/ueqZoCFRDc46Zk64JejcJN460.png",
    content: `
      <p>Most startups treat design as a "final coat of paint" rather than a core functional requirement.</p>
      <h2>The Fast-Paced Trap</h2>
      <p>Founders often prioritize features over clarity.</p>
    `,
  },
  "lean-design-teams": {
    title: "How to Get More Done Without Hiring a Full Design Team",
    category: "Operations",
    author: "Whenevr",
    date: "May 2, 2026",
    image: "https://framerusercontent.com/images/A2Jpv443KkrqGb6fQMCtPKhklI.png",
    content: `<p>Lean teams are moving toward subscription-based design models.</p>`,
  },
};

// Update: params is now a Promise
export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // Use React.use() to unwrap the promise
  const { slug } = React.use(params);
  
  const post = BLOG_CONTENT[slug];

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white pb-24">
      <nav className="flex items-center justify-between px-6 py-8 mx-auto max-w-[1200px]">
        <Link href="/" className="text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
          ← Back to Home
        </Link>
        <div className="font-serif italic text-xl font-semibold">
          Whenevr<span className="font-sans not-italic text-xs">®</span>
        </div>
      </nav>

      <header className="mx-auto max-w-[800px] px-6 pt-12 text-center">
        <span className="inline-block rounded-full bg-[#f0f0f0] px-4 py-1.5 text-[12px] font-bold text-black mb-6">
          {post.category}
        </span>
        <h1 className="text-[clamp(32px,5vw,56px)] font-bold leading-[1.1] tracking-tight text-black mb-8">
          {post.title}
        </h1>
        <div className="flex items-center justify-center gap-4 text-sm font-medium text-[#7c7c7c]">
          <span>{post.author}</span>
          <div className="h-1 w-1 rounded-full bg-gray-300" />
          <span>{post.date}</span>
        </div>
      </header>

      <div className="mx-auto max-w-[1000px] px-6 my-16">
        <div className="relative aspect-video overflow-hidden rounded-[32px] border-[8px] border-[#f8f8f8]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      <div 
        className="mx-auto max-w-[680px] px-6 prose prose-lg prose-headings:text-black prose-p:text-[#4a4a4a] prose-strong:text-black"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
      <footer className="mx-auto max-w-[680px] px-6 mt-20 pt-12 border-t border-gray-100 text-center">
        <p className="text-xl font-medium mb-6">Want to move faster with better design?</p>
        <Link 
          href="/#pricing" 
          className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
        >
          See our plans
        </Link>
      </footer>
    </article>
  );
}