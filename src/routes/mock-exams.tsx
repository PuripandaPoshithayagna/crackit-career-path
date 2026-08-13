import { createFileRoute } from "@tanstack/react-router";

import { EmptyState, PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/mock-exams")({
  head: () => ({
    meta: [
      { title: "Mock Exams — CrackIT" },
      {
        name: "description",
        content: "Attempt full-length placement mock exams that mirror real recruitment rounds.",
      },
      { property: "og:title", content: "Mock Exams — CrackIT" },
      {
        property: "og:description",
        content: "Full-length timed mock exams for placement readiness.",
      },
    ],
  }),
  component: () => (
    <PageHeader
      title="Mock Exams"
      subtitle="Attempt full-length timed exams that mirror real placement rounds."
    >
      <EmptyState
        icon="📝"
        title="No exams attempted yet"
        description="Your first full-length mock exam combines coding and aptitude sections in one timed sitting."
        action="Start Now →"
      />
    </PageHeader>
  ),
});
