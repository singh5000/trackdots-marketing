import { Clock } from "../icons";
import { getCategoryStyle, type Post } from "@/lib/wordpress";

export default function BlogCard({ post }: { post: Post }) {
  const style = getCategoryStyle(post.category);
  return (
    <a
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className={`relative flex h-[150px] items-center justify-center overflow-hidden bg-gradient-to-br ${style.grad}`}>
        {post.featuredImageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.featuredImageUrl} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        ) : (
          <>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-black/10 blur-2xl"
            />
            <style.icon className="relative h-14 w-14 text-white/30" strokeWidth={1} />
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className={`w-fit rounded-full px-2.5 py-1 text-[11px] font-bold ${style.badge}`}>{post.category}</span>
        <h3 className="mt-3 text-[17px] font-bold leading-snug text-gray-900 transition-colors group-hover:text-brand-600">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-gray-600">{post.excerpt}</p>

        <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-4 text-[12.5px] text-gray-500">
          <span>{post.date}</span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>
      </div>
    </a>
  );
}
