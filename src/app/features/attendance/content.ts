import type { FeaturePageContent } from "@/lib/featurepage";

export const SLUG = "attendance";

export const FALLBACK: FeaturePageContent = {
  hero: {
    eyebrow: "FEATURE — ATTENDANCE TRACKING",
    heading: "Attendance That Calculates",
    highlight: "Itself, Every Day.",
    description:
      "Daily attendance built from real tracked activity — with manual overrides, sandwich-day handling, and cutoffs you control.",
  },
  problemSolution: {
    eyebrow: "THE ACCURACY GAP",
    heading: "Stop Reconciling Sign-In Sheets",
    subheading: "Manual attendance registers never match reality. TrackDots removes the gap.",
    problems: [
      "Attendance registers that don't match actual work hours",
      "Manual sign-in sheets nobody can audit",
      "No clear rule for half-days, sandwich days, or LWP",
    ],
    benefits: [
      "Attendance calculated from real tracked activity",
      "Every override logged with who and when",
      "Clear, configurable rules for every edge case",
    ],
  },
  grid: {
    eyebrow: "HOW IT WORKS",
    heading: "A Grid That Builds Itself",
    subheading: "Automatic, auditable, and fully configurable to your organization's rules.",
    items: [
      { icon: "CalendarCheck", title: "Automatic Daily Grid", desc: "Attendance is derived from real tracked activity — full day, partial, low, or absent, calculated automatically." },
      { icon: "Clock", title: "Configurable Cutoffs", desc: "Set your own attendance window, half-day cutoff, and absent cutoff times per organization." },
      { icon: "Settings", title: "Manual Overrides", desc: "Managers can manually mark attendance for exceptions, with a full audit trail." },
      { icon: "FileText", title: "Sandwich-Day Detection", desc: "Weekends and holidays between leave days are flagged for an explicit include or exclude decision." },
      { icon: "TrendUp", title: "P / A / SL / HD / L / LWP Summary", desc: "Every employee row rolls up to present, absent, short-leave, half-day, leave, and LWP totals." },
      { icon: "Users", title: "Team-Wide Overview", desc: "See the whole organization's attendance for the month in one scrollable grid." },
    ],
  },
  dark1: {
    eyebrow: "MONTHLY GRID",
    linkLabel: "Explore the Attendance Grid",
    blocks: [
      {
        heading: "The Whole Team, One Screen",
        desc: "See every employee's daily status across the month in a single scrollable grid.",
        checklist: ["Full day / half day / low / absent", "Color-coded for a fast scan"],
      },
      {
        heading: "Rolled Up for Payroll",
        desc: "Present, absent, leave, and LWP totals are calculated automatically per employee.",
        checklist: ["P/A/SL/HD/L/LWP columns", "Feeds directly into payroll"],
      },
    ],
  },
  sticky: {
    eyebrow: "GO DEEPER",
    heading: "Every Angle of Attendance",
    desc: "From daily calculation to monthly roll-ups — TrackDots keeps attendance accurate and auditable.",
    cards: [
      {
        tone: "purple",
        icon: "CalendarCheck",
        title: "Attendance, Calculated Automatically",
        desc: "No sign-in sheets — attendance is derived directly from tracked activity every day.",
        checks: ["Full day / half day / low / absent", "Calculated from real activity", "Updated live through the day"],
      },
      {
        tone: "dark",
        icon: "Clock",
        title: "Cutoffs You Control",
        desc: "Attendance window, half-day cutoff, and absent cutoff are all configurable per organization.",
        checks: ["Custom attendance window", "Configurable half-day cutoff", "Configurable absent cutoff"],
      },
      {
        tone: "purple",
        icon: "Settings",
        title: "Manual Overrides, Fully Logged",
        desc: "Mark attendance manually for exceptions — every change is tied to who made it and when.",
        checks: ["Manager-initiated overrides", "Full audit trail", "Never silently changes history"],
      },
      {
        tone: "dark",
        icon: "FileText",
        title: "Sandwich Days, Handled Fairly",
        desc: "Weekends between two leave days are flagged, not silently included or excluded.",
        checks: ["Auto-flagged for review", "Explicit include/exclude decision", "Never assumed either way"],
      },
      {
        tone: "purple",
        icon: "TrendUp",
        title: "One Roll-Up, Every Month",
        desc: "P/A/SL/HD/L/LWP totals per employee, ready for payroll without a spreadsheet.",
        checks: ["Six-way monthly roll-up", "Feeds payroll directly", "Exportable to Excel"],
      },
    ],
  },
  panel: {
    heading: "Rules That Match Your Policy",
    desc: "Short leave, half day, full day — every leave type maps directly into how attendance is calculated.",
    checklist: ["2 short leaves per month, configurable", "1 full-day leave per month, configurable", "Paid vs. LWP category tracked separately"],
    linkLabel: "See Leave & Attendance Rules",
  },
  stats: [
    { icon: "CalendarCheck", value: "Auto", label: "Daily Calculation", desc: "Attendance status is derived from tracked activity, every single day." },
    { icon: "Settings", value: "3", label: "Configurable Cutoffs", desc: "Attendance window, half-day, and absent cutoffs — all yours to set." },
    { icon: "ShieldCheck", value: "100%", label: "Audited Overrides", desc: "Every manual attendance change is logged with who and when." },
  ],
  dark2: {
    eyebrow: "PAYROLL-READY",
    linkLabel: "See Payroll Integration",
    blocks: [
      {
        heading: "From Attendance to Payslip",
        desc: "Attendance totals flow directly into the payroll engine — no manual re-entry, ever.",
        checklist: ["Six-way monthly roll-up", "Feeds payroll automatically"],
      },
      {
        heading: "Exportable, Anytime",
        desc: "Download the full attendance grid to Excel for audits, board reports, or compliance.",
        checklist: ["One-click Excel export", "Filter by department or date range"],
      },
    ],
  },
  comparison: {
    heading: "Get The Right Tool",
    subheading: "See how TrackDots' attendance compares to the old way.",
    columns: ["TrackDots", "Basic Time Trackers", "Manual Registers"],
    rows: [
      { capability: "Activity-based attendance calculation", statuses: ["yes", "no", "no"] },
      { capability: "Configurable half-day / absent cutoffs", statuses: ["yes", "partial", "no"] },
      { capability: "Sandwich-day detection", statuses: ["yes", "no", "no"] },
      { capability: "Manual override with audit trail", statuses: ["yes", "partial", "no"] },
      { capability: "P/A/SL/HD/L/LWP roll-up per employee", statuses: ["yes", "no", "no"] },
      { capability: "Direct payroll integration", statuses: ["yes", "no", "no"] },
    ],
  },
  faq: {
    heading: "Attendance Tracking, Answered",
    items: [
      { q: "How is daily attendance calculated?", a: "TrackDots derives attendance from real tracked activity against your configured attendance window, half-day cutoff, and absent cutoff times." },
      { q: "Can managers override attendance manually?", a: "Yes. Manual attendance entries are supported for exceptions, and every override is logged for auditing." },
      { q: "What is a \"sandwich day\"?", a: "When a weekend or holiday falls between two leave days, TrackDots flags it as a sandwich day so HR can explicitly decide whether to include or exclude it." },
      { q: "Can I customize the attendance cutoff times?", a: "Yes. Attendance window start, half-day cutoff, and absent cutoff are all configurable per organization." },
      { q: "Does attendance feed into payroll automatically?", a: "Yes. Present, absent, short-leave, half-day, leave, and LWP totals flow directly into the payroll engine." },
      { q: "Can employees see their own attendance record?", a: "Yes, on plans with the employee self-view portal enabled." },
    ],
  },
};
