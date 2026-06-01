/**
 * @Time    : 2026-03-11
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Base methods.
 */

export type Key<T> = keyof T
export type Value<T> = T[keyof T]
export type KeyByValue<T, V> = {
    [K in keyof T]: T[K] extends V ? K : never
}[keyof T]

/**
 * Start debug CSS style, need to import 'reykit/debug' CSS style first.
 */
export function debugCss() {

    // Start.
    document.documentElement.classList.add('debug')
}

/**
 * Browser download file from blob data.
 * 
 * @param obj - Data or string of with data.
 * @param fileName - File name.
 */
export function downloadFile(obj: Blob | string, fileName?: string) {

    // Download.
    const url = obj instanceof Blob ? window.URL.createObjectURL(obj) : obj
    const element = document.createElement('a')
    if (fileName !== undefined) {
        element.download = fileName
    }
    element.href = url
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    element.remove()

    // Revoke.
    if (obj instanceof Blob) {
        URL.revokeObjectURL(url)
    }
}
