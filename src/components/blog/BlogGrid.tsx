"use client";

import { useMemo, useState } from "react";
import BlogCard from "./BlogCard";
import type { Post } from "@/lib/wordpress";

export default function BlogGrid({ posts }: { posts: Post[] }) {
  const categories = useMemo(() => Array.from(new Set(posts.map((p) => p.category))), [posts]);
  const [filter, setFilter] = useState<string>("All");
  const visible = filter === "All" ? posts : posts.filter((p) => p.category === filter);

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
