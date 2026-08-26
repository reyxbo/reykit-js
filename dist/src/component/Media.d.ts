import { ComponentProps } from 'react';
import * as ui from './ui';
/**
 * Media component of pop up show image.
 *
 * @param path - Image path.
 * @param loading - Loading scheme.
 */
export declare function PopupImage({ path, loading, ...args }: {
    path: string;
    loading?: 'eager' | 'lazy';
} & ComponentProps<typeof ui.DialogTrigger>): import("react/jsx-runtime").JSX.Element;
/**
 * Media component of pop up show video.
 *
 * @param path - Video path.
 * @param preload - Preload scheme.
 */
export declare function PopupVideo({ path, preload, ...args }: {
    path: string;
    preload?: 'metadata' | 'aotu' | 'none';
} & ComponentProps<typeof ui.DialogTrigger>): import("react/jsx-runtime").JSX.Element;
/**
 * Media component of carousel show image or video.
 *
 * @param data - Media data.
 * @param orientation - Carousel orientation.
 *     - `auto` : Automatic set, when is mobile, then is `vertical`, otherwise is `horizontal`.
 * @param width - Show content width.
 * @param showButton - Whether show button.
 * @param showControl - Whether show controls.
 * @param language - Language type.
 */
export declare function CarouselMedia({ data, orientation, width, showButton, showControl, language }: {
    data: {
        type: 'image' | 'video';
        path: string;
    }[];
    orientation?: 'auto' | 'horizontal' | 'vertical';
    width?: 1 | 2 | 3 | 4 | 5 | 6;
    showButton?: boolean;
    showControl?: boolean;
    language?: 'en' | 'zh';
}): import("react/jsx-runtime").JSX.Element;
