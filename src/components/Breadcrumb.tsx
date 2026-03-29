/**
 * @Time    : 2026-03-27
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Breadcrumb components.
 */

import { useLocation } from 'react-router-dom'

import * as ui from './ui'

type BreadcrumbDict = Record<string, { label: string; href?: string }[]>

/**
 * Breadcrumb components.
 * 
 * @param props.dict - Breadcrumb data dictionary.
 */
export function Breadcrumb({ dict } : { dict: BreadcrumbDict }) {

    // Parameter.
    const { pathname } = useLocation()
    const data = dict[pathname] || []

    return (
        <ui.Breadcrumb>
            <ui.BreadcrumbList>
                {
                    data.map(
                        (item, index) => (
                            <ui.BreadcrumbItem key={index}>
                                {
                                    item.href
                                    ? <ui.BreadcrumbLink href={item.href}>{item.label}</ui.BreadcrumbLink>
                                    : <ui.BreadcrumbPage>{item.label}</ui.BreadcrumbPage>
                                }
                                {index < data.length - 1 && <ui.BreadcrumbSeparator className='-mx-1 md:mx-0' />}
                            </ui.BreadcrumbItem>
                        )
                    )
                }
            </ui.BreadcrumbList>
        </ui.Breadcrumb>
    )
}
