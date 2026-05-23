import { ReactNode, ComponentProps } from 'react';
/**
 * Toggle component of with icon.
 *
 * @param props.openIcon - Open icon.
 * @param props.closeIcon - Close icon.
 * @param props.tooltip - Tooltip text.
 * @param props.tooltipSide - Tooltip text popup side.
 * @param props.rotate - Whether to use rotating icon animation.
 * @param props.open - Open state value.
 * @param props.onChangeOpen - Open callback function.
 * @param props.defaultOpen - Default open state.
 */
export declare function IconToggle({ openIcon, closeIcon, tooltip, tooltipSide, rotate, open, onChangeOpen, defaultOpen, onClick, className, ...props }: {
    openIcon: ReactNode;
    closeIcon: ReactNode;
    tooltip?: string;
    tooltipSide?: 'top' | 'bottom' | 'left' | 'right';
    rotate?: boolean;
    open?: boolean;
    onChangeOpen?: (nextOpen: boolean) => any | Promise<any>;
    defaultOpen?: boolean;
} & ComponentProps<'button'>): import("react/jsx-runtime").JSX.Element;
