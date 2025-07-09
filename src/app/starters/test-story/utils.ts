import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getPrompt(): Promise<string> {
  try {
    const response = await fetch("/prompt.md")
    if (!response.ok) throw new Error("Failed to fetch prompt")
    return await response.text()
  } catch (error) {
    console.warn("Failed to load custom prompt, using default")
    return "These are existing design system styles and files. Please utilize them alongside base components to build."
  }
}
