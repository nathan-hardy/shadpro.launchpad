import type { Component } from "@/lib/utils";

export const items: Component[] = [
  {
    name: "brand-header",
    title: "Brand Header",
    type: "registry:component",
    description: "Header with navigation and brand logo",
  },
  {
    name: "brand-sidebar",
    title: "Brand Sidebar",
    type: "registry:component",
    description: "Sidebar with navigation for the store",
  },
  {
    name: "logo",
    title: "Logo",
    type: "registry:component",
    description: "Procore Store logo component",
  },
  {
    name: "sidebar",
    title: "Sidebar UI",
    type: "registry:component",
    description: "Sidebar layout and state provider",
  },
  {
    name: "sonner",
    title: "Sonner Notifications",
    type: "registry:component",
    description: "Toast notifications using Sonner",
  },
  {
    name: "product-grid",
    title: "Product Grid",
    type: "registry:component",
    description: "Grid layout for displaying products",
  },
  {
    name: "utils",
    title: "Utility Functions",
    type: "registry:lib",
    description: "Common utility functions (cn, getPrompt)",
  },
  {
    name: "products",
    title: "Product Service",
    type: "registry:lib",
    description: "Functions for fetching categories and products",
  },
  {
    name: "globals",
    title: "Global Styles",
    type: "registry:style",
    description: "Tailwind and token styles",
  },
  {
    name: "tokens",
    title: "Tokens CSS",
    type: "registry:file",
    description: "Design tokens such as colors, radii, shadows",
  },
  {
    name: "tailwind-config",
    title: "Tailwind Config",
    type: "registry:file",
    description: "Tailwind configuration file",
  },
  {
    name: "v0-layout",
    title: "Layout File",
    type: "registry:file",
    description: "Root layout for the app",
  },
  {
    name: "page",
    title: "Landing Page",
    type: "registry:page",
    description: "Main landing page for the store",
  },
];

export default {
  items,
};
