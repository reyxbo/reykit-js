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
