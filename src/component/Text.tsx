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
        hideMobileText = false
    }: {
        icon: ReactNode,
        text: string | ReactNode,
        url?: string,
        hideMobileIcon?: boolean,
        hideMobileText?: boolean
    }
) {

    // Parameter.
    const isMobile = useIsMobile()
    const Content = (
        <>
            {
                hideMobileIcon && isMobile || icon
            }
            {
                hideMobileText && isMobile || (
                    typeof text === 'string'
                    ? <span className='whitespace-nowrap'>{text}</span>
                    : text
                )
            }
        </>
    )

    return (
        <div className='flex items-center gap-1'>
            {
                url
                ? (
                    <ui.Button variant='link' onClick={() => open(url)}>
                        {Content}
                    </ui.Button>
                ) : Content
            }
        </div>
    )
}

/**
 * Text component of support Markdown.
 */
export function MarkdownText({ ...args }: ComponentProps<typeof ReactMarkdown>) {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                pre: ({ children, ...props }) => (
                    <pre
                        {...props}
                        className='whitespace-pre-wrap [overflow-wrap:anywhere] max-w-full'
                    >
                        {children}
                    </pre>
                ),
            }}
            {...args}
        />
    )
}
