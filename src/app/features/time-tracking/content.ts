import type { FeaturePageContent } from "@/lib/featurepage";

export const SLUG = "time-tracking";

export const FALLBACK: FeaturePageContent = {
  hero: {
    eyebrow: "FEATURE — TIME TRACKING",
    heading: "Know Exactly Where",
    highlight: "the Day Goes.",
    description:
      "TrackDots tracks apps, websites, and activity in the background — every block scored for confidence, so you always know what real work looks like.",
  },
  problemSolution: {
    eyebrow: "THE VISIBILITY GAP",
    heading: "Stop Guessing Where the Day Went",
    subheading: "Manual tracking always breaks down. TrackDots removes the guesswork entirely.",
    problems: [
      "No clear view of who's actually working on what",
      "Manual timesheets that rarely match reality",
      "Idle time silently counted as productive hours",
      "Client billing based on guesswork, not data",
    ],
    benefits: [
      "Automatic, confidence-scored activity tracking",
      "Zero manual timesheets — ever",
      "Idle time detected and excluded automatically",
      "Accurate, activity-backed client billing",
    ],
  },
  grid: {
    eyebrow: "HOW IT WORKS",
    heading: "Tracking That Runs Itself",
    subheading: "No timers to start, no manual entries — just an accurate picture of the workday.",
    items: [
      {
        icon: "Activity",
        title: "Automatic Activity Tracking",
        desc: "Apps, websites, and window activity are tracked in the background — no manual timers, no starting or stopping.",
      },
      {
        icon: "BarChart",
        title: "Confidence-Scored Blocks",
        desc: 'Every activity block gets a 0–100 confidence score from real keystroke and mouse signals, not just "time elapsed."',
      },
      {
        icon: "Clock",
        title: "Focus Sessions",
        desc: "Uninterrupted deep-work blocks are detected automatically, with average length and longest streak per employee.",
      },
      {
        icon: "PieChart",
        title: "Idle Time Breakdown",
        desc: "See active vs. idle time per employee, with configurable idle thresholds that never apply retroactively.",
      },
      {
        icon: "Monitor",
        title: "App & Website Usage",
        desc: "Team-wide and per-employee usage reports, grouped into productive, neutral, and unproductive categories.",
      },
      {
        icon: "Calendar",
        title: "Meeting-Aware Tracking",
        desc: "Employees declare meeting sessions; once approved, that time counts as 100% productive — no unfair penalties.",
      },
    ],
  },
  dark1: {
    eyebrow: "DAY JOURNEY",
    linkLabel: "Explore the Day Journey View",
    blocks: [
      {
        heading: "Every Session, Precisely Captured",
        desc: "Work blocks, pauses, and breaks are logged automatically, down to the exact minute they happened.",
        checklist: [
          "Working & paused sessions, minute by minute",
          "Break reasons like lunch, captured automatically",
        ],
      },
      {
        heading: "See What Was Actually Worked On",
        desc: "Every session names the apps used and how many activity blocks backed it up.",
        checklist: ["Per-session app breakdown", "Block-level detail for full accuracy"],
      },
    ],
  },
  sticky: {
    eyebrow: "GO DEEPER",
    heading: "Every Angle of How Time Is Spent",
    desc: "From live activity to focus sessions and meetings — TrackDots turns raw tracking data into a complete, honest picture of the workday.",
    cards: [
      {
        tone: "purple",
        icon: "Activity",
        title: "Capture Every Minute, Automatically",
        desc: "No timers, no manual entries — activity is captured the moment work starts.",
        checks: ["Zero-setup tracking", "Runs silently in the background", "Works across every app"],
      },
      {
        tone: "dark",
        icon: "Clock",
        title: "Know What's Really Focus Work",
        desc: "Uninterrupted deep-work blocks are surfaced separately from routine activity.",
        checks: ["30-min minimum session length", "Longest streak tracked", "Per-employee focus trends"],
      },
      {
        tone: "purple",
        icon: "PieChart",
        title: "See Idle Time Before It Costs You",
        desc: "Idle gaps are flagged automatically, so tracked hours reflect real work.",
        checks: ["Configurable idle thresholds", "Never applied retroactively", "Clear active-vs-idle split"],
      },
      {
        tone: "dark",
        icon: "Monitor",
        title: "Understand App & Website Usage",
        desc: "Every app and site is categorized as productive, neutral, or unproductive.",
        checks: ["Team-wide and per-employee views", "Org-level custom app rules", "Exportable usage reports"],
      },
      {
        tone: "purple",
        icon: "Calendar",
        title: "Never Penalize Meeting Time",
        desc: "Declared meetings, once approved, always count as fully productive.",
        checks: ["Employee-declared sessions", "One-tap manager approval", "No unfair idle penalties"],
      },
    ],
  },
  panel: {
    heading: "Works Wherever Your Team Does",
    desc: "The TrackDots agent runs natively on macOS and Windows, so remote, hybrid, and in-office employees all show up in the same dashboard.",
    checklist: [
      "Native macOS & Windows agent",
      "Works anywhere with an internet connection",
      "Auto-updates, verified before install",
    ],
    linkLabel: "See Supported Platforms",
  },
  stats: [
    {
      icon: "BarChart",
      value: "0–100",
      label: "Confidence Score",
      desc: "Every activity block is scored from real input signals, not just elapsed time.",
    },
    {
      icon: "Clock",
      value: "5-Min",
      label: "Merge Window",
      desc: "Short gaps between active sessions are merged into one continuous work block.",
    },
    {
      icon: "Sparkles",
      value: "2",
      label: "Native Platforms",
      desc: "One lightweight agent, built natively for both macOS and Windows.",
    },
  ],
  dark2: {
    eyebrow: "PRIVACY BY DESIGN",
    linkLabel: "See Our Privacy Principles",
    blocks: [
      {
        heading: "Transparent by Default",
        desc: "Employees get the same self-view dashboard managers do — nothing tracked is hidden from them.",
        checklist: ["Self-view dashboard for every employee", "Full activity history, always visible"],
      },
      {
        heading: "Never Surveillance, Always Oversight",
        desc: "Keystrokes are counted for scoring, never logged as content, and staff can review any flagged moment.",
        checklist: [
          "Keystroke activity counted, never logged",
          "Staff can review and override any flagged block",
        ],
      },
    ],
  },
  comparison: {
    heading: "Get The Right Tool",
    subheading: "See how TrackDots compares to tracking time the old way.",
    columns: ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"],
    rows: [
      { capability: "Automatic activity capture", statuses: ["yes", "yes", "no"] },
      { capability: "Confidence-scored accuracy", statuses: ["yes", "no", "no"] },
      { capability: "Idle time auto-detection", statuses: ["yes", "partial", "no"] },
      { capability: "Meeting-aware time tracking", statuses: ["yes", "no", "no"] },
      { capability: "Real-time team visibility", statuses: ["yes", "partial", "no"] },
      { capability: "Direct payroll integration", statuses: ["yes", "no", "no"] },
      { capability: "Day-level activity timeline", statuses: ["yes", "partial", "no"] },
      { capability: "Focus session detection", statuses: ["yes", "no", "no"] },
    ],
  },
  faq: {
    heading: "Time Tracking, Answered",
    items: [
      {
        q: "How does TrackDots track time without manual timers?",
        a: "A lightweight desktop agent runs in the background and automatically detects activity blocks from real app and window usage — nobody has to remember to start or stop a timer.",
      },
      {
        q: "Does TrackDots track keystrokes or what I type?",
        a: "No. TrackDots counts keystroke activity to help score productivity, but it never logs or stores the actual content of what's typed.",
      },
      {
        q: "What happens when I'm idle or in a meeting?",
        a: "Idle time is detected automatically using configurable thresholds. Meeting Mode lets you declare a meeting session, and once approved, that time counts as fully productive.",
      },
      {
        q: "Can employees see their own tracked time?",
        a: "Yes, on Pro and Business plans every employee gets a self-view dashboard and work diary showing exactly what was tracked.",
      },
      {
        q: "Does time tracking work for remote and hybrid teams?",
        a: "Yes. The agent runs on both macOS and Windows anywhere there's an internet connection, so distributed teams get the same visibility as an in-office team.",
      },
      {
        q: "Can I export time tracking reports?",
        a: "Yes. Weekly and custom reports can be exported to CSV, Excel, or PDF, and scheduled reports can be delivered automatically by email.",
      },
    ],
  },
};
