import type { FeaturePageContent } from "@/lib/featurepage";

export const SLUG = "suggestions";

export const FALLBACK: FeaturePageContent = {
  hero: {
    eyebrow: "FEATURE — SUGGESTIONS & COMPLAINTS",
    heading: "Every Voice, Logged.",
    highlight: "Every Issue, Tracked.",
    description:
      "A ticketed system for employee suggestions and complaints — categorized, assignable, and tracked from submission to resolution.",
  },
  problemSolution: {
    eyebrow: "THE ACCOUNTABILITY GAP",
    heading: "Stop Losing Feedback in Group Chats",
    subheading: "A suggestion raised in a hallway conversation rarely goes anywhere. A ticketed system does.",
    problems: [
      "Suggestions and complaints raised in chat, then forgotten",
      "No visibility into who's actually handling an issue",
      "Sensitive concerns with no clear paper trail or resolution",
    ],
    benefits: [
      "Every suggestion and complaint logged with a ticket number",
      "Clear ownership and status on every submission",
      "A searchable record, from submission to resolution",
    ],
  },
  grid: {
    eyebrow: "HOW IT WORKS",
    heading: "From Submission to Resolution",
    subheading: "Every suggestion and complaint, tracked the same auditable way.",
    items: [
      {
        icon: "Inbox",
        title: "Suggestions & Complaints, One Inbox",
        desc: "Employees submit suggestions or complaints from one simple form, no separate tools.",
      },
      {
        icon: "FileText",
        title: "Ticket Numbering & Categorization",
        desc: "Every submission gets a ticket number and a category, so nothing gets lost in a group chat.",
      },
      {
        icon: "Eye",
        title: "Three Views, One System",
        desc: "Company Wide, Assigned to Me, or My Submissions — the same system serves everyone differently.",
      },
      {
        icon: "Clock",
        title: "Status & Due-Date Tracking",
        desc: "Track every ticket from Open to Resolved, with an optional due date.",
      },
      {
        icon: "Users",
        title: "Assignable to the Right Owner",
        desc: "Route tickets to the right person, and see exactly who owns what.",
      },
      {
        icon: "Search",
        title: "Searchable Full History",
        desc: "Every past ticket stays searchable — nothing disappears once it's resolved.",
      },
    ],
  },
  dark1: {
    eyebrow: "TICKET SYSTEM",
    linkLabel: "Explore Suggestions & Complaints",
    blocks: [
      {
        heading: "Every Ticket, Fully Tagged",
        desc: "Type, category, and status are attached to every submission from the moment it's created.",
        checklist: ["Auto-numbered tickets", "Type & category tagged"],
      },
      {
        heading: "Three Views, One Source of Truth",
        desc: "Company Wide, Assigned to Me, and My Submissions all pull from the same underlying ticket system.",
        checklist: ["Company-wide visibility", "Personal assignment queue"],
      },
    ],
  },
  sticky: {
    eyebrow: "GO DEEPER",
    heading: "Every Angle of Suggestions & Complaints",
    desc: "From submission to resolution — TrackDots keeps every voice accounted for.",
    cards: [
      {
        tone: "purple",
        icon: "FileText",
        title: "Every Submission, Ticketed",
        desc: "A ticket number, type, and category are attached the moment something's submitted.",
        checks: ["Auto-numbered tickets", "Suggestion or Complaint type", "Category tagged per ticket"],
      },
      {
        tone: "dark",
        icon: "Eye",
        title: "The Right View for Everyone",
        desc: "The same system shows a company-wide list, a personal assignment queue, or just your own submissions.",
        checks: ["Company Wide view", "Assigned to Me view", "My Submissions view"],
      },
      {
        tone: "purple",
        icon: "Clock",
        title: "Status, Always Current",
        desc: "Every ticket moves through Open, In Progress, and Resolved — never stuck in limbo.",
        checks: ["Clear status per ticket", "Optional due date", "Full quarter-over-quarter view"],
      },
      {
        tone: "dark",
        icon: "Users",
        title: "Owned, Not Orphaned",
        desc: "Every ticket can be routed to the right owner, so nothing falls through the cracks.",
        checks: ["Assignable ownership", "Due dates for accountability", "Nothing left unowned"],
      },
      {
        tone: "purple",
        icon: "Search",
        title: "Searchable, Even After It's Closed",
        desc: "Resolved tickets stay in the record, fully searchable — useful history, not a dead end.",
        checks: ["Full-text ticket search", "Resolved tickets retained", "Useful for spotting patterns"],
      },
    ],
  },
  panel: {
    heading: "Visible to the Right People, Only",
    desc: "Company-wide tickets are visible to authorized roles; personal submissions stay private to the employee and whoever it's assigned to.",
    checklist: ["Role-scoped visibility", "Assignable to a specific owner", "Full history, always searchable"],
    linkLabel: "See Roles & Permissions",
  },
  stats: [
    {
      icon: "FileText",
      value: "Auto",
      label: "Ticket Numbering",
      desc: "Every submission gets a unique, sequential ticket number.",
    },
    {
      icon: "Eye",
      value: "3",
      label: "Views in One System",
      desc: "Company Wide, Assigned to Me, and My Submissions.",
    },
    {
      icon: "Search",
      value: "100%",
      label: "Searchable History",
      desc: "Every resolved ticket stays in the record, fully searchable.",
    },
  ],
  dark2: {
    eyebrow: "RESOLUTION TRACKING",
    linkLabel: "See Category Reporting",
    blocks: [
      {
        heading: "Due Dates Keep Things Moving",
        desc: "An optional due date on any ticket makes sure time-sensitive issues don't quietly stall.",
        checklist: ["Optional due date per ticket", "Visible in every view"],
      },
      {
        heading: "Patterns, Not Just Individual Tickets",
        desc: "Category tagging makes it easy to spot recurring issues across the whole organization.",
        checklist: ["Category-level reporting", "Useful for HR and leadership reviews"],
      },
    ],
  },
  comparison: {
    heading: "Get The Right Tool",
    subheading: "See how TrackDots' suggestions & complaints system compares to the old way.",
    columns: ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"],
    rows: [
      { capability: "Ticketed suggestions & complaints system", statuses: ["yes", "no", "no"] },
      { capability: "Category & type tagging", statuses: ["yes", "no", "no"] },
      { capability: "Assignable ownership per ticket", statuses: ["yes", "no", "no"] },
      { capability: "Status & due-date tracking", statuses: ["yes", "partial", "no"] },
      { capability: "Company-wide vs. personal views", statuses: ["yes", "no", "no"] },
      { capability: "Searchable historical record", statuses: ["yes", "partial", "no"] },
    ],
  },
  faq: {
    heading: "Suggestions & Complaints, Answered",
    items: [
      {
        q: "What's the difference between a suggestion and a complaint?",
        a: "Both use the same ticketing system — Type simply tags which one it is, so reporting can separate the two.",
      },
      {
        q: "Can employees submit anonymously?",
        a: "Every submission is tied to an employee account for accountability, and is only visible to authorized company roles and the submitter.",
      },
      {
        q: "How are tickets categorized?",
        a: "Each ticket is tagged with a category like Infrastructure or Workplace, making it easy to spot patterns over time.",
      },
      {
        q: "Can a ticket be assigned to someone?",
        a: 'Yes. Tickets can be routed to a specific owner, and the "Assigned to Me" view shows exactly what\'s on someone\'s plate.',
      },
      {
        q: "Can I set a due date on a ticket?",
        a: "Yes. An optional due date keeps time-sensitive issues from stalling.",
      },
      {
        q: "Can I see the history of all past tickets?",
        a: "Yes. Every ticket, resolved or not, stays searchable in the company-wide view.",
      },
    ],
  },
};
