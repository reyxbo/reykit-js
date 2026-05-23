/**
 * @Time    : 2026-03-25
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Hook of loading components.
 */
/**
 * Hook of get loading component status parameters.
 *
 * @returns Status parameters.
 *     - `isLoading` : Loading status.
 *     - `setIsLoading` : Set loading status.
 *     - `withLoading` : Execute a function in the context.
 */
export declare function useLoading(): {
    withLoading: <T, Args extends any[]>(fn: (...args: Args) => T | Promise<T>, ...args: Args) => Promise<T>;
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
};
