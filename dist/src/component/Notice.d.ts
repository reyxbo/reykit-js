import { ReactNode } from 'react';
import { ToasterProps } from 'sonner';
export { toast as notice } from 'sonner';
/**
 * Top banner notice component.
 *
 * @param props.children - The node tree of the mounting context.
 */
export declare function Notice({ children, position, richColors, toastOptions, ...props }: {
    children: ReactNode;
} & ToasterProps): import("react/jsx-runtime").JSX.Element;
