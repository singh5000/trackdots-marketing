import type { FeaturePageContent } from "@/lib/featurepage";

export const SLUG = "leaves";

export const FALLBACK: FeaturePageContent = {
  hero: {
    eyebrow: "FEATURE — LEAVE MANAGEMENT",
    heading: "Leave Requests, Approved",
    highlight: "Without the Paper Trail.",
    description:
      "Employee self-service leave requests — Short Leave, Half Day, or Full Day, tagged Paid or LWP — approved in one place and synced straight into attendance and payroll.",
  },
  problemSolution: {
    eyebrow: "THE PAPER-TRAIL GAP",
    heading: "Stop Chasing Leave Requests Across Inboxes",
    subheading: "Email threads and paper forms don't sync with payroll. Leave Management does it automatically.",
    problems: [
      "Leave requests scattered across email, chat, and paper forms",
      "No clear link between an approved leave and what payroll actually pays",
      "Manually updating attendance every time a leave gets approved",
    ],
    benefits: [
      "Every leave request submitted, tracked, and approved in one place",
      "Paid vs. unpaid categorization built into every request",
      "Approved leave flows straight into attendance and payroll",
    ],
  },
  grid: {
    eyebrow: "HOW IT WORKS",
    heading: "From Request to Payslip, Automatically",
    subheading: "Submitted by the employee, approved by a manager, applied everywhere it matters.",
    items: [
      {
        icon: "Calendar",
        title: "Employee Self-Service Requests",
        desc: "Employees submit leave requests with type, dates, and a reason — no paper forms.",
      },
      {
        icon: "Clock",
        title: "Three Leave Types",
        desc: "Short Leave (2 hours), Half Day, or Full Day — each handled with its own rules.",
      },
      {
        icon: "FileText",
        title: "Paid vs. LWP Categorization",
        desc: "Every request is tagged Leave (Paid) or LWP (Unpaid), feeding straight into payroll.",
      },
      {
        icon: "CheckCircle",
        title: "Manager Approval Queue",
        desc: "Pending, Approved, Rejected, or Cancelled — every request tracked through a clear status pipeline.",
      },
      {
        icon: "Settings",
        title: "Per-Day Record Regeneration",
        desc: "Changing a leave's date range automatically regenerates the underlying day-by-day records.",
      },
      {
        icon: "TrendUp",
        title: "Direct Attendance & Payroll Integration",
        desc: "Approved leave flows straight into the attendance grid and payroll run — no manual re-entry.",
      },
    ],
  },
  dark1: {
    eyebrow: "APPROVAL QUEUE",
    linkLabel: "Explore Leave Management",
    blocks: [
      {
        heading: "Every Request, One Queue",
        desc: "Filter by status, leave type, or employee to find exactly the requests that need a decision.",
        checklist: ["Filter by status, type, or employee", "Full request history retained"],
      },
      {
        heading: "Approve or Reject, With Context",
        desc: "Every request shows its type, dates, category, and the employee's reason before a decision is made.",
        checklist: ["Reason shown per request", "HR note field for internal context"],
      },
    ],
  },
  sticky: {
    eyebrow: "GO DEEPER",
    heading: "Every Angle of Leave Management",
    desc: "From submission to payroll sync — TrackDots keeps every leave request accounted for.",
    cards: [
      {
        tone: "purple",
        icon: "Clock",
        title: "Three Types, Each Handled Right",
        desc: "Short Leave, Half Day, and Full Day each carry their own rules for how they affect attendance.",
        checks: ["Short Leave — 2 hours", "Half Day — AM or PM shift", "Full Day — whole-day leave"],
      },
      {
        tone: "dark",
        icon: "FileText",
        title: "Paid or Unpaid, Always Clear",
        desc: "Every request is tagged Leave (Paid) or LWP (Unpaid) from the moment it's submitted.",
        checks: ["Paid vs. unpaid tagged per request", "Flows directly into payroll", "No ambiguity at month-end"],
      },
      {
        tone: "purple",
        icon: "CheckCircle",
        title: "A Status for Every Request",
        desc: "Pending, Approved, Rejected, or Cancelled — nothing sits in limbo.",
        checks: ["Four-stage status pipeline", "Filterable by status", "Full history retained"],
      },
      {
        tone: "dark",
        icon: "Settings",
        title: "Dates Change, Records Follow",
        desc: "Editing a leave's date range automatically regenerates the day-by-day records behind it.",
        checks: ["Automatic per-day regeneration", "No manual recalculation", "Existing decisions flagged for review"],
      },
      {
        tone: "purple",
        icon: "TrendUp",
        title: "Approved Means Applied",
        desc: "The moment a leave is approved, attendance and payroll both reflect it — automatically.",
        checks: ["Automatic attendance sync", "Automatic payroll sync", "No manual re-entry, ever"],
      },
    ],
  },
  panel: {
    heading: "Built to Feed Attendance & Payroll",
    desc: "Leave isn't tracked in isolation — every approved request updates the attendance grid and the next payroll run automatically.",
    checklist: ["Automatic attendance grid update", "Automatic payroll sync", "No duplicate data entry, ever"],
    linkLabel: "See Attendance Tracking",
  },
  stats: [
    {
      icon: "Calendar",
      value: "3",
      label: "Leave Types",
      desc: "Short Leave, Half Day, and Full Day, each with their own rules.",
    },
    {
      icon: "FileText",
      value: "Paid / LWP",
      label: "Category Tagging",
      desc: "Every request tagged for payroll from the moment it's submitted.",
    },
    {
      icon: "TrendUp",
      value: "Auto",
      label: "Attendance & Payroll Sync",
      desc: "Approved leave updates both automatically — no manual re-entry.",
    },
  ],
  dark2: {
    eyebrow: "EMPLOYEE SELF-SERVICE",
    linkLabel: "See Employee Self-View",
    blocks: [
      {
        heading: "Submitted in Seconds",
        desc: "Employees pick a type, date range, and reason — no separate form or spreadsheet.",
        checklist: ["Self-service request form", "Reason field included"],
      },
      {
        heading: "Status Visible the Whole Way",
        desc: "Employees see their request move from Pending to Approved or Rejected in real time.",
        checklist: ["Self-view status tracking", "No chasing HR for updates"],
      },
    ],
  },
  comparison: {
    heading: "Get The Right Tool",
    subheading: "See how TrackDots' leave management compares to the old way.",
    columns: ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"],
    rows: [
      { capability: "Employee self-service leave requests", statuses: ["yes", "no", "no"] },
      { capability: "Multiple leave types (short/half/full day)", statuses: ["yes", "no", "no"] },
      { capability: "Paid vs. LWP categorization", statuses: ["yes", "no", "no"] },
      { capability: "Status pipeline (Pending → Cancelled)", statuses: ["yes", "no", "no"] },
      { capability: "Automatic attendance sync on approval", statuses: ["yes", "no", "no"] },
      { capability: "Direct payroll integration", statuses: ["yes", "no", "no"] },
    ],
  },
  faq: {
    heading: "Leave Management, Answered",
    items: [
      {
        q: "What leave types does TrackDots support?",
        a: "Short Leave (2 hours), Half Day, or Full Day — each configurable and tracked separately.",
      },
      {
        q: "What's the difference between Leave and LWP?",
        a: "Leave is paid time off; LWP (Leave Without Pay) is unpaid — both are tracked the same way but flow differently into payroll.",
      },
      {
        q: "Can I edit a leave request after it's submitted?",
        a: "Yes. Managers or HR can edit the type, dates, shift, or reason, and per-day records regenerate automatically.",
      },
      {
        q: "What happens when a leave is approved?",
        a: "It's reflected immediately in the employee's attendance grid and rolls into the next payroll run automatically.",
      },
      {
        q: "Can I filter leave requests by employee or type?",
        a: "Yes. Requests can be filtered by status, leave type, and individual employee.",
      },
      {
        q: "Can employees see the status of their own requests?",
        a: "Yes, on plans with the employee self-view portal enabled, employees can track their own pending, approved, and rejected requests.",
      },
    ],
  },
};
