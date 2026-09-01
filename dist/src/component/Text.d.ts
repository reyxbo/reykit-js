import { ReactNode, ComponentProps } from 'react';
/**
 * Text component of with icon.
 *
 * @param icon - Icon content.
 * @param text - Text content.
 * @param url - Click to open URL.
 * @param mobileHideIcon - Whether hide icon content on mobile devices.
 * @param mobileHideText - Whether hide text content on mobile devices.
 */
export declare function IconText({ icon, text, url, hideMobileIcon, hideMobileText, className, ...args }: {
    icon: ReactNode;
    text: string | ReactNode;
    url?: string;
    hideMobileIcon?: boolean;
    hideMobileText?: boolean;
} & ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
/**
 * Text component of supporting Markdown.
 */
export declare function MarkdownText({ className, children, ...args }: {
    children?: string | null;
} & ComponentProps<'article'>): import("react/jsx-runtime").JSX.Element;
