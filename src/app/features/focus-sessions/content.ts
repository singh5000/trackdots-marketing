import type { FeaturePageContent } from "@/lib/featurepage";

export const SLUG = "focus-sessions";

export const FALLBACK: FeaturePageContent = {
  hero: {
    eyebrow: "FEATURE — FOCUS SESSIONS",
    heading: "Know What's Really",
    highlight: "Deep, Focused Work.",
    description:
      "TrackDots automatically surfaces uninterrupted deep-work blocks — separate from routine activity — with per-employee focus trends.",
  },
  problemSolution: {
    eyebrow: "THE FOCUS GAP",
    heading: "Not All Active Hours Are Equal",
    subheading: "A busy day and a focused day look identical on a timesheet. TrackDots tells them apart.",
    problems: [
      "No way to tell deep work from constant task-switching",
      "\"Productive hours\" that hide a day of shallow busywork",
      "No visibility into who has room to focus and who doesn't",
    ],
    benefits: [
      "Uninterrupted sessions surfaced automatically",
      "Average length, longest streak, and totals per employee",
      "A clear signal for real, deep, focused work",
    ],
  },
  grid: {
    eyebrow: "HOW IT WORKS",
    heading: "Focus, Surfaced Automatically",
    subheading: "No timers, no manual tagging — just an honest read on deep work.",
    items: [
      { icon: "Clock", title: "Automatic Detection", desc: "Focus sessions are detected automatically from continuous, high-confidence activity — no manual tagging." },
      { icon: "Settings", title: "Configurable Minimum Length", desc: "Set the minimum session length and gap tolerance that counts as \"focus\" for your organization." },
      { icon: "TrendUp", title: "Per-Employee Trends", desc: "See average session length, longest streak, and total focus time trending over time." },
      { icon: "Users", title: "Team-Wide Comparison", desc: "Compare focus time across the whole team to spot who might need fewer interruptions." },
      { icon: "BarChart", title: "Session-Level Detail", desc: "Every session shows its start time, duration, and the primary app used throughout." },
      { icon: "Sparkles", title: "Separate From Routine Work", desc: "Deep-work blocks are called out distinctly from ordinary tracked activity." },
    ],
  },
  dark1: {
    eyebrow: "WEEKLY VIEW",
    linkLabel: "Explore Focus Sessions",
    blocks: [
      {
        heading: "Every Session, Tallied Automatically",
        desc: "Total sessions, total focus time, average length, and longest streak — updated in real time.",
        checklist: ["Total sessions & focus time", "Average length & longest streak"],
      },
      {
        heading: "Per-Employee Breakdown",
        desc: "See exactly how many sessions each employee logged this week, and how long they ran.",
        checklist: ["Per-employee session count", "Sorted by total focus time"],
      },
    ],
  },
  sticky: {
    eyebrow: "GO DEEPER",
    heading: "Every Angle of Focus Time",
    desc: "From detection to team-wide trends — TrackDots makes deep work visible and measurable.",
    cards: [
      {
        tone: "purple",
        icon: "Clock",
        title: "Deep Work, Detected Automatically",
        desc: "No manual timers — TrackDots surfaces uninterrupted sessions the moment they happen.",
        checks: ["30-minute minimum, configurable", "Detected from real activity", "No manual tagging required"],
      },
      {
        tone: "dark",
        icon: "Settings",
        title: "Tuned to How Your Team Works",
        desc: "Set the minimum length and gap tolerance that counts as focus for your organization.",
        checks: ["Configurable minimum length", "Configurable gap tolerance", "Applies org-wide"],
      },
      {
        tone: "purple",
        icon: "TrendUp",
        title: "Trends, Not Just Totals",
        desc: "See how focus time is trending week over week, per employee.",
        checks: ["Weekly trend tracking", "Longest-streak history", "Per-employee comparison"],
      },
      {
        tone: "dark",
        icon: "Users",
        title: "See the Whole Team at Once",
        desc: "Compare focus time across the team to spot who has room to do more deep work.",
        checks: ["Team-wide comparison view", "Sorted by total focus time", "Spot interruption-heavy roles"],
      },
      {
        tone: "purple",
        icon: "BarChart",
        title: "Every Session, Explained",
        desc: "Each session shows its time range, duration, and the primary app used.",
        checks: ["Start and end time shown", "Primary app tagged", "Duration calculated automatically"],
      },
    ],
  },
  panel: {
    heading: "Never Confused With a Meeting",
    desc: "Meetings are tracked separately through Meeting Mode, so focus-session totals only reflect real deep work.",
    checklist: ["Meetings excluded from focus totals", "Idle time excluded automatically", "Only genuine deep work counted"],
    linkLabel: "See How Meeting Mode Works",
  },
  stats: [
    { icon: "Clock", value: "30-Min", label: "Minimum Session", desc: "The default threshold before a block counts as focus time — fully configurable." },
    { icon: "TrendUp", value: "3h 56m", label: "Avg. Session Length", desc: "This week's average uninterrupted deep-work block across the team." },
    { icon: "Sparkles", value: "4h 43m", label: "Longest Session", desc: "The single longest uninterrupted focus block recorded this week." },
  ],
  dark2: {
    eyebrow: "TEAM INSIGHTS",
    linkLabel: "See Productivity Intelligence",
    blocks: [
      {
        heading: "Spot Who Needs Fewer Interruptions",
        desc: "Team-wide comparison makes it obvious who's getting real focus time and who isn't.",
        checklist: ["Team-wide comparison view", "Sorted by total focus time"],
      },
      {
        heading: "Feeds Straight Into Productivity Intelligence",
        desc: "Focus data is one of the signals behind TrackDots' broader productivity scoring.",
        checklist: ["Contributes to productivity scoring", "Available in weekly reports"],
      },
    ],
  },
  comparison: {
    heading: "Get The Right Tool",
    subheading: "See how TrackDots' focus tracking compares to the old way.",
    columns: ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"],
    rows: [
      { capability: "Automatic focus-session detection", statuses: ["yes", "no", "no"] },
      { capability: "Configurable minimum session length", statuses: ["yes", "no", "no"] },
      { capability: "Per-employee focus trends", statuses: ["yes", "partial", "no"] },
      { capability: "Longest-streak tracking", statuses: ["yes", "no", "no"] },
      { capability: "Team-wide comparison", statuses: ["yes", "no", "no"] },
      { capability: "Tied to real activity confidence", statuses: ["yes", "no", "no"] },
    ],
  },
  faq: {
    heading: "Focus Sessions, Answered",
    items: [
      { q: "How does TrackDots detect a focus session?", a: "Any uninterrupted, high-confidence activity block above your configured minimum length (default 30 minutes) is surfaced as a focus session." },
      { q: "Can I change what counts as a focus session?", a: "Yes. Minimum session length and the allowed gap between activity are both configurable per organization." },
      { q: "Does this require a separate timer?", a: "No. Focus sessions are derived automatically from the same background tracking used everywhere else in TrackDots." },
      { q: "Can I see focus trends over time?", a: "Yes. Average session length, longest streak, and total focus time are all tracked per employee, per week." },
      { q: "Can employees see their own focus sessions?", a: "Yes, on plans with the employee self-view portal enabled." },
      { q: "Does a meeting count as a focus session?", a: "No. Meetings are tracked separately through Meeting Mode and don't count toward focus-session totals." },
    ],
  },
};
