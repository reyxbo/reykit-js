/**
 * @Time    : 2026-03-27
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Breadcrumb components.
 */

import { ComponentProps } from 'react'
import { useLocation } from 'react-router-dom'
import { mergeProps } from '@base-ui/react/merge-props'
import { useRender } from '@base-ui/react/use-render'
import { ChevronRightIcon } from 'lucide-react'

import { cn } from '../twc'

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
        <UIBreadcrumb>
            <UIBreadcrumbList>
                {
                    data.map(
                        (item, index) => (
                            <UIBreadcrumbItem key={index}>
                                {
                                    item.href
                                    ? <UIBreadcrumbLink href={item.href}>{item.label}</UIBreadcrumbLink>
                                    : <UIBreadcrumbPage>{item.label}</UIBreadcrumbPage>
                                }
                                {index < data.length - 1 && <UIBreadcrumbSeparator className='-mx-1 md:mx-0' />}
                            </UIBreadcrumbItem>
                        )
                    )
                }
            </UIBreadcrumbList>
        </UIBreadcrumb>
    )
}

function UIBreadcrumb({ className, ...props }: ComponentProps<'nav'>) {
    return (
        <nav
        aria-label='breadcrumb'
        data-slot='breadcrumb'
        className={cn(className)}
        {...props}
        />
    )
}

function UIBreadcrumbList({ className, ...props }: ComponentProps<'ol'>) {
    return (
        <ol
        data-slot='breadcrumb-list'
        className={cn(
            'text-muted-foreground gap-1.5 text-sm sm:gap-2.5 flex flex-wrap items-center wrap-break-word',
            className
        )}
        {...props}
        />
    )
}

function UIBreadcrumbItem({ className, ...props }: ComponentProps<'li'>) {
    return (
        <li
        data-slot='breadcrumb-item'
        className={cn('gap-1.5 inline-flex items-center', className)}
        {...props}
        />
    )
}

function UIBreadcrumbLink({
    className,
    render,
    ...props
}: useRender.ComponentProps<'a'>) {
    return useRender({
        defaultTagName: 'a',
        props: mergeProps<'a'>(
        {
            className: cn('hover:text-foreground transition-colors', className),
        },
        props
        ),
        render,
        state: {
        slot: 'breadcrumb-link',
        },
    })
}

function UIBreadcrumbPage({ className, ...props }: ComponentProps<'span'>) {
  return (
        <span
        data-slot='breadcrumb-page'
        role='link'
        aria-disabled='true'
        aria-current='page'
        className={cn('text-foreground font-normal', className)}
        {...props}
        />
  )
}

function UIBreadcrumbSeparator({
    children,
    className,
    ...props
}: ComponentProps<'li'>) {
    return (
        <li
        data-slot='breadcrumb-separator'
        role='presentation'
        aria-hidden='true'
        className={cn('[&>svg]:size-3.5', className)}
        {...props}
        >
        {children ?? (
            <ChevronRightIcon />
        )}
        </li>
    )
}
