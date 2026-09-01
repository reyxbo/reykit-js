/**
 * @Time    : 2026-06-13
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Text components.
 */

import { ReactNode, ComponentProps } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import * as ui from './ui'
import { useIsMobile } from '../lib/react'
import { cn } from '../lib/twc'

/**
 * Text component of with icon.
 * 
 * @param icon - Icon content.
 * @param text - Text content.
 * @param url - Click to open URL.
 * @param mobileHideIcon - Whether hide icon content on mobile devices.
 * @param mobileHideText - Whether hide text content on mobile devices.
 */
export function IconText(
    {
        icon,
        text,
        url,
        hideMobileIcon = false,
        hideMobileText = false,
        className,
        ...args
    }: {
        icon: ReactNode,
        text: string | ReactNode,
        url?: string,
        hideMobileIcon?: boolean,
        hideMobileText?: boolean
    } & ComponentProps<'div'>
) {

    // Parameter.
    const isMobile = useIsMobile()
    const Content = (
        <div className='flex content-center items-center gap-1'>
            {
                hideMobileIcon && isMobile || icon
            }
            {
                hideMobileText && isMobile || (
                    typeof text === 'string'
                    ? <div className='whitespace-nowrap'>{text}</div>
                    : text
                )
            }
        </div>
    )

    return (
        <div className={cn('flex content-center items-center', className)} {...args}>
            {
                url
                ? (
                    <ui.Button
                        variant='link'
                        onClick={() => open(url)}
                        className='flex content-center items-center h-auto min-h-0 p-0 m-0 border-none'
                    >
                        {Content}
                    </ui.Button>
                )
                : Content
            }
        </div>
    )
}

/**
 * Text component of supporting Markdown.
 */
export function MarkdownText(
    {
        className,
        children,
        ...args
    }: {
        children?: string | null
    } & ComponentProps<'article'>
) {
    return (
        <article className={cn('markdown-body', className)} {...args} >
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    input: ({ ...props }) => (
                        <input
                            {...props}
                            disabled
                        />
                    ),
                }}
            >
                {children}
            </ReactMarkdown>
        </article>
    )
}
