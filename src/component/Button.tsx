/**
 * @Time    : 2026-03-11
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Button components.
 */

import { ReactNode, ComponentProps, MouseEvent, useState, useRef } from 'react';

import * as ui from './ui'
import { useIndex, useValueByMobile, useExec } from '../lib/react'
import { cn } from '../lib/twc'

/**
 * Button component of cycle display children.
 * 
 * @param props.childrens - Children array.
 * @param props.handleCycle - Handle cycle.
 */
export function CycleButton(
    {
        childrens,
        handleCycle,
        onClick,
        ...props
    }: {
        childrens: ReactNode[],
        handleCycle: (index: number) => any | Promise<any>
        data: { children: ReactNode, handleClick: (event: MouseEvent<HTMLButtonElement>) => void }[],
    } & ComponentProps<'button'>
) {

    // Parameter.
    const [index, setIndex] = useIndex(childrens)

    // On click.
    const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {

        // Handle.
        if (onClick) {
            onClick(event)
        }
        await handleCycle(index)
        setIndex()
    }

    return (
        <button onClick={handleClick} {...props}>
            {childrens[index]}
        </button>
    )
}

/**
 * Button component of scroll to top.
 * Initial hide, display after scrolling down more than 1 screen height.
 *
 * @param buttonColor - Button color, need hexadecimal color value.
 */
export function ScrollToTopButton(
    {
        buttonColor = '#8470FF',
        className,
        style,
        ...args
    }: {
        buttonColor?: string
    } & ComponentProps<'div'>
) {

    // Parameter.
    const targetRef = useRef<HTMLElement | null>(null)
    const [visible, setVisible] = useState(false)
    const [progress, setProgress] = useState(0)
    const iconStrokeWidth = useValueByMobile(2, 3)

    // Handle.
    useExec(
        () => {
            const handleScroll = (e: Event) => {
                const element = e.target
                if (!(element instanceof HTMLElement)) return
                if (element.scrollHeight <= element.clientHeight) {
                    targetRef.current = null
                    setVisible(false)
                    setProgress(0)
                    return
                }
                if (element.clientHeight < window.innerHeight * 0.5) {
                    targetRef.current = null
                    setVisible(false)
                    setProgress(0)
                    return
                }
                const rect = element.getBoundingClientRect()
                if (rect.right < window.innerWidth - 40) {
                    return
                }
                const maxScroll = element.scrollHeight - element.clientHeight
                const currentScroll = element.scrollTop
                const progress = maxScroll > 0
                    ? currentScroll / maxScroll
                    : 0
                targetRef.current = element
                setProgress(progress)
                setVisible(currentScroll > element.clientHeight)
            }
            document.addEventListener('scroll', handleScroll, true)
            return () => {
                document.removeEventListener('scroll', handleScroll, true)
                targetRef.current = null
            }
        }
    )

    // Break.
    if (!visible) return null

    return (
        <div
            {...args}
            className={cn(
                className,
                'fixed size-10 md:size-12 rounded-full p-0.5 md:p-0.75 transition-all duration-300 ease-out shadow-md'
            )}
            style={{
                ...style,
                background: `conic-gradient(
                    ${buttonColor} ${progress * 360}deg,
                    transparent ${progress * 360}deg
                )`
            }}
        >
            <ui.Button
                size='icon'
                variant='outline'
                className='size-full rounded-full'
                onClick={() => {
                    targetRef.current?.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    })
                }}
            >
                <ui.icon.ArrowBigUp
                    color={buttonColor}
                    strokeWidth={iconStrokeWidth}
                />
            </ui.Button>
        </div>
    )
}
