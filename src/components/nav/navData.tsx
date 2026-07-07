import type { ComponentType, SVGProps } from "react";
import {
  Activity,
  Bell,
  BarChart,
  Calendar,
  CalendarCheck,
  Clock,
  Code,
  FileText,
  Folder,
  ImageIcon,
  MessageCircle,
  Monitor,
  PieChart,
  Scale,
  Server,
  TrendUp,
  Users,
} from "../icons";

export type NavLink = { label: string; desc: string; href: string; icon: ComponentType<SVGProps<SVGSVGElement>> };
export type Tone = "blue" | "violet" | "amber";

export const FEATURE_GROUPS: { title: string; tone: Tone; links: NavLink[] }[] = [
  {
    title: "Time & Activity",
    tone: "blue",
    links: [
      { label: "Time Tracking", desc: "Automatic, confidence-scored", href: "/features/time-tracking", icon: Clock },
      { label: "Focus Sessions", desc: "Deep work, surfaced automatically", href: "/features/focus-sessions", icon: Activity },
      { label: "Idle Time Tracking", desc: "Fair and never retroactive", href: "/features/idle-time", icon: PieChart },
      { label: "App Usage Reports", desc: "See where the day goes", href: "/features/app-usage", icon: Monitor },
      { label: "Meeting Mode", desc: "Meetings that count as work", href: "/features/meeting-mode", icon: Calendar },
    ],
  },
  {
    title: "Monitoring & Insights",
    tone: "violet",
    links: [
      { label: "Screenshot Monitoring", desc: "Optional, never secret", href: "/features/screenshots", icon: ImageIcon },
      { label: "Attendance Tracking", desc: "Built from real activity", href: "/features/attendance", icon: CalendarCheck },
      { label: "Anomaly Detection", desc: "Unusual patterns, flagged early", href: "/features/anomaly-detection", icon: Bell },
      { label: "Burnout Detection", desc: "A rolling risk score", href: "/features/burnout-detection", icon: TrendUp },
      { label: "Productivity Intelligence", desc: "Scores, trends, comparison", href: "/features/productivity-intelligence", icon: BarChart },
    ],
  },
  {
    title: "Workforce & Payroll",
    tone: "amber",
    links: [
      { label: "Project Tracking", desc: "Every hour tied to a project", href: "/features/project-tracking", icon: Folder },
      { label: "Payroll Management", desc: "Attendance-based payroll", href: "/features/payroll", icon: FileText },
      { label: "Leave Management", desc: "Synced straight to payroll", href: "/features/leaves", icon: Calendar },
      { label: "Appraisals & Promotions", desc: "One auditable salary record", href: "/features/appraisals", icon: TrendUp },
      { label: "Suggestions & Complaints", desc: "A ticketed resolution system", href: "/features/suggestions", icon: MessageCircle },
      { label: "ERP Integration", desc: "A read-only API", href: "/features/erp-integration", icon: Server },
    ],
  },
];

export const SOLUTION_LINKS: NavLink[] = [
  { label: "IT & Software Teams", desc: "Deep work, protected — not micromanaged", href: "/solutions/it-software", icon: Code },
  { label: "Digital Agencies", desc: "Every client hour, accounted for", href: "/solutions/digital-agencies", icon: Monitor },
  { label: "Consulting Firms", desc: "Utilization you can actually prove", href: "/solutions/consulting", icon: Users },
  { label: "BPO & Support Teams", desc: "Every agent, every shift, tracked fairly", href: "/solutions/bpo", icon: Server },
  { label: "Accounting & Finance", desc: "Billable hours that survive an audit", href: "/solutions/accounting", icon: FileText },
  { label: "Legal Services", desc: "Every billable minute, on the record", href: "/solutions/legal", icon: Scale },
];
