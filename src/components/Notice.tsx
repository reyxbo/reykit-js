/**
 * @Time    : 2026-03-17
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Notice components.
 */

import { ReactNode } from 'react'
import { useTheme } from 'next-themes'
import { Toaster as Sonner, type ToasterProps } from 'sonner'
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from 'lucide-react'

export { toast as notice } from 'sonner'

const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = 'system' } = useTheme()

    return (
        <Sonner
        theme={theme as ToasterProps['theme']}
        className='toaster group'
        icons={{
            success: (
            <CircleCheckIcon className='size-4' />
            ),
            info: (
            <InfoIcon className='size-4' />
            ),
            warning: (
            <TriangleAlertIcon className='size-4' />
            ),
            error: (
            <OctagonXIcon className='size-4' />
            ),
            loading: (
            <Loader2Icon className='size-4 animate-spin' />
            ),
        }}
        style={
            {
            '--normal-bg': 'var(--popover)',
            '--normal-text': 'var(--popover-foreground)',
            '--normal-border': 'var(--border)',
            '--border-radius': 'var(--radius)',
            } as React.CSSProperties
        }
        toastOptions={{
            classNames: {
            toast: 'cn-toast',
            },
        }}
        {...props}
        />
    )
}

/**
 * Top banner notice component.
 * 
 * @param props.children - The node tree of the mounting context.
 */
export function Notice({ children }: { children: ReactNode }) {
    return (
        <>
            {children}
            <Toaster position='top-center' richColors />
        </>
    )
}
