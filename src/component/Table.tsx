/**
 * @Time    : 2026-05-19
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Table components.
 */

import { ReactNode, useState, isValidElement, useEffect, ReactElement } from 'react'

import * as ui from './ui'
import { TextBadges } from './Badge'
import { sort, rangeArr, countArr } from '../lib/data'
import { useValueByMobile } from '../lib/react'
import { cn } from '../lib/twc'

export type TableFieldOption<Row extends Record<string, any>> = {
    key: string,
    name: string,
    isBadge?: boolean,
    isHide?: boolean,
    isSort?: boolean,
    isGroup?: boolean,
    isGroupSearch?: boolean,
    sortMethod?: (a: Row, b: Row) => number,
    defaultValue?: any
}[]
export type DefaultTableFieldOption = {
    isBadge?: boolean,
    isHide?: boolean,
    isSort?: boolean,
    isGroup?: boolean,
    isGroupSearch?: boolean,
    defaultValue?: any
}
export type TableSearchOption<Row extends Record<string, any>> = {
    method: (value: string, row: Row) => boolean,
    placeholder?: string
}
export type TableButtonOption = {
    name: ReactNode,
    method: () => void
}[]
export type TableRowOptionItemLink = string
export type  TableRowOptionItem<Row extends Record<string, any>> = {
    name: ReactNode,
    method: ((row: Row) => void) | TableRowOptionItemLink | null
}
export type TableRowOption<Row extends Record<string, any>> = {
    options?: TableRowOptionItem<Row>[],
    destructiveOptions?: TableRowOptionItem<Row>[]
} | ((row: Row) => {
    options?: TableRowOptionItem<Row>[],
    destructiveOptions?: TableRowOptionItem<Row>[]
})
export type  TableSelectRowsOptionItem<Row extends Record<string, any>> = {
    name: ReactNode,
    method: ((selectRows: Row[]) => void) | null
}
export type TableSelectRowsOption<Row extends Record<string, any>> = {
    options?: TableSelectRowsOptionItem<Row>[],
    destructiveOptions?: TableSelectRowsOptionItem<Row>[]
} | ((selectRows: Row[]) => {
    options?: TableSelectRowsOptionItem<Row>[],
    destructiveOptions?: TableSelectRowsOptionItem<Row>[]
})

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
export function Table<Row extends Record<string, any>>(
    {
        data,
        setData,
        fieldOption,
        searchOption,
        buttonOption,
        rowOption,
        selectRowsOption,
        pageSize = 20,
        mobilePageSize = 10,
        language = 'en',
        defaultFieldOption,
    }: {
        data: Row[],
        setData: (value: Row[] | ((value: Row[]) => Row[])) => void,
        fieldOption?: TableFieldOption<Row>,
        searchOption?: TableSearchOption<Row>,
        buttonOption?: TableButtonOption,
        rowOption?: TableRowOption<Row>,
        selectRowsOption?: TableSelectRowsOption<Row>,
        pageSize?: number,
        mobilePageSize?: number,
        language?: 'en' | 'zh',
        defaultFieldOption?: DefaultTableFieldOption
    }
) {

    // Parameter.
    const pageSizeByMobile = useValueByMobile(mobilePageSize, pageSize)
    const [pageSizeState, setPageSizeState] = useState(pageSizeByMobile)
    const [page, setPage] = useState(1)
    const [fieldOptionState, setFieldOptionState] = useState(
        fieldOption && fieldOption.length !== 0
        ? fieldOption
        : Array.from(
            new Set(
                data.flatMap(row => Object.keys(row))
            )
        ).map(key => ({
            key: key,
            name: key,
            ...(defaultFieldOption || {})
        }))
    )
    const [searchValue, setSearchValue] = useState('')
    const [groupFilter, setGroupFilter] = useState<Partial<Record<keyof Row, Row[keyof Row][]>>>({})
    const filteredData = data.filter(row => (
            (searchValue === '' || searchOption === undefined || searchOption.method(searchValue, row))
            && Object.entries(row).every(([key, value]) => (
                !groupFilter[key] || groupFilter[key].length === 0
                ? true
                : Array.isArray(value)
                ? value.some(i => groupFilter[key]?.includes(i))
                : groupFilter[key]?.includes(value)
            )
        )
    ))
    const pageData = filteredData.slice((page - 1) * pageSizeState, page * pageSizeState) as Row[]
    const [selectRows, setSelectRows] = useState<Row[] | undefined>(selectRowsOption && [])

    // Handle.
    useEffect(() => {
        if ((!fieldOption || fieldOption.length === 0) && data.length > 0) {
            setFieldOptionState(
                Array.from(
                    new Set(
                        data.flatMap(row => Object.keys(row))
                    )
                ).map(key => ({
                    key: key,
                    name: key,
                    ...(defaultFieldOption || {})
                }))
            )
        }
    }, [data])

    return (
        <div className='relative flex flex-col gap-4 size-full'>
            <TableMenu
                data={data}
                setPage={setPage}
                fieldOption={fieldOptionState}
                setFieldOption={setFieldOptionState}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                searchOption={searchOption}
                buttonOption={buttonOption}
                selectRowsOption={selectRowsOption}
                selectRows={selectRows}
                groupFilter={groupFilter}
                setGroupFilter={setGroupFilter}
                language={language}
            />
            <TableMain
                pageData={pageData}
                setData={setData}
                fieldOption={fieldOptionState}
                selectRows={selectRows}
                setSelectRows={setSelectRows}
                rowOption={rowOption}
                language={language}
            />
            <TablePagination
                total={filteredData.length}
                pageSize={pageSizeState}
                setPageSize={setPageSizeState}
                page={page}
                setPage={setPage}
                selectRows={selectRows}
                language={language}
            />
        </div>
    )
}

