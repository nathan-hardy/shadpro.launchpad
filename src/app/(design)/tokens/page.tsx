"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { ColorBlock } from "./color-block";

export default function TokensPage() {
  return (
    <div
      className="max-w-5xl mx-auto p-[var(--space-xl)] md:p-[var(--space-2xl)]"
      style={{ fontFamily: "var(--font-family)" }}
    >
      {/* Top Navigation */}
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
          Design Tokens
        </h1>
      </div>
      <p className="mb-[var(--space-xl)]" style={{ color: "var(--muted)", fontSize: "var(--font-size-lg)", maxWidth: 700 }}>
        A comprehensive overview of all color tokens used in the design system
      </p>

      {/* Section Helper */}
      {[
        {
          title: "Primary Theme",
          desc: "The core colors that define the primary theme and overall look of the interface.",
          grid: "md:grid-cols-2",
          blocks: [
            ["Background", "bg-background"],
            ["Foreground", "bg-foreground"],
            ["Primary", "bg-primary"],
            ["Primary Foreground", "bg-primary-foreground"],
          ],
        },
        {
          title: "Secondary & Accent",
          desc: "Colors used for secondary elements and accents throughout the interface.",
          grid: "md:grid-cols-2",
          blocks: [
            ["Secondary", "bg-secondary"],
            ["Secondary Foreground", "bg-secondary-foreground"],
            ["Accent", "bg-accent"],
            ["Accent Foreground", "bg-accent-foreground"],
          ],
        },
        {
          title: "UI Component",
          desc: "Colors used for specific UI components like cards, popovers, and muted elements.",
          grid: "md:grid-cols-2",
          blocks: [
            ["Card", "bg-card"],
            ["Card Foreground", "bg-card-foreground"],
            ["Popover", "bg-popover"],
            ["Popover Foreground", "bg-popover-foreground"],
            ["Muted", "bg-muted"],
            ["Muted Foreground", "bg-muted-foreground"],
          ],
        },
        {
          title: "Utility & Form",
          desc: "Colors used for borders, inputs, and other utility elements.",
          grid: "md:grid-cols-3",
          blocks: [
            ["Border", "bg-border"],
            ["Input", "bg-input"],
            ["Ring", "bg-ring"],
          ],
        },
        {
          title: "Status & Feedback",
          desc: "Colors used to indicate different states and provide feedback to users.",
          grid: "md:grid-cols-2",
          blocks: [
            ["Destructive", "bg-destructive"],
            ["Destructive Foreground", "bg-destructive-foreground"],
          ],
        },
        {
          title: "Chart & Visualization",
          desc: "Colors used for data visualization and charts.",
          grid: "md:grid-cols-3 lg:grid-cols-5",
          blocks: [
            ["Chart 1", "bg-chart-1"],
            ["Chart 2", "bg-chart-2"],
            ["Chart 3", "bg-chart-3"],
            ["Chart 4", "bg-chart-4"],
            ["Chart 5", "bg-chart-5"],
          ],
        },
        {
          title: "Sidebar & Navigation",
          desc: "Colors specific to the sidebar and navigation components.",
          grid: "md:grid-cols-2",
          blocks: [
            ["Sidebar", "bg-sidebar"],
            ["Sidebar Foreground", "bg-sidebar-foreground"],
            ["Sidebar Primary", "bg-sidebar-primary"],
            ["Sidebar Primary Foreground", "bg-sidebar-primary-foreground"],
            ["Sidebar Accent", "bg-sidebar-accent"],
            ["Sidebar Accent Foreground", "bg-sidebar-accent-foreground"],
            ["Sidebar Border", "bg-sidebar-border"],
            ["Sidebar Ring", "bg-sidebar-ring"],
          ],
        },
      ].map((section, i) => (
        <section
          key={section.title}
          className={`mb-[var(--space-xl)] pb-[var(--space-lg)] border-b border-[var(--border)] last:border-b-0 last:pb-0`}
        >
          <h2 className="mb-[var(--space-xs)] font-semibold" style={{ fontSize: "var(--font-size-xl)", color: "var(--primary)" }}>{section.title}</h2>
          <p className="mb-[var(--space-sm)]" style={{ color: "var(--muted)", fontSize: "var(--font-size-md)" }}>{section.desc}</p>
          <div className={`grid grid-cols-1 gap-[var(--space-xs)] ${section.grid}`}>
            {section.blocks.map(([name, cls]) => (
              <ColorBlock key={name} name={name} className={cls} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
