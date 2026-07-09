import type { FeaturePageContent } from "@/lib/featurepage";

export const SLUG = "payroll";

export const FALLBACK: FeaturePageContent = {
  hero: {
    eyebrow: "FEATURE — PAYROLL MANAGEMENT",
    heading: "Payroll That Calculates",
    highlight: "Itself From Attendance.",
    description:
      "Attendance-based salary projection with automatic PF and professional-tax deductions, per-employee adjustments, and one-click salary letters and Excel export.",
  },
  problemSolution: {
    eyebrow: "THE RECONCILIATION GAP",
    heading: "Stop Rebuilding Payroll From Scratch Every Month",
    subheading:
      "When attendance and payroll live in different systems, someone has to reconcile them by hand. TrackDots doesn't.",
    problems: [
      "Payroll recalculated by hand from attendance spreadsheets every month",
      "PF and professional tax computed manually, per employee",
      "No single source of truth between attendance and what people are actually paid",
    ],
    benefits: [
      "Paid days calculated automatically from real attendance",
      "PF and professional tax deducted automatically, every run",
      "Gross and net payroll projected before the month even closes",
    ],
  },
  grid: {
    eyebrow: "HOW IT WORKS",
    heading: "From Attendance to Payable, Automatically",
    subheading: "One source of truth, from the first clock-in to the final payslip.",
    items: [
      {
        icon: "CalendarCheck",
        title: "Attendance-Linked Payroll",
        desc: "Paid days are calculated directly from attendance — present, leave, half-day, LWP, and absences all roll up automatically.",
      },
      {
        icon: "BarChart",
        title: "Automatic Gross & Net Projection",
        desc: "See projected gross and net payroll for the whole organization before the month even closes.",
      },
      {
        icon: "FileText",
        title: "PF & Professional Tax Deductions",
        desc: "Provident Fund and professional tax are calculated and deducted automatically, per employee.",
      },
      {
        icon: "Settings",
        title: "Manual Adjustments",
        desc: "Add one-off adjustments per employee without touching the underlying attendance data.",
      },
      {
        icon: "Download",
        title: "Salary Letters & Excel Export",
        desc: "Generate salary letters or export the full payroll run to Excel in one click.",
      },
      {
        icon: "Calendar",
        title: "Month-by-Month Payroll Runs",
        desc: "Navigate month to month, with a clear In Progress or Finalized status for each run.",
      },
    ],
  },
  dark1: {
    eyebrow: "PAYROLL RUN",
    linkLabel: "Explore Payroll Management",
    blocks: [
      {
        heading: "One Run, Every Employee",
        desc: "Paid days, deductions, and payable amount for the whole organization, calculated in a single monthly run.",
        checklist: ["Whole-organization payroll run", "Paid days from real attendance"],
      },
      {
        heading: "In Progress, Not a Black Box",
        desc: "Every run shows its status clearly, and projections update live as the month's attendance comes in.",
        checklist: ["Clear In Progress / Finalized status", "Live projected gross & net"],
      },
    ],
  },
  sticky: {
    eyebrow: "GO DEEPER",
    heading: "Every Angle of Payroll Management",
    desc: "From attendance to deductions to export — TrackDots keeps payroll accurate and defensible.",
    cards: [
      {
        tone: "purple",
        icon: "CalendarCheck",
        title: "Attendance Becomes Payroll",
        desc: "Paid days flow straight from the attendance grid — present, leave, half-day, LWP, and absences all counted automatically.",
        checks: ["No manual attendance re-entry", "Same source data as Attendance Tracking", "Recalculated as the month progresses"],
      },
      {
        tone: "dark",
        icon: "BarChart",
        title: "Projected Before the Month Closes",
        desc: "Gross and net payroll are projected in real time, even while the month is still in progress.",
        checks: ["Live gross & net projection", "Updated as attendance comes in", "No waiting for month-end"],
      },
      {
        tone: "purple",
        icon: "FileText",
        title: "Statutory Deductions, Automated",
        desc: "PF and professional tax are calculated per employee, every run, without a separate spreadsheet.",
        checks: ["Automatic PF calculation", "Automatic professional tax", "Per-employee breakdown"],
      },
      {
        tone: "dark",
        icon: "Settings",
        title: "Adjustments, Without the Mess",
        desc: "Add a one-off bonus or deduction for an employee without ever touching their attendance history.",
        checks: ["Per-employee manual adjustments", "Underlying attendance stays untouched", "Fully visible in the payroll run"],
      },
      {
        tone: "purple",
        icon: "Download",
        title: "Done in One Click",
        desc: "Generate a salary letter or export the entire run to Excel — no separate finance tool required.",
        checks: ["One-click salary letters", "One-click Excel export", "Per-employee or full run"],
      },
    ],
  },
  panel: {
    heading: "Every Deduction, Fully Itemized",
    desc: "PF, professional tax, and LWP deductions are all broken out per employee, never a single opaque number.",
    checklist: ["PF calculated automatically", "Professional tax calculated automatically", "LWP deduction tied to real attendance"],
    linkLabel: "See Deduction Rules",
  },
  stats: [
    {
      icon: "CalendarCheck",
      value: "Auto",
      label: "Attendance-Linked",
      desc: "Paid days calculated directly from real attendance, every run.",
    },
    {
      icon: "FileText",
      value: "PF + Tax",
      label: "Statutory Deductions",
      desc: "Provident Fund and professional tax calculated automatically per employee.",
    },
    {
      icon: "Download",
      value: "1-Click",
      label: "Export & Salary Letters",
      desc: "Generate salary letters or export the full run to Excel instantly.",
    },
  ],
  dark2: {
    eyebrow: "AUDIT-READY",
    linkLabel: "See Payslips",
    blocks: [
      {
        heading: "Every Adjustment, Fully Logged",
        desc: "Manual adjustments never overwrite attendance data — they're layered on top, fully visible in the run.",
        checklist: ["Adjustments never modify attendance", "Fully visible per employee"],
      },
      {
        heading: "Payslips, Ready When You Are",
        desc: "Once a run is finalized, payslips are generated and available to every employee.",
        checklist: ["Payslip generation per run", "Available in the employee self-view portal"],
      },
    ],
  },
  comparison: {
    heading: "Get The Right Tool",
    subheading: "See how TrackDots' payroll management compares to the old way.",
    columns: ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"],
    rows: [
      { capability: "Attendance-linked paid-days calculation", statuses: ["yes", "no", "no"] },
      { capability: "Automatic PF & professional tax deduction", statuses: ["yes", "no", "no"] },
      { capability: "Projected gross & net before month close", statuses: ["yes", "no", "no"] },
      { capability: "Per-employee manual adjustments", statuses: ["yes", "partial", "partial"] },
      { capability: "One-click salary letters", statuses: ["yes", "no", "no"] },
      { capability: "One-click Excel export", statuses: ["yes", "partial", "partial"] },
    ],
  },
  faq: {
    heading: "Payroll Management, Answered",
    items: [
      {
        q: "How are paid days calculated?",
        a: "Directly from attendance — present days, full-day leave, half-days, short leaves, LWP, and absences all roll up into a paid-days total automatically.",
      },
      {
        q: "Does TrackDots calculate PF and professional tax?",
        a: "Yes. Both are calculated and deducted automatically per employee as part of every payroll run.",
      },
      {
        q: "Can I make one-off adjustments to an employee's pay?",
        a: "Yes. Adjustments can be added per employee without changing their underlying attendance record.",
      },
      {
        q: "Can I see payroll before the month is finished?",
        a: "Yes. TrackDots projects gross and net payroll for the current month in progress, updated as attendance comes in.",
      },
      {
        q: "Can I generate salary letters?",
        a: "Yes. Salary letters can be generated per employee directly from the payroll run.",
      },
      {
        q: "Can I export payroll data?",
        a: "Yes. A full payroll run can be exported to Excel in one click.",
      },
    ],
  },
};