/**
 * Table top menu component.
 * 
 * @param data - Table data state value.
 * @param fieldOption - Field option state value.
 *     - `Attribute key` : Field key.
 *     - `Attribute name` : Field show name.
 *     - `Attribute isBadge` : Whether show to badge element.
 *     - `Attribute isHide` : Whether hide field.
 *     - `Attribute isSort` : Whether show sort button.
 *     - `Attribute isGroup` : Whether show group button.
 *     - `Attribute isGroupSearch` : Whether show search input in group button.
 *     - `Attribute sortMethod` : Sort method.
 *     - `Attribute defaultValue` : Replace none value.
 * @param setFieldOption - Function of set field option state value.
 * @param searchValue - Search state value.
 * @param setSearchValue - Function of set Search state value.
 * @param searchOption - Search option.
 *     - `Attribute method` : Search method.
 *     - `Attribute placeholder` : Search input placeholder.
 * @param buttonOption - Custom buttons option.
 *     - `Attribute name` : Button name.
 *     - `Attribute method` : Execute method.
 * @param selectRowsOption - Selected rows option.
 *     - `Attribute options` : Normal buttons option.
 *     - `Attribute destructiveOptions` : Important buttons option.
 * @param selectRows - Selected rows state value.
 * @param groupFilter - Group filter field values state value.
 * @param setGroupFilter - Fcuntion of group filter field values state value.
 * @param language - Language type.
 */
