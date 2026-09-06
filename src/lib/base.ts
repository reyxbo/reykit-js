/**
 * @Time    : 2026-03-11
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Base methods module.
 */

export {
    Key,
    Value,
    KeyByValue,
    debugCss,
    isUrl
}

type Key<T> = keyof T
type Value<T> = T[keyof T]
type KeyByValue<T, V> = {
    [K in keyof T]: T[K] extends V ? K : never
}[keyof T]

/**
 * Start debug CSS style, need to import 'reykit/debug' CSS style first.
 */
function debugCss() {

    // Start.
    document.documentElement.classList.add('debug')
}

/**
 * Judge whether value is a URL.
 * 
 * @param value - Value.
 * @returns Judgement result.
 */
function isUrl(value: string) {

    // Judge.
    try {
        const url = new URL(value)

        return (
            url.protocol === 'http:' ||
            url.protocol === 'https:'
        )
    }
    catch {
        return false
    }
}
