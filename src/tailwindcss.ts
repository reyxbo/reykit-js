/**
 * @Time    : 2026-03-11
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : TailwindCSS methods.
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merge TailwindCSS class style string array.
 * 
 * @param inputs - TailwindCSS class style string array.
 * @returns Merged string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
