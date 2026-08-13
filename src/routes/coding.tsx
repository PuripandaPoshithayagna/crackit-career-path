import { createFileRoute } from "@tanstack/react-router";

import { EmptyState, PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/coding")({
  head: () => ({
    meta: [
      { title: "Coding Practice — CrackIT" },
      {
        name: "description",
        content: "Practice programming problems and sharpen your problem-solving skills on CrackIT.",
      },
      { property: "og:title", content: "Coding Practice — CrackIT" },
      {
        property: "og:description",
        content: "Solve curated coding problems for placement interviews.",
      },
    ],
  }),
  component: () => (
    <PageHeader
      title="Coding"
      subtitle="Practice programming problems and improve your problem-solving skills."
    >
      <EmptyState
        icon="💻"
        title="No problems attempted yet"
        description="Start with a beginner-friendly problem set covering arrays, strings and basic recursion."
        action="Begin Practice →"
      />
    </PageHeader>
  ),
});
