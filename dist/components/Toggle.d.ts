import { ReactNode, ComponentProps } from 'react';
/**
 * Toggle component of with icon.
 *
 * @param openIcon - Open icon.
 * @param closeIcon - Close icon.
 * @param handleOpen - Handle open.
 * @param defaultOpen - Default open state.
 * @param rotate - Whether rotate icon.
 * @param listenOpen - Switch icon for listening status value.
 */
export declare function IconToggle({ openIcon, closeIcon, handleOpen, defaultOpen, rotate, listenOpen, className, onClick, ...props }: {
    openIcon: ReactNode;
    closeIcon: ReactNode;
    handleOpen: (open: boolean) => any | Promise<any>;
    defaultOpen?: boolean;
    rotate?: boolean;
    listenOpen?: boolean;
} & ComponentProps<'button'>): import("react/jsx-runtime").JSX.Element;
