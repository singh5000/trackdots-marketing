import {
  ArrowRight,
  BarChart,
  CheckCircle,
  CreditCard,
  FileText,
  Inbox,
  LayoutGrid,
  Monitor,
} from "./icons";
import DashboardPreview from "./DashboardPreview";

const INDUSTRIES = [
  {
    icon: Monitor,
    tint: "bg-brand-50 text-brand-600 ring-brand-100",
    title: "IT & Software",
    desc: "Track sprints, focus time, and delivery across every engineering team.",
  },
  {
    icon: LayoutGrid,
    tint: "bg-blue-50 text-blue-600 ring-blue-100",
    title: "Digital Agencies",
    desc: "Bill clients accurately with time tied directly to projects and tasks.",
  },
  {
    icon: BarChart,
    tint: "bg-green-50 text-green-600 ring-green-100",
    title: "Consulting Firms",
    desc: "See utilization and capacity across every consultant, in real time.",
  },
  {
    icon: Inbox,
    tint: "bg-amber-50 text-amber-600 ring-amber-100",
    title: "BPO & Support Teams",
    desc: "Monitor attendance, shifts, and productivity across large, distributed teams.",
  },
  {
    icon: CreditCard,
    tint: "bg-violet-50 text-violet-600 ring-violet-100",
    title: "Accounting & Finance",
    desc: "Keep payroll, attendance, and compliance accurate every single month.",
  },
  {
    icon: FileText,
    tint: "bg-rose-50 text-rose-600 ring-rose-100",
    title: "Legal Services",
    desc: "Track billable hours and case work with a clear, auditable record.",
  },
];

const CHECKLIST = ["Project Intelligence", "Productivity Analytics", "Time & Activity Insights"];

export default function IndustriesSection() {
  return (
    <section className="w-full px-5 py-20 md:px-8 lg:px-[80px]">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-brand-100/80 px-4 py-2 text-[13px] font-semibold tracking-wide text-brand-600 ring-1 ring-brand-200/60">
          BUILT FOR EVERY INDUSTRY
        </span>
        <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-[44px]">
          One Platform, Every Kind of Team
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          TrackDots adapts to how your industry works — not the other way
          around.
        </p>
      </div>

      {/* ── Industry tiles ── */}
      <div className="mx-auto mt-14 grid max-w-[1180px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((ind) => (
          <div
            key={ind.title}
            className="flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <span className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${ind.tint}`}>
              <ind.icon className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <h3 className="mt-4 text-[17px] font-bold text-gray-900">{ind.title}</h3>
            <p className="mt-2 flex-1 text-[14px] leading-relaxed text-gray-500">{ind.desc}</p>
            <a
              href="#"
              className="mt-4 flex w-fit items-center gap-1.5 text-[13.5px] font-semibold text-brand-600 transition-all hover:gap-2.5"
            >
              Explore
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        ))}
      </div>

      {/* ── Full-width dashboard highlight ── */}
      <div className="mx-auto mt-8 max-w-[1180px] overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-gray-50 to-brand-50/40 p-8 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <h3 className="text-[26px] font-extrabold leading-snug text-gray-900 sm:text-[30px]">
              A Single Dashboard for Every Department
            </h3>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-gray-600">
              Whatever industry you&apos;re in, TrackDots gives every team the
              same clarity — from daily activity to company-wide performance.
            </p>
            <ul className="mt-6 space-y-3">
              {CHECKLIST.map((c) => (
                <li key={c} className="flex items-center gap-2.5 text-[14.5px] font-medium text-gray-700">
                  <CheckCircle className="h-4.5 w-4.5 shrink-0 text-brand-600" strokeWidth={1.8} />
                  {c}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-7 flex w-fit items-center gap-2 text-[14.5px] font-semibold text-brand-600 transition-all hover:gap-3"
            >
              Explore Solutions For Your Industry
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
