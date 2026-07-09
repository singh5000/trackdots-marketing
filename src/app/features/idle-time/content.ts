import type { FeaturePageContent } from "@/lib/featurepage";

export const SLUG = "idle-time";

export const FALLBACK: FeaturePageContent = {
  hero: {
    eyebrow: "FEATURE — IDLE TIME TRACKING",
    heading: "Idle Time, Detected",
    highlight: "Fairly and Accurately.",
    description:
      "Automatic idle-time detection with configurable thresholds that never apply retroactively — so tracked hours always reflect real work.",
  },
  problemSolution: {
    eyebrow: "THE ACCURACY GAP",
    heading: "Idle Time Shouldn't Be a Guess",
    subheading: "Idle time silently baked into 'active hours' skews every report downstream.",
    problems: [
      "Idle time silently counted as productive hours",
      "No visibility into who's actually active right now",
      "Threshold changes that retroactively rewrite history",
    ],
    benefits: [
      "Active vs. idle split calculated automatically",
      "Real-time visibility into who's active right now",
      "Threshold changes only ever apply going forward",
    ],
  },
  grid: {
    eyebrow: "HOW IT WORKS",
    heading: "An Honest Read on Active Time",
    subheading: "Configurable, fair, and never applied retroactively.",
    items: [
      {
        icon: "PieChart",
        title: "Active vs. Idle Split",
        desc: "Every employee's tracked time is split cleanly into active and idle, updated live.",
      },
      {
        icon: "Settings",
        title: "Configurable Thresholds",
        desc: "Set your own idle score and confidence thresholds — either can be disabled entirely.",
      },
      {
        icon: "Clock",
        title: "Forward-Only Changes",
        desc: "Threshold changes only apply going forward — old data keeps the rules it was scored under.",
      },
      {
        icon: "ShieldCheck",
        title: "Meeting-Aware Exemption",
        desc: "Idle time inside an approved meeting session is never counted against the employee.",
      },
      {
        icon: "Activity",
        title: "Anti-Gaming Signals",
        desc: "Burst-then-idle patterns and long idle gaps inside blocks are flagged automatically.",
      },
      {
        icon: "TrendUp",
        title: "Team Efficiency Score",
        desc: "See the whole team's active-vs-idle efficiency at a glance, updated in real time.",
      },
    ],
  },
  dark1: {
    eyebrow: "LIVE BREAKDOWN",
    linkLabel: "Explore Idle Time Breakdown",
    blocks: [
      {
        heading: "Every Employee, Split Live",
        desc: "Active vs. idle time updates in real time as the day happens, not after the fact.",
        checklist: ["Live active/idle percentage", "Per-employee efficiency score"],
      },
      {
        heading: "Filterable by Period",
        desc: "View today, this week, last 7 days, or last 30 days with a single click.",
        checklist: ["Today / week / 7-day / 30-day views", "Team and individual views"],
      },
    ],
  },
  sticky: {
    eyebrow: "GO DEEPER",
    heading: "Every Angle of Idle Time",
    desc: "From live detection to anti-gaming signals — TrackDots keeps idle tracking fair and accurate.",
    cards: [
      {
        tone: "purple",
        icon: "PieChart",
        title: "Active vs. Idle, Split Cleanly",
        desc: "Every tracked hour is classified as active or idle, updated as it happens.",
        checks: ["Live active/idle split", "Per-employee and team-wide", "No manual classification needed"],
      },
      {
        tone: "dark",
        icon: "Settings",
        title: "Thresholds, Your Way",
        desc: "Idle score and confidence thresholds are fully configurable — or can be turned off.",
        checks: ["Configurable idle score threshold", "Configurable confidence threshold", "Either can be disabled"],
      },
      {
        tone: "purple",
        icon: "Clock",
        title: "History Never Rewritten",
        desc: "Threshold changes apply from the date they're made — never retroactively.",
        checks: ["Forward-only application", "Old data keeps old rules", "Fully auditable"],
      },
      {
        tone: "dark",
        icon: "ShieldCheck",
        title: "Meetings Never Penalized",
        desc: "Idle time during an approved meeting session is automatically exempted.",
        checks: ["Meeting Mode exemption", "No unfair idle penalties", "Approved by a manager first"],
      },
      {
        tone: "purple",
        icon: "Activity",
        title: "Built to Catch Gaming",
        desc: "Burst-then-idle patterns and long idle gaps inside blocks are flagged automatically.",
        checks: ["Sub-window burst detection", "Long idle-gap flagging", "Staff can review any flagged block"],
      },
    ],
  },
  panel: {
    heading: "Fair by Default, Configurable by Design",
    desc: "No org is scored on someone else's assumptions — thresholds are yours to set, and history is never rewritten.",
    checklist: [
      "Idle & confidence thresholds configurable",
      "Either threshold can be disabled",
      "Changes apply forward only",
    ],
    linkLabel: "See Threshold Configuration",
  },
  stats: [
    {
      icon: "PieChart",
      value: "99%",
      label: "Team Efficiency",
      desc: "Today's active-vs-idle efficiency across the whole organization.",
    },
    {
      icon: "Clock",
      value: "Forward-Only",
      label: "Threshold Changes",
      desc: "New idle rules never rewrite how past activity was already scored.",
    },
    {
      icon: "ShieldCheck",
      value: "Auto-Exempt",
      label: "Meeting Idle Time",
      desc: "Idle time inside an approved meeting is never counted against anyone.",
    },
  ],
  dark2: {
    eyebrow: "INTEGRITY BUILT IN",
    linkLabel: "See Integrity Controls",
    blocks: [
      {
        heading: "Designed Against Gaming",
        desc: "Burst-then-idle patterns and long idle gaps inside otherwise-active blocks are flagged for review.",
        checklist: ["Sub-window burst detection", "Long idle-gap flagging"],
      },
      {
        heading: "Staff Always Have the Final Say",
        desc: "Any flagged block can be manually reviewed and approved or revoked by staff.",
        checklist: ["Manual review & override", "Full audit trail on every change"],
      },
    ],
  },
  comparison: {
    heading: "Get The Right Tool",
    subheading: "See how TrackDots' idle detection compares to the old way.",
    columns: ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"],
    rows: [
      { capability: "Automatic idle detection", statuses: ["yes", "yes", "no"] },
      { capability: "Configurable idle thresholds", statuses: ["yes", "no", "no"] },
      { capability: "Forward-only threshold changes", statuses: ["yes", "no", "no"] },
      { capability: "Meeting-aware idle exemption", statuses: ["yes", "no", "no"] },
      { capability: "Anti-gaming burst detection", statuses: ["yes", "no", "no"] },
      { capability: "Team-wide efficiency score", statuses: ["yes", "partial", "no"] },
    ],
  },
  faq: {
    heading: "Idle Time Tracking, Answered",
    items: [
      {
        q: "How does TrackDots detect idle time?",
        a: "Idle time is detected from real keystroke, mouse, and click signals against your organization's configured idle and confidence thresholds.",
      },
      {
        q: "Can I change the idle threshold?",
        a: "Yes. Both the idle score threshold and confidence threshold are configurable, and either can be disabled entirely.",
      },
      {
        q: "Does changing the threshold rewrite past data?",
        a: "No. Threshold changes only apply going forward — historical data keeps the rules it was originally scored under.",
      },
      {
        q: "What happens to idle time during a meeting?",
        a: "Idle time inside an approved Meeting Mode session is automatically exempted and never counted against the employee.",
      },
      {
        q: "Can employees game the idle detection?",
        a: "TrackDots flags burst-then-idle patterns and unusually long idle gaps inside otherwise-active blocks to catch gaming attempts.",
      },
      {
        q: "Can I see team-wide idle efficiency?",
        a: "Yes. A team efficiency score shows active-vs-idle time across the whole organization in real time.",
      },
    ],
  },
};
