import { ArrowRight, Blocks, ToyBrick } from "lucide-react";
import Link from "next/link";

import { MCPTabs } from "@/components/design/mcp-tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const componentItems = [
  { name: "Accordion", path: "/components/accordion" },
  { name: "Button", path: "/components/button" },
  { name: "Card", path: "/components/card" },
  { name: "Dialog", path: "/components/dialog" },
  { name: "Dropdown Menu", path: "/components/dropdown-menu" },
];

const blockItems = [
  { name: "Hero", path: "/blocks/hero" },
  { name: "Login", path: "/blocks/login" },
  { name: "Promo", path: "/blocks/promo" },
  { name: "Product Grid", path: "/blocks/product-grid" },
];

export default function Home() {
  return (
    <main
      className="max-w-5xl mx-auto mt-[var(--space-xl)] p-[var(--space-xl)] md:mt-[var(--space-2xl)] md:p-[var(--space-2xl)]"
      style={{ fontFamily: "var(--font-family)" }}
    >
      {/* Hero Section */}
      <section className="mb-[var(--space-xl)]">
        <h1
          className="font-bold tracking-tight"
          style={{
            fontSize: "var(--font-size-3xl)",
            color: "var(--primary)",
            lineHeight: "var(--line-height-lg)",
            letterSpacing: "-0.02em",
          }}
        >
          Registry
        </h1>
        <p
          className="mt-[var(--space-xs)]"
          style={{ color: "var(--muted)", fontSize: "var(--font-size-lg)", maxWidth: 600 }}
        >
          Distribute your design system tokens, custom components, hooks, pages, and other files to any React project.
        </p>
      </section>

      {/* Cards Section */}
      <section className="mb-[var(--space-xl)] grid gap-[var(--space-xl)] md:grid-cols-2">
        <Card className="shadow-[var(--shadow-md)] bg-[var(--card)] border-[var(--border)] rounded-[var(--radius-lg)]">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle style={{ color: "var(--primary)", fontSize: "var(--font-size-xl)" }}>Components</CardTitle>
              <div className="rounded-[var(--radius-full)] bg-[var(--primary)] p-2 shadow-[var(--shadow-xs)] flex items-center justify-center">
                <ToyBrick className="size-6 text-[var(--primary-foreground)]" />
              </div>
            </div>
            <CardDescription style={{ color: "var(--muted)", fontSize: "var(--font-size-md)" }}>
              Reusable UI components for your application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-[var(--space-xs)]">
              {componentItems.map((item) => (
                <li key={item.name} className="flex items-center justify-between group">
                  <Link
                    href={item.path}
                    className="text-[var(--primary)] font-medium text-[var(--font-size-md)] transition-colors group-hover:text-[var(--accent)]"
                  >
                    {item.name}
                  </Link>
                  <ArrowRight className="size-4 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" />
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-[var(--shadow-md)] bg-[var(--card)] border-[var(--border)] rounded-[var(--radius-lg)]">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle style={{ color: "var(--primary)", fontSize: "var(--font-size-xl)" }}>Blocks</CardTitle>
              <div className="rounded-[var(--radius-full)] bg-[var(--foreground)] p-2 shadow-[var(--shadow-xs)] flex items-center justify-center">
                <Blocks className="size-6 text-[var(--primary-foreground)]" />
              </div>
            </div>
            <CardDescription style={{ color: "var(--muted)", fontSize: "var(--font-size-md)" }}>
              Pre-built UI blocks for common patterns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-[var(--space-xs)]">
              {blockItems.map((item) => (
                <li key={item.name} className="flex items-center justify-between group">
                  <Link
                    href={item.path}
                    className="text-[var(--primary)] font-medium text-[var(--font-size-md)] transition-colors group-hover:text-[var(--accent)]"
                  >
                    {item.name}
                  </Link>
                  <ArrowRight className="size-4 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" />
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* About Section */}
      <section className="mb-[var(--space-xl)] rounded-[var(--radius-lg)] border bg-[var(--card)] border-[var(--border)] p-[var(--space-lg)] shadow-[var(--shadow-xs)]">
        <h2 className="font-semibold mb-[var(--space-xs)]" style={{ fontSize: "var(--font-size-lg)", color: "var(--primary)" }}>About</h2>
        <p style={{ color: "var(--muted)", fontSize: "var(--font-size-md)", maxWidth: 700 }}>
          This registry serves as a central repository for all UI components and blocks used in your applications. It helps maintain consistency across your products and speeds up development by providing ready-to-use components. Each component and block is documented with examples. You can browse components by category, search for specific components, and view examples of how they are used in different contexts.
        </p>
        <p className="mt-2" style={{ color: "var(--muted)", fontSize: "var(--font-size-md)" }}>
          To get started, select a {" "}
          <a href="/starters" className="underline text-[var(--accent)] font-medium">
            starter
          </a>{" "}
          and click the <span className="font-bold">Open in v0</span> button. You can also open individual components or blocks in v0 if you want a smaller or more specific starting point.
        </p>
        <p className="mt-4 text-[var(--primary)]">
          <a href="https://github.com/vercel/registry-starter" className="flex items-center gap-1 underline">
            <svg
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              role="graphics-symbol"
              className="inline size-4 fill-[var(--primary)]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                transform="scale(64)"
              />
            </svg>
            <span>GitHub Repository</span>
          </a>
        </p>
      </section>

      {/* MCP Section */}
      <section className="rounded-[var(--radius-lg)] border bg-[var(--card)] border-[var(--border)] p-[var(--space-lg)] shadow-[var(--shadow-xs)]">
        <h2 className="font-semibold mb-[var(--space-xs)]" style={{ fontSize: "var(--font-size-lg)", color: "var(--primary)" }}>MCP</h2>
        <p className="mb-4" style={{ color: "var(--muted)", fontSize: "var(--font-size-md)" }}>
          Integrate this registry with AI IDEs using Model Context Protocol (MCP) using the following configuration. This utilizes this Registry's style tokens and the Shadcn CLI. To ensure this works, double check that the {" "}
          <Link href="/r/registry.json">
            <code className="inline text-sm tabular-nums underline text-[var(--accent)]">
              style:registry
            </code>
          </Link>{" "}
          contains the same colors as your {" "}
          <code className="inline text-sm tabular-nums">tokens.css</code>
        </p>
        <MCPTabs rootUrl={process.env.VERCEL_BRANCH_URL ?? ""} />
      </section>
    </main>
  );
}
