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
      className="max-w-5xl mx-auto p-[var(--space-lg)] md:p-[var(--space-xl)]"
      style={{ fontFamily: "var(--font-family)" }}
    >
      <div className="mb-[var(--space-xl)] flex items-center justify-between">
        <div>
          <Button variant="ghost" size="sm" asChild className="mb-[var(--space-xs)]">
            <Link href="/">
              <ArrowLeft className="mr-2 size-4" />
              Back to Home
            </Link>
          </Button>
          <h1
            className="font-bold tracking-tight"
            style={{ fontSize: "var(--font-size-3xl)", color: "var(--color-primary)", lineHeight: "var(--line-height-lg)" }}
          >
            Starters
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-[var(--space-xl)]">
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
