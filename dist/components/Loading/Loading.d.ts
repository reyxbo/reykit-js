import { ReactNode } from 'react';
type LoadingContextParams = {
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
};
export declare const LoadingContext: import('react').Context<LoadingContextParams | null>;
/**
 * Loading component of display rotate icon.
 *
 * @param props.children - The node tree of the mounting context.
 */
export declare function Loading({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export {};
