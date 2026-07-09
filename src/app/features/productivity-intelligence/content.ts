import type { FeaturePageContent } from "@/lib/featurepage";

export const SLUG = "productivity-intelligence";

export const FALLBACK: FeaturePageContent = {
  hero: {
    eyebrow: "FEATURE — PRODUCTIVITY INTELLIGENCE",
    heading: "One Score. One Team.",
    highlight: "Complete Clarity.",
    description:
      "Daily 0–100 productivity scores, trend direction, team averages, and side-by-side employee comparison — all built on one shared scoring engine.",
  },
  problemSolution: {
    eyebrow: "THE CLARITY GAP",
    heading: "Stop Piecing Together the Picture",
    subheading: "Productivity data scattered across five different reports never adds up to a clear answer. Productivity Intelligence does.",
    problems: [
      "Productivity buried in scattered reports across separate pages",
      "No simple way to compare two employees fairly",
      "\"Who's doing well?\" answered by gut feeling, not data",
    ],
    benefits: [
      "One daily score per employee, rated Excellent to Low",
      "Any two employees compared side-by-side in seconds",
      "Team averages and top performers surfaced automatically",
    ],
  },
  grid: {
    eyebrow: "HOW IT WORKS",
    heading: "One Engine, Every Answer",
    subheading: "Daily scores, team trends, and head-to-head comparison, all from the same real activity data.",
    items: [
      {
        icon: "BarChart",
        title: "Daily Productivity Scoring",
        desc: "Every employee gets a 0–100 productivity score each day, built from real activity, not guesswork.",
      },
      {
        icon: "ShieldCheck",
        title: "Four Clear Rating Bands",
        desc: "Excellent, Good, Fair, or Low — every score rolls up into a rating anyone can understand at a glance.",
      },
      {
        icon: "TrendUp",
        title: "Trend Direction, Not Just a Number",
        desc: "See whether an employee's productivity is rising, steady, or declining over the period.",
      },
      {
        icon: "Users",
        title: "Team Averages & Top Performer",
        desc: "Team-wide average score and the current top performer, surfaced automatically.",
      },
      {
        icon: "Bell",
        title: "Needs-Attention Callouts",
        desc: "Employees whose scores warrant a closer look are called out automatically.",
      },
      {
        icon: "Eye",
        title: "Side-by-Side Compare",
        desc: "Compare any two employees head-to-head across active time, focus sessions, and top apps.",
      },
    ],
  },
  dark1: {
    eyebrow: "PRODUCTIVITY TRENDS",
    linkLabel: "Explore Productivity Trends",
    blocks: [
      {
        heading: "Every Employee, Scored Daily",
        desc: "A 0–100 score rolls up into Excellent, Good, Fair, or Low — with average, best, and trend direction shown per employee.",
        checklist: ["Daily 0–100 productivity score", "Four-tier rating band"],
      },
      {
        heading: "The Team, at a Glance",
        desc: "Team average score, top performer, and active-employee count are surfaced automatically for any period.",
        checklist: ["Team average & top performer", "14 / 30 / 60-day windows"],
      },
    ],
  },
  sticky: {
    eyebrow: "GO DEEPER",
    heading: "Every Angle of Productivity Intelligence",
    desc: "From daily scores to head-to-head comparisons — TrackDots turns raw activity into a complete, honest read on performance.",
    cards: [
      {
        tone: "purple",
        icon: "BarChart",
        title: "One Score, Four Bands",
        desc: "Every activity block rolls up into a 0–100 daily score, rated Excellent, Good, Fair, or Low.",
        checks: ["0–100 score per employee, per day", "Four clear rating bands", "Same engine across the whole platform"],
      },
      {
        tone: "dark",
        icon: "TrendUp",
        title: "Direction, Not Just a Snapshot",
        desc: "Every employee's trend arrow compares the two halves of the period — rising, steady, or declining.",
        checks: ["Rising / steady / declining", "14, 30, or 60-day windows", "Per-employee daily chart"],
      },
      {
        tone: "purple",
        icon: "Users",
        title: "The Team, Summarized",
        desc: "Team average score and active-employee count are calculated automatically for any period.",
        checks: ["Team-wide average score", "Active vs. total employee count", "Top performer surfaced automatically"],
      },
      {
        tone: "dark",
        icon: "Bell",
        title: "Nothing Falls Through the Cracks",
        desc: "Employees whose scores drop into Fair or Low are called out — without anyone having to go looking.",
        checks: ["Automatic needs-attention callout", "Based on the selected period", "Zero manual review required"],
      },
      {
        tone: "purple",
        icon: "Eye",
        title: "Any Two Employees, Side by Side",
        desc: "Pick any two employees and a time window to compare active time, score, and focus sessions directly.",
        checks: ["Side-by-side comparison", "Active time, score, and focus sessions", "Any time window"],
      },
    ],
  },
  panel: {
    heading: "One Scoring Engine, Everywhere",
    desc: "The same confidence-scored activity blocks that power Time Tracking also drive Productivity Trends and Compare — one honest signal, reused everywhere.",
    checklist: [
      "Same engine as confidence-scored blocks",
      "Consistent across every report",
      "No separate configuration needed",
    ],
    linkLabel: "See How Scoring Works",
  },
  stats: [
    {
      icon: "BarChart",
      value: "0–100",
      label: "Daily Score",
      desc: "Every employee gets a daily productivity score built from real activity.",
    },
    {
      icon: "ShieldCheck",
      value: "4",
      label: "Rating Bands",
      desc: "Excellent, Good, Fair, or Low — a clear read on every score.",
    },
    {
      icon: "Eye",
      value: "2-Way",
      label: "Employee Compare",
      desc: "Any two employees, compared side-by-side across any time window.",
    },
  ],
  dark2: {
    eyebrow: "COMPARE EMPLOYEES",
    linkLabel: "Try Compare Employees",
    blocks: [
      {
        heading: "Pick Two, See Everything",
        desc: "Select any two employees and a time window to compare active time, score, and focus sessions side-by-side.",
        checklist: ["Side-by-side active time & score", "Focus sessions & top app compared"],
      },
      {
        heading: "Fair Comparisons, Same Standard",
        desc: "Both employees are measured against the exact same scoring engine and thresholds — no double standard.",
        checklist: ["Same scoring engine for both", "This week / 7-day / 30-day windows"],
      },
    ],
  },
  comparison: {
    heading: "Get The Right Tool",
    subheading: "See how TrackDots' productivity intelligence compares to the old way.",
    columns: ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"],
    rows: [
      { capability: "Daily 0–100 productivity scoring", statuses: ["yes", "no", "no"] },
      { capability: "Four-tier rating bands", statuses: ["yes", "no", "no"] },
      { capability: "Trend direction (rising/steady/declining)", statuses: ["yes", "no", "no"] },
      { capability: "Automatic needs-attention callouts", statuses: ["yes", "no", "no"] },
      { capability: "Side-by-side employee comparison", statuses: ["yes", "no", "no"] },
      { capability: "Configurable time windows (14/30/60 days)", statuses: ["yes", "partial", "no"] },
    ],
  },
  faq: {
    heading: "Productivity Intelligence, Answered",
    items: [
      {
        q: "How is the productivity score calculated?",
        a: "Each activity block is scored from 0–100 based on real input signals, then rolled up into a daily productivity score per employee.",
      },
      {
        q: "What do the rating bands mean?",
        a: "Excellent (80+), Good (65+), Fair (45+), or Low (below 45) — giving every score an at-a-glance meaning.",
      },
      {
        q: "What does the trend arrow show?",
        a: "Whether an employee's score is rising, holding steady, or declining, comparing the two halves of the selected period.",
      },
      {
        q: "How does Compare work?",
        a: "Pick any two employees and a time period to see their active time, productivity score, focus sessions, and top app side-by-side.",
      },
      {
        q: "What triggers a \"needs attention\" callout?",
        a: "Employees whose average score falls into the Fair or Low band for the selected period are surfaced for a closer look.",
      },
      {
        q: "Can employees see their own productivity trend?",
        a: "Yes, on plans with the employee self-view portal enabled.",
      },
    ],
  },
};
