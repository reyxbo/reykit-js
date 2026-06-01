/**
 * @Time    : 2026-03-11
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Base methods.
 */
export type Key<T> = keyof T;
export type Value<T> = T[keyof T];
export type KeyByValue<T, V> = {
    [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];
/**
 * Start debug CSS style, need to import 'reykit/debug' CSS style first.
 */
export declare function debugCss(): void;
