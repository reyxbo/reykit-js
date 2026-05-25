/**
 * @Time    : 2026-03-17
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Data methods.
 */

export function range(stop: number): Generator<number>
export function range(start: number, stop: number, step?: number): Generator<number>
/**
 * Create a generator of generate index value by range.
 * 
 * @param start_or_stop - Start index value or stop index value.
 * @param stop - Stop index value.
 * @param step - Iteration step size.
 * @returns Generator.
 */
export function* range(start_or_stop: number, stop?: number, step?: number) {

    // Check.
    if (step === 0) throw new Error('the parameter "step" cannot be 0')

    // Parameter.
    let start: number
    if (stop === undefined) {
        start = 0
        stop = start_or_stop
    }
    else {
        start = start_or_stop
    }
    step = step ?? 1

    // Generate.
    if (step > 0) {
        for (let now = start; now < stop; now += step) {
            yield now
        }
    }
    else {
        for (let now = start; now > stop; now += step) {
            yield now
        }
    }
}

export function rangeArr(stop: number): number[]
export function rangeArr(start: number, stop: number, step?: number): number[]
/**
 * Create an array of generate index value by range.
 * 
 * @param start_or_stop - Start index value or stop index value.
 * @param stop - Stop index value.
 * @param step - Iteration step size.
 * @returns Array.
 */
export function rangeArr(start_or_stop: number, stop?: number, step?: number) {

    // Create.
    let generator: Generator<number>
    if (stop === undefined) {
        generator = range(start_or_stop)
    }
    else {
        generator = range(start_or_stop, stop, step)
    }
    const array = Array.from(generator)

    return array
}

/**
 * Toggle array element value.
 * 
 * @Param arr - Array.
 * @Param value - Element value.
 * @returns Array of toggled element.
 */
export function toggleArr<T>(arr: T[], value: T): T[]  {

    // Toggle.
    const newArr = (
        arr.includes(value)
        ? arr.filter(element => element !== value)
        : [...arr, value]
    )

    return newArr
}

/**
 * Compare the sizes of two values.
 * 
 * @param a - The first value.
 * @param b - The second value.
 * @param order - Sorting type.
 * @returns Sorted result.
 */
export function compare(
    a: any,
    b: any,
    order: 'asc' | 'desc' = 'asc'
): 1 | 0 | -1 {

    // Parameter.
    let result = 0

    // Unll.
    if (a == null && b == null) return 0
    if (a == null) return 1
    if (b == null) return -1

    // Number.
    if (typeof a === 'number' && typeof b === 'number') {
        result = a - b
    }

    // Date.
    else if (a instanceof Date && b instanceof Date) {
        result = a.getTime() - b.getTime()
    }

    // Boolean.
    else if (typeof a === 'boolean' && typeof b === 'boolean') {
        result = Number(a) - Number(b)
    }

    // String.
    else if (typeof a === 'string' && typeof b === 'string') {

        // Number string.
        const na = Number(a)
        const nb = Number(b)
        const isNumA = !Number.isNaN(na)
        const isNumB = !Number.isNaN(nb)
        if (isNumA && isNumB) {
            result = na - nb
        }

        // Chinese.
        else {
            result = a.localeCompare(b)
        }
    }

    // Ohter.
    else {
        result = String(a).localeCompare(String(b))
    }

    // Result.
    if (result > 0) {
        result = 1
    }
    else if (result < 0) {
        result = -1
    }
    if (order === 'desc') {
        result = -result
    }

    return result as 1 | 0 | -1
}

/**
 * Sorting array.
 * 
 * @param arr - Array.
 * @param order - Sorting type.
 * @param key - Element object index key.
 * @returns Sorted array.
 */
export function sort<T>(
    arr: T[],
    order: 'asc' | 'desc' = 'asc',
    key?: any
): T[] {

    // Sort.
    const sortedArr = [...arr].sort(
        (a, b) => compare(
            key === undefined ? a : a[key],
            key === undefined ? b : b[key],
            order
        )
    )

    return sortedArr
}
