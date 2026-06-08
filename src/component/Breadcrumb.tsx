/**
 * @Time    : 2026-03-27
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Breadcrumb components.
 */

import { Fragment } from 'react'
import { useLocation } from 'react-router-dom'

import * as ui from './ui'

export type BreadcrumbDict = Record<string, { label: string; href?: string }[]>

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
                            <Fragment key={index}>
                                <ui.BreadcrumbItem>
                                    {
                                        item.href
                                        ? <ui.BreadcrumbLink href={item.href}>{item.label}</ui.BreadcrumbLink>
                                        : <ui.BreadcrumbPage>{item.label}</ui.BreadcrumbPage>
                                    }
                                </ui.BreadcrumbItem>
                                {index < data.length - 1 && <ui.BreadcrumbSeparator className='-mx-1 md:mx-0' />}
                            </Fragment>
                        )
                    )
                }
            </ui.BreadcrumbList>
        </ui.Breadcrumb>
    )
}
