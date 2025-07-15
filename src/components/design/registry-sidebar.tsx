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
      <Button aria-label="Open menu" onClick={() => setOpenMobile(true)} className="bg-[var(--color-sidebar)] text-[var(--color-sidebar-foreground)] rounded-[var(--radius-md)] shadow-[var(--shadow-xs)]">
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
    <Sidebar collapsible="icon" className="bg-[var(--color-sidebar)] border-r border-[var(--color-sidebar-border)] text-[var(--color-sidebar-foreground)]">
      <SidebarHeader className="border-b border-[var(--color-sidebar-border)] bg-[var(--color-sidebar)]">
        <div className="flex items-center justify-between px-[var(--space-xs)] py-[var(--space-xs)]">
          <Link href="/" className="flex min-w-0 items-center gap-2">
            <RegistryLogo />
          </Link>

          <Button
            variant="ghost"
            className="md:hidden text-[var(--color-sidebar-foreground)]"
            onClick={() => setOpenMobile(false)}
          >
            <X />
          </Button>
        </div>
        <div className="px-[var(--space-xs)] py-[var(--space-xs)] opacity-100 transition-all duration-200">
          <div className="relative">
            <Search className="absolute top-2.5 left-2.5 size-4 text-[var(--color-muted)]" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 bg-[var(--color-input-bg)] border-[var(--color-input-border)] focus:border-[var(--color-input-focus)] text-[var(--color-sidebar-foreground)] rounded-[var(--radius-md)]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ fontFamily: "var(--font-family)", fontSize: "var(--font-size-md)" }}
            />
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <ScrollArea className="h-full w-full pr-[var(--space-xs)]">
          <Collapsible defaultOpen={true} className="group/collapsible">
            <SidebarGroup>
              <CollapsibleTrigger className="w-full">
                <SidebarGroupLabel className="flex cursor-pointer items-center justify-between text-[var(--color-sidebar-foreground)]">
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
                          className={pathname === item.path ? "bg-[var(--color-sidebar-primary)] text-[var(--color-sidebar-primary-foreground)]" : "text-[var(--color-sidebar-foreground)]"}
                          style={{ borderRadius: "var(--radius-md)", fontSize: "var(--font-size-md)" }}
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

      <SidebarFooter>
        <div className="flex justify-end">
          <ModeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
