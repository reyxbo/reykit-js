/**
 * @Time    : 2026-08-05
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Random methods.
 */

/**
 * Generate random characters.
 * 
 * @param length - Character length.
 * @param style - Character style.
 * @returns Random characters.
 */
export function randChar(
    length: number = 32,
    style: 'd' | 'l' | 'p' | 'dl' | 'dp' | 'lp' | 'dlp' = 'dlp'
): string {

    // Parameter.
    let charRange: string
    switch (style) {
        case 'd':
            charRange = '0123456789'
            break
        case 'l':
            charRange = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
            break
        case 'p':
            charRange = '~!@#$%^&*()_+-={}[]|\\:;"\'<>,.?/'
            break
        case 'dl':
            charRange = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
            break
        case 'dp':
            charRange = '0123456789~!@#$%^&*()_+-={}[]|\\:;"\'<>,.?/'
            break
        case 'lp':
            charRange = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+-={}[]|\\:;"\'<>,.?/'
            break
        case 'dlp':
            charRange = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+-={}[]|\\:;"\'<>,.?/'
            break
    }

    // Generate.
    const charList: string[] = []
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * charRange.length)
        charList.push(charRange[index])
    }
    const chars = charList.join('')

    return chars
}
