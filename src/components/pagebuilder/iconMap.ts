import type { ComponentType, SVGProps } from "react";
import {
  Activity, BarChart, Bell, Calendar, CalendarCheck, CheckCircle, CheckSquare,
  Clock, Cloud, Code, CreditCard, Download, Eye, FileText, Filter, Folder, Inbox,
  KeyboardOff, LayoutGrid, Lock, Mail, MessageCircle, Monitor, PieChart, Scale,
  Server, Settings, ShieldCheck, SlidersChart, Sparkles, TrendUp, Users, Video,
} from "@/components/icons";

const ICON_MAP: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  Activity, BarChart, Bell, Calendar, CalendarCheck, CheckCircle, CheckSquare,
  Clock, Cloud, Code, CreditCard, Download, Eye, FileText, Filter, Folder, Inbox,
  KeyboardOff, LayoutGrid, Lock, Mail, MessageCircle, Monitor, PieChart, Scale,
  Server, Settings, ShieldCheck, SlidersChart, Sparkles, TrendUp, Users, Video,
};

export function resolveIcon(name: string | undefined): ComponentType<SVGProps<SVGSVGElement>> {
  return (name && ICON_MAP[name]) || Sparkles;
}
