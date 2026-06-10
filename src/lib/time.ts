/**
 * @Time    : 2026-06-10
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Time methods.
 */

/**
 * Return local date time string.
 * 
 * @returns Local date time string.
 */
export function datetimeLocal() {

    // Generate.
    const now = new Date()
    const datetimeLocal = (
        now.getFullYear() +
        '-' +
        String(now.getMonth() + 1).padStart(2, '0') +
        '-' +
        String(now.getDate()).padStart(2, '0') +
        'T' +
        String(now.getHours()).padStart(2, '0') +
        ':' +
        String(now.getMinutes()).padStart(2, '0')
    )

    return datetimeLocal
}
