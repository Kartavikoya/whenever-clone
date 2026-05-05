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
    content: `<p>Most startups treat design as a "final coat of paint".</p>`,
  },
  "lean-design-teams": {
    title: "How to Get More Done Without Hiring a Full Design Team",
    category: "Operations",
    author: "Whenevr",
    date: "May 2, 2026",
    image: "https://framerusercontent.com/images/A2Jpv443KkrqGb6fQMCtPKhklI.png",
    content: `<p>Lean teams use subscription models.</p>`,
  },
  "design-subscription-workflow": {
    title: "What Working With a Design Subscription Actually Looks Like",
    category: "Workflow",
    author: "Whenevr",
    date: "May 3, 2026",
    image: "https://framerusercontent.com/images/mMGyaOXjCOlqMFzBYOOC6xcyeR0.png",
    content: `<p>Behind the scenes.</p>`,
  },
  "cost-of-bad-design": {
    title: "The Real Cost of Bad Design",
    category: "Growth",
    author: "Whenevr",
    date: "May 1, 2026",
    image: "https://framerusercontent.com/images/XqWtWOfsLoqWpqyf7St5rHsB2p4.png",
    content: `<p>Bad design slows growth.</p>`,
  },
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = BLOG_CONTENT[slug];

  if (!post) return notFound();

  return (
    <article className="min-h-screen bg-white pb-24">
      <nav className="flex justify-between px-6 py-8 max-w-[1200px] mx-auto">
        <Link href="/">← Back</Link>
        <div>Whenevr®</div>
      </nav>

      <header className="text-center max-w-[800px] mx-auto px-6 pt-12">
        <span>{post.category}</span>
        <h1>{post.title}</h1>
        <p>{post.author} • {post.date}</p>
      </header>

      <div className="max-w-[1000px] mx-auto px-6 my-16">
        <div className="relative aspect-video">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
      </div>

      <div
        className="max-w-[680px] mx-auto px-6"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}