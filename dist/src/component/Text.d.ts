import { ReactNode } from 'react';
/**
 * Text component of with icon.
 *
 * @param icon - Icon content.
 * @param text - Text content.
 * @param mobileHideIcon - Whether hide icon content on mobile devices.
 * @param mobileHideText - Whether hide text content on mobile devices.
 */
export declare function IconText({ icon, text, hideMobileIcon, hideMobileText }: {
    icon: ReactNode;
    text: string | ReactNode;
    hideMobileIcon?: boolean;
    hideMobileText?: boolean;
}): import("react/jsx-runtime").JSX.Element;
