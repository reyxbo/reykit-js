import { ReactNode, ComponentProps, MouseEvent } from 'react';
/**
 * Button component of cycle display children.
 *
 * @param props.childrens - Children array.
 * @param props.handleCycle - Handle cycle.
 */
export declare function CycleButton({ childrens, handleCycle, onClick, ...props }: {
    childrens: ReactNode[];
    handleCycle: (index: number) => any | Promise<any>;
    data: {
        children: ReactNode;
        handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
    }[];
} & ComponentProps<'button'>): import("react/jsx-runtime").JSX.Element;
/**
 * Button component of scroll to top.
 * Initial hide, display after scrolling down more than 1 screen height.
 *
 * @param buttonColor - Button color, need hexadecimal color value.
 */
export declare function ScrollToTopButton({ buttonColor, className, style, ...args }: {
    buttonColor?: string;
} & ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element | null;
