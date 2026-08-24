import { createFileRoute } from "@tanstack/react-router";
import { Monitor, Moon, Sun } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { Switch } from "@/components/ui/switch";
import { useTheme, type Theme } from "@/lib/theme";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — CrackIT" },
      {
        name: "description",
        content:
          "Control appearance, notifications, practice reminders and preferences in CrackIT.",
      },
      { property: "og:title", content: "Settings — CrackIT" },
      { property: "og:description", content: "Manage your CrackIT appearance and preferences." },
    ],
  }),
  component: SettingsPage,
});

const themeOptions: { value: Theme; label: string; icon: typeof Sun; hint: string }[] = [
  { value: "light", label: "Light", icon: Sun, hint: "Bright, clean workspace" },
  { value: "dark", label: "Dark", icon: Moon, hint: "Easy on the eyes at night" },
  { value: "system", label: "System Default", icon: Monitor, hint: "Match your device setting" },
];

function SettingsPage() {
  const { theme, setTheme } = useTheme();

  return (
    <PageHeader title="Settings" subtitle="Manage your appearance, preferences and notifications.">
      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Appearance
        </h2>
        <div className="card-surface mt-3 p-5">
          <p className="text-sm font-medium">Theme</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Choose how CrackIT looks. Your choice is saved for next time.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {themeOptions.map((option) => {
              const active = theme === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setTheme(option.value)}
                  className={`rounded-xl border p-4 text-left transition-colors ${
                    active
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card-elevated hover:border-primary/40"
                  }`}
                >
                  <span
                    className={`grid size-9 place-items-center rounded-lg ${
                      active ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                    }`}
                  >
                    <option.icon className="size-4" />
                  </span>
                  <p className="mt-3 text-sm font-semibold">{option.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{option.hint}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Notifications
        </h2>
        <div className="card-surface mt-3 divide-y divide-border p-2">
          {[
            { title: "Practice reminders", description: "Daily nudge to keep your streak going." },
            {
              title: "Email updates",
              description: "New problem sets and platform announcements.",
            },
            {
              title: "AI interview feedback",
              description: "Detailed feedback after each interview.",
            },
          ].map((row) => (
            <div key={row.title} className="flex items-center justify-between gap-6 p-5">
              <div>
                <p className="text-sm font-medium">{row.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{row.description}</p>
              </div>
              <Switch />
            </div>
          ))}
        </div>
      </section>
    </PageHeader>
  );
}
