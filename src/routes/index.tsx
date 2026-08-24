import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — CrackIT Placement Preparation" },
      {
        name: "description",
        content:
          "CrackIT dashboard: practice coding, aptitude, AI mock interviews and build a professional resume for placements.",
      },
      { property: "og:title", content: "Dashboard — CrackIT Placement Preparation" },
      {
        property: "og:description",
        content: "Your placement preparation journey starts here with CrackIT.",
      },
    ],
  }),
  component: Dashboard,
});

const prepCards = [
  {
    icon: "💻",
    title: "Coding",
    description: "Practice programming problems and improve your problem-solving skills.",
    cta: "Start Coding",
    to: "/coding",
  },
  {
    icon: "🧮",
    title: "Aptitude",
    description: "Improve quantitative, logical reasoning and verbal ability.",
    cta: "Start Aptitude",
    to: "/aptitude",
  },
  {
    icon: "🎤",
    title: "AI Mock Interview",
    description: "Practice interview questions with an AI interviewer.",
    cta: "Start Interview",
    to: "/ai-mock-interview",
  },
] as const;

const quickActions = [
  { icon: "💻", title: "Practice Coding", cta: "Start", to: "/coding" },
  { icon: "🧮", title: "Take Aptitude Test", cta: "Start", to: "/aptitude" },
  { icon: "📄", title: "Build Resume", cta: "Create", to: "/resume-builder" },
  { icon: "🎤", title: "Mock Interview", cta: "Start", to: "/ai-mock-interview" },
] as const;

const getStarted = [
  {
    title: "Solve your first coding problem",
    description: "Pick a beginner problem and write your first solution.",
    to: "/coding",
  },
  {
    title: "Take your first aptitude test",
    description: "A short set of questions to find your starting point.",
    to: "/aptitude",
  },
  {
    title: "Complete your first AI mock interview",
    description: "Answer a few questions and get instant AI feedback.",
    to: "/ai-mock-interview",
  },
] as const;

function StatusChip({ label = "Not Started" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-warning/30 bg-warning/10 px-2.5 py-1 text-xs font-medium text-warning">
      <span className="size-1.5 rounded-full bg-warning" />
      {label}
    </span>
  );
}

function Dashboard() {
  return (
    <div className="mx-auto max-w-[1200px] space-y-10">
      <div>
        <h1 className="text-2xl font-semibold md:text-3xl">Good Morning, Poshitha! 👋</h1>
        <p className="mt-1.5 text-sm text-muted-foreground">Ready to crack your placement?</p>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl gradient-hero p-8 shadow-[var(--shadow-glow)] md:p-12">
        <div className="pointer-events-none absolute -right-16 -top-24 size-72 rounded-full bg-primary-foreground/10 blur-2xl" />
        <div className="relative max-w-2xl">
          <h2 className="text-2xl font-semibold text-primary-foreground md:text-4xl">
            Welcome to CrackIT 🚀
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/85 md:text-base">
            Your placement preparation journey starts here. Practice coding, improve aptitude, build
            your resume and prepare for interviews.
          </p>
          <Link
            to="/coding"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-background px-5 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03]"
          >
            Start Practice <ArrowRight className="size-4" />
          </Link>
          <p className="mt-4 text-xs text-primary-foreground/70">
            Track your progress and improve your skills.
          </p>
        </div>
      </section>

      {/* Preparation */}
      <section>
        <h2 className="text-lg font-semibold md:text-xl">Your Preparation</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {prepCards.map((card) => (
            <div key={card.title} className="card-surface flex flex-col p-6">
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-muted text-xl">
                  {card.icon}
                </span>
                <StatusChip />
              </div>
              <h3 className="mt-5 text-base font-semibold">{card.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
              <Link
                to={card.to}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {card.cta} <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Resume */}
      <section className="card-surface gradient-subtle p-8 md:p-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-background/40 text-2xl">
            📄
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="text-xl font-semibold">Build Your Professional Resume</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Create a professional resume based on your skills, education, projects and target job
              role.
            </p>
            <p className="mt-4 max-w-2xl text-xs text-muted-foreground">
              You can optionally select a target company while creating your resume to customize it
              for that company's requirements.
            </p>
          </div>
          <Link
            to="/resume-builder"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            <FileText className="size-4" /> Create Resume <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* Quick actions */}
      <section>
        <h2 className="text-lg font-semibold md:text-xl">Quick Actions</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {quickActions.map((action) => (
            <div key={action.title} className="card-surface p-5">
              <span className="grid size-10 place-items-center rounded-xl bg-muted text-lg">
                {action.icon}
              </span>
              <h3 className="mt-4 text-sm font-semibold">{action.title}</h3>
              <Link
                to={action.to}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                {action.cta} <ArrowRight className="size-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Get started */}
      <section>
        <h2 className="text-lg font-semibold md:text-xl">Get Started</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {getStarted.map((item, i) => (
            <Link key={item.title} to={item.to} className="card-surface block p-6">
              <div className="flex items-center justify-between">
                <span className="grid size-8 place-items-center rounded-lg bg-primary/15 text-xs font-semibold text-primary">
                  {i + 1}
                </span>
                <StatusChip />
              </div>
              <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-full w-0 rounded-full bg-primary" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
