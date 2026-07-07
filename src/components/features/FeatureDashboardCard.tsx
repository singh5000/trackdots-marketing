import type { ReactNode } from "react";

/**
 * A reusable "dashboard chrome" card — same visual language as DashboardPreview
 * (white surface, soft shadow, thin ring) so every feature page's custom
 * mini-dashboard mockup feels like it belongs to the same product.
 */
export default function FeatureDashboardCard({
  title,
  meta,
  width = 520,
  children,
}: {
  title: string;
  meta?: string;
  width?: number;
  children: ReactNode;
}) {
  return (
    <div
      className="w-full overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_-20px_rgba(80,63,205,0.35)] ring-1 ring-gray-200/70"
      style={{ maxWidth: width }}
    >
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3.5">
        <div className="text-[14px] font-bold text-gray-900">{title}</div>
        {meta && <div className="text-[11.5px] font-medium text-gray-500">{meta}</div>}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
