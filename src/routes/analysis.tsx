import { createFileRoute } from "@tanstack/react-router";

import { EmptyState, PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/analysis")({
  head: () => ({
    meta: [
      { title: "Analysis — CrackIT" },
      {
        name: "description",
        content: "Track your strengths, weak topics and placement readiness over time on CrackIT.",
      },
      { property: "og:title", content: "Analysis — CrackIT" },
      {
        property: "og:description",
        content: "Insights on your coding, aptitude and interview performance.",
      },
    ],
  }),
  component: () => (
    <PageHeader
      title="Analysis"
      subtitle="Insights appear here once you start practicing."
    >
      <EmptyState
        icon="📊"
        title="Nothing to analyse yet"
        description="Complete a practice session, test or interview and your strengths and weak topics will show up here."
        action="Begin Practice →"
      />
    </PageHeader>
  ),
});
