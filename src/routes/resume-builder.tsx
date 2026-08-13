import { createFileRoute } from "@tanstack/react-router";

import { EmptyState, PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/resume-builder")({
  head: () => ({
    meta: [
      { title: "Resume Builder — CrackIT" },
      {
        name: "description",
        content:
          "Build a professional placement resume from your skills, education, projects and target role.",
      },
      { property: "og:title", content: "Resume Builder — CrackIT" },
      {
        property: "og:description",
        content: "Create a resume tailored to your target job role and company.",
      },
    ],
  }),
  component: () => (
    <PageHeader
      title="Resume Builder"
      subtitle="Create a professional resume based on your skills, education, projects and target job role."
    >
      <div className="space-y-5">
        <EmptyState
          icon="📄"
          title="No resume created yet"
          description="Start a new resume and optionally choose a target company so the content is customized for that company's requirements."
          action="Create Resume →"
        />
        <p className="text-center text-xs text-muted-foreground">
          Target company selection is optional and is used only to customize your resume.
        </p>
      </div>
    </PageHeader>
  ),
});