function TableMenu<Row extends Record<string, any>>(
    {
        data,
        setPage,
        fieldOption,
        setFieldOption,
        searchValue,
        setSearchValue,
        searchOption,
        buttonOption,
        selectRowsOption,
        selectRows,
        groupFilter,
        setGroupFilter,
        language
    }: {
        data: Row[],
        setPage: (value: number) => void,
        fieldOption: TableFieldOption<Row>,
        setFieldOption: (value: TableFieldOption<Row>) => void,
        searchValue?: string,
        setSearchValue: (value: string) => void,
        searchOption?: TableSearchOption<Row>,
        buttonOption?: TableButtonOption,
        selectRowsOption?: TableSelectRowsOption<Row>,
        selectRows?: Row[],
        groupFilter: Partial<Record<keyof Row, Row[keyof Row][]>>,
        setGroupFilter: (value: Partial<Record<keyof Row, Row[keyof Row][]>>) => void,
        language: 'en' | 'zh'
    }
) {

    // Parameter.
    const [groupSearchData, setGroupSearchData] = useState<Partial<Record<keyof Row, string>>>({})
    const groupData = Object.fromEntries(fieldOption.filter(item => item.isGroup).map(
        ({ key }) => [
            key,
            new Map(
                [...countArr(data.flatMap(item => {
                    const value = item[key]
                    return (
                        Array.isArray(value)
                        ? value
                        : [value]
                    )
                }))].filter(
                    ([value, _]) => (
                        groupSearchData[key]
                        ? String(value).includes(groupSearchData[key])
                        : true
                    )
                )
            )
        ]
    ))
    const [groupOpenKey, setGroupOpenKey] = useState<keyof Row | ''>('')
    let iterSelectRowsOption: TableSelectRowsOption<Row>

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                {
                    selectRowsOption && selectRows && (
                        <ui.DropdownMenu modal={false}>
                            <ui.DropdownMenuTrigger render={<ui.Button variant='outline' size='sm' />}>
                                <ui.icon.ListTodo />
                                {
                                    {
                                        'en': <>
                                            <span className='hidden lg:inline'>Batch</span>
                                        </>,
                                        'zh': <>
                                            <span className='hidden lg:inline'>批量</span>
                                        </>
                                    }[language]
                                }
                            </ui.DropdownMenuTrigger>
                            <ui.DropdownMenuContent align='start' className='w-auto'>
                                {
                                    <>
                                        {
                                            (
                                                iterSelectRowsOption = (
                                                    (typeof selectRowsOption === 'function')
                                                    ? selectRowsOption(selectRows)
                                                    : selectRowsOption
                                                )
                                            ).options && (
                                                iterSelectRowsOption.options.map(
                                                    ({name, method}, index) => (
                                                        <ui.DropdownMenuItem
                                                            key={index}
                                                            onClick={() => {method && method(selectRows)}}
                                                            disabled={selectRows.length === 0 || method === null}
                                                        >
                                                            <span className='whitespace-nowrap'>{name}</span>
                                                        </ui.DropdownMenuItem>
                                                    )
                                                )
                                            )
                                        }
                                        {iterSelectRowsOption.options && iterSelectRowsOption.destructiveOptions && <ui.DropdownMenuSeparator />}
                                        {
                                            iterSelectRowsOption.destructiveOptions && (
                                                iterSelectRowsOption.destructiveOptions.map(
                                                    ({name, method}, index) => (
                                                        <ui.DropdownMenuItem
                                                            key={index}
                                                            variant='destructive'
                                                            onClick={() => {method && method(selectRows)}}
                                                            disabled={selectRows.length === 0 || method === null}
                                                        >{name}</ui.DropdownMenuItem>
                                                    )
                                                )
                                            )
                                        }
                                    </>
                                }
                            </ui.DropdownMenuContent>
                        </ui.DropdownMenu>
                    )
                }
                <ui.DropdownMenu>
                    <ui.DropdownMenuTrigger render={<ui.Button variant='outline' size='sm' />}>
                        <ui.icon.Columns3Cog />
                        {
                            {
                                'en': <>
                                    <span className='hidden lg:inline'>Columns</span>
                                </>,
                                'zh': <>
                                    <span className='hidden lg:inline'>字段</span>
                                </>
                            }[language]
                        }
                    </ui.DropdownMenuTrigger>
                    <ui.DropdownMenuContent align='start' className='w-auto'>
                        {
                            fieldOption.map(
                                ({ key, name, isHide }, index) => (
                                    <ui.DropdownMenuCheckboxItem
                                        key={index}
                                        checked={!isHide}
                                        onCheckedChange={
                                            checked => {
                                                setFieldOption(
                                                    fieldOption.map((item) => ({
                                                        ...item,
                                                        isHide: (
                                                            item.key === key
                                                            ? !checked
                                                            : item.isHide
                                                        )
                                                    }))
                                                )
                                            }
                                        }
                                    >
                                        <span className='whitespace-nowrap'>{name}</span>
                                    </ui.DropdownMenuCheckboxItem>
                                )
                            )
                        }
                    </ui.DropdownMenuContent>
                </ui.DropdownMenu>
                {
                    buttonOption && buttonOption.map(({name, method}, index) => (
                        <ui.Button
                            key={index}
                            variant='outline'
                            size='sm'
                            onClick={() => {method()}}
                        >
                            {name}
                        </ui.Button>
                    ))
                }
            </div>
            <div className='flex items-center gap-2'>
                {
                    fieldOption.some(({ isGroup }) => isGroup) && (
                        <>
                            <div className='hidden lg:flex gap-2'>
                                {
                                    fieldOption.map(({ key, name, isGroup, isGroupSearch, defaultValue }, index) => (
                                        isGroup && (
                                            <ui.DropdownMenu key={index}>
                                                <ui.DropdownMenuTrigger render={
                                                    <ui.Button
                                                        variant={groupFilter[key] && groupFilter[key].length !== 0 ? 'default' : 'outline'}
                                                        size='sm'
                                                        />
                                                }>
                                                    <ui.icon.GroupIcon />
                                                    <span>{name}</span>
                                                </ui.DropdownMenuTrigger>
                                                <ui.DropdownMenuContent align='start' className='w-[200px] p-0'>
                                                    <ui.Command className='pt-0'>
                                                        <ui.CommandList className='max-h-full'>
                                                            <ui.CommandEmpty>
                                                                {{ 'en': 'No content', 'zh': '无内容' }[language]}
                                                            </ui.CommandEmpty>
                                                            {
                                                                (isGroupSearch !== false) && (
                                                                    <>
                                                                        <ui.CommandItem className='relative py-0.5'>
                                                                            <div onKeyDown={(e) => {e.stopPropagation()}}>
                                                                                <ui.Input
                                                                                    placeholder={{'en': 'Search...', 'zh': '搜索...'}[language]}
                                                                                    value={
                                                                                        Array.isArray(groupSearchData[key])
                                                                                        ? groupSearchData[key].map(i => String(i)).join(' ')
                                                                                        : groupSearchData[key] ?? ''
                                                                                    }
                                                                                    onInput={e => {
                                                                                        setGroupSearchData({
                                                                                            ...groupSearchData,
                                                                                            [key]: e.currentTarget.value
                                                                                        })
                                                                                    }}
                                                                                    className='pl-6 bg-transparent border-0 shadow-none focus-visible:ring-0'
                                                                                />
                                                                            </div>
                                                                            <ui.icon.Search className={cn(
                                                                                    'group-data-[collapsible=icon]:hidden pointer-events-none size-4 -translate-y-1/2 opacity-50 select-none',
                                                                                    'absolute top-1/2 left-2'
                                                                            )} />
                                                                        </ui.CommandItem>
                                                                        <ui.CommandSeparator />
                                                                    </>
                                                                )
                                                            }
                                                            <ui.CommandGroup className='max-h-[50vh] overflow-y-auto scrollbar-thin p-0 mt-1'>
                                                                {
                                                                    [...groupData[key]].sort(
                                                                        (([_, aCount], [__, bCount]) => bCount - aCount)
                                                                    ).map(
                                                                        ([value, count], index) => (
                                                                            <ui.CommandItem
                                                                                key={index}
                                                                                value={String(isValidElement(value) ? index : value)}
                                                                                onSelect={() => {
                                                                                    const checked = !!groupFilter[key]?.includes(value)
                                                                                    setGroupFilter({
                                                                                        ...groupFilter,
                                                                                        [key]: (
                                                                                            checked
                                                                                            ? (groupFilter[key] ?? []).filter(v => v != value)
                                                                                            : [...(groupFilter[key] ?? []), value]
                                                                                        )
                                                                                    })
                                                                                    setPage(1)
                                                                                }}
                                                                                className='[&>svg:last-child]:hidden'
                                                                            >
                                                                                <ui.Checkbox
                                                                                    checked={!!groupFilter[key]?.includes(value)}
                                                                                    className='[&_svg]:!text-primary-foreground'
                                                                                />
                                                                                <span className='min-w-0 truncate whitespace-nowrap'>{value ?? defaultValue ?? ''}</span>
                                                                                <span className='ml-auto text-muted-foreground'>{count}</span>
                                                                            </ui.CommandItem>
                                                                        )
                                                                    )
                                                                }
                                                            </ui.CommandGroup>
                                                            {
                                                                groupFilter[key] && groupFilter[key].length !== 0 && (
                                                                    <>
                                                                        <ui.CommandSeparator className='my-1' />
                                                                        <ui.CommandItem
                                                                            onSelect={() => {
                                                                                setGroupFilter({ ...groupFilter, [key]: []})
                                                                                setGroupSearchData({
                                                                                    ...groupSearchData,
                                                                                    [key]: ''
                                                                                })
                                                                                setPage(1)
                                                                            }}
                                                                            className='justify-center [&>svg:last-child]:hidden'
                                                                        >
                                                                            {{ 'en': 'Reset', 'zh': '重置' }[language]}
                                                                        </ui.CommandItem>
                                                                    </>
                                                                )
                                                            }
                                                        </ui.CommandList>
                                                    </ui.Command>
                                                </ui.DropdownMenuContent>
                                            </ui.DropdownMenu>
                                        )
                                    ))
                                }
                            </div>
                            <div className='block lg:hidden' >
                                <ui.DropdownMenu onOpenChange={()=>{setGroupOpenKey('')}}>
                                    <ui.DropdownMenuTrigger 
                                        render={
                                            <ui.Button
                                                variant={Object.values(groupFilter).some((value) => value?.length !== 0) ? 'default' : 'outline'}
                                                size='sm'
                                            />
                                        }
                                    >
                                        <ui.icon.GroupIcon />
                                    </ui.DropdownMenuTrigger>
                                    <ui.DropdownMenuContent className='w-48'>
                                        {
                                            fieldOption.map(({ key, name, isGroup, isGroupSearch, defaultValue }, index) => (
                                                isGroup && (
                                                    <ui.DropdownMenuSub
                                                        key={index}
                                                        open={groupOpenKey === key}
                                                    >
                                                        <ui.DropdownMenuSubTrigger
                                                            className={cn(
                                                                'size-full [&>svg:last-child]:hidden',
                                                                ui.buttonVariants({
                                                                    variant: groupFilter[key] && groupFilter[key].length !== 0 ? 'default' : 'ghost'
                                                                }),
                                                            )}
                                                            onClick={e => {
                                                                e.preventDefault()
                                                                setGroupOpenKey(
                                                                    groupOpenKey === key
                                                                    ? ''
                                                                    : key
                                                                )
                                                            }}
                                                        >
                                                            <span>{name}</span>
                                                            <ui.icon.ChevronDown
                                                                className={cn(
                                                                    'ml-auto size-4 opacity-50 transition-transform duration-200',
                                                                    groupOpenKey === key && 'rotate-180'
                                                                )}
                                                            />
                                                        </ui.DropdownMenuSubTrigger>
                                                        <ui.DropdownMenuSubContent
                                                            side='bottom'
                                                            align='end'
                                                            sideOffset={4}
                                                            className='w-[75vw] max-w-[320px] p-0'
                                                        >
                                                            <ui.Command className='pt-0'>
                                                                <ui.CommandList className='max-h-full'>
                                                                    <ui.CommandEmpty>
                                                                        {{ 'en': 'No content', 'zh': '无内容' }[language]}
                                                                    </ui.CommandEmpty>
                                                                    {
                                                                        (isGroupSearch !== false) && (
                                                                            <>
                                                                                <ui.CommandItem className='relative py-0.5'>
                                                                                    <div onKeyDown={(e) => {e.stopPropagation()}}>
                                                                                        <ui.Input
                                                                                            placeholder={{'en': 'Search...', 'zh': '搜索...'}[language]}
                                                                                            value={
                                                                                                Array.isArray(groupSearchData[key])
                                                                                                ? groupSearchData[key].map(i => String(i)).join(' ')
                                                                                                : groupSearchData[key] ?? ''
                                                                                            }
                                                                                            onInput={e => {
                                                                                                setGroupSearchData({
                                                                                                    ...groupSearchData,
                                                                                                    [key]: e.currentTarget.value
                                                                                                })
                                                                                            }}
                                                                                            className='pl-6 bg-transparent border-0 shadow-none focus-visible:ring-0'
                                                                                        />
                                                                                    </div>
                                                                                    <ui.icon.Search className={cn(
                                                                                            'group-data-[collapsible=icon]:hidden pointer-events-none size-4 -translate-y-1/2 opacity-50 select-none',
                                                                                            'absolute top-1/2 left-2'
                                                                                    )} />
                                                                                </ui.CommandItem>
                                                                                <ui.CommandSeparator />
                                                                            </>
                                                                        )
                                                                    }
                                                                    <ui.CommandGroup className='max-h-[50vh] overflow-y-auto scrollbar-thin p-0 mt-1'>
                                                                        {
                                                                            [...groupData[key]].sort(
                                                                                (([_, aCount], [__, bCount]) => bCount - aCount)
                                                                            ).map(
                                                                                ([value, count], index) => (
                                                                                    <ui.CommandItem
                                                                                        key={index}
                                                                                        value={String(isValidElement(value) ? index : value)}
                                                                                        onSelect={() => {
                                                                                            const checked = !!groupFilter[key]?.includes(value)
                                                                                            setGroupFilter({
                                                                                                ...groupFilter,
                                                                                                [key]: (
                                                                                                    checked
                                                                                                    ? (groupFilter[key] ?? []).filter(v => v != value)
                                                                                                    : [...(groupFilter[key] ?? []), value]
                                                                                                )
                                                                                            })
                                                                                            setPage(1)
                                                                                        }}
                                                                                        className='[&>svg:last-child]:hidden'
                                                                                    >
                                                                                        <ui.Checkbox
                                                                                            checked={!!groupFilter[key]?.includes(value)}
                                                                                            className='[&_svg]:!text-primary-foreground'
                                                                                        />
                                                                                        <span className='min-w-0 truncate whitespace-nowrap'>{value ?? defaultValue ?? ''}</span>
                                                                                        <span className='ml-auto text-muted-foreground'>{count}</span>
                                                                                    </ui.CommandItem>
                                                                                )
                                                                            )
                                                                        }
                                                                    </ui.CommandGroup>
                                                                    {
                                                                        groupFilter[key] && groupFilter[key].length !== 0 && (
                                                                            <>
                                                                                <ui.CommandSeparator className='my-1' />
                                                                                <ui.CommandItem
                                                                                    onSelect={() => {
                                                                                        setGroupFilter({ ...groupFilter, [key]: []})
                                                                                        setGroupSearchData({
                                                                                            ...groupSearchData,
                                                                                            [key]: ''
                                                                                        })
                                                                                        setPage(1)
                                                                                    }}
                                                                                    className='justify-center [&>svg:last-child]:hidden'
                                                                                >
                                                                                    {{ 'en': 'Reset', 'zh': '重置' }[language]}
                                                                                </ui.CommandItem>
                                                                            </>
                                                                        )
                                                                    }
                                                                </ui.CommandList>
                                                            </ui.Command>
                                                        </ui.DropdownMenuSubContent>
                                                    </ui.DropdownMenuSub>
                                                )
                                            ))
                                        }
                                        {
                                            Object.values(groupFilter).some((value) => value?.length !== 0) && (
                                                <>
                                                    <ui.DropdownMenuSeparator className='my-1' />
                                                    <ui.DropdownMenuItem
                                                        onClick={() => {
                                                            setGroupFilter({})
                                                            setGroupSearchData({})
                                                            setPage(1)
                                                        }}
                                                        className='justify-center [&>svg:last-child]:hidden'
                                                    >
                                                        {{ 'en': 'Reset', 'zh': '重置' }[language]}
                                                    </ui.DropdownMenuItem>
                                                </>
                                            )
                                        }
                                    </ui.DropdownMenuContent>
                                </ui.DropdownMenu>
                            </div>
                        </>
                    )
                }
                {
                    (
                        searchOption && (
                            <>
                                <div className='hidden lg:block relative py-0.5'>
                                    <ui.Input
                                        placeholder={searchOption.placeholder || {'en': 'Search...', 'zh': '搜索...'}[language]}
                                        value={searchValue}
                                        onInput={e => {
                                            setSearchValue(e.currentTarget.value)
                                            setPage(1)
                                        }}
                                        className='h-8 pl-[1.95rem]'
                                    />
                                    <ui.icon.Search className={cn(
                                            'group-data-[collapsible=icon]:hidden pointer-events-none size-4 -translate-y-1/2 opacity-50 select-none',
                                            'absolute top-1/2 left-2'
                                    )} />
                                </div>
                                <div className='block lg:hidden'>
                                    <ui.DropdownMenu>
                                        <ui.DropdownMenuTrigger render={<ui.Button variant='outline' size='sm' />}>
                                            <ui.icon.Search />
                                        </ui.DropdownMenuTrigger>
                                        <ui.DropdownMenuContent
                                            sideOffset={4}
                                            align='end'
                                            className='w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg p-0'
                                        >
                                            <div onKeyDown={(e) => {e.stopPropagation()}}>
                                                <ui.Input
                                                    placeholder={searchOption.placeholder || {'en': 'Search...', 'zh': '搜索...'}[language]}
                                                    value={searchValue}
                                                    onInput={e => {
                                                        setSearchValue(e.currentTarget.value)
                                                        setPage(1)
                                                    }}
                                                    className='bg-transparent border-0 shadow-none focus-visible:ring-0'
                                                />
                                            </div>
                                        </ui.DropdownMenuContent>
                                    </ui.DropdownMenu>
                                </div>
                            </>
                        )
                    )
                }
            </div>
        </div>
    )
}

