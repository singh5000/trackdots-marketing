import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/blog/BlogCard";
import ArticleContent from "@/components/blog/ArticleContent";
import ArticleSidebar from "@/components/blog/ArticleSidebar";
import NewsletterBand from "@/components/blog/NewsletterBand";
import { getAllPosts, getCategoryStyle, getPostBySlug, processContent } from "@/lib/wordpress";
import { Calendar, Clock } from "@/components/icons";
import { TEAM_MEETING_IMAGE } from "@/lib/media";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found — TrackDots Blog" };

  const title = post.seo.title || `${post.title} — TrackDots Blog`;
  const description = post.seo.description || post.excerpt;
  const image = post.seo.ogImage || post.featuredImageUrl;
  const canonicalPath = `/blog/${post.slug}`;

  return {
    title,
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      type: "article",
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const style = getCategoryStyle(post.category);
  const { html, headings } = processContent(post.contentHtml);
  const allPosts = await getAllPosts();
  const related = allPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const fallbackRelated = related.length > 0 ? related : allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const headerImage = post.featuredImageUrl ?? TEAM_MEETING_IMAGE;

  return (
    <main className="flex-1 bg-white">
      <Navbar />

      {/* ── Slim promo bar ── */}
      <div className="w-full bg-gradient-to-r from-brand-700 via-brand-600 to-violet-600 px-5 py-2.5 text-center text-[13px] font-medium text-white md:px-8">
        See how TrackDots gives your team real visibility, without the guesswork.{" "}
        <a href="/pricing" className="ml-1 font-bold underline underline-offset-2">
          Start free →
        </a>
      </div>

      <article>
        {/* ── Header ── */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[1000px] -translate-x-1/2 rounded-full opacity-40"
            style={{ background: "radial-gradient(closest-side, rgba(109,94,244,0.18), transparent)" }}
          />
          <div className="relative mx-auto max-w-[1400px] px-5 pb-8 pt-14 md:px-8 lg:px-[80px] lg:pt-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:items-center">
              <div>
                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-1.5 text-[13px] text-gray-500">
                  <Link href="/blog" className="hover:text-brand-600">Blog</Link>
                  <span>/</span>
                  <span className="font-medium text-gray-700">{post.category}</span>
                </div>

                <span className={`mt-5 inline-block rounded-full px-3 py-1.5 text-[12.5px] font-bold ${style.badge}`}>
                  {post.category}
                </span>
                <h1 className="mt-4 max-w-[900px] text-[34px] font-extrabold leading-[1.18] tracking-tight text-gray-900 sm:text-[46px]">
                  {post.title}
                </h1>
                <p className="mt-5 max-w-[720px] text-[18px] leading-relaxed text-gray-600">{post.excerpt}</p>

                <div className="mt-7 flex items-center gap-5 border-t border-gray-100 pt-6 text-[13.5px] text-gray-500">
                  <span className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet-500 text-[10.5px] font-bold text-white">
                      TD
                    </span>
                    <span className="font-semibold text-gray-700">The TrackDots Team</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Floating UI cards — 400x400, desktop only */}
              <div className="relative hidden h-[400px] w-[400px] shrink-0 lg:block">
                <div className="absolute inset-8 overflow-hidden rounded-[32px] ring-1 ring-black/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={headerImage}
                    alt=""
                    className="h-full w-full object-cover"
                    style={{ objectPosition: "50% 30%" }}
                    loading="lazy"
                  />
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-30 ${style.grad}`} />
                </div>

                <div
                  className="absolute -left-4 top-2 w-[188px] rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-gray-100"
                  style={{ animation: "float 6s ease-in-out infinite", animationDelay: "0s" }}
                >
                  <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${style.badge}`}>
                    <style.icon className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <div className="mt-2.5 text-[12.5px] font-bold text-gray-900">{post.category}</div>
                  <div className="mt-1 text-[10.5px] font-semibold text-gray-500">Article category</div>
                </div>

                <div
                  className="absolute -right-4 top-24 w-[172px] rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-gray-100"
                  style={{ animation: "float 7s ease-in-out infinite", animationDelay: "0.6s" }}
                >
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <Clock className="h-3.5 w-3.5" />
                  </div>
                  <div className="mt-2 text-[20px] font-extrabold leading-none text-gray-900">{post.readTime}</div>
                  <div className="mt-1 text-[10.5px] font-semibold text-gray-500">Reading time</div>
                </div>

                <div
                  className="absolute -bottom-2 left-6 w-[176px] rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-gray-100"
                  style={{ animation: "float 6.5s ease-in-out infinite", animationDelay: "1.2s" }}
                >
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <Calendar className="h-3.5 w-3.5" />
                  </div>
                  <div className="mt-2 text-[13.5px] font-bold text-gray-900">{post.date}</div>
                  <div className="mt-1 text-[10.5px] font-semibold text-gray-500">Published</div>
                </div>

                <div
                  className="absolute -right-2 -bottom-6 w-[168px] rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-gray-100"
                  style={{ animation: "float 7.5s ease-in-out infinite", animationDelay: "0.3s" }}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet-500 text-[10.5px] font-bold text-white">
                    TD
                  </span>
                  <div className="mt-2.5 text-[12.5px] font-bold text-gray-900">TrackDots Team</div>
                  <div className="mt-1 text-[10.5px] font-semibold text-gray-500">Author</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Banner visual ── */}
        <section className="w-full px-5 md:px-8 lg:px-[80px]">
          {post.featuredImageUrl ? (
            <div className="relative mx-auto h-[240px] max-w-[1400px] overflow-hidden rounded-3xl sm:h-[320px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.featuredImageUrl} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
          ) : (
            <div className={`relative mx-auto flex h-[240px] max-w-[1400px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br sm:h-[320px] ${style.grad}`}>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
              />
              <style.icon className="relative h-20 w-20 text-white/25 sm:h-24 sm:w-24" strokeWidth={1} />
            </div>
          )}
        </section>

        {/* ── Content + sticky sidebar ── */}
        <section className="w-full px-5 py-14 md:px-8 lg:px-[80px]">
          <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[1fr_320px]">
            <div className="min-w-0">
              <ArticleContent html={html} />

              {/* Author card */}
              <div className="mt-12 flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50/60 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet-500 text-[13px] font-bold text-white">
                  TD
                </span>
                <div>
                  <div className="text-[15px] font-bold text-gray-900">The TrackDots Team</div>
                  <p className="mt-0.5 text-[13.5px] text-gray-600">
                    We build monitoring software designed to earn trust, not break it.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar — desktop only */}
            <aside className="hidden lg:block">
              <ArticleSidebar headings={headings} />
            </aside>
          </div>
        </section>
      </article>

      {/* ── Related posts ── */}
      <section className="w-full px-5 pb-20 md:px-8 lg:px-[80px]">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-[22px] font-extrabold text-gray-900">More From the Blog</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fallbackRelated.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <NewsletterBand />
    </main>
  );
}
