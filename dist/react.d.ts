import { ReactNode } from 'react';
/**
 * Render react note.
 *
 * @param app - React note.
 * @param elementId - Render HTML element ID.
 */
export declare function renderReact(app: ReactNode, elementId?: string): void;
/**
 * Hook of toggle.
 *
 * @param array - Array.
 * @param loop - Whether to loop count.
 * @returns Returns a stateful open value, and a function to automatic count it.
 */
export declare function useOpen(defaultOpen?: boolean): [boolean, () => void];
/**
 * Hook of count number.
 *
 * @param start - Start number.
 * @param step - Count step.
 * @param stop - Stop number.
 * @param loop - Whether to loop count.
 * @returns Returns a stateful count value, and a function to automatic count it.
 */
export declare function useCount(start?: number, step?: number, stop?: number, loop?: boolean): [number, () => void];
/**
 * Hook of count array index.
 *
 * @param array - Array.
 * @param loop - Whether to loop count.
 * @returns Returns a stateful index value, and a function to automatic count it.
 */
export declare function useIndex(array: any[], loop?: boolean): [number, () => void];
/**
 * Whether is mobile.
 *
 * @returns Judgement.
 */
export declare function useIsMobile(): boolean;
