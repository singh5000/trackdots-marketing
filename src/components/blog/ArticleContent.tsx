export default function ArticleContent({ html }: { html: string }) {
  return (
    <div
      className="space-y-6 [&_p]:text-[17px] [&_p]:leading-[1.8] [&_p]:text-gray-700
        [&_h2]:pt-4 [&_h2]:text-[25px] [&_h2]:font-extrabold [&_h2]:leading-snug [&_h2]:text-gray-900
        [&_blockquote]:border-l-[3px] [&_blockquote]:border-brand-500 [&_blockquote]:py-1 [&_blockquote]:pl-6
        [&_blockquote_p]:text-[19px] [&_blockquote_p]:font-semibold [&_blockquote_p]:leading-snug [&_blockquote_p]:text-gray-900
        [&_ul]:list-disc [&_ul]:space-y-2.5 [&_ul]:pl-5
        [&_li]:text-[16px] [&_li]:leading-relaxed [&_li]:text-gray-700 [&_li]:marker:text-brand-500
        [&_a]:font-semibold [&_a]:text-brand-600 [&_a]:underline [&_a]:decoration-brand-200 [&_a]:underline-offset-4 hover:[&_a]:text-brand-700"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
