import { ReactNode } from 'react';
export { type TableFieldOption, type DefaultTableFieldOption, type TableSearchOption, type TableButtonOption, type TableRowOptionItemLink, type TableRowOptionItem, type TableRowOption, type TableSelectRowsOptionItem, type TableSelectRowsOption, Table };
type TableFieldOption<Row extends Record<string, any>> = {
    key: string;
    name: string;
    isBadge?: boolean;
    isHide?: boolean;
    isSort?: boolean;
    isGroup?: boolean;
    isGroupSearch?: boolean;
    sortMethod?: (a: Row, b: Row) => number;
    defaultValue?: any;
}[];
type DefaultTableFieldOption = {
    isBadge?: boolean;
    isHide?: boolean;
    isSort?: boolean;
    isGroup?: boolean;
    isGroupSearch?: boolean;
    defaultValue?: any;
};
type TableSearchOption<Row extends Record<string, any>> = {
    method: (value: string, row: Row) => boolean;
    placeholder?: string;
};
type TableButtonOption = {
    name: ReactNode;
    method: () => void;
}[];
type TableRowOptionItemLink = string;
type TableRowOptionItem<Row extends Record<string, any>> = {
    name: ReactNode;
    method: ((row: Row) => void) | TableRowOptionItemLink | null;
};
type TableRowOption<Row extends Record<string, any>> = {
    options?: TableRowOptionItem<Row>[];
    destructiveOptions?: TableRowOptionItem<Row>[];
} | ((row: Row) => {
    options?: TableRowOptionItem<Row>[];
    destructiveOptions?: TableRowOptionItem<Row>[];
});
type TableSelectRowsOptionItem<Row extends Record<string, any>> = {
    name: ReactNode;
    method: ((selectRows: Row[]) => void) | null;
};
type TableSelectRowsOption<Row extends Record<string, any>> = {
    options?: TableSelectRowsOptionItem<Row>[];
    destructiveOptions?: TableSelectRowsOptionItem<Row>[];
} | ((selectRows: Row[]) => {
    options?: TableSelectRowsOptionItem<Row>[];
    destructiveOptions?: TableSelectRowsOptionItem<Row>[];
});
/**
 * Table component.
 *
 * @param data - Table data state value.
 *     - `Array` : Convert elements to `Badge` component.
 * @param setData - Function of set table data state value.
 * @param fieldOption - Field option.
 *     - `Attribute key` : Field key.
 *     - `Attribute name` : Field show name.
 *     - `Attribute isBadge` : Whether show to badge element.
 *     - `Attribute isHide` : Whether hide field.
 *     - `Attribute isSort` : Whether show sort button.
 *     - `Attribute isGroup` : Whether show group button.
 *     - `Attribute isGroupSearch` : Whether show search input in group button.
 *     - `Attribute sortMethod` : Sort method.
 *     - `Attribute defaultValue` : Replace none value.
 * @param searchOption - Search option.
 *     - `Attribute method` : Search method.
 *     - `Attribute placeholder` : Search input placeholder.
 * @param buttonOption - Custom buttons option.
 *     - `Attribute name` : Button name.
 *     - `Attribute method` : Execute method.
 * @param rowOption - Each row buttons option.
 *     - `Attribute options` : Normal buttons option.
 *     - `Attribute destructiveOptions` : Important buttons option.
 * @param selectRowsOption - Selected rows option.
 *     - `Attribute options` : Normal buttons option.
 *     - `Attribute destructiveOptions` : Important buttons option.
 * @param pageSize - Page rows size.
 * @param mobilePageSize - Page rows size on mobile devices.
 * @param language - Language type.
 * @param defaultFieldOption - Default field option.
 */
declare function Table<Row extends Record<string, any>>({ data, setData, fieldOption, searchOption, buttonOption, rowOption, selectRowsOption, pageSize, mobilePageSize, language, defaultFieldOption, }: {
    data: Row[];
    setData: (value: Row[] | ((value: Row[]) => Row[])) => void;
    fieldOption?: TableFieldOption<Row>;
    searchOption?: TableSearchOption<Row>;
    buttonOption?: TableButtonOption;
    rowOption?: TableRowOption<Row>;
    selectRowsOption?: TableSelectRowsOption<Row>;
    pageSize?: number;
    mobilePageSize?: number;
    language?: 'en' | 'zh';
    defaultFieldOption?: DefaultTableFieldOption;
}): import("react/jsx-runtime").JSX.Element;
