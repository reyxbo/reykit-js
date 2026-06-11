import { ReactNode } from 'react';
export type CoverContextParams = {
    isCovering: boolean;
    setIsCovering: (value: boolean) => void;
};
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
export declare function createCover(display: ReactNode): [({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element, () => {
    withCover: <T, Args extends any[]>(fn: (...args: Args) => T | Promise<T>, ...args: Args) => Promise<T>;
    isCovering: boolean;
    setIsCovering: (value: boolean) => void;
}];
