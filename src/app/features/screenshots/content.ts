import type { FeaturePageContent } from "@/lib/featurepage";

export const SLUG = "screenshots";

export const FALLBACK: FeaturePageContent = {
  hero: {
    eyebrow: "FEATURE — SCREENSHOT MONITORING",
    heading: "See the Context Behind",
    highlight: "Every Activity Block.",
    description:
      "Optional, configurable screenshot capture gives managers visual context — without turning monitoring into surveillance.",
  },
  problemSolution: {
    eyebrow: "THE CONTEXT GAP",
    heading: "Stop Guessing What 'Active' Meant",
    subheading: "A score without context is just a number. Screenshots close that gap.",
    problems: [
      "No visual context for what \"active\" actually looked like",
      "Managers left guessing during disputed time entries",
      "Screenshot tools that feel like covert surveillance",
    ],
    benefits: [
      "Screenshots tied directly to real activity blocks",
      "Clear evidence when time entries are questioned",
      "Configurable, transparent, and never secretive",
    ],
  },
  grid: {
    eyebrow: "HOW IT WORKS",
    heading: "Visual Context, On Your Terms",
    subheading: "Configurable, linked to real activity, and never a black box.",
    items: [
      { icon: "ImageIcon", title: "Configurable Capture", desc: "Set capture frequency per organization — as frequent or as light-touch as your team needs." },
      { icon: "Filter", title: "Low-Quality Filter", desc: "Instantly filter the grid to only the screenshots tied to low-confidence or idle activity blocks." },
      { icon: "Activity", title: "Linked to Activity Blocks", desc: "Every screenshot is tied directly to the activity block that captured it — full context, not a random image." },
      { icon: "BarChart", title: "Employee & Date Grid", desc: "Browse by employee and date with a single bulk-loaded grid — no per-image loading delay." },
      { icon: "Lock", title: "Access-Controlled Storage", desc: "Screenshots are stored securely and only accessible to authorized managers and HR staff." },
      { icon: "Eye", title: "Transparent by Default", desc: "Employees know screenshots are part of their plan — nothing is captured secretly." },
    ],
  },
  dark1: {
    eyebrow: "CAPTURE VIEWER",
    linkLabel: "Explore the Screenshot Viewer",
    blocks: [
      {
        heading: "Every Capture, Organized by Employee",
        desc: "Browse the full grid by employee and date, loaded in a single request — no waiting per image.",
        checklist: ["Employee + date grid view", "Single bulk-loaded query"],
      },
      {
        heading: "Jump Straight to What Matters",
        desc: "The Low-Quality filter surfaces only the captures tied to flagged or idle activity.",
        checklist: ["Low-Quality-only filter", "Window title & app shown per capture"],
      },
    ],
  },
  sticky: {
    eyebrow: "GO DEEPER",
    heading: "Every Angle of Screenshot Capture",
    desc: "From capture triggers to access control — TrackDots keeps screenshots useful and never intrusive.",
    cards: [
      {
        tone: "purple",
        icon: "ImageIcon",
        title: "Captured at the Right Moments",
        desc: "Screenshots trigger alongside real activity blocks, not on a blind arbitrary timer.",
        checks: ["Tied to real activity blocks", "No blind, fixed-interval spam", "Org-level frequency control"],
      },
      {
        tone: "dark",
        icon: "Filter",
        title: "Find What Matters, Fast",
        desc: "Filter straight to the low-confidence captures worth a manager's attention.",
        checks: ["Low-Quality-only filter", "Employee + date grid", "Single bulk-loaded view"],
      },
      {
        tone: "purple",
        icon: "Lock",
        title: "Access, Strictly Controlled",
        desc: "Only the roles you authorize can ever open the screenshot viewer.",
        checks: ["Role-based access", "Org-scoped storage", "No public exposure, ever"],
      },
      {
        tone: "dark",
        icon: "Eye",
        title: "Transparent, Not Secret",
        desc: "Employees on self-view plans see exactly what their manager sees.",
        checks: ["Self-view portal support", "No hidden captures", "Builds trust, not suspicion"],
      },
      {
        tone: "purple",
        icon: "Sparkles",
        title: "Context, Not Just an Image",
        desc: "Every capture shows the window title and app alongside the timestamp.",
        checks: ["Window title captured", "App name tagged", "Duration shown per capture"],
      },
    ],
  },
  panel: {
    heading: "Built With Privacy at the Core",
    desc: "Screenshot access is role-gated and configurable — your organization decides how visual monitoring works.",
    checklist: ["Role-based access control", "Configurable capture frequency", "Never captured or shown secretly"],
    linkLabel: "See Our Privacy Principles",
  },
  stats: [
    { icon: "ImageIcon", value: "1-Click", label: "Filter to Flagged", desc: "Jump straight to low-quality captures worth reviewing." },
    { icon: "Clock", value: "Per-Block", label: "Capture Linking", desc: "Every screenshot ties to the exact activity block that triggered it." },
    { icon: "Lock", value: "Role-Gated", label: "Access Control", desc: "Only authorized managers and HR staff can ever open the viewer." },
  ],
  dark2: {
    eyebrow: "TRANSPARENCY",
    linkLabel: "See Configuration Options",
    blocks: [
      {
        heading: "Nothing Captured in Secret",
        desc: "Employees on self-view plans see the exact same captures their manager does.",
        checklist: ["Self-view portal support", "No hidden captures, ever"],
      },
      {
        heading: "Configurable to Your Culture",
        desc: "Turn capture frequency up for high-security roles, or down for a lighter touch elsewhere.",
        checklist: ["Per-organization configuration", "Works alongside all other features"],
      },
    ],
  },
  comparison: {
    heading: "Get The Right Tool",
    subheading: "See how TrackDots' screenshot capture compares to the old way.",
    columns: ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"],
    rows: [
      { capability: "Screenshots linked to activity blocks", statuses: ["yes", "no", "no"] },
      { capability: "Configurable capture frequency", statuses: ["yes", "partial", "no"] },
      { capability: "Low-quality-only filtering", statuses: ["yes", "no", "no"] },
      { capability: "Bulk employee + date grid view", statuses: ["yes", "partial", "no"] },
      { capability: "Access-controlled storage", statuses: ["yes", "yes", "no"] },
      { capability: "Employee self-view of captures", statuses: ["yes", "no", "no"] },
    ],
  },
  faq: {
    heading: "Screenshot Monitoring, Answered",
    items: [
      { q: "Are screenshots mandatory to use TrackDots?", a: "No. Screenshot capture is a configurable feature — organizations can enable, disable, or tune the frequency to match their comfort level." },
      { q: "Who can view captured screenshots?", a: "Only authorized managers and HR staff on plans with screenshot access. Access is controlled at the organization and role level." },
      { q: "Can employees see their own screenshots?", a: "Yes, on plans with the employee self-view portal enabled, employees can see the same captures managers do." },
      { q: "How are screenshots connected to productivity scoring?", a: "Each screenshot is linked to the activity block that triggered it, so you always see the context behind a productivity score." },
      { q: "Can I filter to just the screenshots that matter?", a: "Yes. The viewer supports a \"Low Quality only\" filter to jump straight to blocks worth reviewing." },
      { q: "Is screenshot storage secure?", a: "Yes, files are stored with restricted access and are never exposed publicly." },
    ],
  },
};