/**
 * Table top menu component.
 * 
 * @param pageData - Table now page data.
 * @param setData - Function of set table data state value.
 * @param fieldOption - Field option state value.
 *     - `Attribute key` : Field key.
 *     - `Attribute name` : Field show name.
 *     - `Attribute isBadge` : Whether show to badge element.
 *     - `Attribute isHide` : Whether hide field.
 *     - `Attribute isSort` : Whether show sort button.
 *     - `Attribute isGroup` : Whether show group button.
 *     - `Attribute isGroupSearch` : Whether show search input in group button.
 *     - `Attribute sortMethod` : Sort method.
 *     - `Attribute defaultValue` : Replace none value.
 * @param selectRows - Selected rows state value.
 * @param setSelectRows - Function of selected rows state value.
 * @param rowOption - Each row buttons option.
 *     - `Attribute options` : Normal buttons option.
 *     - `Attribute destructiveOptions` : Important buttons option.
 * @param language - Language type.
 */
function TableMain<Row extends Record<string, any>>(
{
    pageData,
    setData,
    fieldOption,
    selectRows,
    setSelectRows,
    rowOption,
    language
}: {
    pageData: Row[],
    setData: (value: Row[] | ((value: Row[]) => Row[])) => void,
    fieldOption: TableFieldOption<Row>,
    selectRows?: Row[],
    setSelectRows: (value: Row[]) => void,
    rowOption?: TableRowOption<Row>,
    language: 'en' | 'zh'
}) {

    // Parameter.
    const { PopupBox, PopupBoxTrigger, PopupBoxContent } = ui.usePopupBox()
    let iterRowOptions: TableRowOption<Row>

    return (
        <div className='rounded-lg border overflow-hidden'>
            <ui.Table className={cn(
                '[&_th]:py-1.5 [&_td]:py-3 md:[&_th]:py-2 md:[&_td]:py-3.5',
                selectRows && '[&_th:first-child]:w-8 [&_td:first-child]:w-8',
                rowOption && '[&_th:last-child]:w-16 [&_td:last-child]:w-16'
            )}>
                <ui.TableHeader className='sticky top-0 z-10 bg-muted'>
                    <ui.TableRow>
                        {
                            selectRows && (
                                <ui.TableHead className='pl-2 md:pl-3'>
                                    <ui.Checkbox
                                        checked={pageData.length !== 0 && pageData.every(row => selectRows.includes(row))}
                                        onCheckedChange={(checked) => {
                                            checked
                                            ? setSelectRows(pageData)
                                            : setSelectRows([])
                                        }}
                                        indeterminate={pageData.length !== 0 && selectRows.length !== 0 && !pageData.every(row => selectRows.includes(row))}
                                    />
                                </ui.TableHead>
                            )
                        }
                        {
                            fieldOption.map(({ key, name, isHide, isSort, sortMethod }, index) => (
                                !isHide && (
                                    <ui.TableHead key={index} className='overflow-hidden'>
                                        {
                                            isSort
                                            ? (
                                                <ui.DropdownMenu>
                                                    <ui.DropdownMenuTrigger
                                                        render={<ui.Button
                                                            variant='ghost'
                                                            size='sm'
                                                            className={cn(
                                                                'relative right-1 pl-1 pr-0 gap-0',
                                                                'hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background'
                                                            )}
                                                        />}
                                                    >
                                                        <span>{name}</span>
                                                        <ui.icon.ChevronsUpDown />
                                                    </ui.DropdownMenuTrigger>
                                                    <ui.DropdownMenuContent align='start' className='w-auto'>
                                                        <ui.DropdownMenuItem onClick={() => {
                                                            setData((data) => (
                                                                sortMethod
                                                                ? [...data].sort(sortMethod)
                                                                : sort(data, 'asc', key)
                                                            ))
                                                        }}>
                                                            <ui.icon.ChevronUp />
                                                            <span>{{'en': 'Asc', 'zh': '升序'}[language]}</span>
                                                        </ui.DropdownMenuItem>
                                                        <ui.DropdownMenuItem onClick={() => {
                                                            setData((data) => (
                                                                sortMethod
                                                                ? [...data].sort(sortMethod).reverse()
                                                                : sort(data, 'desc', key)
                                                            ))
                                                        }}>
                                                            <ui.icon.ChevronDown />
                                                            <span>{{'en': 'Desc', 'zh': '降序'}[language]}</span>
                                                        </ui.DropdownMenuItem>
                                                    </ui.DropdownMenuContent>
                                                </ui.DropdownMenu>
                                            ) : name
                                        }
                                    </ui.TableHead>
                                )
                            )
                        )}
                        {
                            rowOption && <ui.TableHead />
                        }
                    </ui.TableRow>
                </ui.TableHeader>
                <ui.TableBody>
                    {
                        pageData.map((row, index) => (
                            <ui.TableRow
                                key={index}
                                className={
                                    selectRows && selectRows.includes(row)
                                    ? 'bg-muted/50'
                                    : ''
                                }
                            >
                                {
                                    selectRows && (
                                        <ui.TableCell className='pl-2 md:pl-3'>
                                            <ui.Checkbox
                                                checked={selectRows.includes(row)}
                                                onCheckedChange={(checked) => {
                                                    checked
                                                    ? setSelectRows([...selectRows, row])
                                                    : setSelectRows(selectRows.filter((element) => element !== row))
                                                }}
                                            />
                                        </ui.TableCell>
                                    )
                                }
                                {
                                    fieldOption.map(({ key, isBadge, isHide, defaultValue }, index) => (
                                        !isHide && (
                                            <ui.TableCell key={index}>
                                                <PopupBox>
                                                    <PopupBoxTrigger
                                                        delay={1500}
                                                        nativeButton={false}
                                                        render={
                                                            <div className={cn(
                                                                'flex justify-start content-center items-center max-w-xs',
                                                                'truncate break-normal'
                                                            )}/>
                                                        }
                                                    >
                                                        {row[key] == null ? defaultValue : formatValue(row[key], isBadge)}
                                                    </PopupBoxTrigger>
                                                    {
                                                        row[key] != null && (
                                                            <PopupBoxContent
                                                                align='start'
                                                                sideOffset={-34}
                                                                alignOffset={-16}
                                                                className='flex-wrap max-w-xs whitespace-pre-line break-all'
                                                            >
                                                                {formatValue(row[key], isBadge)}
                                                            </PopupBoxContent>
                                                        )
                                                    }
                                                </PopupBox>
                                            </ui.TableCell>
                                        )
                                    ))
                                }
                                {
                                    rowOption && (
                                        <ui.TableCell className='overflow-hidden'>
                                            <ui.DropdownMenu modal={false}>
                                                <ui.DropdownMenuTrigger render={
                                                    <ui.Button
                                                        variant='ghost'
                                                        className='flex size-4 text-muted-foreground data-[state=open]:bg-muted'
                                                        size='icon'
                                                    />
                                                }>
                                                    <ui.icon.EllipsisVertical />
                                                </ui.DropdownMenuTrigger>
                                                <ui.DropdownMenuContent align='end' className='w-auto'>
                                                    {
                                                        (
                                                            iterRowOptions = (
                                                                (typeof rowOption === 'function')
                                                                ? rowOption(row)
                                                                : rowOption
                                                            )
                                                        ).options && (
                                                            iterRowOptions.options.map(
                                                                ({name, method}, index) => (
                                                                    typeof method === 'string'
                                                                    ? (
                                                                        <ui.DropdownMenuItem
                                                                            key={index}
                                                                            render={<a target='_blank' href={method} />}
                                                                        >
                                                                            <span className='whitespace-nowrap'>{name}</span>
                                                                        </ui.DropdownMenuItem>
                                                                    ) : (
                                                                        <ui.DropdownMenuItem
                                                                            key={index}
                                                                            onClick={() => {method && method(row)}}
                                                                            disabled={method === null}
                                                                        >
                                                                            <span className='whitespace-nowrap'>{name}</span>
                                                                        </ui.DropdownMenuItem>
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    }
                                                    {iterRowOptions.options && iterRowOptions.destructiveOptions && <ui.DropdownMenuSeparator />}
                                                    {
                                                        iterRowOptions.destructiveOptions && (
                                                            iterRowOptions.destructiveOptions.map(
                                                                ({name, method}, index) => (
                                                                    typeof method === 'string'
                                                                    ? (
                                                                        <ui.DropdownMenuItem
                                                                            key={index}
                                                                            variant='destructive'
                                                                            render={<a target='_blank' href={method} />}
                                                                        >
                                                                            <span className='whitespace-nowrap'>{name}</span>
                                                                        </ui.DropdownMenuItem>
                                                                    ) : (
                                                                        <ui.DropdownMenuItem
                                                                            key={index}
                                                                            variant='destructive'
                                                                            onClick={() => {method && method(row)}}
                                                                            disabled={method === null}
                                                                        >
                                                                            <span className='whitespace-nowrap'>{name}</span>
                                                                        </ui.DropdownMenuItem>
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    }
                                                </ui.DropdownMenuContent>
                                            </ui.DropdownMenu>
                                        </ui.TableCell>
                                    )
                                }
                            </ui.TableRow>
                        ))
                    }
                </ui.TableBody>
            </ui.Table>
        </div>
    )
}

/**
 * Table top menu component.
 * 
 * @param total - Total rows number.
 * @param pageSize - Now page data rows size.
 * @param setPageSize - Function of set now page data rows size.
 * @param page - Now page number.
 * @param setPage - Function of set sow page number.
 * @param selectRows - Selected rows state value.
 * @param language - Language type.
 */
function TablePagination<Row>(
    {
        total,
        pageSize,
        setPageSize,
        page,
        setPage,
        selectRows,
        language
    }: {
        total: number,
        pageSize: number,
        setPageSize: (value: number) => void,
        page: number,
        setPage: (value: number) => void,
        selectRows?: Row[],
        language: 'en' | 'zh'
    }
) {

    // Parameter.
    const [pageSizeInput, setPageSizeInput] = useState(`${pageSize}`)
    const [pageInput, setPageInput] = useState(`${page}`)
    const totalPage = Math.ceil(total / pageSize)
    const pageSizeOptions = rangeArr(1, 101)
    if (!pageSizeOptions.includes(pageSize)) {
        pageSizeOptions.push(pageSize)
        pageSizeOptions.sort((a, b) => a - b)
    }
    const pageSizeOptionsStr = pageSizeOptions.map((value) => String(value))
    const pageItems = rangeArr(1, totalPage + 1).map((value) => String(value))

    // Effect.
    useEffect(
        () => {
            setPageInput(String(page))
        },
        [page]
    )

    return (
        <div className='flex items-center justify-between px-4'>
            <div className='hidden flex-1 text-sm text-muted-foreground lg:flex'>
                {
                    selectRows
                    ? { 'en': `${selectRows.length} / ${total} row(s) selected`, 'zh': `已选择 ${selectRows.length} / ${total} 条` }[language]
                    : { 'en': `${total} row(s)`, 'zh': `共 ${total} 条` }[language]
                }
            </div>
            <div className='flex w-full items-center gap-8 lg:w-fit'>
                <div className='hidden items-center gap-2 lg:flex'>
                    <ui.Label htmlFor='rows-per-page' className='text-sm font-medium'>
                        {{ 'en': 'Per page', 'zh': '每页' }[language]}
                    </ui.Label>
                    <ui.Combobox
                        items={pageSizeOptionsStr}
                        value={`${pageSize}`}
                        onValueChange={(value) => {
                            if (value) {
                                setPageSizeInput(value)
                                setPageSize(Number(value))
                                setPage(1)
                            }
                        }}
                    >
                        <ui.ComboboxInput
                            id='rows-per-page'
                            value={pageSizeInput}
                            onChange={(e) => {setPageSizeInput(e.currentTarget.value)}}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    const value = pageSizeInput.trim()
                                    if (pageSizeOptionsStr.includes(value)) {
                                        setPageSize(Number(value))
                                        setPage(1)
                                    }
                                    else {
                                        setPageSizeInput(`${pageSize}`)
                                    }
                                }
                            }}
                            showTrigger={false}
                            className='w-13 h-8'
                        />
                        <ui.ComboboxContent side='top' className='max-h-60'>
                            <ui.ComboboxList>
                                {
                                    (page: string, index) => (
                                        <ui.ComboboxItem key={index} value={page}>
                                            {page}
                                        </ui.ComboboxItem>
                                    )
                                }
                            </ui.ComboboxList>
                        </ui.ComboboxContent>
                    </ui.Combobox>
                    <ui.Label htmlFor='rows-per-page' className='text-sm font-medium'>
                        {{ 'en': 'rows', 'zh': '条' }[language]}
                    </ui.Label>
                </div>
                <div className='flex w-fit items-center justify-center text-sm font-medium'>
                    <div className='ml-auto flex items-center gap-2 lg:ml-0'>
                        <ui.Label htmlFor='jump-page' className='text-sm font-medium'>
                            {{ 'en': 'Page', 'zh': '第' }[language]}
                        </ui.Label>
                        <ui.Combobox
                            items={pageItems}
                            value={`${page}`}
                            onValueChange={(value) => {
                                if (value) {
                                    setPage(Number(value))
                                }
                            }}
                        >
                            <ui.ComboboxInput
                                id='jump-page'
                                value={pageInput}
                                onChange={(e) => {setPageInput(e.currentTarget.value)}}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        const value = pageInput.trim()
                                        if (pageItems.includes(value)) {
                                            setPage(Number(value))
                                        }
                                        else {
                                            setPageInput(`${page}`)
                                        }
                                    }
                                }}
                                showTrigger={false}
                                className='w-13 h-8'
                            />
                            <ui.ComboboxContent side='top' className='max-h-60'>
                                <ui.ComboboxList>
                                    {
                                        (pageItem: string, index) => (
                                            <ui.ComboboxItem key={index} value={pageItem}>
                                                {pageItem}
                                            </ui.ComboboxItem>
                                        )
                                    }
                                </ui.ComboboxList>
                            </ui.ComboboxContent>
                        </ui.Combobox>
                        <ui.Label htmlFor='jump-page' className='text-sm font-medium'>
                            {{ 'en': ` of ${totalPage}`, 'zh': ` / ${totalPage} 页` }[language]}
                        </ui.Label>
                    </div>
                </div>
                <div className='ml-auto flex items-center gap-2 lg:ml-0'>
                    <ui.Button
                        variant='outline'
                        className='hidden h-8 w-8 p-0 lg:flex'
                        onClick={() => {setPage(1)}}
                        disabled={page === 1}
                    >
                        <ui.icon.ChevronsLeft />
                    </ui.Button>
                    <ui.Button
                        variant='outline'
                        className='size-8'
                        size='icon'
                        onClick={() => {setPage(page - 1)}}
                        disabled={page === 1}
                    >
                    <ui.icon.ChevronLeft />
                    </ui.Button>
                    <ui.Button
                        variant='outline'
                        className='size-8'
                        size='icon'
                        onClick={() => {setPage(page + 1)}}
                        disabled={page === totalPage}
                    >
                        <ui.icon.ChevronRight />
                    </ui.Button>
                    <ui.Button
                        variant='outline'
                        className='hidden size-8 lg:flex'
                        size='icon'
                        onClick={() => {setPage(totalPage)}}
                        disabled={page === totalPage}
                    >
                        <ui.icon.ChevronsRight />
                    </ui.Button>
                </div>
            </div>
        </div>
    )
}

/**
 * Format value to React note element.
 * 
 * @param value - Value.
 * @param isBadge - Whether show to badge element.
 * @returns - React note element.
 */
function formatValue(value: any, isBadge: boolean = false): string | ReactElement {

    // Format.
    if (isBadge) {
        const arrayAvalue = (
            Array.isArray(value)
            ? value
            : [value]
        )
        return (
            <TextBadges
                contents={arrayAvalue.map(i => formatValue(i))}
            />
        )
    }
    if (isValidElement(value)) {
        return value
    }
    if (value instanceof Date) {
        return value.toLocaleString()
    }
    if (value == null) {
        return ''
    }
    if (typeof value === 'object') {
        return JSON.stringify(value)
    }

    return String(value)
}
