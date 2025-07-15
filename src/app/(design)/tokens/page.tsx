"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { ColorBlock } from "./color-block";

export default function TokensPage() {
  return (
    <div
      className="max-w-5xl mx-auto p-[var(--space-lg)] md:p-[var(--space-xl)]"
      style={{ fontFamily: "var(--font-family)" }}
    >
      <div className="mb-[var(--space-xl)]">
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
          Design Tokens
        </h1>
        <p className="mt-1" style={{ color: "var(--color-muted)", fontSize: "var(--font-size-lg)" }}>
          A comprehensive overview of all color tokens used in the design system
        </p>
      </div>

      {/* Primary Theme */}
      <section className="mb-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xs)] font-semibold" style={{ fontSize: "var(--font-size-xl)", color: "var(--color-primary)" }}>Primary Theme</h2>
        <p className="mb-[var(--space-sm)]" style={{ color: "var(--color-muted)", fontSize: "var(--font-size-md)" }}>
          The core colors that define the primary theme and overall look of the interface.
        </p>
        <div className="grid grid-cols-1 gap-[var(--space-xs)] md:grid-cols-2">
          <ColorBlock name="Background" className="bg-background" />
          <ColorBlock name="Foreground" className="bg-foreground" />
          <ColorBlock name="Primary" className="bg-primary" />
          <ColorBlock name="Primary Foreground" className="bg-primary-foreground" />
        </div>
      </section>

      {/* Secondary & Accent */}
      <section className="mb-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xs)] font-semibold" style={{ fontSize: "var(--font-size-xl)", color: "var(--color-primary)" }}>Secondary & Accent</h2>
        <p className="mb-[var(--space-sm)]" style={{ color: "var(--color-muted)", fontSize: "var(--font-size-md)" }}>
          Colors used for secondary elements and accents throughout the interface.
        </p>
        <div className="grid grid-cols-1 gap-[var(--space-xs)] md:grid-cols-2">
          <ColorBlock name="Secondary" className="bg-secondary" />
          <ColorBlock name="Secondary Foreground" className="bg-secondary-foreground" />
          <ColorBlock name="Accent" className="bg-accent" />
          <ColorBlock name="Accent Foreground" className="bg-accent-foreground" />
        </div>
      </section>

      {/* UI Component */}
      <section className="mb-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xs)] font-semibold" style={{ fontSize: "var(--font-size-xl)", color: "var(--color-primary)" }}>UI Component</h2>
        <p className="mb-[var(--space-sm)]" style={{ color: "var(--color-muted)", fontSize: "var(--font-size-md)" }}>
          Colors used for specific UI components like cards, popovers, and muted elements.
        </p>
        <div className="grid grid-cols-1 gap-[var(--space-xs)] md:grid-cols-2">
          <ColorBlock name="Card" className="bg-card" />
          <ColorBlock name="Card Foreground" className="bg-card-foreground" />
          <ColorBlock name="Popover" className="bg-popover" />
          <ColorBlock name="Popover Foreground" className="bg-popover-foreground" />
          <ColorBlock name="Muted" className="bg-muted" />
          <ColorBlock name="Muted Foreground" className="bg-muted-foreground" />
        </div>
      </section>

      {/* Utility & Form */}
      <section className="mb-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xs)] font-semibold" style={{ fontSize: "var(--font-size-xl)", color: "var(--color-primary)" }}>Utility & Form</h2>
        <p className="mb-[var(--space-sm)]" style={{ color: "var(--color-muted)", fontSize: "var(--font-size-md)" }}>
          Colors used for borders, inputs, and other utility elements.
        </p>
        <div className="grid grid-cols-1 gap-[var(--space-xs)] md:grid-cols-3">
          <ColorBlock name="Border" className="bg-border" />
          <ColorBlock name="Input" className="bg-input" />
          <ColorBlock name="Ring" className="bg-ring" />
        </div>
      </section>

      {/* Status & Feedback */}
      <section className="mb-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xs)] font-semibold" style={{ fontSize: "var(--font-size-xl)", color: "var(--color-primary)" }}>Status & Feedback</h2>
        <p className="mb-[var(--space-sm)]" style={{ color: "var(--color-muted)", fontSize: "var(--font-size-md)" }}>
          Colors used to indicate different states and provide feedback to users.
        </p>
        <div className="grid grid-cols-1 gap-[var(--space-xs)] md:grid-cols-2">
          <ColorBlock name="Destructive" className="bg-destructive" />
          <ColorBlock name="Destructive Foreground" className="bg-destructive-foreground" />
        </div>
      </section>

      {/* Chart & Visualization */}
      <section className="mb-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xs)] font-semibold" style={{ fontSize: "var(--font-size-xl)", color: "var(--color-primary)" }}>Chart & Visualization</h2>
        <p className="mb-[var(--space-sm)]" style={{ color: "var(--color-muted)", fontSize: "var(--font-size-md)" }}>
          Colors used for data visualization and charts.
        </p>
        <div className="grid grid-cols-1 gap-[var(--space-xs)] md:grid-cols-3 lg:grid-cols-5">
          <ColorBlock name="Chart 1" className="bg-chart-1" />
          <ColorBlock name="Chart 2" className="bg-chart-2" />
          <ColorBlock name="Chart 3" className="bg-chart-3" />
          <ColorBlock name="Chart 4" className="bg-chart-4" />
          <ColorBlock name="Chart 5" className="bg-chart-5" />
        </div>
      </section>

      {/* Sidebar & Navigation */}
      <section className="mb-[var(--space-xl)]">
        <h2 className="mb-[var(--space-xs)] font-semibold" style={{ fontSize: "var(--font-size-xl)", color: "var(--color-primary)" }}>Sidebar & Navigation</h2>
        <p className="mb-[var(--space-sm)]" style={{ color: "var(--color-muted)", fontSize: "var(--font-size-md)" }}>
          Colors specific to the sidebar and navigation components.
        </p>
        <div className="grid grid-cols-1 gap-[var(--space-xs)] md:grid-cols-2">
          <ColorBlock name="Sidebar" className="bg-sidebar" />
          <ColorBlock name="Sidebar Foreground" className="bg-sidebar-foreground" />
          <ColorBlock name="Sidebar Primary" className="bg-sidebar-primary" />
          <ColorBlock name="Sidebar Primary Foreground" className="bg-sidebar-primary-foreground" />
          <ColorBlock name="Sidebar Accent" className="bg-sidebar-accent" />
          <ColorBlock name="Sidebar Accent Foreground" className="bg-sidebar-accent-foreground" />
          <ColorBlock name="Sidebar Border" className="bg-sidebar-border" />
          <ColorBlock name="Sidebar Ring" className="bg-sidebar-ring" />
        </div>
      </section>
    </div>
  );
}
