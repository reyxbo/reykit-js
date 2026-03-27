/**
 * @Time    : 2026-03-27
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Breadcrumb components.
 */
type BreadcrumbDict = Record<string, {
    label: string;
    href?: string;
}[]>;
/**
 * Breadcrumb components.
 *
 * @param props.dict - Breadcrumb data dictionary.
 */
export declare function Breadcrumb({ dict }: {
    dict: BreadcrumbDict;
}): import("react/jsx-runtime").JSX.Element;
export {};
