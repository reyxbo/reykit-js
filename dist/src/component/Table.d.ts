import { ReactNode } from 'react';
export type TableFieldOption<Row extends Record<string, any>> = {
    key: string;
    name: string;
    isHide?: boolean;
    isSort?: boolean;
    isGroup?: boolean;
    isGroupSearch?: boolean;
    sortMethod?: (a: Row, b: Row) => number;
    defaultValue?: any;
}[];
export type TableSearchOption<Row extends Record<string, any>> = {
    method: (value: string, row: Row) => boolean;
    placeholder?: string;
};
export type TableButtonOption = {
    name: ReactNode;
    method: () => void;
}[];
export type TableRowOptionItemLink = string;
export type TableRowOptionItem<Row extends Record<string, any>> = {
    name: ReactNode;
    exe: ((row: Row) => void) | TableRowOptionItemLink | null;
};
export type TableRowOption<Row extends Record<string, any>> = {
    options?: TableRowOptionItem<Row>[];
    destructiveOptions?: TableRowOptionItem<Row>[];
} | ((row: Row) => {
    options?: TableRowOptionItem<Row>[];
    destructiveOptions?: TableRowOptionItem<Row>[];
});
export type TableSelectRowsOptionItem<Row extends Record<string, any>> = {
    name: ReactNode;
    exe: ((selectRows: Row[]) => void) | null;
};
export type TableSelectRowsOption<Row extends Record<string, any>> = {
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
 * @param setData - Function of set table data state value.
 * @param fieldOption - Header option.
 * @param searchOption - Search option.
 * @param buttonOption - Custom buttons option.
 * @param rowOption - Each row option.
 * @param selectRowsOption - Selected rows option.
 * @param pageSize - Page rows size.
 * @param mobilePageSize - Page rows size on mobile devices.
 * @param language - Language type.
 */
export declare function Table<Row extends Record<string, any>>({ data, setData, fieldOption, searchOption, buttonOption, rowOption, selectRowsOption, pageSize, mobilePageSize, language }: {
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
}): import("react/jsx-runtime").JSX.Element;
