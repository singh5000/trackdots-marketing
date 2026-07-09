export default function ArticleContent({ html }: { html: string }) {
  return (
    <div
      className="space-y-6 [&_p]:text-[17px] [&_p]:leading-[1.8] [&_p]:text-gray-700
        [&_.lede]:text-[19.5px] [&_.lede]:leading-[1.75] [&_.lede]:text-gray-800
        [&_h2]:pt-4 [&_h2]:text-[25px] [&_h2]:font-extrabold [&_h2]:leading-snug [&_h2]:text-gray-900
        [&_h3]:pt-2 [&_h3]:text-[19px] [&_h3]:font-bold [&_h3]:leading-snug [&_h3]:text-gray-900
        [&_strong]:font-bold [&_strong]:text-gray-900
        [&_em]:italic
        [&_blockquote]:border-l-[3px] [&_blockquote]:border-brand-500 [&_blockquote]:py-1 [&_blockquote]:pl-6
        [&_blockquote_p]:text-[19px] [&_blockquote_p]:font-semibold [&_blockquote_p]:leading-snug [&_blockquote_p]:text-gray-900
        [&_ul]:list-disc [&_ul]:space-y-2.5 [&_ul]:pl-5
        [&_li]:text-[16px] [&_li]:leading-relaxed [&_li]:text-gray-700 [&_li]:marker:text-brand-500
        [&_a]:font-semibold [&_a]:text-brand-600 [&_a]:underline [&_a]:decoration-brand-200 [&_a]:underline-offset-4 hover:[&_a]:text-brand-700
        [&_img]:my-2 [&_img]:w-full [&_img]:rounded-3xl [&_img]:shadow-[0_20px_50px_-20px_rgba(17,24,39,0.25)]

        [&_.table-scroll]:my-2 [&_.table-scroll]:overflow-x-auto [&_.table-scroll]:rounded-2xl
        [&_.table-scroll]:border [&_.table-scroll]:border-gray-100 [&_.table-scroll]:shadow-[0_10px_30px_-15px_rgba(17,24,39,0.12)]
        [&_table]:w-full [&_table]:min-w-[480px] [&_table]:border-collapse [&_table]:text-left
        [&_thead_th]:whitespace-nowrap [&_thead_th]:border-b [&_thead_th]:border-gray-200 [&_thead_th]:bg-gray-50
        [&_thead_th]:px-5 [&_thead_th]:py-3.5 [&_thead_th]:text-[12px] [&_thead_th]:font-bold
        [&_thead_th]:uppercase [&_thead_th]:tracking-wide [&_thead_th]:text-gray-500
        [&_tbody_td]:border-b [&_tbody_td]:border-gray-100 [&_tbody_td]:px-5 [&_tbody_td]:py-3.5
        [&_tbody_td]:text-[14.5px] [&_tbody_td]:text-gray-700
        [&_tbody_tr:last-child_td]:border-b-0 [&_tbody_tr:hover]:bg-brand-50/30

        [&_.key-takeaways]:my-2 [&_.key-takeaways]:rounded-2xl [&_.key-takeaways]:border [&_.key-takeaways]:border-brand-100
        [&_.key-takeaways]:bg-gradient-to-br [&_.key-takeaways]:from-brand-50 [&_.key-takeaways]:to-violet-50/40 [&_.key-takeaways]:p-7
        [&_.key-takeaways_h3]:m-0 [&_.key-takeaways_h3]:p-0 [&_.key-takeaways_h3]:text-[13px] [&_.key-takeaways_h3]:font-extrabold
        [&_.key-takeaways_h3]:uppercase [&_.key-takeaways_h3]:tracking-wider [&_.key-takeaways_h3]:text-brand-700
        [&_.key-takeaways_ul]:mt-4 [&_.key-takeaways_ul]:space-y-3
        [&_.key-takeaways_li]:text-[15.5px] [&_.key-takeaways_li]:font-medium [&_.key-takeaways_li]:leading-relaxed
        [&_.key-takeaways_li]:text-gray-800 [&_.key-takeaways_li]:marker:text-brand-600

        [&_.stat-callout]:my-2 [&_.stat-callout]:rounded-2xl [&_.stat-callout]:bg-gray-900 [&_.stat-callout]:p-8 [&_.stat-callout]:text-center
        [&_.stat-callout_.stat-number]:bg-gradient-to-r [&_.stat-callout_.stat-number]:from-brand-400 [&_.stat-callout_.stat-number]:to-violet-400
        [&_.stat-callout_.stat-number]:bg-clip-text [&_.stat-callout_.stat-number]:text-[42px] [&_.stat-callout_.stat-number]:font-extrabold
        [&_.stat-callout_.stat-number]:leading-none [&_.stat-callout_.stat-number]:text-transparent
        [&_.stat-callout_.stat-label]:mx-auto [&_.stat-callout_.stat-label]:mt-3 [&_.stat-callout_.stat-label]:max-w-md
        [&_.stat-callout_.stat-label]:text-[14.5px] [&_.stat-callout_.stat-label]:leading-relaxed [&_.stat-callout_.stat-label]:text-gray-300"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
