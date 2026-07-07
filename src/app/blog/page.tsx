import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FeaturedPost from "@/components/blog/FeaturedPost";
import BlogGrid from "@/components/blog/BlogGrid";
import NewsletterBand from "@/components/blog/NewsletterBand";
import { getAllPosts } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Blog — TrackDots",
  description: "Product updates and honest thinking on remote work, monitoring, productivity, and payroll.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <main className="flex-1 bg-white">
      <Navbar />

      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-50"
          style={{ background: "radial-gradient(closest-side, rgba(109,94,244,0.18), transparent)" }}
        />
        <div className="relative mx-auto max-w-3xl px-5 pb-8 pt-20 text-center md:px-8 lg:pt-24">
          <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold text-brand-600 ring-1 ring-brand-200/60">
            THE TRACKDOTS BLOG
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.08] tracking-tight text-gray-900 sm:text-6xl">
            Honest Thinking on{" "}
            <span className="bg-gradient-to-r from-brand-600 to-violet-500 bg-clip-text text-transparent">
              Real Work.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
            Product updates, and what we've learned building monitoring software that teams
            actually trust.
          </p>
        </div>
      </section>

      {featured && (
        <section className="w-full px-5 pb-4 md:px-8 lg:px-[80px]">
          <div className="mx-auto max-w-[1400px]">
            <FeaturedPost post={featured} />
          </div>
        </section>
      )}

      <section className="w-full px-5 py-20 md:px-8 lg:px-[80px]">
        <div className="mx-auto max-w-[1400px]">
          <BlogGrid posts={rest} />
        </div>
      </section>

      <NewsletterBand />
    </main>
  );
}
