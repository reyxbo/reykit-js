/**
 * @Time    : 2026-03-27
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Breadcrumb components.
 */

import { ComponentProps, Fragment } from 'react'
import { useLocation } from 'react-router-dom'

import * as ui from './ui'
import { cn } from '../lib/twc'

export { type BreadcrumbDict, Breadcrumb }

type BreadcrumbDict = Record<string, { label: string; href?: string }[]>

/**
 * Breadcrumb components.
 * 
 * @param props.dict - Breadcrumb data dictionary.
 */
function Breadcrumb(
    {
        dict,
        ...props
    } : { dict: BreadcrumbDict } & ComponentProps<typeof ui.Breadcrumb>
) {

    // Parameter.
    const { pathname } = useLocation()
    const data = dict[pathname] || []

    return (
        <ui.Breadcrumb {...props} className={cn('min-w-0 overflow-hidden', props.className)}>
            <ui.BreadcrumbList className='min-w-0 flex-nowrap overflow-hidden'>
                {
                    data.map(
                        (item, index) => (
                            <Fragment key={index}>
                                <ui.BreadcrumbItem className='min-w-0'>
                                    {
                                        item.href
                                        ? <ui.BreadcrumbLink href={item.href} className='truncate'>{item.label}</ui.BreadcrumbLink>
                                        : <ui.BreadcrumbPage className='truncate'>{item.label}</ui.BreadcrumbPage>
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
