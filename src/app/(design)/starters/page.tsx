import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type React from "react";

import { ComponentCard } from "@/components/design/component-card";
import { Button } from "@/components/ui/button";

const starters = [
  {
    title: "Testing Store",
    name: "procore-store",
    url: "/starters/test-story",
  }
];

export default function StartPage() {
  return (
    <div
      className="max-w-5xl mx-auto p-[var(--space-xl)] md:p-[var(--space-2xl)]"
      style={{ fontFamily: "var(--font-family)" }}
    >
      {/* Top Section */}
      <div className="mb-[var(--space-xl)] flex items-center gap-[var(--space-sm)]">
        <Button variant="ghost" size="sm" asChild className="mb-0">
          <Link href="/">
            <ArrowLeft className="mr-2 size-4" />
            Back to Home
          </Link>
        </Button>
        <span className="h-5 w-px bg-[var(--border)] mx-[var(--space-xs)]" />
        <h1
          className="font-bold tracking-tight"
          style={{ fontSize: "var(--font-size-3xl)", color: "var(--primary)", lineHeight: "var(--line-height-lg)", letterSpacing: "-0.02em" }}
        >
          Starters
        </h1>
      </div>

      {/* Starters List */}
      <div className="grid gap-[var(--space-xl)] md:grid-cols-2">
        {starters.map((starter) => (
          <ComponentCard
            key={starter.name}
            name={starter.name}
            baseUrl={process.env.VERCEL_BRANCH_URL ?? ""}
            title={starter.title}
            promptTitle={`${starter.title} Starter Kit`}
            previewUrl={starter.url}
          />
        ))}
      </div>
    </div>
  );
}
