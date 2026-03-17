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
    if (step == 0) throw new Error('the parameter "step" cannot be 0')

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

export function rangeArray(stop: number): number[]
export function rangeArray(start: number, stop: number, step?: number): number[]
/**
 * Create an array of generate index value by range.
 * 
 * @param start_or_stop - Start index value or stop index value.
 * @param stop - Stop index value.
 * @param step - Iteration step size.
 * @returns Array.
 */
export function rangeArray(start_or_stop: number, stop?: number, step?: number) {

    // Create.
    let generator: Generator<number>
    if (stop == undefined) {
        generator = range(start_or_stop)
    }
    else {
        generator = range(start_or_stop, stop, step)
    }
    const array = Array.from(generator)

    return array
}
