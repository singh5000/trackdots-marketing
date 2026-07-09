import type { FeaturePageContent } from "@/lib/featurepage";

export const SLUG = "project-tracking";

export const FALLBACK: FeaturePageContent = {
  hero: {
    eyebrow: "FEATURE — PROJECT TRACKING",
    heading: "Every Project, Every Member,",
    highlight: "One Clear View.",
    description:
      "Projects, team assignments, clients, budgets, and deadlines — all in one roster, with a status pipeline from Planning through Archived.",
  },
  problemSolution: {
    eyebrow: "THE ORGANIZATION GAP",
    heading: "Stop Managing Projects in Spreadsheets",
    subheading:
      "Status updates scattered across chats and sheets never stay current. Project Tracking keeps one source of truth.",
    problems: [
      "Project status scattered across spreadsheets and chat threads",
      "No single view of who's actually assigned to what",
      "Deadlines and budgets tracked nowhere central",
    ],
    benefits: [
      "Every project, member, and deadline in one list",
      "A clear status pipeline from Planning to Archived",
      "Assign, edit, and review projects without leaving the page",
    ],
  },
  grid: {
    eyebrow: "HOW IT WORKS",
    heading: "A Roster That Stays Current",
    subheading: "Every project, member, and deadline, kept in one place.",
    items: [
      {
        icon: "Folder",
        title: "Full Project Roster",
        desc: "Every project in one place, with team members, client, budget, and deadline at a glance.",
      },
      {
        icon: "TrendUp",
        title: "Status Pipeline",
        desc: "Track projects through Planning, Active, On Hold, Completed, or Archived.",
      },
      {
        icon: "Users",
        title: "Team Assignment",
        desc: "Assign any number of employees to a project, and see every assignment in one view.",
      },
      {
        icon: "FileText",
        title: "Phase & Description Tracking",
        desc: "Keep a short phase or description current for every project, right in the list.",
      },
      {
        icon: "Monitor",
        title: "Client Association",
        desc: "Tag projects to a client for easy filtering and reporting.",
      },
      {
        icon: "Settings",
        title: "One-Click Profile & Edit",
        desc: "Open a full project profile or edit any detail without leaving the list.",
      },
    ],
  },
  dark1: {
    eyebrow: "PROJECT ROSTER",
    linkLabel: "Explore Project Tracking",
    blocks: [
      {
        heading: "Every Project, One List",
        desc: "Name, client, members, budget, deadline, status, and phase — all visible without opening a single project.",
        checklist: ["Full project roster in one table", "Filterable by status"],
      },
      {
        heading: "Open Full Detail in One Click",
        desc: "Jump into a project's full profile or edit any field directly from the list.",
        checklist: ["One-click project profile", "Inline edit for any field"],
      },
    ],
  },
  sticky: {
    eyebrow: "GO DEEPER",
    heading: "Every Angle of Project Tracking",
    desc: "From team assignment to real logged hours — TrackDots keeps every project's status honest.",
    cards: [
      {
        tone: "purple",
        icon: "TrendUp",
        title: "Every Project, One Pipeline",
        desc: "Planning, Active, On Hold, Completed, or Archived — every project's status is always current.",
        checks: ["Five-stage status pipeline", "Filter by status in one click", "Never a stale spreadsheet"],
      },
      {
        tone: "dark",
        icon: "Users",
        title: "Who's On What, Instantly",
        desc: "Every project shows exactly which employees are assigned, at a glance.",
        checks: ["Any number of members per project", "Avatars shown directly in the list", "Assign or remove in seconds"],
      },
      {
        tone: "purple",
        icon: "Clock",
        title: "Deadlines That Don't Get Lost",
        desc: "Every project's deadline is visible right in the roster — no separate calendar to check.",
        checks: ["Deadline shown per project", "Optional budget field", "Sortable by due date"],
      },
      {
        tone: "dark",
        icon: "FileText",
        title: "Phase & Context, Always Current",
        desc: "A short phase or description keeps everyone aligned on where a project actually stands.",
        checks: ["Editable phase per project", "Visible directly in the list", "No separate status meeting needed"],
      },
      {
        tone: "purple",
        icon: "BarChart",
        title: "Connected to Real Time Data",
        desc: "Hours logged against a project roll up automatically from the same activity tracking used everywhere else.",
        checks: ["Hours logged per project", "Top contributors surfaced", "Same data as Time Tracking"],
      },
    ],
  },
  panel: {
    heading: "Built to Connect With Everything Else",
    desc: "Projects aren't an island — assigned employees, tracked time, and reporting all reference the same roster.",
    checklist: [
      "Shared employee roster across the platform",
      "Time tracked rolls up per project",
      "No duplicate data entry",
    ],
    linkLabel: "See How Time Rolls Up",
  },
  stats: [
    {
      icon: "Folder",
      value: "15",
      label: "Projects Tracked",
      desc: "Every active, planning, and completed project in one roster.",
    },
    {
      icon: "TrendUp",
      value: "5-Stage",
      label: "Status Pipeline",
      desc: "Planning, Active, On Hold, Completed, or Archived.",
    },
    {
      icon: "Users",
      value: "Unlimited",
      label: "Team Members",
      desc: "Assign any number of employees to any project.",
    },
  ],
  dark2: {
    eyebrow: "CLIENT-READY",
    linkLabel: "See Client Reporting",
    blocks: [
      {
        heading: "Every Project, Tied to a Client",
        desc: "Tag any project to a client for cleaner filtering, reporting, and billing conversations.",
        checklist: ["Optional client association", "Filterable by client"],
      },
      {
        heading: "Budgets & Deadlines, Front and Center",
        desc: "Optional budget and deadline fields keep commercial context visible without a separate spreadsheet.",
        checklist: ["Optional budget field", "Deadline shown in the roster"],
      },
    ],
  },
  comparison: {
    heading: "Get The Right Tool",
    subheading: "See how TrackDots' project tracking compares to the old way.",
    columns: ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"],
    rows: [
      { capability: "Centralized project roster", statuses: ["yes", "partial", "no"] },
      { capability: "Status pipeline (Planning → Archived)", statuses: ["yes", "no", "no"] },
      { capability: "Team member assignment per project", statuses: ["yes", "partial", "no"] },
      { capability: "Client association per project", statuses: ["yes", "no", "no"] },
      { capability: "Direct link to time-tracking data", statuses: ["yes", "no", "no"] },
      { capability: "Budget & deadline tracking", statuses: ["yes", "partial", "partial"] },
    ],
  },
  faq: {
    heading: "Project Tracking, Answered",
    items: [
      {
        q: "Can I assign multiple employees to a project?",
        a: "Yes. Any number of employees can be assigned to a project, and every assignment shows in the project list.",
      },
      {
        q: "What statuses can a project have?",
        a: "Planning, Active, On Hold, Completed, or Archived — filterable with a single click.",
      },
      {
        q: "Can I track a budget and deadline per project?",
        a: "Yes. Both are optional fields shown directly in the project list.",
      },
      {
        q: "Can I associate a project with a client?",
        a: "Yes. Projects can be tagged to a client for easy filtering and reporting.",
      },
      {
        q: "Does project tracking connect to time tracking?",
        a: "Yes. Time tracked while working on a project rolls up into that project's reporting.",
      },
      {
        q: "Can I edit a project after creating it?",
        a: "Yes. Every project can be edited in place — name, description, members, client, budget, and deadline.",
      },
    ],
  },
};
