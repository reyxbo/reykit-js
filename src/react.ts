/**
 * @Time    : 2026-03-11
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : React methods.
 */

import { ReactNode, useState, useEffect } from 'react'
import { createRoot, Root } from 'react-dom/client'

const MOBILE_BREAKPOINT = 768

let root: Root | null = null

/**
 * Render react note.
 * 
 * @param app - React note.
 * @param elementId - Render HTML element ID.
 */
export function renderReact(app: ReactNode, elementId: string = 'root') {

    // Render.
    const element = document.getElementById(elementId)
    if (!element) throw new Error(`Element ID "${elementId}" not found`)
    if (!root) {
        root = createRoot(element)
    }
    root.render(app)
}

/**
 * Hook of toggle.
 * 
 * @param array - Array.
 * @param loop - Whether to loop count.
 * @returns Returns a stateful open value, and a function to automatic count it.
 */
export function useOpen(defaultOpen: boolean = true): [boolean, (open?: boolean) => void] {

    // Parameter.
    const [state, setState] = useState(defaultOpen)

    // Set function.
    const setOpen = (open?: boolean) => {

        // Set.
        open = open === undefined ? !state : open
        setState(open)
    }

    return [state, setOpen]
}

/**
 * Hook of count number.
 * 
 * @param start - Start number.
 * @param step - Count step.
 * @param stop - Stop number.
 * @param loop - Whether to loop count.
 * @returns Returns a stateful count value, and a function to automatic count it.
 */
export function useCount(
    start: number = 0,
    step: number = 1,
    stop: number = Infinity,
    loop: boolean = true
): [number, () => void] {

    // Parameter.
    const [state, setState] = useState(start)

    // Set function.
    const setCount = () => {

        // Parameter.
        let newState = state + step
        if (newState > stop) {
            newState = loop ? start : stop
        }

        // Set.
        setState(newState)
    }

    return [state, setCount]
}

/**
 * Hook of count array index.
 * 
 * @param array - Array.
 * @param loop - Whether to loop count.
 * @returns Returns a stateful index value, and a function to automatic count it.
 */
export function useIndex(
    array: any[],
    loop: boolean = true
): [number, () => void] {

    // Parameter.
    const arrayLength = Object.keys(array).length
    const [index, setIndex] = useCount(0, 1, arrayLength - 1, loop)

    return [index, setIndex]
}

/**
 * Whether is mobile.
 * 
 * @returns Judgement.
 */
export function useIsMobile() {

    // Parameter.
    const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

    // Effect.
    useEffect(() => {
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
        const onChange = () => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
        }
        mql.addEventListener("change", onChange)
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
        return () => mql.removeEventListener("change", onChange)
    }, [])

    return !!isMobile
}
