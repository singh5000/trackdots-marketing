import { ArrowRight, CheckCircle } from "./icons";
import DashboardPreview from "./DashboardPreview";
import { pick, type HomepageACF } from "@/lib/homepage";
import { resolveIcon } from "./pagebuilder/iconMap";

const INDUSTRY_TINTS: Record<string, string> = {
  Monitor: "bg-brand-50 text-brand-600 ring-brand-100",
  LayoutGrid: "bg-blue-50 text-blue-600 ring-blue-100",
  BarChart: "bg-green-50 text-green-600 ring-green-100",
  Inbox: "bg-amber-50 text-amber-600 ring-amber-100",
  CreditCard: "bg-violet-50 text-violet-600 ring-violet-100",
  FileText: "bg-rose-50 text-rose-600 ring-rose-100",
};
const DEFAULT_TINT = "bg-gray-50 text-gray-600 ring-gray-100";

const INDUSTRIES = [
  { icon: "Monitor", title: "IT & Software", desc: "Track sprints, focus time, and delivery across every engineering team.", href: "/solutions/it-software" },
  { icon: "LayoutGrid", title: "Digital Agencies", desc: "Bill clients accurately with time tied directly to projects and tasks.", href: "/solutions/digital-agencies" },
  { icon: "BarChart", title: "Consulting Firms", desc: "See utilization and capacity across every consultant, in real time.", href: "/solutions/consulting" },
  { icon: "Inbox", title: "BPO & Support Teams", desc: "Monitor attendance, shifts, and productivity across large, distributed teams.", href: "/solutions/bpo" },
  { icon: "CreditCard", title: "Accounting & Finance", desc: "Keep payroll, attendance, and compliance accurate every single month.", href: "/solutions/accounting" },
  { icon: "FileText", title: "Legal Services", desc: "Track billable hours and case work with a clear, auditable record.", href: "/solutions/legal" },
];

export default function IndustriesSection({ content }: { content?: HomepageACF["industries"] }) {
  const badge = pick(content?.ind_badge, "BUILT FOR EVERY INDUSTRY");
  const heading = pick(content?.ind_heading, "One Platform, Every Kind of Team");
  const paragraph = pick(content?.ind_paragraph, "TrackDots adapts to how your industry works — not the other way around.");
  const bottomHeading = pick(content?.ind_bottom_heading, "A Single Dashboard for Every Department");
  const bottomParagraph = pick(
    content?.ind_bottom_paragraph,
    "Whatever industry you're in, TrackDots gives every team the same clarity — from daily activity to company-wide performance."
  );
  const bottomLinkLabel = pick(content?.ind_bottom_link_label, "Explore Solutions For Your Industry");
  const checklist = ["Project Intelligence", "Productivity Analytics", "Time & Activity Insights"].map((fb, i) =>
    pick(content?.[`ind_bottom_check_${i + 1}`], fb)
  );

  const tiles = INDUSTRIES.map((fb, i) => {
    const n = i + 1;
    return {
      icon: pick(content?.[`ind_tile_${n}_icon`], fb.icon),
      title: pick(content?.[`ind_tile_${n}_title`], fb.title),
      desc: pick(content?.[`ind_tile_${n}_desc`], fb.desc),
      href: pick(content?.[`ind_tile_${n}_href`], fb.href),
    };
  });

  return (
    <section className="w-full px-5 py-20 md:px-8 lg:px-[80px]">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold tracking-wide text-brand-600 ring-1 ring-brand-200/60">
          {badge}
        </span>
        <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-[44px]">{heading}</h2>
        <p className="mt-4 text-lg text-gray-500">{paragraph}</p>
      </div>

      {/* ── Industry tiles ── */}
      <div className="mx-auto mt-14 grid max-w-[1180px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map((ind, i) => {
          const Icon = resolveIcon(ind.icon);
          const tint = INDUSTRY_TINTS[ind.icon] ?? DEFAULT_TINT;
          return (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${tint}`}>
                <Icon className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 text-[17px] font-bold text-gray-900">{ind.title}</h3>
              <p className="mt-2 flex-1 text-[14px] leading-relaxed text-gray-500">{ind.desc}</p>
              <a
                href={ind.href}
                className="mt-4 flex w-fit items-center gap-1.5 text-[13.5px] font-semibold text-brand-600 transition-all hover:gap-2.5"
              >
                Explore
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          );
        })}
      </div>

      {/* ── Full-width dashboard highlight ── */}
      <div className="mx-auto mt-8 max-w-[1180px] overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-gray-50 to-brand-50/40 p-8 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <h3 className="text-[26px] font-extrabold leading-snug text-gray-900 sm:text-[30px]">{bottomHeading}</h3>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-gray-600">{bottomParagraph}</p>
            <ul className="mt-6 space-y-3">
              {checklist.map((c, i) => (
                <li key={i} className="flex items-center gap-2.5 text-[14.5px] font-medium text-gray-700">
                  <CheckCircle className="h-4.5 w-4.5 shrink-0 text-brand-600" strokeWidth={1.8} />
                  {c}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-7 flex w-fit items-center gap-2 text-[14.5px] font-semibold text-brand-600 transition-all hover:gap-3"
            >
              {bottomLinkLabel}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="hidden justify-self-center lg:block">
            <div className="h-[378px] w-[574px] overflow-hidden">
              <div className="origin-top-left scale-[0.7]">
                <DashboardPreview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
