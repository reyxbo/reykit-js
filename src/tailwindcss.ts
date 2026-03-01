import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merge TailwindCSS class style string array.
 * 
 * Parameters
 * ----------
 * @param inputs TailwindCSS class style string array.
 * 
 * Returns
 * -------
 * @returns Merged string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
