"use client";

import {
  Blocks,
  ChevronDown,
  Home,
  Menu,
  Search,
  ToyBrick,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { RegistryLogo } from "@/components/design/registry-logo";
import { ModeToggle } from "@/components/design/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import type * as React from "react";

export const blockItems = [
  { name: "Hero", path: "/blocks/hero" },
  { name: "Login", path: "/blocks/login" },
  { name: "Promo", path: "/blocks/promo" },
  { name: "Product Grid", path: "/blocks/product-grid" },
];

export const gettingStartedItems = [
  { name: "Home", path: "/" },
  { name: "Design Tokens", path: "/tokens" },
  { name: "Starters", path: "/starters" },
];

export function MobileSidebarTrigger() {
  const { setOpenMobile } = useSidebar();

  return (
    <div className="absolute top-[var(--space-xl)] right-[var(--space-lg)] md:hidden">
      <Button aria-label="Open menu" onClick={() => setOpenMobile(true)} className="bg-[var(--sidebar)] text-[var(--sidebar-foreground)] rounded-[var(--radius-md)] shadow-[var(--shadow-xs)]">
        <Menu className="size-5" />
      </Button>
    </div>
  );
}

export function RegistrySidebar() {
  const pathname = usePathname();

  const { setOpenMobile } = useSidebar();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlocks, setFilteredBlocks] = useState(blockItems);

  useEffect(() => {
    if (searchTerm) {
      setFilteredBlocks(
        blockItems.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
    } else {
      setFilteredBlocks(blockItems);
    }
  }, [searchTerm]);

  return (
    <Sidebar collapsible="icon" className="w-[260px] min-w-[220px] max-w-[320px] bg-[var(--sidebar)] border-r border-[var(--sidebar-border)] text-[var(--sidebar-foreground)] shadow-[var(--shadow-xs)]">
      <SidebarHeader className="border-b border-[var(--sidebar-border)] bg-[var(--sidebar)] px-[var(--space-lg)] py-[var(--space-md)]">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex min-w-0 items-center gap-2">
            <RegistryLogo />
          </Link>

          <Button
            variant="ghost"
            className="md:hidden text-[var(--sidebar-foreground)]"
            onClick={() => setOpenMobile(false)}
          >
            <X />
          </Button>
        </div>
        <div className="mt-[var(--space-md)]">
          <div className="relative">
            <Search className="absolute top-2.5 left-2.5 size-4 text-[var(--muted)]" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 bg-[var(--sidebar)] border-[var(--sidebar-border)] focus:border-[var(--sidebar-ring)] text-[var(--sidebar-foreground)] rounded-[var(--radius-md)] shadow-[var(--shadow-xs)]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ fontFamily: "var(--font-family)", fontSize: "var(--font-size-md)" }}
            />
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="pt-[var(--space-lg)] px-[var(--space-lg)]">
        <ScrollArea className="h-full w-full pr-[var(--space-xs)]">
          <Collapsible defaultOpen={true} className="group/collapsible">
            <SidebarGroup>
              <CollapsibleTrigger className="w-full">
                <SidebarGroupLabel className="flex cursor-pointer items-center justify-between text-[var(--sidebar-foreground)]">
                  <div className="flex min-w-0 items-center">
                    <Home className="size-4 flex-shrink-0" />
                    <span className="ml-2 opacity-100 transition-all duration-200" style={{ fontSize: "var(--font-size-md)", fontWeight: "var(--font-weight-medium)" }}>
                      Getting Started
                    </span>
                  </div>
                  <ChevronDown className="size-4 flex-shrink-0 opacity-100 transition-all duration-200 group-data-[state=open]/collapsible:rotate-180" />
                </SidebarGroupLabel>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {gettingStartedItems.map((item) => (
                      <SidebarMenuItem key={item.path}>
                        <SidebarMenuButton
                          asChild
                          isActive={pathname === item.path}
                          className={pathname === item.path ? "bg-[var(--sidebar-primary)] text-[var(--sidebar-primary-foreground)] font-semibold" : "text-[var(--sidebar-foreground)] hover:bg-[var(--sidebar-accent)] hover:text-[var(--sidebar-accent-foreground)] transition-colors"}
                          style={{ borderRadius: "var(--radius-md)", fontSize: "var(--font-size-md)", marginBottom: '4px' }}
                        >
                          <Link
                            onClick={() => setOpenMobile(false)}
                            href={item.path}
                          >
                            {item.name}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        </ScrollArea>
      </SidebarContent>

      <SidebarFooter className="px-[var(--space-lg)] pb-[var(--space-lg)] pt-[var(--space-md)] border-t border-[var(--sidebar-border)]">
        <div className="flex justify-end">
          <ModeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
