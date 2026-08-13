import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/PageHeader";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — CrackIT" },
      {
        name: "description",
        content: "Control notifications, practice reminders and preferences in CrackIT.",
      },
      { property: "og:title", content: "Settings — CrackIT" },
      { property: "og:description", content: "Manage your CrackIT preferences." },
    ],
  }),
  component: () => (
    <PageHeader title="Settings" subtitle="Manage your preferences and notifications.">
      <div className="card-surface divide-y divide-border p-2">
        {[
          { title: "Practice reminders", description: "Daily nudge to keep your streak going." },
          { title: "Email updates", description: "New problem sets and mock exam announcements." },
          { title: "AI interview feedback", description: "Detailed feedback after each interview." },
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
    </PageHeader>
  ),
});
