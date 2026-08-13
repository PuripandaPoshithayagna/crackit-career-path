import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  Brain,
  Calculator,
  Code2,
  FileText,
  LayoutDashboard,
  LogOut,
  Mic,
  Rocket,
} from "lucide-react";
import { toast } from "sonner";

const items = [
  { title: "Dashboard", to: "/", icon: LayoutDashboard },
  { title: "Coding", to: "/coding", icon: Code2 },
  { title: "Aptitude", to: "/aptitude", icon: Calculator },
  { title: "AI Mock Interview", to: "/ai-mock-interview", icon: Mic },
  { title: "Resume Builder", to: "/resume-builder", icon: FileText },
  { title: "Mock Exams", to: "/mock-exams", icon: Brain },
  { title: "Analysis", to: "/analysis", icon: BarChart3 },
] as const;

export function AppSidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <aside className="flex h-full w-[264px] flex-col border-r border-sidebar-border bg-sidebar">
      <div className="flex items-center gap-2.5 px-6 py-6">
        <span className="grid size-9 place-items-center rounded-xl gradient-hero shadow-[var(--shadow-glow)]">
          <Rocket className="size-4.5 text-primary-foreground" />
        </span>
        <span className="font-display text-lg font-semibold tracking-tight">
          CRACK<span className="text-primary">IT</span>
        </span>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={onNavigate}
            activeOptions={{ exact: item.to === "/" }}
            className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[status=active]:bg-primary data-[status=active]:text-primary-foreground data-[status=active]:shadow-[var(--shadow-glow)]"
          >
            <item.icon className="size-4.5 shrink-0" />
            <span className="truncate">{item.title}</span>
          </Link>
        ))}
      </nav>

      <div className="border-t border-sidebar-border p-3">
        <button
          onClick={() => toast("Logout is handled by the authentication module.")}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-destructive/15 hover:text-destructive-foreground"
        >
          <LogOut className="size-4.5" />
          Logout
        </button>
      </div>
    </aside>
  );
}
