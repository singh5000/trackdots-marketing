import type { FeaturePageContent } from "@/lib/featurepage";

export const SLUG = "appraisals";

export const FALLBACK: FeaturePageContent = {
  hero: {
    eyebrow: "FEATURE — APPRAISALS & PROMOTIONS",
    heading: "Every Raise, Every Title Change,",
    highlight: "One Auditable Record.",
    description:
      "Every appraisal, promotion, and salary update tracked in one place — current vs. new salary, effective dates, and a Published/Pending workflow.",
  },
  problemSolution: {
    eyebrow: "THE RECORD-KEEPING GAP",
    heading: "Stop Digging Through Old Emails for Salary History",
    subheading: "When appraisals live in scattered documents, nobody has a clean history. TrackDots keeps one.",
    problems: [
      "Salary history scattered across HR emails and old spreadsheets",
      "No clear record of when a raise actually took effect vs. when it was decided",
      "Promotions and appraisals tracked in completely different places",
    ],
    benefits: [
      "Every appraisal and promotion in one auditable list",
      "Current and new salary shown side by side, always",
      "Published vs. Pending status makes drafts obvious",
    ],
  },
  grid: {
    eyebrow: "HOW IT WORKS",
    heading: "A Record That Explains Itself",
    subheading: "Current vs. new salary, effective dates, and status — every appraisal, fully documented.",
    items: [
      {
        icon: "TrendUp",
        title: "Appraisals & Promotions, One Record",
        desc: "Every salary change and title update tracked in a single, auditable list.",
      },
      {
        icon: "FileText",
        title: "Current vs. New Salary",
        desc: "See exactly what changed — current salary alongside the new figure, side by side.",
      },
      {
        icon: "Calendar",
        title: "Effective vs. Recorded Date",
        desc: "Backdate an appraisal's effective date independently from when it was recorded.",
      },
      {
        icon: "CheckCircle",
        title: "Published vs. Pending Workflow",
        desc: "Draft an appraisal as Pending, then publish it once it's finalized.",
      },
      {
        icon: "Users",
        title: "Designation Tracking",
        desc: "Every appraisal captures the employee's designation at the time, not just their salary.",
      },
      {
        icon: "ShieldCheck",
        title: "Full Historical Record",
        desc: "Every past appraisal and promotion stays on the record — nothing is overwritten.",
      },
    ],
  },
  dark1: {
    eyebrow: "APPRAISAL RECORD",
    linkLabel: "Explore Appraisals & Promotions",
    blocks: [
      {
        heading: "Every Change, Fully Documented",
        desc: "Current salary, new salary, designation, and effective date — all captured in a single record.",
        checklist: ["Current vs. new salary shown", "Designation captured per appraisal"],
      },
      {
        heading: "Filter by Status Instantly",
        desc: "Switch between All, Published, and Pending to see exactly what's finalized and what's still in draft.",
        checklist: ["Published vs. Pending filter", "Add new appraisals in one click"],
      },
    ],
  },
  sticky: {
    eyebrow: "GO DEEPER",
    heading: "Every Angle of Appraisals & Promotions",
    desc: "From draft to published, from raise to designation change — TrackDots keeps the full record.",
    cards: [
      {
        tone: "purple",
        icon: "FileText",
        title: "Current vs. New, Side by Side",
        desc: "Every appraisal shows exactly what changed — no digging through old payslips to compare.",
        checks: ["Current salary shown alongside new", "Designation captured at time of change", "One record, fully self-explanatory"],
      },
      {
        tone: "dark",
        icon: "Calendar",
        title: "Backdated Raises, Handled Correctly",
        desc: "The effective date can sit months before the date the appraisal was actually recorded.",
        checks: ["Effective date set independently", "Recorded date always preserved", "No confusion at payroll time"],
      },
      {
        tone: "purple",
        icon: "CheckCircle",
        title: "Draft It, Then Publish It",
        desc: "Appraisals can sit as Pending while finalized, then Publish the moment they're confirmed.",
        checks: ["Pending vs. Published workflow", "Nothing affects payroll until published", "Clear status at every stage"],
      },
      {
        tone: "dark",
        icon: "ShieldCheck",
        title: "Nothing Is Ever Overwritten",
        desc: "Every past appraisal and promotion stays on the record permanently — a full, auditable history.",
        checks: ["Full historical record retained", "Never overwritten by a new entry", "Auditable at any time"],
      },
      {
        tone: "purple",
        icon: "Users",
        title: "Promotions, Not Just Raises",
        desc: "Designation changes are tracked the same way as salary changes — a complete career record.",
        checks: ["Designation history per employee", "Promotions tracked as first-class records", "Same workflow as appraisals"],
      },
    ],
  },
  panel: {
    heading: "Connected Straight to Payroll",
    desc: "Once an appraisal is published, the new salary flows into payroll from its effective date — no manual update required.",
    checklist: ["Published salary feeds payroll directly", "Effective date respected automatically", "No duplicate data entry"],
    linkLabel: "See Payroll Management",
  },
  stats: [
    {
      icon: "FileText",
      value: "1 Record",
      label: "Appraisals & Promotions",
      desc: "Salary changes and title changes tracked as one record type.",
    },
    {
      icon: "Calendar",
      value: "Independent",
      label: "Effective Date",
      desc: "Set apart from the date the appraisal was actually recorded.",
    },
    {
      icon: "ShieldCheck",
      value: "Never",
      label: "Overwritten",
      desc: "Every past appraisal and promotion stays permanently on the record.",
    },
  ],
  dark2: {
    eyebrow: "AUDIT-READY",
    linkLabel: "See Roles & Permissions",
    blocks: [
      {
        heading: "A Full Career Record",
        desc: "Every appraisal and promotion an employee has ever received stays visible, in order.",
        checklist: ["Complete salary history per employee", "Complete designation history per employee"],
      },
      {
        heading: "Restricted to the Right People",
        desc: "Only authorized HR and admin roles can add, edit, or publish appraisal records.",
        checklist: ["Role-based access control", "Every change attributable"],
      },
    ],
  },
  comparison: {
    heading: "Get The Right Tool",
    subheading: "See how TrackDots' appraisal tracking compares to the old way.",
    columns: ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"],
    rows: [
      { capability: "Centralized appraisal & promotion history", statuses: ["yes", "partial", "no"] },
      { capability: "Current vs. new salary comparison", statuses: ["yes", "no", "no"] },
      { capability: "Independent effective vs. recorded date", statuses: ["yes", "no", "no"] },
      { capability: "Published / Pending workflow", statuses: ["yes", "no", "no"] },
      { capability: "Designation history per employee", statuses: ["yes", "no", "no"] },
      { capability: "Direct link to payroll", statuses: ["yes", "no", "no"] },
    ],
  },
  faq: {
    heading: "Appraisals & Promotions, Answered",
    items: [
      {
        q: "What's the difference between Published and Pending?",
        a: "Pending appraisals are drafts not yet finalized; Published appraisals are confirmed and reflect the employee's actual current salary.",
      },
      {
        q: "Can an appraisal's effective date be in the past?",
        a: "Yes. The effective date can be set independently of the date it was recorded, so backdated raises are handled correctly.",
      },
      {
        q: "Does this track promotions as well as salary changes?",
        a: "Yes. Both appraisals (salary updates) and promotions (designation changes) are tracked as the same record type.",
      },
      {
        q: "Can I see an employee's full appraisal history?",
        a: "Yes. Every past appraisal and promotion stays on the record — nothing is overwritten when a new one is added.",
      },
      {
        q: "Does an appraisal automatically update payroll?",
        a: "Once published, the new salary is reflected in the employee's payroll from its effective date forward.",
      },
      {
        q: "Who can add or publish an appraisal?",
        a: "Only authorized HR and admin roles can add, edit, or publish appraisal records.",
      },
    ],
  },
};
