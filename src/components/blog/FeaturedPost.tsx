import { ArrowRight, Clock } from "../icons";
import { getCategoryStyle, type Post } from "@/lib/wordpress";

export default function FeaturedPost({ post }: { post: Post }) {
  const style = getCategoryStyle(post.category);
  return (
    <a
      href={`/blog/${post.slug}`}
      className="group grid overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_30px_80px_-30px_rgba(80,63,205,0.25)] transition-shadow hover:shadow-[0_30px_80px_-20px_rgba(80,63,205,0.35)] lg:grid-cols-[1.1fr_1fr]"
    >
      <div className={`relative flex min-h-[280px] items-center justify-center overflow-hidden bg-gradient-to-br p-10 ${style.grad}`}>
        {post.featuredImageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.featuredImageUrl} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        ) : (
          <>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-black/10 blur-2xl"
            />
            <style.icon className="relative h-24 w-24 text-white/25" strokeWidth={1} />
          </>
        )}
      </div>

      <div className="flex flex-col justify-center p-8 sm:p-10">
        <div className="flex items-center gap-3">
          <span className={`rounded-full px-3 py-1.5 text-[12px] font-bold ${style.badge}`}>{post.category}</span>
          <span className="text-[12.5px] font-semibold text-brand-600">Featured</span>
        </div>
        <h2 className="mt-4 text-[26px] font-extrabold leading-snug text-gray-900 transition-colors group-hover:text-brand-600 sm:text-[30px]">
          {post.title}
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-gray-600">{post.excerpt}</p>

        <div className="mt-6 flex items-center gap-4 text-[13px] text-gray-500">
          <span>{post.date}</span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>

        <span className="mt-6 flex w-fit items-center gap-2 text-[14.5px] font-semibold text-brand-600 transition-all group-hover:gap-3">
          Read the article
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </a>
  );
}
