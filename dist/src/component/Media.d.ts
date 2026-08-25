import { ComponentProps } from 'react';
import * as ui from './ui';
/**
 * Media component of pop up show image.
 *
 * @param path - Image path.
 */
export declare function PopupImage({ path, ...args }: {
    path: string;
} & ComponentProps<typeof ui.DialogTrigger>): import("react/jsx-runtime").JSX.Element;
/**
 * Media component of pop up show video.
 *
 * @param path - Video path.
 */
export declare function PopupVideo({ path, ...args }: {
    path: string;
} & ComponentProps<typeof ui.DialogTrigger>): import("react/jsx-runtime").JSX.Element;
/**
 * Media component of carousel show image or video.
 *
 * @param data - Media data.
 * @param orientation - Carousel orientation.
 *     - `auto` : Automatic set, when is mobile, then is `vertical`, otherwise is `horizontal`.
 * @param showNum - Show content number.
 * @param showCount - Whether show count text on non mobile client.
 * @param language - Language type.
 */
export declare function CarouselMedia({ data, orientation, showNum, showCount, language }: {
    data: {
        type: 'image' | 'video';
        path: string;
    }[];
    orientation?: 'auto' | 'horizontal' | 'vertical';
    showNum?: 1 | 2 | 3 | 4 | 5;
    showCount?: boolean;
    language?: 'en' | 'zh';
}): import("react/jsx-runtime").JSX.Element;
