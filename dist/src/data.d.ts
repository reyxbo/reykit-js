/**
 * @Time    : 2026-03-17
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Data methods.
 */
export declare function range(stop: number): Generator<number>;
export declare function range(start: number, stop: number, step?: number): Generator<number>;
export declare function rangeArr(stop: number): number[];
export declare function rangeArr(start: number, stop: number, step?: number): number[];
/**
 * Toggle array element value.
 *
 * @Param arr - Array.
 * @Param value - Element value.
 * @returns Array of toggled element.
 */
export declare function toggleArr<T>(arr: T[], value: T): T[];
/**
 * Compare the sizes of two values.
 *
 * @param a - The first value.
 * @param b - The second value.
 * @param order - Sorting type.
 * @returns Sorted result.
 */
export declare function compare(a: any, b: any, order?: 'asc' | 'desc'): 1 | 0 | -1;
/**
 * Sorting array.
 *
 * @param arr - Array.
 * @param order - Sorting type.
 * @param key - Element object index key.
 * @returns Sorted array.
 */
export declare function sort<T>(arr: T[], order?: 'asc' | 'desc', key?: keyof T): T[];
/**
 * Count elements of array.
 *
 * @param arr - Array.
 * @returns Count result.
 */
export declare function countArr<T>(arr: T[]): Map<T, number>;
