/**
 * @Time    : 2026-06-11
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Loading components.
 */
export declare const Loading: ({ children }: {
    children: import('react').ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useLoading: () => {
    withCover: <T, Args extends any[]>(fn: (...args: Args) => T | Promise<T>, ...args: Args) => Promise<T>;
    isCovering: boolean;
    setIsCovering: (value: boolean) => void;
};
