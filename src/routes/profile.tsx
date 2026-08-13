import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — CrackIT" },
      {
        name: "description",
        content: "Manage your CrackIT profile, education details and target job role.",
      },
      { property: "og:title", content: "Profile — CrackIT" },
      { property: "og:description", content: "Your CrackIT student profile." },
    ],
  }),
  component: () => (
    <PageHeader title="Profile" subtitle="Your details are used to personalise practice and resumes.">
      <div className="card-surface p-8">
        <div className="flex flex-wrap items-center gap-5">
          <span className="grid size-16 place-items-center rounded-2xl gradient-hero text-xl font-semibold text-primary-foreground">
            P
          </span>
          <div>
            <h2 className="text-lg font-semibold">Poshitha</h2>
            <p className="text-sm text-muted-foreground">Placement aspirant</p>
          </div>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {[
            { label: "Target role", value: "Not set" },
            { label: "College", value: "Not set" },
            { label: "Graduation year", value: "Not set" },
            { label: "Skills", value: "Not added" },
          ].map((f) => (
            <div key={f.label} className="rounded-xl border border-border bg-muted/40 p-4">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">{f.label}</p>
              <p className="mt-1.5 text-sm font-medium">{f.value}</p>
            </div>
          ))}
        </div>
      </div>
    </PageHeader>
  ),
});
