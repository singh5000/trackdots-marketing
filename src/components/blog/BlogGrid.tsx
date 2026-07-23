"use client";

import { useMemo, useState } from "react";
import BlogCard from "./BlogCard";
import type { Post } from "@/lib/wordpress";

export default function BlogGrid({ posts }: { posts: Post[] }) {
  const categories = useMemo(() => Array.from(new Set(posts.map((p) => p.category))), [posts]);
  const [filter, setFilter] = useState<string>("All");
  const visible = filter === "All" ? posts : posts.filter((p) => p.category === filter);

  if (posts.length === 0) {
    return (
      <div className="mx-auto max-w-md rounded-3xl border border-gray-100 bg-gray-50/60 px-8 py-16 text-center">
        <span className="text-4xl">✍️</span>
        <h3 className="mt-4 text-[20px] font-bold text-gray-900">Fresh posts are on the way</h3>
        <p className="mt-2 text-[14.5px] leading-relaxed text-gray-500">
          We&apos;re writing our first articles right now — check back soon for honest thinking on
          monitoring, productivity, and payroll.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {["All", ...categories].map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-2.5 text-[13.5px] font-semibold transition-colors ${
              filter === c ? "bg-gray-900 text-white shadow-sm" : "bg-gray-50 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
