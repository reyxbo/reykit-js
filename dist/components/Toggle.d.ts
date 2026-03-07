import { ReactNode, ComponentProps } from 'react';
/**
 * Toggle component of with icon.
 *
 * @param openIcon - Open icon.
 * @param closeIcon - Close icon.
 * @param handleOpen - Handle open.
 * @param defaultOpen - Default open state.
 * @param rotate - Whether rotate icon.
 */
export declare function IconToggle({ openIcon, closeIcon, handleOpen, defaultOpen, rotate, className, onClick, ...props }: {
    openIcon: ReactNode;
    closeIcon: ReactNode;
    handleOpen: (open: boolean) => void;
    defaultOpen?: boolean;
    rotate?: boolean;
} & ComponentProps<'button'>): import("react/jsx-runtime").JSX.Element;
