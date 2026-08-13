import { createFileRoute } from "@tanstack/react-router";

import { EmptyState, PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/ai-mock-interview")({
  head: () => ({
    meta: [
      { title: "AI Mock Interview — CrackIT" },
      {
        name: "description",
        content: "Practice technical and HR interview questions with an AI interviewer on CrackIT.",
      },
      { property: "og:title", content: "AI Mock Interview — CrackIT" },
      {
        property: "og:description",
        content: "Answer interview questions and get instant AI feedback.",
      },
    ],
  }),
  component: () => (
    <PageHeader
      title="AI Mock Interview"
      subtitle="Practice interview questions with an AI interviewer."
    >
      <EmptyState
        icon="🎤"
        title="No interviews completed yet"
        description="Run your first mock interview and get instant feedback on clarity, structure and confidence."
        action="Start Now →"
      />
    </PageHeader>
  ),
});
