import { ReactNode, ComponentProps } from 'react';
/**
 * Toggle component of with icon.
 *
 * @param props.openIcon - Open icon.
 * @param props.closeIcon - Close icon.
 * @param props.handleOpen - Handle open.
 * @param props.defaultOpen - Default open state.
 * @param props.rotate - Whether rotate icon.
 * @param props.listenOpen - Switch icon for listening status value.
 */
export declare function IconToggle({ openIcon, closeIcon, handleOpen, defaultOpen, rotate, listenOpen, className, onClick, ...props }: {
    openIcon: ReactNode;
    closeIcon: ReactNode;
    handleOpen: (open: boolean) => any | Promise<any>;
    defaultOpen?: boolean;
    rotate?: boolean;
    listenOpen?: boolean;
} & ComponentProps<'button'>): import("react/jsx-runtime").JSX.Element;
