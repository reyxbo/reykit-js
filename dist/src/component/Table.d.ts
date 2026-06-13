import { ReactNode } from 'react';
export type HeaderOption<Row extends Record<string, any>> = {
    key: string;
    name: string;
    isHide?: boolean;
    isSort?: boolean;
    isGroup?: boolean;
    sortMethod?: (a: Row, b: Row) => number;
}[];
export type SearchOption<Row extends Record<string, any>> = {
    method: (value: string, row: Row) => boolean;
    placeholder?: string;
};
export type ButtonOption = {
    name: ReactNode;
    method: () => void;
}[];
export type OptionName = ReactNode;
export type RowOptionItem<Row extends Record<string, any>> = {
    name: ReactNode;
    fn: ((row: Row) => void) | null;
};
export type RowOption<Row extends Record<string, any>> = {
    options?: RowOptionItem<Row>[];
    destructiveOptions?: RowOptionItem<Row>[];
} | ((row: Row) => {
    options?: RowOptionItem<Row>[];
    destructiveOptions?: RowOptionItem<Row>[];
});
export type SelectRowsOptionItem<Row extends Record<string, any>> = {
    name: ReactNode;
    fn: ((selectRows: Row[]) => void) | null;
};
export type SelectRowsOption<Row extends Record<string, any>> = {
    options?: SelectRowsOptionItem<Row>[];
    destructiveOptions?: SelectRowsOptionItem<Row>[];
} | ((selectRows: Row[]) => {
    options?: SelectRowsOptionItem<Row>[];
    destructiveOptions?: SelectRowsOptionItem<Row>[];
});
/**
 * Table component.
 *
 * @param data - Table data state value.
 * @param setData - Function of set table data state value.
 * @param headerOption - Header option.
 * @param searchOption - Search option.
 * @param buttonOption - Custom buttons option.
 * @param rowOption - Each row option.
 * @param selectRowsOption - Selected rows option.
 * @param pageSize - Page rows size.
 * @param mobilePageSize - Page rows size on mobile devices.
 * @param language - Language type.
 */
export declare function Table<Row extends Record<string, any>>({ data, setData, headerOption, searchOption, buttonOption, rowOption, selectRowsOption, pageSize, mobilePageSize, language }: {
    data: Row[];
    setData: (value: Row[] | ((value: Row[]) => Row[])) => void;
    headerOption?: HeaderOption<Row>;
    searchOption?: SearchOption<Row>;
    buttonOption?: ButtonOption;
    rowOption?: RowOption<Row>;
    selectRowsOption?: SelectRowsOption<Row>;
    pageSize?: number;
    mobilePageSize?: number;
    language?: 'en' | 'zh';
}): import("react/jsx-runtime").JSX.Element;
