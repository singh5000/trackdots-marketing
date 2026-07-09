import type { FeaturePageContent } from "@/lib/featurepage";

export const SLUG = "anomaly-detection";

export const FALLBACK: FeaturePageContent = {
  hero: {
    eyebrow: "FEATURE — ANOMALY DETECTION",
    heading: "Catch Unusual Patterns",
    highlight: "Before They Become a Crisis.",
    description:
      "No-activity streaks, sudden hour drops, and erratic hours are flagged automatically — ranked by severity, so nothing gets missed.",
  },
  problemSolution: {
    eyebrow: "THE EARLY-WARNING GAP",
    heading: "Don't Wait for a Crisis to Notice",
    subheading: "By the time disengagement is obvious, it's already cost you weeks. Anomaly Detection catches it early.",
    problems: [
      "Disengagement and burnout going unnoticed until it's a crisis",
      "No early warning when someone's work pattern changes",
      "Manually eyeballing dashboards to spot who needs a check-in",
    ],
    benefits: [
      "No-activity streaks and sudden drops flagged automatically",
      "Erratic hours and unusual patterns surfaced early",
      "Every flag ranked by severity, so nothing gets missed",
    ],
  },
  grid: {
    eyebrow: "HOW IT WORKS",
    heading: "Patterns Surfaced Automatically",
    subheading: "No dashboard-watching required — anomalies are flagged and ranked for you.",
    items: [
      { icon: "Activity", title: "No-Activity Streak Detection", desc: "Flags employees with multiple consecutive weekdays of zero tracked activity." },
      { icon: "TrendUp", title: "Sudden Hour-Drop Alerts", desc: "Surfaces days where tracked hours fall sharply below an employee's own personal average." },
      { icon: "Clock", title: "Erratic Start-Time Detection", desc: "Flags when a daily start time swings widely across an employee's recent active days." },
      { icon: "Monitor", title: "Unusual Working-Hours Flags", desc: "Surfaces work logged unusually early or late relative to normal hours." },
      { icon: "ShieldCheck", title: "Severity-Ranked Flags", desc: "Every anomaly is ranked Critical, Warning, or Info, so managers know what needs attention first." },
      { icon: "Users", title: "Team-Wide Clear vs. Flagged View", desc: "See every employee's status at a glance — flagged or all clear — across the whole team." },
    ],
  },
  dark1: {
    eyebrow: "FLAGGED PATTERNS",
    linkLabel: "Explore Anomaly Detection",
    blocks: [
      {
        heading: "Four Kinds of Anomalies, Detected Automatically",
        desc: "No-activity streaks, sudden hour drops, erratic start times, and unusual working hours are all flagged without setup.",
        checklist: ["No-activity streak detection", "Sudden hour-drop alerts"],
      },
      {
        heading: "Every Flag Links to the Evidence",
        desc: "Jump straight from any flag to the employee's activity diary or profile to see the full picture.",
        checklist: ["One click to activity diary", "One click to employee profile"],
      },
    ],
  },
  sticky: {
    eyebrow: "GO DEEPER",
    heading: "Every Angle of Anomaly Detection",
    desc: "From silent streaks to erratic hours — TrackDots surfaces what deserves a manager's attention.",
    cards: [
      {
        tone: "purple",
        icon: "ShieldCheck",
        title: "Every Flag, Ranked by Severity",
        desc: "Critical, Warning, or Info — so managers always know what deserves attention first.",
        checks: ["0 Critical, 7 Warning today", "9 total flags across the team", "Updated automatically, daily"],
      },
      {
        tone: "dark",
        icon: "Activity",
        title: "Silence Doesn't Go Unnoticed",
        desc: "Ten or more consecutive weekdays of zero tracked activity is flagged the moment it happens.",
        checks: ["Consecutive-weekday detection", "Flagged automatically", "No manual monitoring needed"],
      },
      {
        tone: "purple",
        icon: "TrendUp",
        title: "Drops From the Norm, Caught Early",
        desc: "Every employee's hours are compared against their own personal average, not a generic benchmark.",
        checks: ["Personal-average comparison", "Percentage drop shown", "Flagged same day"],
      },
      {
        tone: "dark",
        icon: "Clock",
        title: "Pattern Changes, Not Just Numbers",
        desc: "Erratic start times and unusual working hours are surfaced even when total hours look normal.",
        checks: ["Start-time variance detection", "Unusual-hours detection", "Multiple flags per employee, when relevant"],
      },
      {
        tone: "purple",
        icon: "Users",
        title: "The Whole Team, One Glance",
        desc: "Every employee shows as flagged or all-clear, so reviewing the team takes minutes, not hours.",
        checks: ["Team-wide flagged vs. clear view", "Per-employee 30-day activity chart", "Links straight to the activity diary"],
      },
    ],
  },
  panel: {
    heading: "Signals, Not Snap Judgments",
    desc: "Every anomaly is a pattern worth a look, backed by the employee's real activity diary — never an automated verdict.",
    checklist: ["Every flag links to real activity data", "Severity-ranked, never one-size-fits-all", "Built to start conversations, not replace them"],
    linkLabel: "See How Flags Are Reviewed",
  },
  stats: [
    { icon: "ShieldCheck", value: "3-Tier", label: "Severity Ranking", desc: "Every flag is ranked Critical, Warning, or Info." },
    { icon: "Activity", value: "4", label: "Anomaly Types Detected", desc: "No-activity streaks, hour drops, erratic starts, and unusual hours." },
    { icon: "Users", value: "12 of 21", label: "All Clear Today", desc: "The rest of the team flagged nothing unusual in the last 30 days." },
  ],
  dark2: {
    eyebrow: "CONNECTED TO THE BIGGER PICTURE",
    linkLabel: "See Burnout Detection",
    blocks: [
      {
        heading: "One Signal Among Many",
        desc: "Anomaly flags sit alongside burnout risk and productivity trends for a complete view of team health.",
        checklist: ["Feeds into Burnout Risk", "Feeds into Productivity Intelligence"],
      },
      {
        heading: "Reviewed by People, Not Just Algorithms",
        desc: "Every flag exists to prompt a manager conversation — not to make an automated decision about anyone.",
        checklist: ["Always paired with real activity evidence", "Never used for automated penalties"],
      },
    ],
  },
  comparison: {
    heading: "Get The Right Tool",
    subheading: "See how TrackDots' anomaly detection compares to the old way.",
    columns: ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"],
    rows: [
      { capability: "Automatic no-activity streak detection", statuses: ["yes", "no", "no"] },
      { capability: "Sudden hour-drop alerts", statuses: ["yes", "no", "no"] },
      { capability: "Erratic start-time detection", statuses: ["yes", "no", "no"] },
      { capability: "Unusual working-hours flags", statuses: ["yes", "no", "no"] },
      { capability: "Severity-ranked flags (Critical/Warning/Info)", statuses: ["yes", "no", "no"] },
      { capability: "Team-wide flagged vs. clear view", statuses: ["yes", "partial", "no"] },
    ],
  },
  faq: {
    heading: "Anomaly Detection, Answered",
    items: [
      { q: "What counts as a \"no-activity streak\"?", a: "Ten or more consecutive weekdays with zero tracked activity for an employee triggers a flag." },
      { q: "What is a \"sudden hour drop\"?", a: "A day where an employee's tracked hours fall sharply below their own personal average is flagged for review." },
      { q: "What does \"erratic start times\" mean?", a: "It flags when an employee's daily start time swings widely across their recent active days, which can signal disengagement or scheduling issues." },
      { q: "How are anomalies prioritized?", a: "Every flag is ranked Critical, Warning, or Info, so managers can focus on what needs attention first." },
      { q: "Does this replace a manager's judgment?", a: "No. Anomaly Detection surfaces patterns worth a look — every flag can be reviewed against the employee's actual activity diary before any conversation happens." },
      { q: "Can employees see their own flags?", a: "Yes, on plans with the employee self-view portal enabled." },
    ],
  },
};
