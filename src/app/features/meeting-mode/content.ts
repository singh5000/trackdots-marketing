import type { FeaturePageContent } from "@/lib/featurepage";

export const SLUG = "meeting-mode";

export const FALLBACK: FeaturePageContent = {
  hero: {
    eyebrow: "FEATURE — MEETING MODE",
    heading: "Meetings Are Work.",
    highlight: "Score Them That Way.",
    description:
      "Employees declare meeting sessions with a note; once a manager approves, that time counts as fully productive — never a mark against idle time.",
  },
  problemSolution: {
    eyebrow: "THE FAIRNESS GAP",
    heading: "Stop Penalizing Real Meetings",
    subheading: "A block of time away from the keyboard isn't automatically wasted time. Meeting Mode tells the difference.",
    problems: [
      "Meetings silently counted as idle or unproductive time",
      "No record of why a block of time wasn't at the keyboard",
      "Employees penalized for time spent in real, necessary meetings",
    ],
    benefits: [
      "Employees declare meetings with a one-line note",
      "Managers approve or reject in a single tap",
      "Approved meetings always count as fully productive",
    ],
  },
  grid: {
    eyebrow: "HOW IT WORKS",
    heading: "Declared, Approved, Counted",
    subheading: "A simple, auditable loop from employee to manager to productivity score.",
    items: [
      { icon: "Calendar", title: "Employee-Declared Sessions", desc: "Employees declare their own meeting sessions with a quick note on what the meeting was." },
      { icon: "CheckCircle", title: "One-Tap Manager Approval", desc: "Managers approve or reject every declared meeting from a single pending queue." },
      { icon: "TrendUp", title: "Counts as Fully Productive", desc: "Once approved, meeting time counts as 100% productive — no unfair idle penalties." },
      { icon: "FileText", title: "Full Status History", desc: "Every request keeps its status — pending, approved, or rejected — with who decided and when." },
      { icon: "ShieldCheck", title: "Never Auto-Approved", desc: "Every declared meeting requires explicit manager approval before it affects any score." },
      { icon: "Clock", title: "Exempt From Idle Detection", desc: "Approved meeting time is automatically excluded from idle-time calculations." },
    ],
  },
  dark1: {
    eyebrow: "APPROVAL QUEUE",
    linkLabel: "Explore Meeting Approvals",
    blocks: [
      {
        heading: "Every Request, One Place",
        desc: "Declared meetings land in a single pending queue, with employee, time range, and note all visible at a glance.",
        checklist: ["Single pending-approvals queue", "Employee note shown per request"],
      },
      {
        heading: "Approve or Reject, Instantly",
        desc: "Managers act on each request in one tap — nothing is approved automatically.",
        checklist: ["One-tap approve or reject", "Never auto-approved"],
      },
    ],
  },
  sticky: {
    eyebrow: "GO DEEPER",
    heading: "Every Angle of Meeting Mode",
    desc: "From declaration to approval to scoring — TrackDots keeps meeting time fair and fully accounted for.",
    cards: [
      {
        tone: "purple",
        icon: "Calendar",
        title: "Declared in Seconds",
        desc: "Employees mark a time range as a meeting and add a short note — no calendar sync required.",
        checks: ["One-line note per session", "No separate app needed", "Available to every employee"],
      },
      {
        tone: "dark",
        icon: "CheckCircle",
        title: "One Queue, One Tap",
        desc: "Every declared meeting lands in a single pending queue for a manager to approve or reject.",
        checks: ["Single pending-approvals queue", "Approve or reject in one tap", "Nothing acted on automatically"],
      },
      {
        tone: "purple",
        icon: "TrendUp",
        title: "Counts as Real Work",
        desc: "Once approved, meeting time counts as fully productive — never a mark against an employee.",
        checks: ["100% productive once approved", "No manual score adjustment needed", "Applied instantly"],
      },
      {
        tone: "dark",
        icon: "FileText",
        title: "Nothing Happens Silently",
        desc: "Every request keeps a permanent status — pending, approved, or rejected — visible to managers and HR.",
        checks: ["Full status history retained", "Visible to managers and HR", "Never auto-approved"],
      },
      {
        tone: "purple",
        icon: "Clock",
        title: "Idle Time, Correctly Excluded",
        desc: "Approved meeting time is automatically carved out of idle-time calculations for the day.",
        checks: ["Automatic idle exemption", "No manual recalculation", "Reflected the same day"],
      },
    ],
  },
  panel: {
    heading: "Never Approved Without a Human",
    desc: "No meeting counts as productive time until a manager explicitly reviews and approves it — there's no auto-approval to exploit.",
    checklist: ["Every request reviewed by a manager", "Approve or reject, never automatic", "Full history, always visible"],
    linkLabel: "See How Approvals Work",
  },
  stats: [
    { icon: "CheckCircle", value: "1-Tap", label: "Approve or Reject", desc: "Managers act on every declared meeting from a single pending queue." },
    { icon: "TrendUp", value: "100%", label: "Productive Once Approved", desc: "Approved meeting time always counts as fully productive work." },
    { icon: "Clock", value: "Auto", label: "Idle Exemption", desc: "Approved meeting time is automatically excluded from idle calculations." },
  ],
  dark2: {
    eyebrow: "CONNECTED TO IDLE TIME",
    linkLabel: "See Idle Time Tracking",
    blocks: [
      {
        heading: "No Double Penalty",
        desc: "Time spent in an approved meeting is carved out of idle time automatically — employees are never penalized twice.",
        checklist: ["Automatic idle-time exemption", "Reflected the same day"],
      },
      {
        heading: "One Consistent Picture",
        desc: "Meeting time, active time, and idle time all reconcile into a single, honest daily total.",
        checklist: ["Consistent across every report", "No manual reconciliation needed"],
      },
    ],
  },
  comparison: {
    heading: "Get The Right Tool",
    subheading: "See how TrackDots' meeting handling compares to the old way.",
    columns: ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"],
    rows: [
      { capability: "Employee-declared meeting sessions", statuses: ["yes", "no", "no"] },
      { capability: "Manager approval queue", statuses: ["yes", "no", "no"] },
      { capability: "Approved time counts as productive", statuses: ["yes", "no", "no"] },
      { capability: "Automatic idle-time exemption", statuses: ["yes", "no", "no"] },
      { capability: "Full pending / approved / rejected history", statuses: ["yes", "no", "no"] },
      { capability: "Feeds directly into productivity scoring", statuses: ["yes", "no", "no"] },
    ],
  },
  faq: {
    heading: "Meeting Mode, Answered",
    items: [
      { q: "How does an employee declare a meeting?", a: "From their dashboard, an employee marks a time range as a meeting and adds a short note describing it — no separate app or calendar sync required." },
      { q: "Does a declared meeting count as productive automatically?", a: "No. It stays Pending until a manager explicitly approves it. Only approved meetings count as fully productive time." },
      { q: "What happens if a manager rejects a meeting request?", a: "The time reverts to being scored as regular tracked activity, exactly as if Meeting Mode had never been used." },
      { q: "Does meeting time affect idle-time reporting?", a: "Yes. Approved meeting time is automatically excluded from idle-time calculations, so it never drags down an employee's efficiency score." },
      { q: "Can I see a history of past approvals?", a: "Yes. Every meeting request keeps a permanent status of pending, approved, or rejected, visible to managers and HR." },
      { q: "Can employees see the status of their own requests?", a: "Yes, on plans with the employee self-view portal enabled, employees can track their own pending, approved, and rejected requests." },
    ],
  },
};
