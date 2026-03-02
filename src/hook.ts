import { useState, useEffect } from 'react'

const MOBILE_BREAKPOINT = 768

/**
 * Hook of toggle.
 * 
 * Parameters
 * ----------
 * @param array Array.
 * @param loop Whether to loop count.
 * 
 * Returns
 * -------
 * @returns Returns a stateful open value, and a function to automatic count it.
 */
export function useOpen(defaultOpen: boolean = true): [boolean, () => void] {

    // Parameter.
    const [state, setState] = useState(defaultOpen)

    // Set function.
    const setOpen = () => {

        // Set.
        setState(!state)
    }

    return [state, setOpen]
}

/**
 * Hook of count number.
 * 
 * Parameters
 * ----------
 * @param start Start number.
 * @param step Count step.
 * @param stop Stop number.
 * @param loop Whether to loop count.
 * 
 * Returns
 * -------
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
 * Parameters
 * ----------
 * @param array Array.
 * @param loop Whether to loop count.
 * 
 * Returns
 * -------
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
 * Returns
 * -------
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
