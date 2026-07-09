import type { FeaturePageContent } from "@/lib/featurepage";

export const SLUG = "erp-integration";

export const FALLBACK: FeaturePageContent = {
  hero: {
    eyebrow: "FEATURE — ERP INTEGRATION",
    heading: "Your Time Data,",
    highlight: "Anywhere You Need It.",
    description:
      "A read-only REST API for pulling time and productivity data into external ERP, payroll, and HR systems — secured with organization-scoped API keys.",
  },
  problemSolution: {
    eyebrow: "THE SILOED-DATA GAP",
    heading: "Stop Re-Typing Hours Into Another System",
    subheading:
      "Time data that only lives in one dashboard means someone, somewhere, is re-entering it by hand. The API removes that step.",
    problems: [
      "Time and productivity data trapped inside one dashboard",
      "Manually re-entering hours into payroll or ERP systems",
      "No safe way to let an external system pull tracked-time data",
    ],
    benefits: [
      "A dedicated, read-only API for time and productivity data",
      "Secure, organization-scoped API key authentication",
      "Built specifically for ERP, payroll, and HR system integration",
    ],
  },
  grid: {
    eyebrow: "HOW IT WORKS",
    heading: "One API, Built for Integration",
    subheading: "Read-only, organization-scoped, and designed specifically for ERP, payroll, and HR systems.",
    items: [
      {
        icon: "Server",
        title: "Read-Only REST API",
        desc: "A dedicated, read-only endpoint for pulling time and productivity data into external systems.",
      },
      {
        icon: "BarChart",
        title: "Per-Employee, Per-Day Detail",
        desc: "Total, productive, idle, and low-quality hours, broken down by employee and by day.",
      },
      {
        icon: "Lock",
        title: "Secure API Key Authentication",
        desc: "Every request is authenticated with an organization-scoped API key — no shared credentials.",
      },
      {
        icon: "Cloud",
        title: "Built for ERP, Payroll & HR Systems",
        desc: "Designed to feed time data into the external systems your organization already runs.",
      },
      {
        icon: "Clock",
        title: "Flexible Date Ranges",
        desc: "Query a single day or a custom range of up to 90 days.",
      },
      {
        icon: "ShieldCheck",
        title: "Org-Scoped & Access-Controlled",
        desc: "Every API key is scoped to a single organization — no cross-tenant access, ever.",
      },
    ],
  },
  dark1: {
    eyebrow: "THE ENDPOINT",
    linkLabel: "Read the API Documentation",
    blocks: [
      {
        heading: "A Single, Purpose-Built Endpoint",
        desc: "One GET request returns per-employee, per-day time data — no proprietary SDK, just JSON over HTTPS.",
        checklist: ["GET /api/erp/hours/", "Plain JSON response"],
      },
      {
        heading: "Authenticated by Design",
        desc: "Every request must include a valid organization-scoped API key in the request header.",
        checklist: ["X-ERP-API-KEY header required", "Keys issued per organization"],
      },
    ],
  },
  sticky: {
    eyebrow: "GO DEEPER",
    heading: "Every Angle of the ERP API",
    desc: "From authentication to response detail — TrackDots' API is built to be a good citizen in your existing stack.",
    cards: [
      {
        tone: "purple",
        icon: "Server",
        title: "One Endpoint, Purpose-Built",
        desc: "A single, dedicated REST endpoint returns exactly the time and productivity data external systems need.",
        checks: ["GET /api/erp/hours/", "JSON response, no proprietary format", "No SDK required"],
      },
      {
        tone: "dark",
        icon: "Lock",
        title: "Authenticated, Every Request",
        desc: "Every call requires a valid, organization-scoped API key — there's no anonymous access.",
        checks: ["X-ERP-API-KEY header required", "Key tied to one organization", "Revocable at any time"],
      },
      {
        tone: "purple",
        icon: "BarChart",
        title: "Real Detail, Not a Summary",
        desc: "Total, productive, idle, and low-quality hours, plus a productivity percentage — per employee, per day.",
        checks: ["Per-employee, per-day granularity", "Pause counts & durations included", "First/last-seen timestamps included"],
      },
      {
        tone: "dark",
        icon: "Clock",
        title: "Query What You Need",
        desc: "Pull a single day or a custom window of up to 90 days in one request.",
        checks: ["Single-day or ranged queries", "Up to 90 days per request", "Up to 50 employees per request"],
      },
      {
        tone: "purple",
        icon: "ShieldCheck",
        title: "Never Crosses Organizations",
        desc: "Every API key is strictly scoped — there is no way for one organization's key to see another's data.",
        checks: ["Strict organization scoping", "No cross-tenant access, ever", "Read-only, nothing is ever written back"],
      },
    ],
  },
  panel: {
    heading: "Read-Only, On Purpose",
    desc: "The API only ever sends data out — it never writes back to TrackDots, and it never touches another organization's data.",
    checklist: ["Strictly one-way, read-only", "Organization-scoped API keys", "No shared or global credentials"],
    linkLabel: "See Security Details",
  },
  stats: [
    {
      icon: "Server",
      value: "1",
      label: "Dedicated Endpoint",
      desc: "GET /api/erp/hours/ — one endpoint, purpose-built for time data.",
    },
    {
      icon: "Clock",
      value: "90-Day",
      label: "Max Query Range",
      desc: "Query a single day or a custom range of up to 90 days.",
    },
    {
      icon: "Users",
      value: "50",
      label: "Employees Per Request",
      desc: "Query up to 50 employee email addresses in a single call.",
    },
  ],
  dark2: {
    eyebrow: "BUILT FOR YOUR STACK",
    linkLabel: "Request API Access",
    blocks: [
      {
        heading: "Payroll, HR, or ERP — Any of Them",
        desc: "The API doesn't assume which system you're feeding — the response is generic enough to fit any of them.",
        checklist: ["Works with payroll platforms", "Works with ERP and HR systems"],
      },
      {
        heading: "Provisioned When You Need It",
        desc: "Reach out to TrackDots support and an organization-scoped key is issued for your integration.",
        checklist: ["Issued per organization", "Revocable at any time"],
      },
    ],
  },
  comparison: {
    heading: "Get The Right Tool",
    subheading: "See how TrackDots' ERP API compares to the old way.",
    columns: ["TrackDots", "Basic Time Trackers", "Spreadsheets & Manual Logs"],
    rows: [
      { capability: "Dedicated read-only time-data API", statuses: ["yes", "no", "no"] },
      { capability: "Per-employee, per-day hour breakdown", statuses: ["yes", "no", "no"] },
      { capability: "Organization-scoped API key auth", statuses: ["yes", "no", "no"] },
      { capability: "Custom date-range queries (up to 90 days)", statuses: ["yes", "no", "no"] },
      { capability: "Built for ERP / payroll / HR integration", statuses: ["yes", "no", "no"] },
      { capability: "No manual CSV re-entry required", statuses: ["yes", "partial", "no"] },
    ],
  },
  faq: {
    heading: "ERP Integration, Answered",
    items: [
      {
        q: "What does the ERP API actually return?",
        a: "For each employee and day, it returns total, productive, idle, and low-quality hours, along with productivity percentage, pause counts, and first/last-seen times.",
      },
      {
        q: "Is this a two-way sync with my ERP system?",
        a: "No. It's a one-way, read-only API — your ERP, payroll, or HR system pulls data from TrackDots; nothing is written back.",
      },
      {
        q: "How is the API authenticated?",
        a: "Every request requires an organization-scoped API key sent in the X-ERP-API-KEY header.",
      },
      {
        q: "What date ranges can I query?",
        a: "A single day, or a custom range of up to 90 days, using date_from and date_to parameters.",
      },
      {
        q: "Can I query multiple employees at once?",
        a: "Yes. Up to 50 employee email addresses can be included in a single request.",
      },
      {
        q: "Who can generate an API key?",
        a: "API keys are issued and managed by TrackDots on a per-organization basis — reach out to support to get one provisioned.",
      },
    ],
  },
};
