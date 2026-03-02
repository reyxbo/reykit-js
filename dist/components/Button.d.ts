import { ReactNode, ComponentProps, MouseEvent } from 'react';
/**
 * Button component of cycle display children.
 *
 * Parameters
 * ----------
 * @param childrens Children array.
 * @param handleCycle Handle cycle.
 *
 * Returns
 * -------
 * @returns React element.
 */
export declare function CycleButton({ childrens, handleCycle, onClick, ...props }: {
    childrens: ReactNode[];
    handleCycle: (index: number) => void;
    data: {
        children: ReactNode;
        handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
    }[];
} & ComponentProps<'button'>): import("react/jsx-runtime").JSX.Element;
