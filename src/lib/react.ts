/**
 * @Time    : 2026-03-11
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : React methods.
 */

import { ReactNode, useState, useEffect, DependencyList, isValidElement } from 'react'
import { createRoot, Root } from 'react-dom/client'

const MOBILE_BREAKPOINT = 768

let root: Root | null = null

/**
 * Render react note.
 * Note: `react` and `react-dom` packages version must be `19.2.4`.
 * 
 * @param app - React note.
 * @param elementId - Render HTML element ID.
 */
export function renderReact(app: ReactNode, elementId: string = 'root') {

    // Render.
    const element = document.getElementById(elementId)
    if (!element) throw new Error(`Element ID '${elementId}' not found`)
    if (!root) {
        root = createRoot(element)
    }
    root.render(app)
}

/**
 * Is it a valid react node.
 * 
 * @param value - Judgement value.
 * @returns Judgement result.
 */
export function isReactNode(value: unknown): value is ReactNode {

    // Judge.
    const reuslt = (
        value === null ||
        value === undefined ||
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean' ||
        isValidElement(value) ||
        Array.isArray(value)
    )

    return reuslt
}

/**
 * Hook of toggle.
 * 
 * @param array - Array.
 * @param loop - Whether to loop count.
 * @returns Returns a stateful open value, and a function to automatic count it.
 */
export function useOpen(defaultOpen: boolean = true) {

    // Parameter.
    const [state, setState] = useState(defaultOpen)

    // Set function.
    const setOpen = (open?: boolean) => {

        // Set.
        open = open === undefined ? !state : open
        setState(open)
    }

    return [state, setOpen] as [typeof state, typeof setOpen]
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
) {

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

    return [state, setCount] as [typeof state, typeof setCount]
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
) {

    // Parameter.
    const arrayLength = Object.keys(array).length
    const [index, setIndex] = useCount(0, 1, arrayLength - 1, loop)

    return [index, setIndex] as [typeof index, typeof setIndex]
}

/**
 * Force update render.
 */
export function useRender() {

    // Parameter.
    const [, setRenderCount] = useCount()

    return setRenderCount
}

/**
 * Whether is mobile client.
 * 
 * @returns Judgement.
 */
export function useIsMobile() {

    // Parameter.
    const mq = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`
    const [isMobile, setIsMobile] = useState<boolean>(() => {
        if (typeof window === 'undefined') return false
        return window.matchMedia(mq).matches
    })

    // Effect.
    useEffect(() => {
        const mql = window.matchMedia(mq)
        const onChange = (e: MediaQueryListEvent) => {
            setIsMobile(e.matches)
        }
        mql.addEventListener('change', onChange)
        return () => mql.removeEventListener('change', onChange)
    }, [])

    return isMobile
}

/**
 * Get value by client type.
 * 
 * @param mobileValue - Value of mobile client.
 * @param value - Value of non mobile client.
 * @returns Value.
 */
export function useValueByMobile<Value, MobileValue>(
    mobileValue: MobileValue,
    value: Value
): Value | MobileValue {

    // Parameter.
    const isMobile = useIsMobile()

    return isMobile ? mobileValue : value
}

/**
 * Execute after rendering or effecting.
 * 
 * @param func - Execute function.
 * @param deps - Effect dependency list.
 * @param args - Execute arguments.
 */
export function useExec<T extends any[]>(
    func: (...args: T) => any | Promise<any>,
    deps: DependencyList = [],
    args: T = [] as unknown as T
) {

    // Execute.
    useEffect(
        () => {func(...args)},
        deps
    )
}
