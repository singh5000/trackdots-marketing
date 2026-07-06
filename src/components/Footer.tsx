import { DotsLogo, LinkedinSocial, Mail, XSocial } from "./icons";

type LinkItem = { label: string; href: string };

const FEATURES_MONITORING: LinkItem[] = [
  { label: "Time Tracking", href: "/features/time-tracking" },
  { label: "Screenshot Monitoring", href: "/features/screenshots" },
  { label: "Attendance Tracking", href: "/features/attendance" },
  { label: "Focus Sessions", href: "/features/focus-sessions" },
  { label: "Idle Time Tracking", href: "/features/idle-time" },
  { label: "App Usage Reports", href: "/features/app-usage" },
  { label: "Meeting Mode", href: "/features/meeting-mode" },
  { label: "Anomaly Detection", href: "/features/anomaly-detection" },
];

const FEATURES_WORKFORCE: LinkItem[] = [
  { label: "Burnout Detection", href: "/features/burnout-detection" },
  { label: "Productivity Intelligence", href: "/features/productivity-intelligence" },
  { label: "Project Tracking", href: "/features/project-tracking" },
  { label: "Payroll Management", href: "/features/payroll" },
  { label: "Leave Management", href: "/features/leaves" },
  { label: "Appraisals & Promotions", href: "/features/appraisals" },
  { label: "Suggestions & Complaints", href: "/features/suggestions" },
  { label: "ERP Integration", href: "/features/erp-integration" },
];

const SOLUTIONS: LinkItem[] = [
  { label: "IT & Software", href: "/solutions/it-software" },
  { label: "Digital Agencies", href: "/solutions/digital-agencies" },
  { label: "Consulting Firms", href: "/solutions/consulting" },
  { label: "BPO & Support Teams", href: "/solutions/bpo" },
  { label: "Accounting & Finance", href: "/solutions/accounting" },
  { label: "Legal Services", href: "/solutions/legal" },
];

const COMPANY: LinkItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Platform Overview", href: "/platform-overview" },
  { label: "Changelog", href: "/changelog" },
];

const RESOURCES: LinkItem[] = [
  { label: "Help Center", href: "/help" },
  { label: "Documentation", href: "/docs" },
  { label: "Download Agent", href: "/download" },
  { label: "API Reference", href: "/docs/api" },
  { label: "System Status", href: "/status" },
];

const LEGAL: LinkItem[] = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Security", href: "/legal/security" },
  { label: "GDPR", href: "/legal/gdpr" },
];

function FooterColumn({ title, links }: { title: string; links: LinkItem[] }) {
  return (
    <div>
      <div className="text-[12px] font-bold uppercase tracking-wider text-gray-500">{title}</div>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-[14px] text-gray-400 transition-colors hover:text-white">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-gray-950">
      <div className="w-full px-5 py-16 md:px-8 lg:px-[80px]">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2.5">
              <DotsLogo />
              <span className="text-[20px] font-bold tracking-tight text-white">TrackDots</span>
            </a>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-gray-400">
              The all-in-one employee monitoring, productivity, and payroll
              platform for modern teams.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="TrackDots on X"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
              >
                <XSocial className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="TrackDots on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
              >
                <LinkedinSocial className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@trackdots.net"
                aria-label="Email TrackDots"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <FooterColumn title="Monitoring" links={FEATURES_MONITORING} />
          <FooterColumn title="Workforce & Payroll" links={FEATURES_WORKFORCE} />
          <FooterColumn title="Solutions" links={SOLUTIONS} />
          <FooterColumn title="Company" links={COMPANY} />
          <FooterColumn title="Resources" links={RESOURCES} />
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center gap-4 border-t border-gray-800 pt-8 sm:flex-row sm:justify-between">
          <p className="text-[13px] text-gray-500">
            © {new Date().getFullYear()} TrackDots. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {LEGAL.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[13px] text-gray-500 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
