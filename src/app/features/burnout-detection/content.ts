import type { FeaturePageContent } from "@/lib/featurepage";

export const SLUG = "burnout-detection";

export const FALLBACK: FeaturePageContent = {
  hero: {
    eyebrow: "FEATURE — BURNOUT DETECTION",
    heading: "Spot Overwork Before",
    highlight: "It Costs You Someone.",
    description:
      "A 14-day rolling burnout risk score built from real activity — long hours, no breaks, weekend work, late nights, and more — with plain-language recommendations.",
  },
  problemSolution: {
    eyebrow: "THE WELL-BEING GAP",
    heading: "Don't Wait for Someone to Burn Out",
    subheading: "By the time overwork is obvious, it's already taken a toll. Burnout Detection catches it 14 days at a time.",
    problems: [
      "Burnout building silently until someone quits or breaks down",
      "No consistent way to spot overwork across a distributed team",
      "Well-being conversations that come too late to matter",
    ],
    benefits: [
      "Risk calculated automatically from 14 days of real activity",
      "Six distinct overwork signals tracked per employee",
      "A plain-language nudge to check in, before it's a crisis",
    ],
  },
  grid: {
    eyebrow: "HOW IT WORKS",
    heading: "A Risk Score That Builds Itself",
    subheading: "Six real signals, four risk tiers, and a plain-language nudge for every manager.",
    items: [
      {
        icon: "TrendUp",
        title: "14-Day Rolling Risk Score",
        desc: "Every employee's burnout risk is calculated from the last 14 days of real activity, not a one-off survey.",
      },
      {
        icon: "Activity",
        title: "Six Real Warning Signals",
        desc: "Long hours, no breaks, weekend work, late nights, declining productivity, and weekly overload — each tracked individually.",
      },
      {
        icon: "Settings",
        title: "Configurable Thresholds",
        desc: "Adjust what counts as \"long hours\" or \"overwork\" to match your organization's culture.",
      },
      {
        icon: "ShieldCheck",
        title: "Four-Tier Risk Levels",
        desc: "Every employee lands in High, Medium, Watch, or All Clear, so managers know exactly who needs a check-in.",
      },
      {
        icon: "Sparkles",
        title: "Actionable Recommendations",
        desc: "Each at-risk employee gets a plain-language suggestion, not just a score.",
      },
      {
        icon: "Users",
        title: "One-Click Profile Access",
        desc: "Jump straight from any flagged employee to their full activity profile.",
      },
    ],
  },
  dark1: {
    eyebrow: "RISK SIGNALS",
    linkLabel: "Explore Burnout Detection",
    blocks: [
      {
        heading: "Every Signal, Shown Individually",
        desc: "Long hours, late nights, weekend work, missed breaks, and more — never just one blended score.",
        checklist: ["Six distinct overwork signals", "Shown per employee, per signal"],
      },
      {
        heading: "A Recommendation, Every Time",
        desc: "Each at-risk employee comes with a plain-language suggestion for what a manager should do next.",
        checklist: ["Plain-language recommendations", "Tuned to the exact signals found"],
      },
    ],
  },
  sticky: {
    eyebrow: "GO DEEPER",
    heading: "Every Angle of Burnout Detection",
    desc: "From individual signals to team-wide risk tiers — TrackDots surfaces overwork before it becomes a resignation.",
    cards: [
      {
        tone: "purple",
        icon: "TrendUp",
        title: "A Score, Not a Guess",
        desc: "Every employee is placed into a risk tier calculated from 14 real days of activity.",
        checks: ["14-day rolling window", "Four risk tiers", "Recalculated automatically, daily"],
      },
      {
        tone: "dark",
        icon: "Activity",
        title: "Six Signals, Tracked Individually",
        desc: "Long hours, no breaks, weekend work, late nights, declining productivity, and weekly overload — each shown on its own.",
        checks: ["Long hours & late nights", "Weekend work & missed breaks", "Declining productivity trend"],
      },
      {
        tone: "purple",
        icon: "Settings",
        title: "Thresholds You Control",
        desc: "What counts as a \"long day\" or \"late night\" is fully configurable per organization.",
        checks: ["Configurable long-day threshold", "Configurable late-night window", "Configurable weekly cap"],
      },
      {
        tone: "dark",
        icon: "Sparkles",
        title: "A Recommendation, Not Just a Number",
        desc: "Every at-risk employee comes with a plain-language suggestion for what to do next.",
        checks: ["Plain-language recommendations", "Tuned to the specific signals found", "Written for managers, not analysts"],
      },
      {
        tone: "purple",
        icon: "Users",
        title: "One Click to the Full Picture",
        desc: "Jump straight from any flagged employee to their complete activity profile.",
        checks: ["One-click profile access", "Full 14-day activity history", "Same view for every risk tier"],
      },
    ],
  },
  panel: {
    heading: "Built for Conversations, Not Verdicts",
    desc: "A High risk flag is a prompt to check in — never an automated judgment. Every recommendation is paired with the real activity behind it.",
    checklist: [
      "Every flag paired with real evidence",
      "Written to prompt a conversation",
      "Never used for automated penalties",
    ],
    linkLabel: "See How Recommendations Work",
  },
  stats: [
    {
      icon: "Clock",
      value: "14-Day",
      label: "Rolling Window",
      desc: "Risk is calculated from a rolling 14 days of real activity, refreshed daily.",
    },
    {
      icon: "Activity",
      value: "6",
      label: "Overwork Signals",
      desc: "Long hours, no breaks, weekend work, late nights, and more, tracked individually.",
    },
    {
      icon: "ShieldCheck",
      value: "4-Tier",
      label: "Risk Classification",
      desc: "High, Medium, Watch, or All Clear — configurable to your organization's thresholds.",
    },
  ],
  dark2: {
    eyebrow: "CONNECTED TO THE BIGGER PICTURE",
    linkLabel: "See Anomaly Detection",
    blocks: [
      {
        heading: "One Signal Among Many",
        desc: "Burnout risk sits alongside anomaly flags and productivity trends for a complete view of team health.",
        checklist: ["Shares signals with Anomaly Detection", "Feeds into Productivity Intelligence"],
      },
      {
        heading: "Adjustable as Your Team Grows",
        desc: "Thresholds can be revisited any time as team size, seasons, or workload patterns change.",
        checklist: ["Thresholds configurable anytime", "Applies going forward, not retroactively"],
      },
    ],
  },
  comparison: {
    heading: "Get The Right Tool",
    subheading: "See how TrackDots' burnout detection compares to the old way.",
    columns: ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"],
    rows: [
      { capability: "14-day rolling burnout risk score", statuses: ["yes", "no", "no"] },
      { capability: "Six tracked overwork signals", statuses: ["yes", "no", "no"] },
      { capability: "Configurable risk thresholds", statuses: ["yes", "no", "no"] },
      { capability: "Four-tier risk classification", statuses: ["yes", "no", "no"] },
      { capability: "Plain-language recommendations", statuses: ["yes", "no", "no"] },
      { capability: "One-click link to employee profile", statuses: ["yes", "partial", "no"] },
    ],
  },
  faq: {
    heading: "Burnout Detection, Answered",
    items: [
      {
        q: "How is burnout risk calculated?",
        a: "TrackDots looks at the last 14 days of real tracked activity — hours worked, breaks taken, weekend and late-night work, and productivity trend — against your configured thresholds.",
      },
      {
        q: "What are the risk levels?",
        a: "Every employee lands in one of four levels — High, Medium, Watch, or All Clear — based on how many overwork signals are triggered.",
      },
      {
        q: "Can I adjust what counts as overwork?",
        a: "Yes. Thresholds for long hours, late nights, and weekly limits are all configurable per organization.",
      },
      {
        q: "What signals does TrackDots track?",
        a: "Long hours, no breaks, weekend work, late nights, declining productivity, and weekly hours over limit — each shown individually per employee.",
      },
      {
        q: "Does a High risk flag mean something is definitely wrong?",
        a: "No. It means the employee's recent pattern matches signals worth a manager check-in — TrackDots gives a plain-language recommendation, not a verdict.",
      },
      {
        q: "Can employees see their own burnout risk?",
        a: "Yes, on plans with the employee self-view portal enabled.",
      },
    ],
  },
};
