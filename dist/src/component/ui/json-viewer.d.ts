import { default as React } from 'react';
import { Button } from './button';
interface JsonViewerProps {
    data: Record<string, any>;
    className?: string;
    truncation?: Partial<TruncationSettings>;
    showLineNumbers?: boolean;
    showColorIndent?: boolean;
    collapseOn?: 'click' | 'doubleClick';
    defaultExpanded?: boolean | number;
    title?: string;
    language?: 'en' | 'zh';
}
interface TruncationSettings {
    enabled: boolean;
    itemsPerArray: number;
}
declare function JsonViewer({ data, className, truncation: truncationProp, showLineNumbers, showColorIndent, collapseOn, defaultExpanded, title, language }: JsonViewerProps): import("react/jsx-runtime").JSX.Element;
export declare function CopyButton({ value, className, variant, language, ...props }: React.ComponentProps<typeof Button> & {
    value: string;
    src?: string;
    language?: 'en' | 'zh';
}): import("react/jsx-runtime").JSX.Element;
export { JsonViewer };
