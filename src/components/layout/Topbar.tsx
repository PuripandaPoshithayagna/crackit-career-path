import { Link } from "@tanstack/react-router";
import { Bell, ChevronDown, Menu, Search, Settings, User } from "lucide-react";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

export function Topbar({ onMenuClick }: { onMenuClick?: () => void }) {
  const [query, setQuery] = useState("");

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/85 px-4 backdrop-blur-xl md:px-8">
      <button
        onClick={onMenuClick}
        aria-label="Open navigation"
        className="grid size-9 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:text-foreground lg:hidden"
      >
        <Menu className="size-4.5" />
      </button>

      <form
        className="relative w-full max-w-lg"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search problems, tests, topics..."
          className="h-10 rounded-xl border-border bg-card pl-10 text-sm placeholder:text-muted-foreground focus-visible:ring-primary/50"
        />
      </form>

      <div className="ml-auto flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="relative grid size-10 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:text-foreground">
            <Bell className="size-4.5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-72">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="px-2 py-6 text-center text-sm text-muted-foreground">
              No notifications yet.
              <br />
              Start practicing to get updates.
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 rounded-xl border border-border bg-card px-2 py-1.5 transition-colors hover:border-primary/50">
            <span className="grid size-7 place-items-center rounded-lg gradient-hero text-xs font-semibold text-primary-foreground">
              P
            </span>
            <span className="hidden text-sm font-medium sm:block">Poshitha</span>
            <ChevronDown className="size-4 text-muted-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuLabel className="font-normal">
              <p className="text-sm font-medium">Poshitha</p>
              <p className="text-xs text-muted-foreground">Placement aspirant</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/profile">
                <User className="size-4" /> Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/settings">
                <Settings className="size-4" /> Settings
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
