/**
 * @Time    : 2026-03-17
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Notice components.
 */

import { ReactNode } from 'react'

import * as ui from './ui'

export { toast as notice } from 'sonner'

/**
 * Top banner notice component.
 * 
 * @param props.children - The node tree of the mounting context.
 */
export function Notice({ children }: { children: ReactNode }) {
    return (
        <>
            {children}
            <ui.Toaster position='top-center' richColors />
        </>
    )
}
