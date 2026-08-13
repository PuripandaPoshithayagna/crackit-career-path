import { createFileRoute } from "@tanstack/react-router";

import { EmptyState, PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/aptitude")({
  head: () => ({
    meta: [
      { title: "Aptitude Practice — CrackIT" },
      {
        name: "description",
        content: "Improve quantitative, logical reasoning and verbal ability for placement tests.",
      },
      { property: "og:title", content: "Aptitude Practice — CrackIT" },
      {
        property: "og:description",
        content: "Timed aptitude practice for quants, reasoning and verbal ability.",
      },
    ],
  }),
  component: () => (
    <PageHeader
      title="Aptitude"
      subtitle="Improve quantitative, logical reasoning and verbal ability."
    >
      <EmptyState
        icon="🧮"
        title="No aptitude tests taken yet"
        description="Take your first test to find your baseline across quants, reasoning and verbal sections."
        action="Take First Test →"
      />
    </PageHeader>
  ),
});
