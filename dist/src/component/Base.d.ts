import { ReactNode } from 'react';
export { type Language, type CoverContextParams, useDefaultLanguage, setDefaultLanguage, createCover, Loading, useLoading };
type Language = 'en' | 'zh';
type CoverContextParams = {
    isCovering: boolean;
    setIsCovering: (value: boolean) => void;
};
declare const useDefaultLanguage: () => Language, setDefaultLanguage: (newValue: Language) => void;
/**
 * Create cover component and hook.
 *
 * @param display - Cover display content.
 * @returns Cover component and hook.
 * @example
 * const [Cover, useCover] = createCover('content')
 * const { withCover } = useCover()
 * <Cover>
 *     <button onClick={() => withCover(console, 'test')}>Button</button>
 * </Cover>
 */
declare function createCover(display: ReactNode): [({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element, () => {
    withCover: <T, Args extends any[]>(fn: (...args: Args) => T | Promise<T>, ...args: Args) => Promise<T>;
    isCovering: boolean;
    setIsCovering: (value: boolean) => void;
}];
declare const Loading: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element, useLoading: () => {
    withCover: <T, Args extends any[]>(fn: (...args: Args) => T | Promise<T>, ...args: Args) => Promise<T>;
    isCovering: boolean;
    setIsCovering: (value: boolean) => void;
};
