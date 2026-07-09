import type { FeaturePageContent } from "@/lib/featurepage";

export const SLUG = "app-usage";

export const FALLBACK: FeaturePageContent = {
  hero: {
    eyebrow: "FEATURE — APP USAGE REPORTS",
    heading: "See Which Apps Actually",
    highlight: "Drive Real Work.",
    description:
      "Every tracked app and website is automatically categorized as productive, neutral, or unproductive — ranked and broken down per employee.",
  },
  problemSolution: {
    eyebrow: "THE VISIBILITY GAP",
    heading: "Stop Guessing Where the Hours Go",
    subheading: "Raw activity logs don't tell you what's actually productive. App Usage Reports do.",
    problems: [
      "No idea which apps are actually driving productive work",
      "Manually guessing which tools are time sinks",
      "App usage buried in raw logs, never summarized",
    ],
    benefits: [
      "Every app automatically categorized and ranked by usage",
      "One click to see who's using what, and for how long",
      "A clear, team-wide picture updated every day",
    ],
  },
  grid: {
    eyebrow: "HOW IT WORKS",
    heading: "A Ranking That Builds Itself",
    subheading: "Automatic, configurable, and broken down to the individual employee.",
    items: [
      {
        icon: "PieChart",
        title: "Productive / Neutral / Unproductive Split",
        desc: "Every tracked app and website is automatically categorized, so you always know where time actually goes.",
      },
      {
        icon: "BarChart",
        title: "Top Apps, Ranked by Usage",
        desc: "See exactly which apps consume the most time across the whole team, ranked from highest to lowest.",
      },
      {
        icon: "Users",
        title: "Per-App Employee Breakdown",
        desc: "Click any app in the ranking to see exactly which employees used it, and for how long.",
      },
      {
        icon: "Settings",
        title: "Configurable App Categories",
        desc: "Reclassify any app as productive, neutral, or unproductive to match how your organization actually works.",
      },
      {
        icon: "Monitor",
        title: "Team-Wide & Individual Views",
        desc: "See usage across the whole organization, or drill into a single employee's app usage.",
      },
      {
        icon: "Clock",
        title: "Flexible Date Ranges",
        desc: "View today, this week, last 7 days, or last 30 days with a single click.",
      },
    ],
  },
  dark1: {
    eyebrow: "TOP APPS",
    linkLabel: "Explore App Usage Reports",
    blocks: [
      {
        heading: "The Whole Team's Usage, Ranked",
        desc: "Every app is ranked by total time across the team, with its share of total tracked time.",
        checklist: ["Ranked by total tracked time", "Share of total time per app"],
      },
      {
        heading: "Ten Apps Tell the Whole Story",
        desc: "Most teams' entire tracked time concentrates in a handful of apps — TrackDots surfaces them instantly.",
        checklist: ["Unique-app count, team-wide", "Updated live, every day"],
      },
    ],
  },
  sticky: {
    eyebrow: "GO DEEPER",
    heading: "Every Angle of App Usage",
    desc: "From category rules to per-employee drill-downs — TrackDots turns raw app activity into a clear picture.",
    cards: [
      {
        tone: "purple",
        icon: "PieChart",
        title: "Every App, Categorized Automatically",
        desc: "Productive, neutral, or unproductive — every tracked app is classified without any manual tagging.",
        checks: ["92% of today's time productive", "Updated live through the day", "Team-wide and per-employee"],
      },
      {
        tone: "dark",
        icon: "BarChart",
        title: "Ranked by Real Usage",
        desc: "Apps are ranked by total time across the team, so the biggest time sinks are impossible to miss.",
        checks: ["Ranked by total tracked time", "Share of total time shown", "Unique-app count included"],
      },
      {
        tone: "purple",
        icon: "Users",
        title: "Drill Into Any App",
        desc: "Click chrome, Code, or any app in the ranking to see exactly who used it, and for how long.",
        checks: ["Per-employee time breakdown", "Sorted by usage within the app", "Works for any app in the ranking"],
      },
      {
        tone: "dark",
        icon: "Settings",
        title: "Categories That Match Your Team",
        desc: "Default categories are just a starting point — reclassify any app to fit how your organization works.",
        checks: ["Fully configurable per organization", "Applies going forward", "No engineering ticket required"],
      },
      {
        tone: "purple",
        icon: "TrendUp",
        title: "Trends, Not Just a Snapshot",
        desc: "See how usage of any single app is trending across the weeks, not just today.",
        checks: ["Multi-week trend view", "Compare week over week", "Spot growing time sinks early"],
      },
    ],
  },
  panel: {
    heading: "Categories That Match Your Reality",
    desc: "Default productive / neutral / unproductive rules are just a starting point — every app can be reclassified to fit how your team actually works.",
    checklist: [
      "Fully configurable app categories",
      "Changes apply going forward",
      "Same rules across team and individual views",
    ],
    linkLabel: "See Category Configuration",
  },
  stats: [
    {
      icon: "PieChart",
      value: "92%",
      label: "Productive Time",
      desc: "Today's share of tracked time spent in apps categorized as productive.",
    },
    {
      icon: "BarChart",
      value: "10",
      label: "Unique Apps",
      desc: "The number of distinct apps and websites used across the team today.",
    },
    {
      icon: "Users",
      value: "Per-App",
      label: "Employee Drill-Down",
      desc: "Click any app in the ranking to see exactly who used it, and for how long.",
    },
  ],
  dark2: {
    eyebrow: "PER-EMPLOYEE DETAIL",
    linkLabel: "See Productivity Intelligence",
    blocks: [
      {
        heading: "Click Through to the Individual",
        desc: "Every app in the ranking expands into a per-employee breakdown, sorted by usage.",
        checklist: ["Per-employee time per app", "Sorted highest to lowest"],
      },
      {
        heading: "Feeds Straight Into Productivity Intelligence",
        desc: "App categorization is one of the signals behind TrackDots' broader productivity scoring.",
        checklist: ["Contributes to productivity scoring", "Available in weekly reports"],
      },
    ],
  },
  comparison: {
    heading: "Get The Right Tool",
    subheading: "See how TrackDots' app usage reports compare to the old way.",
    columns: ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"],
    rows: [
      { capability: "Automatic productive/neutral/unproductive split", statuses: ["yes", "no", "no"] },
      { capability: "Top apps ranked by usage", statuses: ["yes", "partial", "no"] },
      { capability: "Per-app employee drill-down", statuses: ["yes", "no", "no"] },
      { capability: "Configurable app categories", statuses: ["yes", "no", "no"] },
      { capability: "Team-wide and individual views", statuses: ["yes", "partial", "no"] },
      { capability: "Direct feed into productivity scoring", statuses: ["yes", "no", "no"] },
    ],
  },
  faq: {
    heading: "App Usage Reports, Answered",
    items: [
      {
        q: "How does TrackDots classify apps as productive or not?",
        a: "Every tracked app and website is categorized as productive, neutral, or unproductive using sensible defaults — and your organization can fully customize the rules.",
      },
      {
        q: "Can I change how a specific app is categorized?",
        a: "Yes. Any app's category can be reclassified per organization, and the change applies going forward.",
      },
      {
        q: "Can I see who used a specific app?",
        a: "Yes. Clicking any app in the Top Apps table shows exactly which employees used it and for how long.",
      },
      {
        q: "Does this cover websites as well as desktop apps?",
        a: "Yes. Browser-based usage and native desktop apps are both tracked and categorized the same way.",
      },
      {
        q: "Can I view usage for just one employee?",
        a: "Yes. App usage reports support both team-wide and single-employee views.",
      },
      {
        q: "Does app usage feed into the productivity score?",
        a: "Yes. App categorization is one of the signals behind TrackDots' broader productivity scoring.",
      },
    ],
  },
};
