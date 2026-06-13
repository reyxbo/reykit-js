/**
 * @Time    : 2026-06-13
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Text components.
 */

import { ReactNode } from 'react'

/**
 * Text component of with icon.
 * 
 * @param icon - Icon content.
 * @param text - Text content.
 */
export function IconText(
    icon: ReactNode,
    text: string
) {
    return (
        <div className='flex items-center gap-1'>
            <div className='size-4 hidden min-[400px]:inline'>
                {icon}
            </div>
            <span className='whitespace-nowrap'>{text}</span>
        </div>
    )
}
