/**
 * @Time    : 2026-08-28
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Badge components.
 */

import { ReactNode, ComponentProps } from 'react'

import * as ui from './ui'
import { cn } from '../lib/twc'

/**
 * Text component of with multiple badges.
 * 
 * @param texts - Text list.
 */
export function TextBadges(
    {
        contents,
        className,
        ...args
    }: {
        contents: ReactNode[]
    } & ComponentProps<'div'>
) {
    return (
        <div className={cn('size-full flex gap-0.5 [flex-wrap:inherit]', className)} {...args}>
            {
                contents.map((content, index) => (
                    <ui.Badge key={index} variant='outline' className='items-start whitespace-normal break-all'>
                        {content}
                    </ui.Badge>
                ))
            }
        </div>
    )
}
