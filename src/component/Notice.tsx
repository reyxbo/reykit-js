/**
 * @Time    : 2026-03-17
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Notice components.
 */

import { ReactNode } from 'react'
import { Toaster as Sonner, type ToasterProps } from 'sonner'

import * as ui from './ui'
import { cn } from '../lib/twc'

export { toast as notice } from 'sonner'

/**
 * Top banner notice component.
 * 
 * @param props.children - The node tree of the mounting context.
 */
export function Notice(
    {
        children,
        position='top-center',
        richColors=true,
        toastOptions,
        ...props
    }: {
        children: ReactNode,
    } & ToasterProps
) {
    return (
        <>
            {children}
            <ui.Toaster
                position={position}
                richColors={richColors}
                toastOptions={{
                    className: cn('justify-center', toastOptions?.className),
                    ...toastOptions
                }}
                {...props}
            />
        </>
    )
}
