import { ReactNode, ComponentProps } from 'react';
export { TextBadges };
/**
 * Text component of with multiple badges.
 *
 * @param texts - Text list.
 */
declare function TextBadges({ contents, className, ...args }: {
    contents: ReactNode[];
} & ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
