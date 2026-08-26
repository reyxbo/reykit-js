/**
 * @Time    : 2026-06-13
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Text components.
 */

import { ReactNode, ComponentProps } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { useIsMobile } from '../lib/react'

/**
 * Text component of with icon.
 * 
 * @param icon - Icon content.
 * @param text - Text content.
 * @param mobileHideIcon - Whether hide icon content on mobile devices.
 * @param mobileHideText - Whether hide text content on mobile devices.
 */
export function IconText(
    {
        icon,
        text,
        hideMobileIcon = false,
        hideMobileText = false
    }: {
        icon: ReactNode,
        text: string | ReactNode,
        hideMobileIcon?: boolean,
        hideMobileText?: boolean
    }
) {

    // Parameter.
    const isMobile = useIsMobile()

    return (
        <div className='flex items-center gap-1'>
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
